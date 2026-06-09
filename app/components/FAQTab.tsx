"use client";
import { useState } from "react";
import { faqData } from "../data";

export default function FAQTab() {
  const [activeCategory, setActiveCategory] = useState("childcare");
  const [openQ, setOpenQ] = useState<number | null>(0);

  const active = faqData.find((f) => f.category === activeCategory)!;

  return (
    <div>
      <p style={{ fontSize: 14.5, color: "var(--text-secondary)", marginBottom: 24, lineHeight: 1.6 }}>
        Select your situation below to see answers and resources specific to your needs.
      </p>

      {/* Category selector */}
      <div style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap" as const }}>
        {faqData.map((f) => (
          <button
            key={f.category}
            onClick={() => { setActiveCategory(f.category); setOpenQ(0); }}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "10px 18px",
              borderRadius: 8,
              border: `2px solid ${activeCategory === f.category ? f.color : "var(--border)"}`,
              background: activeCategory === f.category ? f.bgColor : "#fff",
              color: activeCategory === f.category ? f.color : "var(--text-secondary)",
              fontWeight: activeCategory === f.category ? 600 : 400,
              fontSize: 14,
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            <span style={{ fontSize: 18 }}>{f.icon}</span>
            {f.label}
          </button>
        ))}
      </div>

      {/* FAQ accordion */}
      <div style={{ marginBottom: 28 }}>
        <h3 style={{ fontWeight: 600, fontSize: 13, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "var(--text-secondary)", marginBottom: 14 }}>
          Frequently Asked Questions
        </h3>
        <div style={{ display: "grid", gap: 8 }}>
          {active.questions.map((q, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 8, border: `1px solid ${openQ === i ? active.color : "var(--border)"}`, overflow: "hidden", transition: "border-color 0.15s" }}>
              <button
                onClick={() => setOpenQ(openQ === i ? null : i)}
                style={{
                  width: "100%", textAlign: "left" as const, display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "16px 20px", background: "transparent", border: "none", cursor: "pointer",
                  fontSize: 14.5, fontWeight: 500, color: "var(--navy)", gap: 12, lineHeight: 1.5
                }}
              >
                <span>{q.q}</span>
                <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: "50%", background: openQ === i ? active.color : "var(--slate)", color: openQ === i ? "#fff" : "var(--text-secondary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, transition: "all 0.15s" }}>
                  {openQ === i ? "−" : "+"}
                </span>
              </button>
              {openQ === i && (
                <div style={{ padding: "0 20px 18px", fontSize: 14.5, lineHeight: 1.75, color: "var(--text-secondary)", borderTop: `1px solid var(--border)`, paddingTop: 14 }}>
                  {q.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div style={{ background: active.bgColor, borderRadius: 10, padding: "22px 24px", border: `1px solid ${active.color}30` }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 6 }}>
          <span style={{ fontSize: 20 }}>{active.icon}</span>
          <h3 style={{ fontWeight: 700, fontSize: 15, color: active.color }}>{active.resources.title}</h3>
        </div>
        {active.resources.note && (
          <p style={{ fontSize: 13.5, color: "var(--text-secondary)", marginBottom: 16, padding: "8px 12px", background: "rgba(255,255,255,0.6)", borderRadius: 6 }}>
            💬 {active.resources.note}
          </p>
        )}
        <div style={{ display: "grid", gap: 10 }}>
          {active.resources.items.map((item: Record<string, string>, i: number) => (
            <div key={i} style={{ background: "#fff", borderRadius: 8, padding: "14px 18px", border: "1px solid rgba(255,255,255,0.8)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap" as const }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "var(--navy)", marginBottom: 3 }}>
                    {item.name}
                    {item.type && <span style={{ marginLeft: 8, fontSize: 11, fontWeight: 500, color: active.color, background: active.bgColor, padding: "2px 8px", borderRadius: 10 }}>{item.type}</span>}
                  </div>
                  {item.address && <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>📍 {item.address}</div>}
                  {item.location && <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>📍 {item.location}</div>}
                  {item.notes && <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 2 }}>ℹ️ {item.notes}</div>}
                </div>
                <div style={{ flexShrink: 0 }}>
                  {item.distance && <span style={{ fontSize: 12, fontWeight: 600, color: active.color, background: active.bgColor, padding: "3px 10px", borderRadius: 10 }}>{item.distance}</span>}
                  {item.phone && <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: item.distance ? 4 : 0 }}>📞 {item.phone}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
