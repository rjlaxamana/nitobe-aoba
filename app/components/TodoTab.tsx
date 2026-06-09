"use client";
import { useState } from "react";
import { todoData } from "../data";

const categoryMeta: Record<string, { label: string; icon: string; color: string; bg: string }> = {
  universal: { label: "All Employees", icon: "📋", color: "#1B2A4A", bg: "#EEF1F6" },
  childcare: { label: "Childcare", icon: "👶", color: "#D4A017", bg: "#FDF6E3" },
  relocation: { label: "Relocation", icon: "🏠", color: "#4A8C5C", bg: "#E8F5EC" },
  accessibility: { label: "Accessibility", icon: "♿", color: "#2D6A4F", bg: "#E8F5EC" },
};

const priorityMeta: Record<string, { label: string; color: string }> = {
  high: { label: "High", color: "#D64045" },
  medium: { label: "Medium", color: "#D4A017" },
  low: { label: "Low", color: "#4A8C5C" },
};

export default function TodoTab() {
  const [tasks, setTasks] = useState(todoData.tasks);
  const [filter, setFilter] = useState("all");

  const toggleTask = (id: number) => {
    setTasks((prev) => prev.map((t) => t.id === id ? { ...t, done: !t.done } : t));
  };

  const filtered = filter === "all" ? tasks : filter === "done" ? tasks.filter(t => t.done) : filter === "pending" ? tasks.filter(t => !t.done) : tasks.filter(t => t.category === filter);

  const groups = Array.from(new Set(filtered.map(t => t.group)));
  const doneCount = tasks.filter(t => t.done).length;
  const pct = Math.round((doneCount / tasks.length) * 100);

  const { user } = todoData;

  return (
    <div>
      {/* User profile card */}
      <div style={{ background: "var(--navy)", borderRadius: 10, padding: "20px 24px", marginBottom: 24, display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" as const }}>
        <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--amber)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 18, color: "var(--navy)", flexShrink: 0 }}>
          {user.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: 15, color: "#fff", marginBottom: 2 }}>{user.name}</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{user.department} · Reports to {user.manager} · {user.id}</div>
          <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" as const }}>
            {user.profile.map((p) => {
              const m = categoryMeta[p];
              return (
                <span key={p} style={{ background: m.bg, color: m.color, fontSize: 12, fontWeight: 500, padding: "3px 10px", borderRadius: 12 }}>
                  {m.icon} {m.label}
                </span>
              );
            })}
          </div>
        </div>
        <div style={{ textAlign: "right" as const, flexShrink: 0 }}>
          <div style={{ fontSize: 28, fontWeight: 700, color: "var(--amber)" }}>{pct}%</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>{doneCount} of {tasks.length} done</div>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ background: "var(--slate)", borderRadius: 10, height: 8, marginBottom: 24, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: "var(--amber)", borderRadius: 10, transition: "width 0.4s ease" }} />
      </div>

      {/* Filter bar */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" as const }}>
        {[
          { key: "all", label: "All tasks" },
          { key: "pending", label: "Pending" },
          { key: "done", label: "Done" },
          ...user.profile.map(p => ({ key: p, label: `${categoryMeta[p].icon} ${categoryMeta[p].label}` }))
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            style={{
              padding: "7px 14px", fontSize: 13, fontWeight: filter === f.key ? 600 : 400,
              background: filter === f.key ? "var(--navy)" : "#fff",
              color: filter === f.key ? "#fff" : "var(--text-secondary)",
              border: `1px solid ${filter === f.key ? "var(--navy)" : "var(--border)"}`,
              borderRadius: 6, cursor: "pointer", transition: "all 0.15s"
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Task groups */}
      {groups.length === 0 ? (
        <div style={{ textAlign: "center" as const, padding: "40px 0", color: "var(--text-secondary)", fontSize: 14 }}>No tasks match this filter.</div>
      ) : (
        <div style={{ display: "grid", gap: 24 }}>
          {groups.map((group) => {
            const groupTasks = filtered.filter(t => t.group === group);
            return (
              <div key={group}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--text-secondary)", marginBottom: 10 }}>{group}</div>
                <div style={{ display: "grid", gap: 8 }}>
                  {groupTasks.map((task) => {
                    const cm = categoryMeta[task.category];
                    const pm = priorityMeta[task.priority];
                    return (
                      <div
                        key={task.id}
                        style={{
                          background: task.done ? "var(--slate)" : "#fff",
                          borderRadius: 8,
                          padding: "16px 18px",
                          border: `1px solid ${task.done ? "transparent" : "var(--border)"}`,
                          display: "flex",
                          gap: 14,
                          alignItems: "flex-start",
                          transition: "all 0.2s",
                          opacity: task.done ? 0.65 : 1
                        }}
                      >
                        <button
                          onClick={() => toggleTask(task.id)}
                          style={{
                            flexShrink: 0, width: 22, height: 22, borderRadius: 6,
                            border: `2px solid ${task.done ? cm.color : "var(--border)"}`,
                            background: task.done ? cm.color : "transparent",
                            cursor: "pointer",
                            marginTop: 2,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: "#fff", fontSize: 13, transition: "all 0.15s"
                          }}
                        >
                          {task.done && "✓"}
                        </button>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" as const, marginBottom: 4 }}>
                            <span style={{ fontWeight: 600, fontSize: 14, color: "var(--navy)", textDecoration: task.done ? "line-through" : "none" }}>
                              {task.title}
                            </span>
                            <span style={{ fontSize: 11, fontWeight: 600, color: pm.color, background: `${pm.color}15`, padding: "2px 8px", borderRadius: 10 }}>
                              {pm.label}
                            </span>
                            <span style={{ fontSize: 11, fontWeight: 500, color: cm.color, background: cm.bg, padding: "2px 8px", borderRadius: 10 }}>
                              {cm.icon} {cm.label}
                            </span>
                          </div>
                          <div style={{ fontSize: 13.5, color: "var(--text-secondary)", lineHeight: 1.6 }}>{task.description}</div>
                          <div style={{ marginTop: 8, fontSize: 12, color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: 4 }}>
                            <span>📅</span>
                            <span>Due: <strong style={{ color: "var(--navy)" }}>{task.dueDate}</strong></span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
