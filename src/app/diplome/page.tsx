import Link from "next/link";

export default function Diplome() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-6">Diplome</h1>
      <p className="text-lg text-foreground-muted mb-8">
        Der AFC Spittal gibt zwei Diplome aus, die von Funkamateuren weltweit erarbeitet werden können.
      </p>

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
