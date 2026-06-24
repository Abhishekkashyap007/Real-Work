"use client";

import { useState } from "react";

interface Props {
  onLocationSelect: (location: string) => void;
}

const LOCATIONS = [
  { name: "Udupi Cafe", emoji: "🏠", desc: "Homely vibes" },
  { name: "Village Restaurant", emoji: "🌿", desc: "Rustic charm" },
  { name: "Burger Singh", emoji: "🍔", desc: "Desi swag" },
  { name: "Tomar Restaurant", emoji: "🍽️", desc: "Classic taste" },
];

export default function Step5Location({ onLocationSelect }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (name: string) => {
    setSelected(name);
    setTimeout(() => {
      onLocationSelect(name);
    }, 400);
  };

  return (
    <div className="step-enter flex flex-col items-center justify-center w-full">
      {/* Location pin icon */}
      <div className="mb-6">
        <span className="text-4xl" style={{ color: "rgba(120, 70, 90, 0.7)" }}>
          📍
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
        Where should we go?
      </h2>

      {/* Subtitle */}
      <p
        className="text-center mb-10 tracking-[0.3em] uppercase"
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.95rem",
          color: "rgba(60, 30, 40, 0.9)",
          fontWeight: 500,
        }}
      >
        Pick your spot
      </p>

      {/* Location list */}
      <div
        className="flex flex-col mb-10"
        style={{ maxWidth: "450px", width: "100%", gap: "20px" }}
      >
        {LOCATIONS.map(({ name, emoji, desc }) => {
          const isSelected = selected === name;
          return (
            <button
              key={name}
              onClick={() => handleSelect(name)}
              className="flex items-center justify-between transition-all duration-300"
              style={{
                background: isSelected
                  ? "rgba(255, 105, 180, 0.8)"
                  : "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(8px)",
                border: isSelected
                  ? "2px solid rgba(255, 105, 180, 0.9)"
                  : "2px solid rgba(255, 105, 180, 0.3)",
                borderRadius: "24px",
                padding: "24px 30px",
                transform: isSelected ? "scale(1.03)" : "scale(1)",
                boxShadow: isSelected
                  ? "0 4px 20px rgba(255, 105, 180, 0.4)"
                  : "none",
              }}
            >
              <div className="flex items-center gap-5">
                <span style={{ fontSize: "2.2rem" }}>{emoji}</span>
                <div className="flex flex-col items-start">
                  <span
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "1.3rem",
                      fontWeight: isSelected ? 700 : 600,
                      color: isSelected ? "#fff" : "rgba(60, 30, 40, 0.9)",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {name}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      color: isSelected ? "rgba(255,255,255,0.85)" : "rgba(60, 30, 40, 0.6)",
                      marginTop: "2px",
                    }}
                  >
                    {desc}
                  </span>
                </div>
              </div>
              <span
                style={{
                  fontSize: "1.3rem",
                  color: isSelected ? "#fff" : "rgba(255, 105, 180, 0.6)",
                  transform: isSelected ? "scale(1.2)" : "scale(1)",
                  transition: "transform 0.3s ease",
                }}
              >
                {isSelected ? "✓" : "→"}
              </span>
            </button>
          );
        })}
      </div>

      {/* Helper text */}
      <p
        className="text-center italic"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "1rem",
          color: "rgba(60, 30, 40, 0.6)",
        }}
      >
        ✦ ek jagah chuno, baaki chhodo ✦
      </p>
    </div>
  );
}