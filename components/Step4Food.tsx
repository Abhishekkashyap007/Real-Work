"use client";

import { useState } from "react";

interface Props {
  onFoodSelect: (foods: string[]) => void;
}

const FOODS = [
  { name: "Dosa", emoji: "🍣" },
  { name: "Pasta", emoji: "🍝" },
  { name: "Pizza", emoji: "🍕" },
  { name: "Biryani", emoji: "🍛" },
  { name: "Kebabs", emoji: "🍢" },
  { name: "Chicken", emoji: "🍗" },
  { name: "Burgers", emoji: "🍔" },
  { name: "Cold Coffee", emoji: "☕" },
];

export default function Step4Food({ onFoodSelect }: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (name: string) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((f) => f !== name) : [...prev, name]
    );
  };

  const handleContinue = () => {
    if (selected.length === 0) return;
    onFoodSelect(selected);
  };

  return (
    <div className="step-enter flex flex-col items-center justify-center w-full">
      {/* Diamond icon */}
      <div className="mb-6">
        <span className="text-3xl" style={{ color: "rgba(120, 70, 90, 0.7)" }}>
          ◆
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
        What are we feeling?
      </h2>

      {/* Subtitle */}
      <p
        className="text-center mb-8 tracking-[0.3em] uppercase"
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.95rem",
          color: "rgba(60, 30, 40, 0.9)",
          fontWeight: 500,
        }}
      >
        Pick your meals
      </p>

      {/* Food grid - 2 columns x 4 rows */}
      <div
        className="grid grid-cols-2 mb-10"
        style={{ maxWidth: "450px", width: "100%", gap: "16px" }}
      >
        {FOODS.map(({ name, emoji }) => {
          const isSelected = selected.includes(name);
          return (
            <button
              key={name}
              onClick={() => toggle(name)}
              className="flex flex-col items-center justify-center transition-all duration-300"
              style={{
                background: isSelected
                  ? "rgba(255, 105, 180, 0.8)"
                  : "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(8px)",
                border: isSelected
                  ? "2px solid rgba(255, 105, 180, 0.9)"
                  : "2px solid rgba(255, 105, 180, 0.3)",
                borderRadius: "20px",
                padding: "20px 8px",
                transform: isSelected ? "scale(1.05)" : "scale(1)",
                boxShadow: isSelected
                  ? "0 4px 15px rgba(255, 105, 180, 0.3)"
                  : "none",
              }}
            >
              <span style={{ fontSize: "2.2rem", marginBottom: "6px" }}>{emoji}</span>
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "1rem",
                  fontWeight: isSelected ? 600 : 500,
                  color: isSelected ? "#fff" : "rgba(60, 30, 40, 0.85)",
                }}
              >
                {name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Helper text */}
      <p
        className="text-center mb-8 italic"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "1rem",
          color: "rgba(60, 30, 40, 0.6)",
        }}
      >
        ✦ select what you&apos;re craving ✦
      </p>

      {/* Continue button */}
      <button
        onClick={handleContinue}
        disabled={selected.length === 0}
        className="w-full rounded-full transition-all duration-300"
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "1rem",
          letterSpacing: "1px",
          fontWeight: 600,
          padding: "18px 32px",
          background:
            selected.length > 0
              ? "rgba(255, 105, 180, 0.8)"
              : "rgba(255, 255, 255, 0.1)",
          color: selected.length > 0 ? "#fff" : "rgba(60, 30, 40, 0.4)",
          border:
            selected.length > 0
              ? "2px solid rgba(255, 105, 180, 0.9)"
              : "2px solid rgba(255, 105, 180, 0.3)",
          cursor: selected.length > 0 ? "pointer" : "not-allowed",
          transform: selected.length > 0 ? "scale(1)" : "scale(0.98)",
          boxShadow:
            selected.length > 0
              ? "0 4px 15px rgba(255, 105, 180, 0.3)"
              : "none",
          maxWidth: "450px",
        }}
      >
        {selected.length > 0
          ? `Continue with ${selected.length} item${selected.length > 1 ? "s" : ""} →`
          : "Select at least one meal"}
      </button>
    </div>
  );
}