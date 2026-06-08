'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  type: 'contact' | 'draft';
  createdAt: string;
  read: boolean;
  firmName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  branche?: string;
  brancheDetail?: string;
  groesse?: string;
  projectType?: string;
  budget?: string;
  preferences?: string;
  message?: string;
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [loginError, setLoginError] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Message | null>(null);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const fetchMessages = useCallback(async (t: string) => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/messages', {
        headers: { 'x-admin-token': t },
      });
      if (!res.ok) throw new Error('Unauthorized');
      const data = await res.json();
      setMessages(data);
    } catch {
      setToken('');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    try {
      // authenticate via the dedicated login route which sets a secure httpOnly cookie
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setLoginError('Falsches Passwort.');
        return;
      }

      // keep using the raw password as x-admin-token for the existing messages API
      setToken(password);
      await fetchMessages(password);
    } catch (err) {
      setLoginError('Fehler beim Login');
    }
  };

  const handleMarkRead = async (id: string) => {
    await fetch('/api/admin/messages', {
      method: 'PATCH',
      headers: { 'x-admin-token': token, 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, read: true } : m)));
    if (selected?.id === id) setSelected((prev) => prev ? { ...prev, read: true } : prev);
  };

  const handleDelete = async (id: string) => {
    await fetch('/api/admin/messages', {
      method: 'DELETE',
      headers: { 'x-admin-token': token, 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setMessages((prev) => prev.filter((m) => m.id !== id));
    if (selected?.id === id) setSelected(null);
    setDeleteConfirm(null);
  };

  const openMessage = (msg: Message) => {
    setSelected(msg);
    if (!msg.read) handleMarkRead(msg.id);
  };

  useEffect(() => {
    if (token) {
      const interval = setInterval(() => fetchMessages(token), 30000);
      return () => clearInterval(interval);
    }
  }, [token, fetchMessages]);

  const filtered = filter === 'unread' ? messages.filter((m) => !m.read) : messages;
  const unreadCount = messages.filter((m) => !m.read).length;

  // --- LOGIN ---
  if (!token) {
    return (
      <div className="min-h-screen bg-stone-950 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-stone-900 border border-stone-700 rounded-2xl p-10 w-full max-w-sm shadow-2xl"
        >
          <div className="mb-8 text-center">
            <div className="w-12 h-12 bg-cyan-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">Admin-Bereich</h1>
            <p className="text-stone-400 text-sm mt-1">Fylu Marketing</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Passwort"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-stone-800 border border-stone-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-stone-500"
                autoFocus
              />
              {loginError && (
                <p className="text-red-400 text-sm mt-2">{loginError}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 rounded-xl transition-colors"
            >
              Einloggen
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // --- DASHBOARD ---
  return (
    <div className="min-h-screen bg-stone-950 text-white">
      {/* Header */}
      <header className="border-b border-stone-800 bg-stone-900 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h1 className="font-bold text-white text-lg leading-none">Fylu Admin</h1>
            <p className="text-stone-400 text-xs">Nachrichtenzentrale</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {unreadCount > 0 && (
            <span className="bg-cyan-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              {unreadCount} neu
            </span>
          )}
          <button
            onClick={() => fetchMessages(token)}
            className="text-stone-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-stone-800"
            title="Aktualisieren"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <button
            onClick={() => { setToken(''); setMessages([]); setSelected(null); }}
            className="text-stone-400 hover:text-white transition-colors text-sm px-3 py-1.5 rounded-lg hover:bg-stone-800"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="flex h-[calc(100vh-65px)]">
        {/* Sidebar: Nachrichten-Liste */}
        <div className="w-80 flex-shrink-0 border-r border-stone-800 bg-stone-900 flex flex-col">
          {/* Filter */}
          <div className="p-4 border-b border-stone-800 flex gap-2">
            {(['all', 'unread'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === f
                    ? 'bg-cyan-500 text-white'
                    : 'text-stone-400 hover:text-white hover:bg-stone-800'
                }`}
              >
                {f === 'all' ? `Alle (${messages.length})` : `Ungelesen (${unreadCount})`}
              </button>
            ))}
          </div>

          {/* Liste */}
          <div className="flex-1 overflow-y-auto">
            {loading ? (
              <div className="flex items-center justify-center h-32">
                <div className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-48 text-stone-500">
                <svg className="w-10 h-10 mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Keine Nachrichten</p>
              </div>
            ) : (
              <div>
                {filtered.map((msg) => (
                  <motion.button
                    key={msg.id}
                    onClick={() => openMessage(msg)}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`w-full text-left px-4 py-4 border-b border-stone-800 hover:bg-stone-800 transition-colors ${
                      selected?.id === msg.id ? 'bg-stone-800 border-l-2 border-l-cyan-500' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className={`text-sm font-semibold truncate ${msg.read ? 'text-stone-300' : 'text-white'}`}>
                        {msg.firmName || msg.contactName || msg.email || 'Unbekannt'}
                      </span>
                      {!msg.read && (
                        <span className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0 mt-1" />
                      )}
                    </div>
                    <p className="text-xs text-stone-500 truncate mb-1">
                      {msg.projectType || msg.message || '—'}
                    </p>
                    <p className="text-xs text-stone-600">{formatDate(msg.createdAt)}</p>
                  </motion.button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Detail-Ansicht */}
        <div className="flex-1 overflow-y-auto bg-stone-950">
          <AnimatePresence mode="wait">
            {selected ? (
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 max-w-3xl"
              >
                {/* Titel + Aktionen */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">
                      {selected.firmName || selected.contactName || 'Anfrage'}
                    </h2>
                    <p className="text-stone-400 text-sm">{formatDate(selected.createdAt)}</p>
                  </div>
                  <div className="flex gap-2">
                    {selected.email && (
                      <a
                        href={`mailto:${selected.email}`}
                        className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Antworten
                      </a>
                    )}
                    <button
                      onClick={() => setDeleteConfirm(selected.id)}
                      className="flex items-center gap-2 bg-stone-800 hover:bg-red-900/60 text-stone-300 hover:text-red-300 text-sm font-medium px-4 py-2 rounded-xl transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Löschen
                    </button>
                  </div>
                </div>

                {/* Felder */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Firmenname', value: selected.firmName },
                    { label: 'Ansprechpartner', value: selected.contactName },
                    { label: 'E-Mail', value: selected.email },
                    { label: 'Telefon', value: selected.phone },
                    { label: 'Branche', value: selected.branche },
                    { label: 'Genaue Branche', value: selected.brancheDetail },
                    { label: 'Unternehmensgröße', value: selected.groesse },
                    { label: 'Gewünschte Website-Art', value: selected.projectType },
                    { label: 'Budget', value: selected.budget },
                    { label: 'Design-Präferenzen', value: selected.preferences },
                  ].map(({ label, value }) =>
                    value ? (
                      <div key={label} className="bg-stone-900 border border-stone-800 rounded-xl p-4">
                        <p className="text-xs text-stone-500 mb-1 uppercase tracking-wider">{label}</p>
                        <p className="text-white font-medium">{value}</p>
                      </div>
                    ) : null
                  )}
                </div>

                {/* Nachricht */}
                {selected.message && (
                  <div className="mt-4 bg-stone-900 border border-stone-800 rounded-xl p-5">
                    <p className="text-xs text-stone-500 mb-2 uppercase tracking-wider">Nachricht</p>
                    <p className="text-stone-200 whitespace-pre-wrap leading-relaxed">{selected.message}</p>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-full text-stone-600"
              >
                <svg className="w-16 h-16 mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-lg font-medium">Nachricht auswählen</p>
                <p className="text-sm mt-1 opacity-60">Klicke links auf eine Anfrage</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Delete-Confirm Modal */}
      <AnimatePresence>
        {deleteConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            onClick={() => setDeleteConfirm(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-stone-900 border border-stone-700 rounded-2xl p-6 max-w-sm w-full shadow-2xl"
            >
              <h3 className="text-lg font-bold text-white mb-2">Nachricht löschen?</h3>
              <p className="text-stone-400 text-sm mb-6">Diese Aktion kann nicht rückgängig gemacht werden.</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="flex-1 bg-stone-800 hover:bg-stone-700 text-white py-2.5 rounded-xl transition-colors font-medium"
                >
                  Abbrechen
                </button>
                <button
                  onClick={() => handleDelete(deleteConfirm)}
                  className="flex-1 bg-red-600 hover:bg-red-500 text-white py-2.5 rounded-xl transition-colors font-bold"
                >
                  Löschen
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
