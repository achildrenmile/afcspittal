import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-auto">
      {/* Donation Section */}
      <div className="bg-accent">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Unterstützen Sie uns</h3>
              <p className="text-sm text-white/90 max-w-xl">
                Mit Ihrer Spende unterstützen Sie den Amateurfunk Club Spittal
                dabei, Technik, Wissen und vor allem die Freude am Funkbetrieb
                für heutige und zukünftige Funkamateure zu bewahren.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <p className="text-sm font-medium mb-1">Amateurfunkclub Spittal</p>
              <p className="font-mono text-lg font-bold tracking-wide">
                AT68 1700 0001 6005 6541
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} AFC Spittal - ADL 864
          </p>
          <div className="flex gap-6">
            <Link
              href="/impressum"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Datenschutzerklärung
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
