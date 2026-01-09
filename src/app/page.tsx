import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Slider */}
      <HeroSlider />

      {/* What is Amateur Radio */}
      <section className="py-16 px-4 bg-background">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Was ist Amateurfunk?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-background-alt rounded-lg">
              <h3 className="font-semibold text-primary mb-2">
                Kommunikation ohne Infrastruktur
              </h3>
              <p className="text-foreground-muted">
                Amateurfunk funktioniert unabhängig von Internet, Mobilfunk oder
                Stromnetzen – ideal für abgelegene Orte und Notfälle.
              </p>
            </div>
            <div className="p-6 bg-background-alt rounded-lg">
              <h3 className="font-semibold text-primary mb-2">
                Technisches Experimentieren
              </h3>
              <p className="text-foreground-muted">
                Funkamateure bauen eigene Geräte, Antennen und erforschen
                Funkausbreitung – ein Hobby mit unbegrenzten Möglichkeiten.
              </p>
            </div>
            <div className="p-6 bg-background-alt rounded-lg">
              <h3 className="font-semibold text-primary mb-2">
                Not- und Katastrophenfunk
              </h3>
              <p className="text-foreground-muted">
                Bei Naturkatastrophen oder Infrastrukturausfällen unterstützen
                Funkamateure Behörden mit unabhängiger Kommunikation.
              </p>
            </div>
            <div className="p-6 bg-background-alt rounded-lg">
              <h3 className="font-semibold text-primary mb-2">
                Weltweite Gemeinschaft
              </h3>
              <p className="text-foreground-muted">
                Über 3 Millionen lizenzierte Funkamateure weltweit – verbunden
                durch ein gemeinsames Hobby und internationale Freundschaften.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do at AFC Spittal */}
      <section className="py-16 px-4 bg-background-alt">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Was wir beim AFC Spittal machen
          </h2>
          <ul className="space-y-4 text-foreground-muted">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">●</span>
              <span>
                <strong className="text-foreground">Regelmäßige Clubabende</strong> –
                Jeden 2. Freitag im Monat treffen wir uns zum Austausch
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">●</span>
              <span>
                <strong className="text-foreground">Portabel-Aktivitäten</strong> –
                Funkbetrieb von Berggipfeln, Parks und besonderen Standorten
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">●</span>
              <span>
                <strong className="text-foreground">Digitale Betriebsarten</strong> –
                FT8, FT4 und andere moderne Modi für weltweite Verbindungen
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">●</span>
              <span>
                <strong className="text-foreground">Antennen & Selbstbau</strong> –
                Gemeinsame Projekte und technische Experimente
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">●</span>
              <span>
                <strong className="text-foreground">Wissensaustausch</strong> –
                Erfahrene Funkamateure unterstützen Einsteiger
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Join Us / CTA */}
      <section className="py-16 px-4 bg-navy text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Schau bei uns vorbei!</h2>
          <p className="text-xl text-cream/80 mb-4">
            Du bist interessiert? Besuche uns bei einem Clubabend – ganz unverbindlich.
          </p>
          <p className="text-cream/70 mb-8">
            Keine Lizenz nötig, um vorbeizuschauen. Wir zeigen dir gerne, was
            Amateurfunk alles zu bieten hat.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ueber-uns/clubabend"
              className="px-6 py-3 bg-accent hover:bg-red-light text-white font-semibold rounded-lg transition-colors"
            >
              Clubabend besuchen
            </Link>
            <Link
              href="/aktuelles"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/30"
            >
              Aktuelles
            </Link>
            <Link
              href="/kontakt"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/30"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>

      {/* Next Club Evening (Bonus) */}
      <section className="py-12 px-4 bg-background">
        <div className="mx-auto max-w-4xl">
          <div className="p-6 bg-background-alt rounded-lg border-l-4 border-accent">
            <h3 className="font-semibold text-primary mb-2">
              Nächster Clubabend
            </h3>
            <p className="text-foreground-muted">
              Jeden <strong className="text-foreground">2. Freitag im Monat</strong> ab{" "}
              <strong className="text-foreground">19:00 Uhr</strong>
            </p>
            <p className="text-foreground-muted">
              Gasthof Brückenwirt, An der Wirtschaftsbrücke 2, 9800 Spittal an der Drau
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
