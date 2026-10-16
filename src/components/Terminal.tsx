import { useState, useRef, useEffect, type FormEvent, type KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalSquare, X, Minus } from "lucide-react";
import profile from "../data/profile";

interface TerminalLine {
  type: "input" | "output";
  text: string;
}

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", text: 'Welcome! Type "help" to see available commands.' },
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const processCommand = (cmd: string): string => {
    const trimmed = cmd.trim().toLowerCase();

    if (trimmed === "clear") {
      setLines([]);
      return "";
    }

    if (trimmed.startsWith("echo ")) {
      return cmd.trim().substring(5);
    }

    if (trimmed === "date") {
      return new Date().toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    const response = profile.terminalResponses[trimmed];
    if (response) return response;

    return `Command not found: "${cmd.trim()}". Type "help" for available commands.`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newLines: TerminalLine[] = [
      ...lines,
      { type: "input", text: input },
    ];

    const output = processCommand(input);
    if (output) {
      newLines.push({ type: "output", text: output });
    }

    setLines(newLines);
    setHistory((prev) => [input, ...prev]);
    setHistoryIdx(-1);
    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0 && historyIdx < history.length - 1) {
        const newIdx = historyIdx + 1;
        setHistoryIdx(newIdx);
        setInput(history[newIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx > 0) {
        const newIdx = historyIdx - 1;
        setHistoryIdx(newIdx);
        setInput(history[newIdx]);
      } else {
        setHistoryIdx(-1);
        setInput("");
      }
    }
  };

  return (
    <>
      {/* Toggle button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        onClick={() => {
          setIsOpen(true);
          setIsMinimized(false);
        }}
        className={`fixed bottom-6 left-6 z-[60] flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent-blue)] hover:border-[var(--color-border-accent)] shadow-lg transition-all duration-200 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-label="Open terminal"
      >
        <TerminalSquare size={20} />
      </motion.button>

      {/* Terminal window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "auto" : undefined,
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 left-6 z-[60] w-[min(calc(100vw-3rem),480px)] rounded-xl overflow-hidden border border-[var(--color-border-subtle)] shadow-2xl bg-[var(--color-bg-secondary)]"
          >
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-[var(--color-bg-card)] border-b border-[var(--color-border-subtle)]">
              <div className="flex items-center gap-2">
                <TerminalSquare size={14} className="text-[var(--color-accent-green)]" />
                <span className="text-xs font-mono text-[var(--color-text-muted)]">terminal</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="flex h-6 w-6 items-center justify-center rounded hover:bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)]"
                  aria-label={isMinimized ? "Expand" : "Minimize"}
                >
                  <Minus size={12} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-6 w-6 items-center justify-center rounded hover:bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)]"
                  aria-label="Close terminal"
                >
                  <X size={12} />
                </button>
              </div>
            </div>

            {/* Terminal body */}
            {!isMinimized && (
              <div className="flex flex-col max-h-80">
                <div
                  ref={scrollRef}
                  className="flex-1 overflow-y-auto p-4 font-mono text-xs leading-relaxed space-y-1 hide-scrollbar"
                >
                  {lines.map((line, i) => (
                    <div key={i}>
                      {line.type === "input" ? (
                        <div className="flex gap-2">
                          <span className="text-[var(--color-accent-green)] shrink-0">❯</span>
                          <span className="text-[var(--color-text-primary)]">{line.text}</span>
                        </div>
                      ) : (
                        <pre className="text-[var(--color-text-secondary)] whitespace-pre-wrap break-words">
                          {line.text}
                        </pre>
                      )}
                    </div>
                  ))}
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-3 border-t border-[var(--color-border-subtle)]">
                  <span className="text-[var(--color-accent-green)] font-mono text-xs shrink-0">❯</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent text-xs font-mono text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none"
                    placeholder="Type a command..."
                    autoComplete="off"
                    spellCheck={false}
                    aria-label="Terminal input"
                  />
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
