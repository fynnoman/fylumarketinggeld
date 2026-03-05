import fs from 'fs';
import path from 'path';

export interface Message {
  id: string;
  type: 'contact' | 'draft'; // contact = Anfrageformular, draft = kostenloser Entwurf
  createdAt: string;
  read: boolean;
  firmName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  branche?: string;
  groesse?: string;
  projectType?: string;
  budget?: string;
  preferences?: string;
  message?: string;
}

// Vercel: /tmp ist beschreibbar; lokal: .data/
const DATA_DIR = process.env.VERCEL ? '/tmp' : path.join(process.cwd(), '.data');
const FILE = path.join(DATA_DIR, 'messages.json');

function ensureFile() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(FILE)) fs.writeFileSync(FILE, '[]', 'utf-8');
}

export function getMessages(): Message[] {
  try {
    ensureFile();
    return JSON.parse(fs.readFileSync(FILE, 'utf-8')) as Message[];
  } catch {
    return [];
  }
}

export function saveMessage(msg: Omit<Message, 'id' | 'createdAt' | 'read'>): Message {
  const messages = getMessages();
  const newMsg: Message = {
    ...msg,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    read: false,
  };
  messages.unshift(newMsg); // neueste zuerst
  ensureFile();
  fs.writeFileSync(FILE, JSON.stringify(messages, null, 2), 'utf-8');
  return newMsg;
}

export function markRead(id: string): void {
  const messages = getMessages();
  const msg = messages.find((m) => m.id === id);
  if (msg) {
    msg.read = true;
    ensureFile();
    fs.writeFileSync(FILE, JSON.stringify(messages, null, 2), 'utf-8');
  }
}

export function deleteMessage(id: string): void {
  const messages = getMessages().filter((m) => m.id !== id);
  ensureFile();
  fs.writeFileSync(FILE, JSON.stringify(messages, null, 2), 'utf-8');
}
