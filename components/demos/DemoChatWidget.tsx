"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

function messageText(message: UIMessage): string {
  return message.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("");
}

export default function DemoChatWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        body: { pathname },
      }),
    [pathname],
  );

  const { messages, sendMessage, status, stop, error } = useChat({ transport });

  const busy = status === "submitted" || status === "streaming";

  return (
    <div className="pointer-events-none fixed right-4 bottom-20 z-[60] flex flex-col items-end sm:right-6">
      {open ? (
        <div
          id="demo-chat-panel"
          className="pointer-events-auto mb-3 flex w-[min(100vw-2rem,22rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"
        >
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-3 py-2">
            <p className="text-sm font-semibold text-slate-900">Demo assistant</p>
            <button
              type="button"
              className="rounded-md px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-200/80"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <div className="max-h-72 space-y-3 overflow-y-auto px-3 py-3 text-sm">
            {error ? (
              <p className="rounded-lg bg-rose-50 px-3 py-2 text-xs text-rose-800 ring-1 ring-rose-100">
                {error.message}
              </p>
            ) : null}
            {messages.length === 0 ? (
              <p className="text-slate-600">
                Ask about the demo sites, services shown on the page, or how to
                reach the builder via the footer.
              </p>
            ) : (
              messages.map((m) => (
                <div
                  key={m.id}
                  className={
                    m.role === "user"
                      ? "ml-6 rounded-lg bg-slate-100 px-3 py-2 text-slate-900"
                      : "mr-4 rounded-lg bg-white px-3 py-2 text-slate-800 ring-1 ring-slate-100"
                  }
                >
                  <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    {m.role === "user" ? "You" : "Assistant"}
                  </span>
                  <p className="whitespace-pre-wrap">{messageText(m)}</p>
                </div>
              ))
            )}
          </div>
          <form
            className="border-t border-slate-100 p-2"
            onSubmit={async (e) => {
              e.preventDefault();
              const text = input.trim();
              if (!text || busy) return;
              setInput("");
              await sendMessage({ text });
            }}
          >
            <div className="flex gap-2">
              <label className="sr-only" htmlFor="demo-chat-input">
                Message
              </label>
              <input
                id="demo-chat-input"
                className="min-w-0 flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none ring-accent/25 placeholder:text-slate-400 focus:border-accent focus:ring-2"
                placeholder="Type a question…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={busy}
              />
              {busy ? (
                <button
                  type="button"
                  className="shrink-0 rounded-lg bg-slate-200 px-3 py-2 text-sm font-semibold text-slate-800"
                  onClick={() => void stop()}
                >
                  Stop
                </button>
              ) : (
                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-white hover:bg-accent-strong"
                  disabled={!input.trim()}
                >
                  Send
                </button>
              )}
            </div>
            <p className="mt-2 text-[10px] text-slate-500">
              Demo only — not a real contractor chat.
            </p>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-lg shadow-lg ring-2 ring-white/80 hover:bg-slate-50"
        aria-expanded={open}
        aria-controls="demo-chat-panel"
        aria-label={open ? "Close demo chat" : "Open demo chat"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "✕" : "💬"}
      </button>
    </div>
  );
}
