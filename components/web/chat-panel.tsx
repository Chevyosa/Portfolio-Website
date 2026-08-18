"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SendHorizontal, Sparkles, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const RAG_URL = process.env.NEXT_PUBLIC_RAG_URL || "http://localhost:8000";
const SESSION_KEY = "chevyosa_session_id";
const MESSAGES_KEY = "chevyosa_messages";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface RateLimitStatus {
  limit: number;
  remaining: number;
  resets_in: number;
}

function getSessionId(): string {
  let id = typeof window !== "undefined" ? localStorage.getItem(SESSION_KEY) : null;
  if (!id) {
    id = crypto.randomUUID();
    if (typeof window !== "undefined") localStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

function formatDuration(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  if (hours > 0) return `${hours} jam ${minutes} menit`;
  return `${minutes} menit`;
}

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogDescription, setDialogDescription] = useState("");
  const sessionRef = useRef<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchLimit = async (): Promise<RateLimitStatus | null> => {
    try {
      const res = await fetch(`${RAG_URL}/chat/limit`, { method: "GET" });
      if (!res.ok) return null;
      return await res.json();
    } catch {
      return null;
    }
  };

  const showInfoPopup = (status: RateLimitStatus) => {
    setDialogTitle("Batas pemakaian chat");
    setDialogDescription(
      `Kamu bisa mengirim maksimal ${status.limit} pesan per 24 jam. Sisa kuota kamu hari ini: ${status.remaining} pesan.`
    );
    setDialogOpen(true);
  };

  const showBlockedPopup = (status: RateLimitStatus) => {
    setDialogTitle("Batas pesan harian tercapai");
    setDialogDescription(
      `Kamu sudah mencapai batas ${status.limit} pesan per 24 jam. Kamu bisa chat lagi dalam ${formatDuration(status.resets_in)}.`
    );
    setDialogOpen(true);
  };

  useEffect(() => {
    const hadSession = typeof window !== "undefined" ? !!localStorage.getItem(SESSION_KEY) : false;
    sessionRef.current = getSessionId();
    const saved = localStorage.getItem(MESSAGES_KEY);
    if (saved) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMessages(JSON.parse(saved));
      } catch {
        // ignore malformed cache
      }
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoaded(true);
    inputRef.current?.focus();

    if (!hadSession) {
      fetchLimit().then((status) => {
        if (status) showInfoPopup(status);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
  }, [messages, loaded]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const clearChat = () => {
    setMessages([]);
    const newId = crypto.randomUUID();
    sessionRef.current = newId;
    localStorage.setItem(SESSION_KEY, newId);
    inputRef.current?.focus();
    fetchLimit().then((status) => {
      if (status) showInfoPopup(status);
    });
  };

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const history = messages.slice(-6).map((m) => ({ role: m.role, content: m.content }));
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${RAG_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          session_id: sessionRef.current,
          history,
          stream: false,
        }),
      });
      const data = await res.json();

      if (res.status === 429) {
        showBlockedPopup({
          limit: data.limit ?? 15,
          remaining: 0,
          resets_in: data.resets_in ?? 86400,
        });
        return;
      }

      const reply = data.response || "Maaf, terjadi kesalahan. Coba lagi ya.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Maaf, layanan sedang tidak tersedia. Coba lagi nanti." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-3xl border border-zinc-200/70 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-zinc-100 px-4 py-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-white">
          <Sparkles className="h-4 w-4" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-zinc-900">Chevyosa</p>
          <p className="text-xs text-zinc-500">Virtual Assistant · Asisten pribadi Riyanda</p>
        </div>
        <button
          onClick={clearChat}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700"
          aria-label="Reset percakapan"
          title="Mulai percakapan baru"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>

      <div ref={scrollRef} className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-4 py-4">
        {messages.length === 0 && (
          <div className="mx-auto my-auto max-w-[90%] text-center text-sm text-zinc-500">
            Tanya apa saja atau ketik apa saja untuk memulai percakapan!
          </div>
        )}
        {messages.map((m, i) => (
          <div
            key={i}
            style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{ maxWidth: "24rem", width: "fit-content" }}
              className={`rounded-2xl px-4 py-2 text-sm leading-relaxed ${m.role === "user" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-800"
                }`}
            >
              {m.role === "assistant" ? (
                <div className="[&_p]:whitespace-pre-wrap [&_strong]:font-semibold [&_ul]:my-1 [&_ul]:list-disc [&_ul]:pl-4 [&_ol]:my-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_a]:underline [&_code]:rounded [&_code]:bg-zinc-200/70 [&_code]:px-1 [&_table]:my-2 [&_table]:w-full [&_table]:border-collapse [&_table]:text-xs [&_th]:border [&_th]:border-zinc-300 [&_th]:bg-zinc-100 [&_th]:px-2 [&_th]:py-1 [&_th]:text-left [&_td]:border [&_td]:border-zinc-300 [&_td]:px-2 [&_td]:py-1">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.content}</ReactMarkdown>
                </div>
              ) : (
                <p className="whitespace-pre-wrap">{m.content}</p>
              )}
            </motion.div>
          </div>
        ))}
        {loading && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="self-start rounded-2xl bg-zinc-100 px-4 py-2 text-sm text-zinc-500"
          >
            Mengetik...
          </motion.div>
        )}
      </div>

      <div className="flex items-center gap-2 border-t border-zinc-100 px-4 py-3">
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Tulis pesan..."
          className="flex-1 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm outline-none focus:border-zinc-400"
        />
        <button
          onClick={send}
          disabled={loading || !input.trim()}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white transition-colors disabled:opacity-40"
          aria-label="Kirim"
        >
          <SendHorizontal className="h-4 w-4" />
        </button>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>{dialogDescription}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setDialogOpen(false)}>Mengerti</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
