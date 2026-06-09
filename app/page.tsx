"use client";
import { useState, useEffect } from "react";
import AnnouncementTab from "./components/AnnouncementTab";
import FAQTab from "./components/FAQTab";
import TodoTab from "./components/TodoTab";

const RETURN_DATE = new Date("2025-03-15");

export default function Home() {
  const [tab, setTab] = useState<"announcement" | "faq" | "todo">("announcement");
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const diff = Math.max(0, Math.ceil((RETURN_DATE.getTime() - Date.now()) / 86400000));
    setDaysLeft(diff);
  }, []);

  const tabs = [
    { key: "announcement", label: "Announcement" },
    { key: "faq", label: "Support & FAQ" },
    { key: "todo", label: "My Checklist" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "var(--off-white)" }}>
      <div style={{ background: "var(--navy)", color: "#fff", padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--amber)", animation: "pulse 2s infinite" }} />
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.05em" }}>
            FULL RETURN TO OFFICE · EFFECTIVE MARCH 15, 2025
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.1)", borderRadius: 6, padding: "4px 12px" }}>
          <span style={{ fontSize: 22, fontWeight: 700, color: "var(--amber)" }}>{daysLeft}</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>days left</span>
        </div>
      </div>

      <header style={{ background: "var(--navy)", paddingBottom: 0 }}>
        <div style={{ maxWidth: 940, margin: "0 auto", padding: "28px 24px 0" }}>
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "var(--amber)", textTransform: "uppercase" as const, marginBottom: 8 }}>
              Aoba Systems · Internal Communication
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
              Return-to-Office<br />Transition Hub
            </h1>
          </div>
          <div style={{ display: "flex", gap: 0 }}>
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key as typeof tab)}
                style={{
                  padding: "11px 22px",
                  fontSize: 14,
                  fontWeight: tab === t.key ? 600 : 400,
                  background: tab === t.key ? "var(--off-white)" : "transparent",
                  color: tab === t.key ? "var(--navy)" : "rgba(255,255,255,0.6)",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "8px 8px 0 0",
                  transition: "all 0.15s",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 940, margin: "0 auto", padding: "32px 24px 64px" }}>
        {tab === "announcement" && <AnnouncementTab />}
        {tab === "faq" && <FAQTab />}
        {tab === "todo" && <TodoTab />}
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        * { box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; }
        button:focus-visible { outline: 2px solid var(--amber); outline-offset: 2px; }
      `}</style>
    </div>
  );
}
