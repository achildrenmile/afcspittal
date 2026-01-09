import Link from "next/link";

export default function Diplome() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-6">Diplome</h1>

      <h2 className="text-2xl font-semibold text-primary mb-4">Ein Diplom, das Lust auf Funk macht</h2>

      <div className="space-y-4 text-foreground-muted mb-8">
        <p>
          Dieses Diplom soll vor allem eines: Spaß am aktiven Funkbetrieb fördern. Egal ob frisch lizenziert oder seit Jahren on air – es ist ein guter Grund, wieder öfter zum Mikrofon, zur Taste oder zur Tastatur zu greifen.
        </p>
        <p>
          Für Einsteiger und Nachwuchs ist es eine einfache Möglichkeit, Erfahrung zu sammeln und Routine aufzubauen. Für alte Hasen ein netter Anstoß, Neues auszuprobieren: andere Bänder, neue Betriebsarten, Portabel- oder Outdoor-Betrieb, QRP oder eigene Antennenprojekte.
        </p>
        <p>
          Ob vom Shack zu Hause, vom Balkon, aus dem Garten oder draußen unterwegs – mitmachen kann jeder. Im Mittelpunkt stehen nicht Leistung oder perfekte Technik, sondern Aktivität, Experimentierfreude und gute QSOs.
        </p>
        <p className="font-semibold text-primary">
          Mach mit. Sei aktiv. Es macht Spaß.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Link
          href="/Ausschreibung-Porcia-Diplom.pdf"
          target="_blank"
          className="block p-6 bg-background-alt rounded-lg border border-background-alt hover:border-primary transition-colors"
        >
          <h2 className="text-xl font-semibold text-primary mb-2">Porcia Diplom</h2>
          <p className="text-foreground-muted">Ausschreibung herunterladen (PDF)</p>
        </Link>

        <Link
          href="/Ausschreibung-Teurnia-Diplom-.pdf"
          target="_blank"
          className="block p-6 bg-background-alt rounded-lg border border-background-alt hover:border-primary transition-colors"
        >
          <h2 className="text-xl font-semibold text-primary mb-2">Teurnia Diplom</h2>
          <p className="text-foreground-muted">Ausschreibung herunterladen (PDF)</p>
        </Link>
      </div>
    </div>
  );
}
