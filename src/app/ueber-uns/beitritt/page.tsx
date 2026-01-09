import Link from "next/link";

export default function Beitritt() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-6">Werde Teil des Amateurfunkclub Spittal</h1>

      <div className="space-y-4 text-foreground-muted mb-8">
        <p>
          Der <strong className="text-foreground">Amateurfunkclub Spittal (ADL 864)</strong> ist eine Gemeinschaft von Funkamateuren und Funkinteressierten, die eines verbindet: die Begeisterung für Funktechnik, Kommunikation und Kameradschaft.
        </p>
        <p>
          Egal ob du bereits lizenzierter Funkamateur bist, gerade erst einsteigst oder dich einfach für Amateurfunk, Notfunk, Technik und gemeinschaftliche Aktivitäten interessierst – bei uns bist du herzlich willkommen.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-primary mb-4">Was dich bei uns erwartet</h2>

      <ul className="space-y-2 text-foreground-muted mb-8 list-disc list-inside">
        <li>Erfahrungsaustausch zwischen Einsteigern und erfahrenen Funkamateuren</li>
        <li>Gemeinsame Aktivitäten wie Funkabende, Bastelrunden und Fielddays</li>
        <li>Unterstützung bei Technik, Betrieb und Fragen rund um den Amateurfunk</li>
        <li>Engagement im Bereich Not- und Katastrophenfunk</li>
        <li>Ein aktiver, offener Verein mit starkem regionalem Bezug</li>
      </ul>

      <h2 className="text-2xl font-semibold text-primary mb-4">Mitgliedschaft</h2>

      <div className="space-y-4 text-foreground-muted mb-8">
        <p>Es gibt zwei Arten der Mitgliedschaft:</p>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong className="text-foreground">Ordentliche Mitgliedschaft</strong> (mit aufrechter ÖVSV-Mitgliedschaft)</li>
          <li><strong className="text-foreground">Außerordentliche Mitgliedschaft</strong> (ohne ÖVSV-Mitgliedschaft)</li>
        </ul>
        <p>Details zu Rechten und Pflichten findest du in unseren Vereinsstatuten.</p>
      </div>

      <h2 className="text-2xl font-semibold text-primary mb-4">Wichtige Dokumente zum Download</h2>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Link
          href="/AFC_Vereinsstatuten.pdf"
          target="_blank"
          className="block p-6 bg-background-alt rounded-lg border border-background-alt hover:border-primary transition-colors"
        >
          <h3 className="text-xl font-semibold text-primary mb-2">Vereinsstatuten</h3>
          <p className="text-foreground-muted">Statuten herunterladen (PDF)</p>
        </Link>

        <Link
          href="/AFC_Beitrittserklaerung.pdf"
          target="_blank"
          className="block p-6 bg-background-alt rounded-lg border border-background-alt hover:border-primary transition-colors"
        >
          <h3 className="text-xl font-semibold text-primary mb-2">Beitrittserklärung</h3>
          <p className="text-foreground-muted">Beitrittserklärung herunterladen (PDF)</p>
        </Link>
      </div>

      <h2 className="text-2xl font-semibold text-primary mb-4">So wirst du Mitglied</h2>

      <ol className="space-y-2 text-foreground-muted mb-8 list-decimal list-inside">
        <li>Beitrittserklärung herunterladen</li>
        <li>Ausfüllen und unterschreiben</li>
        <li>Per E-Mail oder persönlich an den Vorstand übermitteln</li>
      </ol>

      <div className="space-y-4 text-foreground-muted">
        <p>Bei Fragen zur Mitgliedschaft oder zum Verein stehen wir gerne zur Verfügung.</p>
        <p className="font-semibold text-primary">
          Wir freuen uns, dich beim Amateurfunkclub Spittal begrüßen zu dürfen.
        </p>
      </div>
    </div>
  );
}
