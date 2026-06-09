"use client";

export default function AnnouncementTab() {
  const sections = [
    {
      icon: "📋",
      title: "What is changing",
      content: "Effective July 7, 2026, all Aoba Systems employees are required to return to full-time, in-office work at our headquarters. The hybrid work policy introduced in 2020 — which allowed up to three days of remote work per week — will be discontinued. There are no blanket exceptions to this policy."
    },
    {
      icon: "💡",
      title: "Why management made this decision",
      content: "Senior leadership believes that in-person collaboration is essential for Aoba's next growth phase. The decision reflects a strategic view that cross-team innovation, mentorship of newer employees, and client relationship quality are best served through consistent physical presence. This is a company-wide directive, not a reflection of individual performance."
    },
    {
      icon: "📅",
      title: "Timeline",
      content: "The announcement was made in June 2026. The formal return date is July 7, 2026, giving employees approximately four weeks (from June 9) to make necessary arrangements. HR has established dedicated support channels for employees facing significant adjustment challenges."
    },
    {
      icon: "🏢",
      title: "What the office provides",
      content: "Our HQ has been updated with new collaboration spaces, a refreshed cafeteria, and accessibility upgrades completed in 2023. Reserved quiet rooms are available on Floors 3 and 7. On-site IT support, ergonomic workstation options, and Facilities Management are all operational and ready to support the transition."
    }
  ];

  const supports = [
    { icon: "👶", label: "Childcare", desc: "Considering on-site daycare + HR subsidy program", color: "#D4A017", bg: "#FDF6E3" },
    { icon: "🏠", label: "Relocation", desc: "¥150,000 moving assistance + partner real estate agencies", color: "#4A8C5C", bg: "#E8F5EC" },
    { icon: "♿", label: "Accessibility", desc: "Barrier-free facilities + Reasonable Adjustment process", color: "#4A8C5C", bg: "#E8F5EC" },
  ];

  return (
    <div>
      {/* Intro card */}
      <div style={{ background: "var(--navy)", borderRadius: 12, padding: "28px 32px", marginBottom: 28, color: "#fff" }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "var(--amber)", textTransform: "uppercase" as const, marginBottom: 10 }}>
          Official Communication · June 2026
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.88)", maxWidth: 680 }}>
          This hub consolidates all information related to the return-to-office transition. Use the tabs above to review the full announcement, get answers to common questions, and track your personal adjustment checklist.
        </p>
        <div style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" as const }}>
          <span style={{ background: "rgba(232,168,56,0.2)", color: "var(--amber)", padding: "5px 14px", borderRadius: 20, fontSize: 13, fontWeight: 500 }}>
            Effective: July 7, 2026
          </span>
          <span style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", padding: "5px 14px", borderRadius: 20, fontSize: 13 }}>
            All 400 employees
          </span>
          <span style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", padding: "5px 14px", borderRadius: 20, fontSize: 13 }}>
            Full-time, in-office
          </span>
        </div>
      </div>

      {/* Detail sections */}
      <div style={{ display: "grid", gap: 16, marginBottom: 28 }}>
        {sections.map((s) => (
          <div key={s.title} style={{ background: "#fff", borderRadius: 10, padding: "22px 24px", border: "1px solid var(--border)" }}>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>{s.icon}</span>
              <div>
                <h3 style={{ fontWeight: 600, fontSize: 16, color: "var(--navy)", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--text-secondary)" }}>{s.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Support overview */}
      <div style={{ background: "var(--slate)", borderRadius: 10, padding: "22px 24px" }}>
        <h3 style={{ fontWeight: 600, fontSize: 15, color: "var(--navy)", marginBottom: 4 }}>Support available for affected employees</h3>
        <p style={{ fontSize: 13.5, color: "var(--text-secondary)", marginBottom: 18 }}>
          Aoba acknowledges this transition is more disruptive for some employees. Dedicated support has been arranged for three key groups. Full details and FAQ answers are in the <em>Support & FAQ</em> tab.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
          {supports.map((s) => (
            <div key={s.label} style={{ background: s.bg, borderRadius: 8, padding: "16px 18px" }}>
              <div style={{ fontSize: 22, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontWeight: 600, fontSize: 14, color: s.color, marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div style={{ marginTop: 24, padding: "18px 22px", background: "#fff", borderRadius: 10, border: "1px solid var(--border)", display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" as const }}>
        <div>
          <div style={{ fontWeight: 600, fontSize: 14, color: "var(--navy)", marginBottom: 4 }}>Questions? Contact HR directly</div>
          <div style={{ fontSize: 13.5, color: "var(--text-secondary)" }}>
            Email: <a href="mailto:rto@aobasystems.jp" style={{ color: "var(--navy)", fontWeight: 500 }}>rto@aobasystems.jp</a>
            &nbsp;·&nbsp; HR Connect (intranet) &nbsp;·&nbsp; HR Office: Floor 2, open Mon–Fri 9:00–18:00
          </div>
        </div>
      </div>
    </div>
  );
}
