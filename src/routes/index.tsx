import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, MessageCircle, Skull, Eye, Flame, Crown } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const EBOOK_URL = "https://www.naffy.io/mrok";
const DISCORD_URL = "https://discord.gg/tgXgGuxfYw";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 bg-gradient-dark pointer-events-none" />
      <div
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(0.4 0.2 22 / 0.15), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.3 0.15 25 / 0.2), transparent 50%)",
        }}
      />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-16 py-6">
        <div className="flex items-center gap-2 font-display font-bold tracking-[0.3em] text-sm">
          <Skull className="w-5 h-5 text-primary" />
          MROK
        </div>
        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs md:text-sm font-display tracking-widest text-muted-foreground hover:text-foreground transition-colors"
        >
          DISCORD
        </a>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pt-16 pb-32 text-center">
        <p className="font-display text-xs md:text-sm tracking-[0.5em] text-primary mb-8 uppercase">
          Strefa Dominacji
        </p>
        <h1 className="font-display font-black uppercase text-glow leading-[0.85] text-6xl sm:text-8xl md:text-[10rem] lg:text-[13rem] tracking-tight">
          MROK
        </h1>
        <div className="mt-8 max-w-2xl">
          <p className="font-body text-xl md:text-2xl italic text-muted-foreground leading-relaxed">
            "Nie każdy umysł jest gotowy poznać ciemność, która nim rządzi."
          </p>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href={EBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-blood text-primary-foreground font-display tracking-[0.2em] text-sm uppercase shadow-blood hover:scale-105 transition-transform"
          >
            <BookOpen className="w-4 h-4" />
            Kup Ebooki
          </a>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 border border-border bg-card/40 backdrop-blur-sm font-display tracking-[0.2em] text-sm uppercase hover:border-primary hover:bg-card transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Darmowy Discord
          </a>
        </div>
      </section>

      {/* Manifest */}
      <section className="relative z-10 px-6 md:px-16 py-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Eye, title: "Świadomość", text: "Rozumienie mechanizmów, które kierują ludzkim zachowaniem — świadomie i podświadomie." },
            { icon: Crown, title: "Kontrola", text: "Sztuka wpływu, dominacji i zachowania zimnej głowy tam, gdzie inni się załamują." },
            { icon: Flame, title: "Transformacja", text: "Przemiana słabości w siłę. Przejście z pozycji ofiary na pozycję gracza." },
          ].map((f) => (
            <div
              key={f.title}
              className="relative p-8 bg-card/60 backdrop-blur-sm border border-border hover:border-primary/60 transition-colors"
            >
              <f.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-xl uppercase tracking-widest mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ebook CTA */}
      <section className="relative z-10 px-6 md:px-16 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display text-xs tracking-[0.5em] text-primary mb-6 uppercase">Biblioteka</p>
          <h2 className="font-display font-black uppercase text-5xl md:text-7xl text-glow mb-8">
            Ebooki Mroku
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Zbiór ebooków o psychologii dominacji, manipulacji, mrocznej triadzie i sztuce
            czytania ludzi. Wiedza, której nie znajdziesz w szkołach.
          </p>
          <a
            href={EBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-blood text-primary-foreground font-display tracking-[0.25em] text-sm uppercase shadow-blood hover:scale-105 transition-transform"
          >
            <BookOpen className="w-5 h-5" />
            Wejdź do Sklepu
          </a>
        </div>
      </section>

      {/* Discord */}
      <section className="relative z-10 px-6 md:px-16 py-32 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <MessageCircle className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="font-display font-black uppercase text-4xl md:text-6xl mb-6">
            Dołącz do Bractwa
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Darmowy serwer Discord. Rozmowy o psychologii, mroku, dominacji.
            Miejsce dla tych, którzy chcą więcej niż powierzchnia.
          </p>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 border-2 border-primary text-foreground font-display tracking-[0.25em] text-sm uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Wejdź na Discord
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-10 text-center border-t border-border">
        <div className="flex items-center justify-center gap-2 font-display tracking-[0.3em] text-xs text-muted-foreground">
          <Skull className="w-4 h-4" />
          MROK — STREFA DOMINACJI
        </div>
      </footer>
    </div>
  );
}
