import Link from "next/link";

export default function Kontakt() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-6">Kontakt</h1>

      <div className="space-y-4 text-foreground-muted mb-8">
        <p>
          Du hast Fragen zum Amateurfunkclub Spittal, zur Mitgliedschaft oder zu unseren Aktivitäten? Oder möchtest du einfach unverbindlich mit uns in Kontakt treten?
        </p>
        <p>
          Wir freuen uns über deine Nachricht und melden uns gerne zurück.
        </p>
      </div>

      <div className="p-6 bg-background-alt rounded-lg border border-background-alt mb-8">
        <h2 className="text-xl font-semibold text-primary mb-2">E-Mail</h2>
        <Link
          href="mailto:kontakt@afc-spittal.at"
          className="text-lg text-foreground hover:text-primary transition-colors"
        >
          kontakt@afc-spittal.at
        </Link>
      </div>

      <p className="text-foreground-muted">
        Schreib uns jederzeit – egal ob du bereits Funkamateur bist, dich für den Einstieg interessierst oder mehr über unseren Verein erfahren möchtest.
      </p>
    </div>
  );
}
