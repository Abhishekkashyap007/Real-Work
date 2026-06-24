"use client";

import { useState } from "react";

interface Props {
  onTimeSelect: (time: string, label: string) => void;
  selectedDate: string | null;
}

const TIMES = [
  { label: "Evening", time: "7:00 PM", icon: "🌇" },
  { label: "Night", time: "8:30 PM", icon: "🌙" },
  { label: "Late Night", time: "10:00 PM", icon: "✨" },
];

export default function Step3Time({ onTimeSelect, selectedDate }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (label: string, time: string) => {
    setSelected(label);
    setTimeout(() => {
      onTimeSelect(time, label);
    }, 350);
  };

  return (
    <div className="step-enter flex flex-col items-center justify-center w-full">
      {/* Clock icon */}
      <div className="mb-6">
        <span className="text-3xl" style={{ color: "rgba(120, 70, 90, 0.7)" }}>
          🕐
        </span>
      </div>

      {/* Title */}
      <h2
        className="text-center mb-4"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "2.8rem",
          fontWeight: 500,
          color: "#3d2020",
        }}
      >
        What time?
      </h2>

      {/* Subtitle */}
      <p
        className="text-center mb-6 tracking-[0.3em] uppercase"
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.95rem",
          color: "rgba(120, 70, 90, 0.6)",
        }}
      >
        Choose your hour
      </p>

      {/* Selected date */}
      {selectedDate && (
        <p
          className="text-center mb-10"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "1rem",
            color: "rgba(60, 30, 40, 0.8)",
            fontWeight: 500,
          }}
        >
           {selectedDate}
        </p>
      )}

      {/* Time options - INCREASED HEIGHT & ROUNDED BORDER */}
      <div className="flex flex-col w-full" style={{ maxWidth: "450px", gap: "24px" }}>
        {TIMES.map(({ label, time, icon }) => {
          const isSelected = selected === label;
          return (
            <button
              key={label}
              onClick={() => handleSelect(label, time)}
              className="flex items-center justify-between rounded-full transition-all duration-300 w-full"
              style={{
                background: isSelected
                  ? "rgba(255, 105, 180, 0.8)"
                  : "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                border: isSelected
                  ? "2px solid rgba(255, 105, 180, 0.9)"
                  : "2px solid rgba(255, 105, 180, 0.4)",
                transform: isSelected ? "scale(1.02)" : "scale(1)",
                boxShadow: isSelected
                  ? "0 8px 24px rgba(255, 105, 180, 0.3)"
                  : "none",
                padding: "22px 32px", // Increased height
                minHeight: "80px", // Fixed minimum height
              }}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{icon}</span>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: isSelected ? "#fff" : "rgba(60, 30, 40, 0.85)",
                  }}
                >
                  {label}
                </span>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "1rem",
                  color: isSelected ? "rgba(255,255,255,0.9)" : "rgba(60, 30, 40, 0.6)",
                  letterSpacing: "0.5px",
                  fontWeight: 500,
                }}
              >
                {time}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}