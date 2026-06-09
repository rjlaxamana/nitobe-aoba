"use client";
import { useState, useEffect } from "react";
import AnnouncementTab from "./components/AnnouncementTab";
import FAQTab from "./components/FAQTab";
import TodoTab from "./components/TodoTab";
import FeedbackTab from "./components/FeedbackTab";

const RETURN_DATE = new Date("2026-07-07");

function AobaLeafMark() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Branch */}
      <path d="M26 46 Q24 34 20 22" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      {/* Large leaf left */}
      <path d="M20 22 Q8 18 7 8 Q18 6 24 18 Z" fill="rgba(107,191,122,0.85)"/>
      <path d="M20 22 Q8 18 7 8" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" fill="none"/>
      {/* Vein large leaf */}
      <path d="M7 8 Q13 13 20 22" stroke="rgba(255,255,255,0.4)" strokeWidth="0.7" fill="none"/>
      {/* Medium leaf right */}
      <path d="M22 30 Q34 22 38 13 Q26 12 22 24 Z" fill="rgba(74,140,92,0.9)"/>
      <path d="M38 13 Q30 18 22 30" stroke="rgba(255,255,255,0.35)" strokeWidth="0.7" fill="none"/>
      {/* Small top leaf */}
      <path d="M24 18 Q28 8 36 6 Q36 16 26 20 Z" fill="rgba(107,191,122,0.7)"/>
      {/* Stem dot */}
      <circle cx="26" cy="46" r="2" fill="rgba(255,255,255,0.3)"/>
    </svg>
  );
}

export default function Home() {
  const [tab, setTab] = useState<"announcement" | "faq" | "todo" | "feedback">("announcement");
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const diff = Math.max(0, Math.ceil((RETURN_DATE.getTime() - Date.now()) / 86400000));
    setDaysLeft(diff);
  }, []);

  const tabs = [
    { key: "announcement", label: "Announcement" },
    { key: "faq", label: "Support & FAQ" },
    { key: "todo", label: "My Checklist" },
    { key: "feedback", label: "Share Feedback" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "var(--off-white)" }}>
      {/* Top status bar */}
      <div style={{ background: "#0F1C12", color: "#fff", padding: "9px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--aoba-bright)", animation: "pulse 2s infinite" }} />
          <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.06em", color: "rgba(255,255,255,0.8)" }}>
            FULL RETURN TO OFFICE · EFFECTIVE JULY 7, 2026
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", borderRadius: 6, padding: "4px 12px" }}>
          <span style={{ fontSize: 20, fontWeight: 700, color: "var(--aoba-bright)" }}>{daysLeft}</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>days remaining</span>
        </div>
      </div>

      {/* Header */}
      <header style={{ background: "var(--navy)", paddingBottom: 0, position: "relative", overflow: "hidden" }}>
        {/* Decorative large background leaf shapes */}
        <svg
          style={{ position: "absolute", right: -30, top: -20, opacity: 0.07, pointerEvents: "none" }}
          width="320" height="280" viewBox="0 0 320 280" fill="none"
        >
          <path d="M280 260 Q100 220 60 60 Q200 20 300 160 Z" fill="#6BBF7A"/>
          <path d="M320 200 Q180 180 140 80 Q260 40 340 140 Z" fill="#4A8C5C"/>
        </svg>
        <svg
          style={{ position: "absolute", left: -10, bottom: 0, opacity: 0.06, pointerEvents: "none" }}
          width="180" height="160" viewBox="0 0 180 160" fill="none"
        >
          <path d="M160 140 Q40 120 20 30 Q120 10 170 100 Z" fill="#6BBF7A"/>
        </svg>

        <div style={{ maxWidth: 940, margin: "0 auto", padding: "26px 24px 0", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 18, marginBottom: 26 }}>
            <div style={{ flexShrink: 0, marginTop: 4 }}>
              <AobaLeafMark />
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", color: "var(--aoba-bright)", textTransform: "uppercase" as const, marginBottom: 6 }}>
                青葉 Aoba Systems · Internal
              </div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px, 3.8vw, 36px)", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
                Return-to-Office<br />Transition Hub
              </h1>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 0, flexWrap: "wrap" as const }}>
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key as typeof tab)}
                style={{
                  padding: "11px 20px",
                  fontSize: 13.5,
                  fontWeight: tab === t.key ? 600 : 400,
                  background: tab === t.key ? "var(--off-white)" : "transparent",
                  color: tab === t.key ? "var(--navy)" : "rgba(255,255,255,0.55)",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "8px 8px 0 0",
                  transition: "all 0.15s",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {t.label}
                {t.key === "feedback" && (
                  <span style={{ background: "#C8E6C9", color: "#1A2E1F", fontSize: 10, fontWeight: 700, borderRadius: 10, padding: "1px 7px", lineHeight: "18px" }}>NEW</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 940, margin: "0 auto", padding: "32px 24px 64px" }}>
        {tab === "announcement" && <AnnouncementTab />}
        {tab === "faq" && <FAQTab />}
        {tab === "todo" && <TodoTab />}
        {tab === "feedback" && <FeedbackTab />}
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        * { box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; }
        button:focus-visible { outline: 2px solid var(--aoba-green); outline-offset: 2px; }
      `}</style>
    </div>
  );
}
