"use client";

import { useState } from "react";
import Step1Proposal from "@/components/Step1Proposal";
import Step2Calendar from "@/components/Step2Calendar";
import Step3Time from "@/components/Step3Time";
import Step4Food from "@/components/Step4Food";
import Step5Location from "@/components/Step5Location";
import Step6Preview from "@/components/Step5Preview";

export interface DateData {
  date: string | null;
  time: string | null;
  timeLabel: string | null;
  foods: string[];
  location: string | null;
}

export default function Home() {
  const [step, setStep] = useState(1);
  const [dateData, setDateData] = useState<DateData>({
    date: null,
    time: null,
    timeLabel: null,
    foods: [],
    location: null,
  });

  const goToStep = (s: number) => setStep(s);

  const updateDate = (date: string) => {
    setDateData((prev) => ({ ...prev, date }));
    goToStep(3);
  };

  const updateTime = (time: string, label: string) => {
    setDateData((prev) => ({ ...prev, time, timeLabel: label }));
    goToStep(4);
  };

  const updateFoods = (foods: string[]) => {
    setDateData((prev) => ({ ...prev, foods }));
    goToStep(5);
  };

  const updateLocation = (location: string) => {
    setDateData((prev) => ({ ...prev, location }));
    goToStep(6);
  };

  const handleReset = () => {
    setStep(1);
    setDateData({
      date: null,
      time: null,
      timeLabel: null,
      foods: [],
      location: null,
    });
  };

  return (
    <main className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {["♥", "♡", "❤", "♥", "♡", "❤", "♥"].map((h, i) => (
          <span
            key={i}
            className="absolute text-white/20 animate-float text-2xl"
            style={{
              left: `${10 + i * 14}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              fontSize: `${16 + (i % 3) * 8}px`,
            }}
          >
            {h}
          </span>
        ))}
      </div>

      {/* Step indicator dots - Ab 6 steps */}
      {step > 1 && (
        <div className="absolute top-6 left-0 right-0 flex justify-center gap-2 z-10">
          {[1, 2, 3, 4, 5, 6].map((s) => (
            <div
              key={s}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                s === step
                  ? "bg-white scale-125"
                  : s < step
                  ? "bg-white/70"
                  : "bg-white/30"
              }`}
            />
          ))}
        </div>
      )}

      {/* Steps */}
      <div className="w-full max-w-sm mx-auto px-4">
        {step === 1 && <Step1Proposal onYes={() => goToStep(2)} />}
        {step === 2 && <Step2Calendar onDateSelect={updateDate} />}
        {step === 3 && (
          <Step3Time onTimeSelect={updateTime} selectedDate={dateData.date} />
        )}
        {step === 4 && <Step4Food onFoodSelect={updateFoods} />}
        {step === 5 && <Step5Location onLocationSelect={updateLocation} />}
        {step === 6 && <Step6Preview dateData={dateData} onReset={handleReset} />}
      </div>
    </main>
  );
}