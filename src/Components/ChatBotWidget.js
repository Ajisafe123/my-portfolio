import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, Send, X } from 'lucide-react';
import { getBotResponse, portfolioProfile } from '../bot/portfolioBot';

const ChatBotWidget = ({ open, onClose }) => {
  const initialMessages = useMemo(
    () => [
      {
        role: 'bot',
        content: `Hi! I'm ${portfolioProfile.name}'s bot. Ask me about projects, pricing, services, tech stack, or hiring.`
      }
    ],
    []
  );

  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    setTimeout(() => {
      if (!listRef.current) return;
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }, 0);
  }, [open, messages.length]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || busy) return;

    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setInput('');
    setBusy(true);

    const reply = getBotResponse(text);

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', content: reply }]);
      setBusy(false);
    }, 350);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.18 }}
          className="fixed bottom-24 right-6 z-[60] w-[92vw] max-w-sm"
          role="dialog"
          aria-label="Portfolio bot"
        >
          <div className="overflow-hidden rounded-3xl border border-gray-200/60 dark:border-white/10 bg-white/90 dark:bg-gray-950/90 backdrop-blur shadow-2xl">
            <div className="px-4 py-3 flex items-center justify-between border-b border-gray-200/60 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-9 h-9 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-bold text-neutral-900 dark:text-white">Ask me about Ajisafe</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">Projects, pricing, services, hiring</div>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 flex items-center justify-center"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-neutral-900 dark:text-white" />
              </button>
            </div>

            <div ref={listRef} className="max-h-[360px] overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, idx) => {
                const isUser = m.role === 'user';
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.18 }}
                    className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed whitespace-pre-line ${
                        isUser
                          ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                          : 'bg-gray-100 text-neutral-900 dark:bg-white/10 dark:text-white'
                      }`}
                    >
                      {m.content}
                    </div>
                  </motion.div>
                );
              })}
              {busy && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl px-4 py-2 text-sm bg-gray-100 text-neutral-900 dark:bg-white/10 dark:text-white">
                    Typing...
                  </div>
                </div>
              )}
            </div>

            <div className="p-3 border-t border-gray-200/60 dark:border-white/10">
              <div className="flex items-end gap-2">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  rows={1}
                  placeholder="Ask: website price, frontend stack, hire you..."
                  className="flex-1 resize-none rounded-2xl px-4 py-3 text-sm bg-white dark:bg-black/30 border border-gray-200 dark:border-white/10 text-neutral-900 dark:text-white focus:outline-none"
                />
                <button
                  type="button"
                  onClick={sendMessage}
                  disabled={busy}
                  className="w-12 h-12 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center disabled:opacity-60"
                  aria-label="Send"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatBotWidget;
