"use client";
import { useState } from "react";

type Sentiment = "supportive" | "neutral" | "concerned" | "strongly_opposed";
type Topic = "childcare" | "relocation" | "accessibility" | "worklife" | "productivity" | "policy" | "other";

const sentiments: { key: Sentiment; label: string; icon: string; color: string; bg: string }[] = [
  { key: "supportive", label: "Supportive", icon: "👍", color: "#4A8C5C", bg: "#E8F5EC" },
  { key: "neutral", label: "Neutral", icon: "😐", color: "#5A6B8A", bg: "#EEF1F6" },
  { key: "concerned", label: "Concerned", icon: "😟", color: "#D4A017", bg: "#FDF6E3" },
  { key: "strongly_opposed", label: "Strongly Opposed", icon: "🚫", color: "#D64045", bg: "#FDEAEA" },
];

const topics: { key: Topic; label: string; icon: string }[] = [
  { key: "childcare", label: "Childcare & Family", icon: "👶" },
  { key: "relocation", label: "Commute & Housing", icon: "🏠" },
  { key: "accessibility", label: "Accessibility Needs", icon: "♿" },
  { key: "worklife", label: "Work-Life Balance", icon: "⚖️" },
  { key: "productivity", label: "Productivity & Focus", icon: "💡" },
  { key: "policy", label: "Policy Fairness", icon: "📜" },
  { key: "other", label: "Other", icon: "💬" },
];

interface FormState {
  name: string;
  department: string;
  anonymous: boolean;
  sentiment: Sentiment | null;
  topics: Topic[];
  impact: string;
  suggestion: string;
  urgent: boolean;
}

const initialForm: FormState = {
  name: "Tanaka Hiromi",
  department: "Product Design",
  anonymous: false,
  sentiment: null,
  topics: [],
  impact: "",
  suggestion: "",
  urgent: false,
};

export default function FeedbackTab() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [suggCount, setSuggCount] = useState(0);

  const toggleTopic = (t: Topic) => {
    setForm((f) => ({
      ...f,
      topics: f.topics.includes(t) ? f.topics.filter((x) => x !== t) : [...f.topics, t],
    }));
  };

  const canSubmit = form.sentiment && form.topics.length > 0 && form.impact.trim().length >= 20;

  const handleSubmit = () => {
    if (!canSubmit) return;
    setSubmitted(true);
  };

  if (submitted) {
    const s = sentiments.find((s) => s.key === form.sentiment)!;
    return (
      <div>
        <div style={{ textAlign: "center" as const, padding: "48px 24px", background: "#fff", borderRadius: 12, border: "1px solid var(--border)" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "var(--navy)", marginBottom: 10 }}>
            Your feedback has been submitted
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 24px" }}>
            Thank you for taking the time to share your perspective.{" "}
            {form.anonymous
              ? "Your submission is fully anonymous — no identifying information was recorded."
              : `Your response has been logged under ${form.name}, ${form.department}.`}{" "}
            Executive leadership reviews all submissions on a rolling basis.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: s.bg, color: s.color, padding: "8px 18px", borderRadius: 20, fontWeight: 600, fontSize: 14, marginBottom: 28 }}>
            <span>{s.icon}</span> Recorded as: {s.label}
          </div>
          {form.urgent && (
            <div style={{ background: "#FDEAEA", color: "#D64045", padding: "10px 18px", borderRadius: 8, fontSize: 13.5, fontWeight: 500, maxWidth: 400, margin: "0 auto 20px" }}>
              🔴 Flagged as urgent — HR will follow up within 2 business days.
            </div>
          )}
          <div>
            <button
              onClick={() => { setSubmitted(false); setForm(initialForm); setCharCount(0); setSuggCount(0); }}
              style={{ background: "var(--navy)", color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}
            >
              Submit another response
            </button>
          </div>
        </div>

        {/* What happens next */}
        <div style={{ marginTop: 20, background: "var(--slate)", borderRadius: 10, padding: "20px 24px" }}>
          <h3 style={{ fontWeight: 600, fontSize: 14, color: "var(--navy)", marginBottom: 12 }}>What happens with your feedback?</h3>
          <div style={{ display: "grid", gap: 10 }}>
            {[
              { step: "1", text: "All submissions are compiled weekly by the People & Culture team." },
              { step: "2", text: "A summary report — with sentiment breakdown and key themes — is shared with the Executive Committee every Monday." },
              { step: "3", text: "Responses flagged as urgent are reviewed by HR within 2 business days." },
              { step: "4", text: "Aggregate results (no individual data) will be shared company-wide in the July town hall." },
            ].map((s) => (
              <div key={s.step} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--navy)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{s.step}</div>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, marginTop: 2 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div style={{ background: "var(--navy)", borderRadius: 12, padding: "24px 28px", marginBottom: 24, color: "#fff" }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "var(--amber)", textTransform: "uppercase" as const, marginBottom: 8 }}>
          Direct to Executive Leadership
        </div>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.88)", maxWidth: 640 }}>
          Aoba Systems leadership wants to hear from you directly. This form goes to the Executive Committee and is reviewed weekly. Your honest input shapes how the company supports this transition.
        </p>
        <div style={{ marginTop: 14, display: "flex", gap: 8, flexWrap: "wrap" as const }}>
          <span style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", padding: "4px 12px", borderRadius: 20, fontSize: 12 }}>📬 Reviewed weekly by ExCo</span>
          <span style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", padding: "4px 12px", borderRadius: 20, fontSize: 12 }}>🔒 Anonymous option available</span>
          <span style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", padding: "4px 12px", borderRadius: 20, fontSize: 12 }}>📊 Results shared at July town hall</span>
        </div>
      </div>

      <div style={{ display: "grid", gap: 18 }}>
        {/* Identity */}
        <div style={{ background: "#fff", borderRadius: 10, padding: "20px 22px", border: "1px solid var(--border)" }}>
          <h3 style={{ fontWeight: 600, fontSize: 14, color: "var(--navy)", marginBottom: 14 }}>Your identity</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 500, color: "var(--text-secondary)", display: "block", marginBottom: 5 }}>Full name</label>
              <input
                type="text"
                value={form.anonymous ? "" : form.name}
                disabled={form.anonymous}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder={form.anonymous ? "Hidden" : "Your name"}
                style={{ width: "100%", padding: "9px 12px", border: "1px solid var(--border)", borderRadius: 7, fontSize: 14, color: "var(--navy)", background: form.anonymous ? "var(--slate)" : "#fff", fontFamily: "inherit" }}
              />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 500, color: "var(--text-secondary)", display: "block", marginBottom: 5 }}>Department</label>
              <input
                type="text"
                value={form.anonymous ? "" : form.department}
                disabled={form.anonymous}
                onChange={(e) => setForm((f) => ({ ...f, department: e.target.value }))}
                placeholder={form.anonymous ? "Hidden" : "Your department"}
                style={{ width: "100%", padding: "9px 12px", border: "1px solid var(--border)", borderRadius: 7, fontSize: 14, color: "var(--navy)", background: form.anonymous ? "var(--slate)" : "#fff", fontFamily: "inherit" }}
              />
            </div>
          </div>
          <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
            <div
              onClick={() => setForm((f) => ({ ...f, anonymous: !f.anonymous }))}
              style={{ width: 40, height: 22, borderRadius: 11, background: form.anonymous ? "var(--teal)" : "var(--border)", position: "relative", transition: "background 0.2s", cursor: "pointer", flexShrink: 0 }}
            >
              <div style={{ position: "absolute", top: 3, left: form.anonymous ? 21 : 3, width: 16, height: 16, borderRadius: "50%", background: "#fff", transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }} />
            </div>
            <span style={{ fontSize: 13.5, color: "var(--text-secondary)" }}>
              Submit anonymously — your name and department will not be recorded
            </span>
          </label>
        </div>

        {/* Sentiment */}
        <div style={{ background: "#fff", borderRadius: 10, padding: "20px 22px", border: "1px solid var(--border)" }}>
          <h3 style={{ fontWeight: 600, fontSize: 14, color: "var(--navy)", marginBottom: 4 }}>
            How do you feel about the return-to-office decision? <span style={{ color: "#D64045" }}>*</span>
          </h3>
          <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 14 }}>Choose the option that best reflects your overall position.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10 }}>
            {sentiments.map((s) => (
              <button
                key={s.key}
                onClick={() => setForm((f) => ({ ...f, sentiment: s.key }))}
                style={{
                  padding: "14px 10px",
                  borderRadius: 8,
                  border: `2px solid ${form.sentiment === s.key ? s.color : "var(--border)"}`,
                  background: form.sentiment === s.key ? s.bg : "#fff",
                  cursor: "pointer",
                  transition: "all 0.15s",
                  textAlign: "center" as const,
                }}
              >
                <div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div>
                <div style={{ fontSize: 13, fontWeight: form.sentiment === s.key ? 600 : 400, color: form.sentiment === s.key ? s.color : "var(--text-secondary)" }}>{s.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Topics */}
        <div style={{ background: "#fff", borderRadius: 10, padding: "20px 22px", border: "1px solid var(--border)" }}>
          <h3 style={{ fontWeight: 600, fontSize: 14, color: "var(--navy)", marginBottom: 4 }}>
            Which areas does this decision affect you most? <span style={{ color: "#D64045" }}>*</span>
          </h3>
          <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 14 }}>Select all that apply.</p>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8 }}>
            {topics.map((t) => {
              const selected = form.topics.includes(t.key);
              return (
                <button
                  key={t.key}
                  onClick={() => toggleTopic(t.key)}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 20,
                    border: `2px solid ${selected ? "var(--navy)" : "var(--border)"}`,
                    background: selected ? "var(--navy)" : "#fff",
                    color: selected ? "#fff" : "var(--text-secondary)",
                    fontSize: 13.5,
                    fontWeight: selected ? 600 : 400,
                    cursor: "pointer",
                    display: "flex", alignItems: "center", gap: 6,
                    transition: "all 0.15s",
                  }}
                >
                  <span>{t.icon}</span> {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Impact */}
        <div style={{ background: "#fff", borderRadius: 10, padding: "20px 22px", border: "1px solid var(--border)" }}>
          <h3 style={{ fontWeight: 600, fontSize: 14, color: "var(--navy)", marginBottom: 4 }}>
            Describe your situation and how this decision impacts you <span style={{ color: "#D64045" }}>*</span>
          </h3>
          <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 12 }}>Be as specific as you like. This goes directly to leadership. Minimum 20 characters.</p>
          <textarea
            value={form.impact}
            onChange={(e) => { setForm((f) => ({ ...f, impact: e.target.value })); setCharCount(e.target.value.length); }}
            placeholder="e.g. I relocated to Saitama during the pandemic and now face a 90-minute commute each way. I also have a child in daycare with strict pickup hours that conflict with standard office hours..."
            rows={5}
            maxLength={2000}
            style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: 7, fontSize: 14, lineHeight: 1.65, color: "var(--navy)", fontFamily: "inherit", resize: "vertical" }}
          />
          <div style={{ textAlign: "right" as const, fontSize: 12, color: charCount < 20 ? "#D64045" : "var(--text-secondary)", marginTop: 4 }}>
            {charCount} / 2000 {charCount < 20 && charCount > 0 && `(${20 - charCount} more to go)`}
          </div>
        </div>

        {/* Suggestion */}
        <div style={{ background: "#fff", borderRadius: 10, padding: "20px 22px", border: "1px solid var(--border)" }}>
          <h3 style={{ fontWeight: 600, fontSize: 14, color: "var(--navy)", marginBottom: 4 }}>
            What would make this transition better? <span style={{ fontSize: 12, fontWeight: 400, color: "var(--text-secondary)" }}>(optional)</span>
          </h3>
          <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 12 }}>
            Practical suggestions help leadership act. What specific changes, policies, or support would address your concerns?
          </p>
          <textarea
            value={form.suggestion}
            onChange={(e) => { setForm((f) => ({ ...f, suggestion: e.target.value })); setSuggCount(e.target.value.length); }}
            placeholder="e.g. A staggered return timeline, on-site daycare by August, remote work exceptions for caregivers with children under 5..."
            rows={4}
            maxLength={2000}
            style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: 7, fontSize: 14, lineHeight: 1.65, color: "var(--navy)", fontFamily: "inherit", resize: "vertical" }}
          />
          <div style={{ textAlign: "right" as const, fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }}>{suggCount} / 2000</div>
        </div>

        {/* Urgent flag */}
        <div style={{ background: form.urgent ? "#FDEAEA" : "#fff", borderRadius: 10, padding: "18px 22px", border: `1px solid ${form.urgent ? "#D64045" : "var(--border)"}`, transition: "all 0.2s" }}>
          <label style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer" }}>
            <div
              onClick={() => setForm((f) => ({ ...f, urgent: !f.urgent }))}
              style={{ width: 20, height: 20, borderRadius: 5, border: `2px solid ${form.urgent ? "#D64045" : "var(--border)"}`, background: form.urgent ? "#D64045" : "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2, transition: "all 0.15s", cursor: "pointer" }}
            >
              {form.urgent && <span style={{ color: "#fff", fontSize: 12, lineHeight: 1 }}>✓</span>}
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, color: form.urgent ? "#D64045" : "var(--navy)", marginBottom: 2 }}>
                🔴 Flag as urgent
              </div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>
                Check this if your situation requires immediate attention (e.g. medical, legal, severe financial hardship). HR will follow up within 2 business days.
              </div>
            </div>
          </label>
        </div>

        {/* Submit */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" as const, gap: 12 }}>
          <p style={{ fontSize: 13, color: "var(--text-secondary)", maxWidth: 480 }}>
            {!canSubmit && (
              <span style={{ color: "#D64045" }}>
                {!form.sentiment ? "Please select how you feel about the decision. " : ""}
                {form.topics.length === 0 ? "Please select at least one affected area. " : ""}
                {form.impact.trim().length < 20 ? "Please describe your situation (min. 20 characters)." : ""}
              </span>
            )}
            {canSubmit && <span style={{ color: "#4A8C5C" }}>✓ Ready to submit.</span>}
          </p>
          <button
            onClick={handleSubmit}
            disabled={!canSubmit}
            style={{
              background: canSubmit ? "var(--navy)" : "var(--slate)",
              color: canSubmit ? "#fff" : "var(--text-secondary)",
              border: "none",
              borderRadius: 8,
              padding: "12px 28px",
              fontSize: 14,
              fontWeight: 600,
              cursor: canSubmit ? "pointer" : "not-allowed",
              transition: "all 0.2s",
              flexShrink: 0,
            }}
          >
            Submit to Executive Leadership →
          </button>
        </div>
      </div>
    </div>
  );
}
