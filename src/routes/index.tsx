import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import photo1 from "@/assets/photos/photo1.jpeg.asset.json";
import photo2 from "@/assets/photos/photo2.jpeg.asset.json";
import photo3 from "@/assets/photos/photo3.jpeg.asset.json";
import photo4 from "@/assets/photos/photo4.jpeg.asset.json";
import photo5 from "@/assets/photos/photo5.jpeg.asset.json";
import photo6 from "@/assets/photos/photo6.jpeg.asset.json";
import photo7 from "@/assets/photos/photo7.jpeg.asset.json";
import photo8 from "@/assets/photos/photo8.jpeg.asset.json";
import photo9 from "@/assets/photos/photo9.jpeg.asset.json";

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

function Index() {
  const [days, setDays] = useState(0);
  useEffect(() => {
    let n = 0;
    const id = setInterval(() => {
      n += 1;
      setDays(n);
      if (n >= 30) clearInterval(id);
    }, 50);
    return () => clearInterval(id);
  }, []);

  const couple = [photo1, photo2, photo3, photo4, photo6, photo7];
  const her = [photo5, photo8, photo9];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" style={{ fontFamily: "var(--font-body)" }}>
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-70"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 20%, oklch(0.92 0.08 25 / 0.8), transparent), radial-gradient(40% 40% at 80% 80%, oklch(0.88 0.1 35 / 0.5), transparent)",
          }}
        />
        <p className="uppercase tracking-[0.4em] text-xs text-muted-foreground mb-6">a letter for you</p>
        <h1 style={{ fontFamily: "var(--font-display)" }} className="text-6xl md:text-8xl leading-[0.95] font-medium italic max-w-4xl">
          Even after a month<br />
          <span style={{ fontFamily: "var(--font-script)" }} className="not-italic text-primary">I still choose you.</span>
        </h1>
        <p className="mt-8 max-w-xl text-muted-foreground text-lg leading-relaxed">
          We haven't spoken in {days} days. Distance asked us to let go, but my heart never got the message.
          This is for you — quiet, honest, and still here.
        </p>
        <div className="mt-12 flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent animate-pulse" />
        </div>
      </section>

      <section className="py-24 px-6 text-center border-y border-border bg-secondary/40">
        <p style={{ fontFamily: "var(--font-script)" }} className="text-primary text-3xl mb-4">thirty sunsets</p>
        <div style={{ fontFamily: "var(--font-display)" }} className="text-8xl md:text-9xl font-light tabular-nums">
          {days.toString().padStart(2, "0")}
        </div>
        <p className="mt-4 text-muted-foreground uppercase tracking-[0.3em] text-xs">days of missing you</p>
      </section>

      <section className="py-28 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-xs text-muted-foreground mb-3">memories</p>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-5xl md:text-6xl italic">moments I replay</h2>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
          {couple.map((p, i) => (
            <figure key={i} className="break-inside-avoid group relative overflow-hidden rounded-sm shadow-lg hover:shadow-2xl transition-all duration-700">
              <img src={p.url} alt="us" loading="lazy" className="w-full h-auto group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </figure>
          ))}
        </div>
      </section>

      <section className="py-28 px-6 bg-secondary/30">
        <div className="max-w-2xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-xs text-muted-foreground mb-3 text-center">what i'd say if you picked up</p>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-5xl italic text-center mb-12">a letter</h2>
          <div style={{ fontFamily: "var(--font-display)" }} className="text-2xl md:text-3xl leading-relaxed space-y-6 text-foreground/90">
            <p>My love,</p>
            <p>It's been a month. A whole month of mornings without your good-morning, of jokes I swallow because you aren't here to laugh at them.</p>
            <p>You said distance would break us. Maybe you were right about the silence — but you were wrong about my heart. It is exactly where you left it.</p>
            <p>I'm not writing to convince you. I'm writing so that one day, if you ever wonder, you'll know: you were loved patiently, completely, and without conditions.</p>
            <p style={{ fontFamily: "var(--font-script)" }} className="text-primary text-4xl mt-10">— still yours.</p>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-xs text-muted-foreground mb-3">she</p>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-5xl md:text-6xl italic">the most beautiful person I know</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {her.map((p, i) => (
            <div key={i} className="aspect-[3/4] overflow-hidden rounded-sm shadow-xl group">
              <img src={p.url} alt="her" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-5xl italic text-center mb-16">things i never got to say</h2>
          <div className="space-y-10">
            {[
              "Distance is a number. What we had isn't measurable.",
              "I'd wait. Not because I have to — because nothing else feels right.",
              "Every song reminds me of you. I've stopped fighting it.",
              "You don't owe me an answer. I just owed you the truth.",
            ].map((t, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span style={{ fontFamily: "var(--font-display)" }} className="text-primary text-3xl italic">{(i + 1).toString().padStart(2, "0")}</span>
                <p style={{ fontFamily: "var(--font-display)" }} className="text-2xl italic leading-relaxed text-foreground/85">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-20 px-6 text-center">
        <p style={{ fontFamily: "var(--font-script)" }} className="text-5xl text-primary mb-4">i love you</p>
        <p className="text-muted-foreground text-sm uppercase tracking-[0.3em]">today · tomorrow · always</p>
      </footer>
    </div>
  );
}
