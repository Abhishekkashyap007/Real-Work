"use client";

import { useState } from "react";

interface Props {
  onDateSelect: (date: string) => void;
}

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const JUNE_START_DAY = 1;
const JUNE_DAYS = 30;
const HIGHLIGHTED_DATES = [25, 26, 27, 28, 29];

export default function Step2Calendar({ onDateSelect }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (day: number) => {
    if (!HIGHLIGHTED_DATES.includes(day)) return;
    setSelected(day);
    setTimeout(() => {
      onDateSelect(`${day} June 2026`);
    }, 300);
  };

  const cells: (number | null)[] = [];
  for (let i = 0; i < JUNE_START_DAY; i++) cells.push(null);
  for (let d = 1; d <= JUNE_DAYS; d++) cells.push(d);

  return (
    <div className="step-enter flex flex-col items-center justify-center w-full">
      {/* Diamond icon */}
      <div className="mb-6">
        <span className="text-white/70 text-3xl">◆</span>
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
        When are you free?
      </h2>

      {/* Subtitle - DARKER */}
      <p
        className="text-center mb-8 tracking-[0.3em] uppercase"
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.95rem",
          color: "rgba(60, 30, 40, 0.9)",
        }}
      >
        Pick a date
      </p>

      {/* Calendar card - TRANSPARENT BACKGROUND, NO BORDER */}
      <div
        className="rounded-2xl p-6"
        style={{
          background: "transparent",
          backdropFilter: "none",
          width: "380px",
        }}
      >
        {/* Month header */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-white/40 text-2xl cursor-default select-none">‹</span>
          <span
            className="tracking-[0.25em] font-medium"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "1.05rem",
              color: "#3d2020",
            }}
          >
            JUNE 2026
          </span>
          <span className="text-white/40 text-2xl cursor-default select-none">›</span>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 mb-4">
          {DAYS.map((d) => (
            <div
              key={d}
              className="text-center"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.85rem",
                color: "rgba(60, 30, 40, 0.8)",
                fontWeight: 600,
              }}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Date grid */}
        <div className="grid grid-cols-7 gap-2">
          {cells.map((day, i) => {
            if (!day) return <div key={`empty-${i}`} className="aspect-square" />;

            const isHighlighted = HIGHLIGHTED_DATES.includes(day);
            const isSelected = selected === day;

            return (
              <button
                key={day}
                onClick={() => handleSelect(day)}
                disabled={!isHighlighted}
                className="aspect-square flex items-center justify-center rounded-full transition-all duration-300"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "1rem",
                  fontWeight: isSelected ? 600 : 400,
                  color: isSelected
                    ? "#fff"
                    : isHighlighted
                    ? "#3d2020"
                    : "rgba(60, 30, 40, 0.7)",
                  background: isSelected
                    ? "rgba(255, 105, 180, 0.8)"
                    : isHighlighted
                    ? "rgba(255, 182, 193, 0.4)"
                    : "transparent",
                  border: isHighlighted && !isSelected
                    ? "1px solid rgba(255, 105, 180, 0.3)"
                    : "none",
                  cursor: isHighlighted ? "pointer" : "default",
                  transform: isSelected ? "scale(1.1)" : "scale(1)",
                  boxShadow: isSelected
                    ? "0 4px 12px rgba(255, 105, 180, 0.4)"
                    : "none",
                }}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Helper text - DARKER */}
      <p
        className="text-center mt-8 italic"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "1rem",
          color: "rgba(60, 30, 40, 0.85)",
        }}
      >
        ✦ Pick any highlighted date ✦
      </p>
    </div>
  );
}