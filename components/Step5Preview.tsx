"use client";

import { useState } from "react";
import { DateData } from "@/app/page";

interface Props {
  dateData: DateData;
  onReset: () => void;
}

export default function Step5Preview({ dateData, onReset }: Props) {
  const [confetti, setConfetti] = useState(false);

  const handleAddToCalendar = () => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 3000);
  };

  const foodString =
    dateData.foods.length > 0
      ? dateData.foods.join(" & ")
      : "Something delicious";

  return (
    <div className="step-enter flex flex-col items-center justify-center w-full relative">
      {/* Confetti hearts */}
      {confetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="absolute text-2xl animate-float"
              style={{
                left: `${Math.random() * 90}%`,
                top: `-10%`,
                animationDuration: `${1 + Math.random() * 2}s`,
                animationDelay: `${Math.random() * 0.5}s`,
                fontSize: `${14 + Math.random() * 16}px`,
              }}
            >
              {["❤️", "💕", "✨", "🌹", "💗"][Math.floor(Math.random() * 5)]}
            </span>
          ))}
        </div>
      )}

      {/* Heart icon */}
      <div className="mb-6">
        <span className="text-4xl" style={{ color: "rgba(120, 70, 90, 0.7)" }}>
          💕
        </span>
      </div>

      {/* Header */}
      <h2
        className="text-center mb-4"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "2.8rem",
          fontWeight: 500,
          color: "#3d2020",
          fontStyle: "italic",
        }}
      >
        It&apos;s a date
      </h2>

      <p
        className="text-center mb-10 tracking-[0.3em] uppercase"
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.95rem",
          color: "rgba(60, 30, 40, 0.8)",
          fontWeight: 500,
        }}
      >
        Something wonderful awaits
      </p>

      {/* All cards container */}
      <div className="flex flex-col w-full" style={{ maxWidth: "450px", gap: "20px" }}>
        
        {/* When Card - SUPER ROUNDED */}
        <div
          className="p-6 w-full"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            border: "2px solid rgba(255, 105, 180, 0.4)",
            borderRadius: "32px", // Highly rounded
          }}
        >
          <p
            className="tracking-[0.25em] uppercase mb-3 text-center"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.85rem",
              color: "rgba(255, 105, 180, 0.9)",
              letterSpacing: "3px",
              fontWeight: 600,
            }}
          >
            When
          </p>
          <p
            className="text-center"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#3d2020",
            }}
          >
            {dateData.date
              ? `${getDayName(dateData.date)}, ${dateData.date}`
              : "Saturday, June 27"}
          </p>
          <p
            className="text-center"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "1.1rem",
              color: "rgba(60, 30, 40, 0.8)",
              marginTop: "4px",
              fontWeight: 500,
            }}
          >
            {dateData.time || "7:00 PM"} · {dateData.timeLabel || "Evening"}
          </p>
        </div>

        {/* What we're having Card - SUPER ROUNDED */}
        <div
          className="p-6 w-full"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            border: "2px solid rgba(255, 105, 180, 0.4)",
            borderRadius: "32px", // Highly rounded
          }}
        >
          <p
            className="tracking-[0.25em] uppercase mb-3 text-center"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.85rem",
              color: "rgba(255, 105, 180, 0.9)",
              letterSpacing: "3px",
              fontWeight: 600,
            }}
          >
            What we&apos;re having
          </p>
          <p
            className="text-center"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.2rem",
              fontWeight: 600,
              color: "#3d2020",
              lineHeight: 1.5,
            }}
          >
            {foodString}
          </p>
        </div>

        {/* Where Card - SUPER ROUNDED */}
        <div
          className="p-6 w-full"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            border: "2px solid rgba(255, 105, 180, 0.4)",
            borderRadius: "32px", // Highly rounded
          }}
        >
          <p
            className="tracking-[0.25em] uppercase mb-3 text-center"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.85rem",
              color: "rgba(255, 105, 180, 0.9)",
              letterSpacing: "3px",
              fontWeight: 600,
            }}
          >
            Where
          </p>
          <p
            className="text-center"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.2rem",
              fontWeight: 600,
              color: "#3d2020",
              lineHeight: 1.5,
            }}
          >
            {dateData.location || "Somewhere special"}
          </p>
        </div>

        {/* Shayari Card - SUPER ROUNDED */}
        <div
          className="px-6 py-5 w-full"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            border: "2px solid rgba(255, 105, 180, 0.3)",
            borderLeft: "4px solid rgba(255, 105, 180, 0.7)",
            borderRadius: "32px", // Highly rounded
          }}
        >
          <p
            className="text-center leading-relaxed"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1rem",
              fontStyle: "italic",
              lineHeight: 1.8,
              color: "#3d2020",
            }}
          >
            ✦ Teri aankhon mein jo kho jaata hoon,{" "}
            <br />
            woh lamha duniya se behtar hota hai...{" "}
            <br />
            Aaj ki shaam sirf teri aur meri ho,{" "}
            <br />
            yeh dil bas yehi duaa karta hai.
          </p>
        </div>
      </div>

      {/* Buttons container */}
      <div className="flex flex-col w-full mt-8" style={{ maxWidth: "450px", gap: "16px" }}>
        {/* Add to calendar button */}
        <button
          onClick={handleAddToCalendar}
          className="w-full transition-all duration-300 hover:scale-105"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "1rem",
            letterSpacing: "2px",
            fontWeight: 600,
            padding: "18px 32px",
            background: "rgba(255, 105, 180, 0.8)",
            color: "#fff",
            border: "2px solid rgba(255, 105, 180, 0.9)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 4px 15px rgba(255, 105, 180, 0.3)",
            borderRadius: "9999px", // Fully rounded pill shape
          }}
        >
          ADD TO CALENDAR 📅
        </button>

        {/* Reset / Start over */}
        <button
          onClick={onReset}
          className="w-full transition-all duration-200 hover:opacity-70"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.9rem",
            letterSpacing: "1px",
            color: "rgba(60, 30, 40, 0.6)",
            background: "transparent",
            border: "2px solid rgba(255, 105, 180, 0.3)",
            padding: "14px 32px",
            cursor: "pointer",
            borderRadius: "9999px", // Fully rounded pill shape
          }}
        >
          Start over ↩
        </button>
      </div>
    </div>
  );
}

function getDayName(dateStr: string): string {
  const parts = dateStr.split(" ");
  const day = parseInt(parts[0]);
  const month = parts[1];
  const year = parseInt(parts[2]);

  const monthMap: Record<string, number> = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  const date = new Date(year, monthMap[month] ?? 0, day);
  return date.toLocaleDateString("en-US", { weekday: "long" });
}