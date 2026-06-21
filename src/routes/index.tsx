import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import photo1 from "@/assets/photos/photo1.jpeg.asset.json";
import photo2 from "@/assets/photos/photo2.jpeg.asset.json";
import photo3 from "@/assets/photos/photo3.jpeg.asset.json";
import photo4 from "@/assets/photos/photo4.jpeg.asset.json";
import photo5 from "@/assets/photos/photo5.jpeg.asset.json";
import photo6 from "@/assets/photos/photo6.jpeg.asset.json";
import photo7 from "@/assets/photos/photo7.jpeg.asset.json";
import photo8 from "@/assets/photos/photo8.jpeg.asset.json";
import photo9 from "@/assets/photos/photo9.jpeg.asset.json";
import photo10 from "@/assets/photos/photo10.jpeg.asset.json";
import photo11 from "@/assets/photos/photo11.jpeg.asset.json";
import photo12 from "@/assets/photos/photo12.jpeg.asset.json";
import video1 from "@/assets/videos/video1.mp4.asset.json";
import video2 from "@/assets/videos/video2.mp4.asset.json";
import video3 from "@/assets/videos/video3.mp4.asset.json";
import video4 from "@/assets/videos/video4.mp4.asset.json";
import video5 from "@/assets/videos/video5.mp4.asset.json";
import video6 from "@/assets/videos/video6.mp4.asset.json";
import video7 from "@/assets/videos/video7.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "For You — Even After a Month" },
      { name: "description", content: "A letter, in pictures and words, for the one I still love." },
      { property: "og:title", content: "For You — Even After a Month" },
      { property: "og:description", content: "A letter, in pictures and words, for the one I still love." },
    ],
  }),
  component: Index,
});

const display = { fontFamily: "var(--font-display)" } as const;
const script = { fontFamily: "var(--font-script)" } as const;

function Slide({ active, children, bg }: { active: boolean; children: React.ReactNode; bg?: string }) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center px-6 transition-all duration-[1200ms] ease-out ${
        active ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-[1.04] pointer-events-none"
      }`}
      style={bg ? { background: bg } : undefined}
    >
      {children}
    </div>
  );
}

function Index() {
  const couple = [photo1, photo2, photo3, photo4, photo6, photo7, photo10, photo12];
  const her = [photo5, photo8, photo9, photo11];
  const videos = [video1, video2, video3, video4, video5, video6, video7];

  const slides: React.ReactNode[] = [
    // 0 — Hero
    <div className="text-center max-w-4xl">
      <p className="uppercase tracking-[0.4em] text-xs text-muted-foreground mb-8 animate-fade-in">a letter for you</p>
      <h1 style={display} className="text-5xl md:text-8xl leading-[0.95] italic font-medium animate-fade-in">
        Even after a month<br />
        <span style={script} className="not-italic text-primary">I still choose you.</span>
      </h1>
      <p className="mt-10 text-muted-foreground text-base md:text-lg max-w-xl mx-auto animate-fade-in">
        A quiet little story — for the most beautiful person I know.
      </p>
    </div>,

    // 1 — Counter
    <div className="text-center">
      <p style={script} className="text-primary text-2xl md:text-3xl mb-4">thirty sunsets</p>
      <Counter />
      <p className="mt-6 text-muted-foreground uppercase tracking-[0.3em] text-xs">days of missing you</p>
    </div>,

    // 2 — First photo
    <PhotoSlide src={couple[0].url} caption="us — before the distance had a name" />,

    // 3
    <PhotoSlide src={couple[1].url} caption="that night, the gold-lit mirrors, your laugh" />,

    // 4
    <PhotoSlide src={couple[2].url} caption="silly faces. my favorite version of you." />,

    // 5 — Letter pt 1
    <div className="max-w-2xl">
      <p className="uppercase tracking-[0.3em] text-xs text-muted-foreground mb-3 text-center">a letter</p>
      <div style={display} className="text-xl md:text-3xl italic leading-relaxed space-y-6 text-foreground/90">
        <p>My love,</p>
        <p>It's been a month. A whole month of mornings without your good-morning, of jokes I swallow because you aren't here to laugh at them.</p>
      </div>
    </div>,

    // 6 — Letter pt 2
    <div className="max-w-2xl">
      <div style={display} className="text-xl md:text-3xl italic leading-relaxed space-y-6 text-foreground/90">
        <p>You said distance would break us. Maybe you were right about the silence — but you were wrong about my heart.</p>
        <p>It is exactly where you left it.</p>
      </div>
    </div>,

    // 7
    <PhotoSlide src={couple[3].url} caption="the way you looked at me, always" />,

    // 8 — Her
    <PhotoSlide src={her[0].url} caption="you, on a slow afternoon. perfect." tall />,

    // 9
    <PhotoSlide src={her[1].url} caption="the green tee, the soft light, my whole world" tall />,

    // 10
    <PhotoSlide src={her[2].url} caption="this one lives on my lockscreen still" tall />,

    // 11
    <PhotoSlide src={her[3].url} caption="impossibly beautiful. impossibly mine — once." tall />,

    // 12 — Outfit checks intro
    <div className="text-center max-w-2xl">
      <p className="uppercase tracking-[0.3em] text-xs text-muted-foreground mb-3">our little ritual</p>
      <h2 style={display} className="text-5xl md:text-7xl italic">outfit checks</h2>
      <p style={display} className="mt-6 text-muted-foreground italic text-lg md:text-xl">
        You sent these before stepping out. I still watch them. You're beautiful in every single one.
      </p>
    </div>,

    // 13 — Outfit grid (videos)
    <div className="w-full max-w-6xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {videos.map((v, i) => (
          <div key={i} className="aspect-[9/16] overflow-hidden rounded-sm bg-black shadow-2xl">
            <video src={v.url} className="w-full h-full object-cover" controls playsInline preload="metadata" muted />
          </div>
        ))}
      </div>
    </div>,

    // 14
    <PhotoSlide src={couple[6].url} caption="pink wall. blue dress. one of the good days." />,

    // 15
    <PhotoSlide src={couple[7].url} caption="even through a video call, you felt close" />,

    // 16 — Promises
    <div className="max-w-3xl w-full">
      <h2 style={display} className="text-4xl md:text-5xl italic text-center mb-12">things i never got to say</h2>
      <div className="space-y-6 md:space-y-8">
        {[
          "Distance is a number. What we had isn't measurable.",
          "I'd wait. Not because I have to — because nothing else feels right.",
          "Every song reminds me of you. I've stopped fighting it.",
          "You don't owe me an answer. I just owed you the truth.",
        ].map((t, i) => (
          <div key={i} className="flex gap-5 items-start">
            <span style={display} className="text-primary text-2xl italic shrink-0">{(i + 1).toString().padStart(2, "0")}</span>
            <p style={display} className="text-lg md:text-2xl italic leading-relaxed text-foreground/85">{t}</p>
          </div>
        ))}
      </div>
    </div>,

    // 17 — Closing
    <div className="text-center">
      <p style={script} className="text-6xl md:text-8xl text-primary mb-6">i love you</p>
      <p className="text-muted-foreground text-xs md:text-sm uppercase tracking-[0.4em]">today · tomorrow · always</p>
      <p style={display} className="mt-12 italic text-muted-foreground text-base md:text-lg max-w-md mx-auto">
        — still yours.
      </p>
    </div>,
  ];

  const [i, setI] = useState(0);
  const total = slides.length;

  const next = useCallback(() => setI((x) => Math.min(x + 1, total - 1)), [total]);
  const prev = useCallback(() => setI((x) => Math.max(x - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); prev(); }
      else if (e.key === "Home") setI(0);
      else if (e.key === "End") setI(total - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, total]);

  // touch swipe
  const touchX = useRef<number | null>(null);
  const touchY = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
    touchY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null || touchY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    const dy = e.changedTouches[0].clientY - touchY.current;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next(); else prev();
    } else if (Math.abs(dy) > 60) {
      if (dy < 0) next(); else prev();
    }
    touchX.current = null;
    touchY.current = null;
  };

  return (
    <div
      className="fixed inset-0 bg-background text-foreground overflow-hidden select-none"
      style={{ fontFamily: "var(--font-body)" }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Ambient gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 20%, oklch(0.92 0.08 25 / 0.6), transparent), radial-gradient(50% 50% at 80% 90%, oklch(0.88 0.1 35 / 0.45), transparent)",
        }}
      />

      {slides.map((node, idx) => (
        <Slide key={idx} active={idx === i}>{node}</Slide>
      ))}

      {/* Top bar */}
      <div className="absolute top-5 left-0 right-0 flex justify-between items-center px-6 z-10 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <span style={script} className="text-primary text-base normal-case tracking-normal">for you</span>
        <span className="tabular-nums">{String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
      </div>

      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-border/40 z-10">
        <div
          className="h-full bg-primary transition-all duration-700 ease-out"
          style={{ width: `${((i + 1) / total) * 100}%` }}
        />
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        disabled={i === 0}
        aria-label="Previous"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full border border-border bg-background/60 backdrop-blur flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary disabled:opacity-20 disabled:cursor-not-allowed transition-all"
      >
        ‹
      </button>
      <button
        onClick={next}
        disabled={i === total - 1}
        aria-label="Next"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full border border-border bg-background/60 backdrop-blur flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary disabled:opacity-20 disabled:cursor-not-allowed transition-all"
      >
        ›
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 max-w-[90vw] flex-wrap justify-center">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              idx === i ? "w-8 bg-primary" : "w-1.5 bg-foreground/25 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>

      {/* Hint */}
      <p className="absolute bottom-14 left-1/2 -translate-x-1/2 z-10 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 hidden md:block">
        use ← → or swipe
      </p>
    </div>
  );
}

function Counter() {
  const [n, setN] = useState(0);
  useEffect(() => {
    let cur = 0;
    const id = setInterval(() => {
      cur += 1;
      setN(cur);
      if (cur >= 30) clearInterval(id);
    }, 60);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={display} className="text-8xl md:text-[12rem] font-light tabular-nums leading-none">
      {n.toString().padStart(2, "0")}
    </div>
  );
}

function PhotoSlide({ src, caption, tall }: { src: string; caption: string; tall?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-5 max-w-full">
      <div
        className={`overflow-hidden rounded-sm shadow-2xl bg-muted ${
          tall ? "max-h-[70vh] aspect-[3/4]" : "max-h-[70vh] max-w-[85vw] md:max-w-[60vw]"
        }`}
      >
        <img src={src} alt={caption} className="h-full w-full object-cover" />
      </div>
      <p style={display} className="italic text-muted-foreground text-base md:text-xl text-center max-w-md px-4">
        {caption}
      </p>
    </div>
  );
}
