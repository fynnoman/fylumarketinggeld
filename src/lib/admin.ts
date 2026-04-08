import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const CRED_FILE = path.join(process.cwd(), '.admin-creds.json');

export function setAdminPassword(password: string) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 310000, 32, 'sha256').toString('hex');
  const data = { salt, hash };
  fs.writeFileSync(CRED_FILE, JSON.stringify(data), { encoding: 'utf8' });
}

/**
 * If ADMIN_PASSWORD is set in the environment, persist it (hashed) to the credential file.
 * Returns true if an env password was found and written, false otherwise.
 */
export function applyEnvAdminPassword(): boolean {
  const env = process.env.ADMIN_PASSWORD;
  if (!env) return false;
  setAdminPassword(env);
  return true;
}

/**
 * Verify provided password.
 * Priority:
 *  1) If ADMIN_PASSWORD env var exists, compare against it (timing-safe).
 *  2) Otherwise verify against stored PBKDF2 hash in .admin-creds.json
 */
export function verifyAdminPassword(password: string) {
  // 1) env var takes precedence for quick resets in deployment environments
  if (process.env.ADMIN_PASSWORD) {
    try {
      const envPass = String(process.env.ADMIN_PASSWORD);
      const a = Buffer.from(password, 'utf8');
      const b = Buffer.from(envPass, 'utf8');
      if (a.length === b.length) {
        return crypto.timingSafeEqual(a, b);
      }
      // different length -> compare hashes to keep constant-time behavior
      const ah = crypto.createHash('sha256').update(a).digest();
      const bh = crypto.createHash('sha256').update(b).digest();
      return crypto.timingSafeEqual(ah, bh);
    } catch (e) {
      return false;
    }
  }

  // 2) fallback to stored credentials
  if (!fs.existsSync(CRED_FILE)) return false;
  try {
    const raw = fs.readFileSync(CRED_FILE, 'utf8');
    const { salt, hash } = JSON.parse(raw);
    const attempt = crypto.pbkdf2Sync(password, salt, 310000, 32, 'sha256').toString('hex');
    return crypto.timingSafeEqual(Buffer.from(attempt, 'hex'), Buffer.from(hash, 'hex'));
  } catch (e) {
    return false;
  }
}

export function adminPasswordSource() {
  if (process.env.ADMIN_PASSWORD) return 'env';
  if (fs.existsSync(CRED_FILE)) return 'file';
  return 'none';
}
