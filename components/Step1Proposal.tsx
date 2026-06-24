"use client";

import { useState, useCallback, useRef, useEffect } from "react";

interface Props {
  onYes: () => void;
}

export default function Step1Proposal({ onYes }: Props) {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noVisible, setNoVisible] = useState(true);
  const [yesHovered, setYesHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const escapeCount = useRef(0);
  const [hearts, setHearts] = useState<
    Array<{ id: number; left: number; delay: number; duration: number; size: number }>
  >([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: 20 + Math.random() * 40,
    }));
    setHearts(newHearts);
  }, []);

  const handleNoHover = useCallback(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    escapeCount.current += 1;

    if (escapeCount.current > 10) {
      setNoVisible(false);
      return;
    }

    const maxX = rect.width - 100;
    const maxY = rect.height - 50;

    let newX, newY;
    do {
      newX = Math.random() * maxX - maxX / 2;
      newY = Math.random() * maxY - maxY / 2;
    } while (
      Math.abs(newX - noPos.x) < 60 &&
      Math.abs(newY - noPos.y) < 60
    );

    setNoPos({ x: newX, y: newY });
  }, [noPos]);

  return (
    <div
      ref={containerRef}
      className="step-enter flex flex-col items-center justify-center text-center relative"
      style={{ minHeight: "400px" }}
    >
      {/* Full screen floating hearts - bottom to top */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute text-pink-400 opacity-30"
            style={{
              left: `${heart.left}%`,
              bottom: "-50px",
              fontSize: `${heart.size}px`,
              animation: `floatUp ${heart.duration}s ease-in infinite`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            💕
          </div>
        ))}
      </div>

      {/* Animated Heart icon - INCREASED SIZE */}
      <div 
        className="mb-8 text-7xl relative z-10"
        style={{
          animation: "pulse-heart 1s ease-in-out infinite",
          filter: "drop-shadow(0 0 30px rgba(255, 105, 180, 0.9))",
        }}
      >
        💖
      </div>

      {/* Main question - MODIFIED LINE BREAKS */}
      <h1
        className="text-white mb-3 leading-tight relative z-10"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "3rem",
          fontWeight: 500,
          letterSpacing: "-0.5px",
          textShadow: "0 2px 15px rgba(255, 105, 180, 0.6)",
        }}
      >
        Will you go on a date with
        <br />
        me?
      </h1>

      {/* Subtitle - UPPERCASE */}
      <p
        className="text-white/60 mb-16 tracking-widest uppercase relative z-10"
        style={{ 
          fontFamily: "var(--font-inter)", 
          fontSize: "0.85rem",
          letterSpacing: "3px",
        }}
      >
        A QUESTION WORTH ASKING
      </p>

      {/* Buttons with proper spacing */}
      <div className="flex items-center justify-center relative z-10 w-full">
        {/* YES button */}
        <button
          onClick={onYes}
          onMouseEnter={() => setYesHovered(true)}
          onMouseLeave={() => setYesHovered(false)}
          className="transition-all duration-200 rounded-full text-white font-medium cursor-pointer"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "1rem",
            letterSpacing: "0.5px",
            padding: "14px 48px",
            background: yesHovered
              ? "rgba(255, 105, 180, 0.5)"
              : "rgba(255, 105, 180, 0.35)",
            border: "2px solid rgba(255, 182, 193, 0.7)",
            backdropFilter: "blur(10px)",
            transform: yesHovered ? "scale(1.08)" : "scale(1)",
            boxShadow: yesHovered
              ? "0 0 35px rgba(255, 105, 180, 0.7)"
              : "0 0 20px rgba(255, 105, 180, 0.4)",
            marginRight: "60px",
          }}
        >
          Yes ✨
        </button>

        {/* NO button - runs away */}
        {noVisible && (
          <button
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            className="transition-all rounded-full text-white/70 cursor-pointer select-none"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "1rem",
              letterSpacing: "0.5px",
              padding: "14px 48px",
              border: "2px solid rgba(255,255,255,0.3)",
              background: "rgba(255, 255, 255, 0.1)",
              position: "relative",
              transform: `translate(${noPos.x}px, ${noPos.y}px)`,
              transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              whiteSpace: "nowrap",
            }}
          >
            No
          </button>
        )}
      </div>

      {!noVisible && (
        <p
          className="mt-8 text-white/50 italic animate-fadeIn relative z-10"
          style={{ fontFamily: "var(--font-playfair)", fontSize: "0.85rem" }}
        >
          &ldquo;No&rdquo; has left the chat 😄
        </p>
      )}

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}