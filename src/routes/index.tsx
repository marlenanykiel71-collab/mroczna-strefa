import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, MessageCircle, Eye, Flame, Crown, ShieldAlert, Plus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const EBOOK_URL = "https://www.naffy.io/mrok";
const DISCORD_URL = "https://discord.gg/tgXgGuxfYw";

const FAQ = [
  {
    q: "Dla kogo są te ebooki?",
    a: "Dla dorosłych, którzy chcą zrozumieć mechanizmy wpływu, władzy i psychologii dominacji. Nie dla osób szukających motywacyjnych cytatów ani szybkich trików.",
  },
  {
    q: "Czy to jest manipulacja i czy to etyczne?",
    a: "Wiedza jest neutralna — decydujesz, czy używasz jej do obrony, budowania relacji i przywództwa, czy do krzywdzenia innych. Uczymy rozumienia mechanizmów, nie zachęcamy do nadużyć.",
  },
  {
    q: "W jakim formacie dostanę ebooki?",
    a: "PDF gotowy do pobrania po zakupie na platformie naffy.io. Czytasz na telefonie, tablecie lub komputerze — bez ograniczeń.",
  },
  {
    q: "Jak wygląda płatność i dostawa?",
    a: "Zakup i płatność odbywają się na zewnętrznej platformie (naffy.io). Dostęp do plików otrzymujesz natychmiast po zaksięgowaniu.",
  },
  {
    q: "Czy Discord jest naprawdę darmowy?",
    a: "Tak. Serwer jest w pełni darmowy — miejsce do rozmów o psychologii, mroku i dominacji z ludźmi, którzy myślą podobnie.",
  },
  {
    q: "Czy potrzebuję wcześniejszej wiedzy z psychologii?",
    a: "Nie. Ebooki są pisane językiem konkretnym i praktycznym — bez akademickiego żargonu. Wystarczy otwarta głowa i gotowość do konfrontacji z sobą.",
  },
];

function Index() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-dark pointer-events-none" />
      <div
        className="fixed inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(0.78 0.14 85 / 0.18), transparent 45%), radial-gradient(circle at 80% 70%, oklch(0.55 0.13 80 / 0.22), transparent 50%)",
        }}
      />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-16 py-6">
        <div className="flex items-center gap-2 font-display font-bold tracking-[0.3em] text-xs gold-text">
          <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-blood" />
          STREFA DOMINACJI
        </div>
        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs md:text-sm font-display tracking-widest text-muted-foreground hover:text-primary transition-colors"
        >
          DISCORD
        </a>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pt-16 pb-32 text-center">
        <p className="font-display text-xs md:text-sm tracking-[0.5em] text-primary mb-8 uppercase">
          Psychologia Władzy
        </p>
        <h1 className="font-display font-black uppercase text-glow gold-text leading-[0.85] text-6xl sm:text-8xl md:text-[9rem] lg:text-[11rem] tracking-tight">
          Strefa<br />Dominacji
        </h1>
        <div className="mt-8 max-w-2xl">
          <p className="font-body text-xl md:text-2xl italic text-muted-foreground leading-relaxed">
            „Nie każdy umysł jest gotowy poznać ciemność, która nim rządzi."
          </p>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href={EBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-blood text-primary-foreground font-display tracking-[0.2em] text-sm uppercase shadow-blood hover:scale-105 transition-transform font-bold"
          >
            <BookOpen className="w-4 h-4" />
            Kup Ebooki
          </a>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 border border-border bg-card/60 backdrop-blur-sm font-display tracking-[0.2em] text-sm uppercase hover:border-primary hover:text-primary transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Darmowy Discord
          </a>
        </div>
      </section>

      {/* Manifest */}
      <section className="relative z-10 px-6 md:px-16 py-20 max-w-5xl mx-auto">
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
              <h3 className="font-display text-xl uppercase tracking-widest mb-3 gold-text">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gate — ostrzeżenie */}
      <section className="relative z-10 px-6 md:px-16 py-24 border-y border-border">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-b from-card/90 to-background/90 border border-primary/50 p-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary text-primary mb-6">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <p className="font-display text-xs tracking-[0.5em] text-primary mb-4 uppercase">Ostrzeżenie</p>
          <h2 className="font-display font-black uppercase text-4xl md:text-6xl gold-text mb-8 text-glow">
            Nie każdy jest gotowy
          </h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-4">
            Ebooki, które tu znajdziesz, <em className="text-primary not-italic">nie są motywacyjną papką</em>.
            To zimna, chirurgiczna wiedza o tym, jak działa ludzki umysł — o wpływie,
            manipulacji, dominacji i mrocznej triadzie.
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed mb-4">
            Jeśli szukasz komfortu i utwierdzenia się w tym, kim jesteś dziś —
            <em className="text-primary not-italic"> zamknij tę stronę</em>. Ta wiedza zmienia
            sposób, w jaki patrzysz na ludzi, relacje i samego siebie. Nie da się jej „odzobaczyć".
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed">
            Wchodzisz tu na własną odpowiedzialność. To, co zrobisz z tą wiedzą — buduj albo niszcz — zależy tylko od ciebie.
          </p>
          <p className="mt-8 font-display text-xs tracking-[0.4em] text-primary uppercase">
            — Wchodzisz na własną odpowiedzialność —
          </p>
        </div>
      </section>

      {/* Ebook CTA */}
      <section className="relative z-10 px-6 md:px-16 py-28">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display text-xs tracking-[0.5em] text-primary mb-6 uppercase">Biblioteka</p>
          <h2 className="font-display font-black uppercase text-5xl md:text-7xl gold-text text-glow mb-8">
            Ebooki
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Zbiór ebooków o psychologii dominacji, manipulacji, mrocznej triadzie i sztuce
            czytania ludzi. Wiedza, której nie znajdziesz w szkołach.
          </p>
          <a
            href={EBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-blood text-primary-foreground font-display tracking-[0.25em] text-sm uppercase shadow-blood hover:scale-105 transition-transform font-bold"
          >
            <BookOpen className="w-5 h-5" />
            Wejdź do Sklepu
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 px-6 md:px-16 py-24 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-xs tracking-[0.5em] text-primary mb-4 uppercase">Pytania</p>
            <h2 className="font-display font-black uppercase text-4xl md:text-6xl gold-text text-glow">
              FAQ
            </h2>
          </div>
          <div className="space-y-3">
            {FAQ.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={item.q}
                  className={`border transition-colors bg-card/60 backdrop-blur-sm ${
                    isOpen ? "border-primary/60" : "border-border"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-display uppercase tracking-widest text-sm text-primary"
                  >
                    <span>{item.q}</span>
                    <Plus
                      className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <p className="px-5 pb-5 text-muted-foreground leading-relaxed text-lg">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Discord */}
      <section className="relative z-10 px-6 md:px-16 py-28 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <MessageCircle className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="font-display font-black uppercase text-4xl md:text-6xl gold-text mb-6 text-glow">
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
            className="inline-flex items-center gap-3 px-12 py-5 border-2 border-primary text-primary font-display tracking-[0.25em] text-sm uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Wejdź na Discord
          </a>
        </div>
      </section>

      <footer className="relative z-10 px-6 py-10 text-center border-t border-border">
        <div className="flex items-center justify-center gap-2 font-display tracking-[0.3em] text-xs text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-primary" />
          STREFA DOMINACJI
        </div>
      </footer>
    </div>
  );
}
