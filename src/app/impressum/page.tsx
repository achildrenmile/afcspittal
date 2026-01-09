export default function Impressum() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Impressum</h1>

      <div className="bg-background-alt rounded-lg p-6 mb-8 border border-foreground-muted/20">
        <h2 className="text-xl font-semibold text-primary mb-4">
          Betreiber der Website
        </h2>
        <div className="space-y-2 text-foreground-muted">
          <p>
            <span className="text-foreground font-medium">Name:</span>{" "}
            Ing. Michael Linder, MSc.
          </p>
          <p>
            <span className="text-foreground font-medium">Rufzeichen:</span>{" "}
            OE8YML
          </p>
          <p>
            <span className="text-foreground font-medium">Anschrift:</span>
            <br />
            Nötsch 219
            <br />
            9611 Nötsch im Gailtal
            <br />
            Österreich
          </p>
          <p>
            <span className="text-foreground font-medium">E-Mail:</span>{" "}
            <a
              href="mailto:oe8yml@oevsv.at"
              className="text-accent hover:underline"
            >
              oe8yml@oevsv.at
            </a>
          </p>
        </div>
      </div>

      <div className="bg-background-alt rounded-lg p-6 mb-8 border border-foreground-muted/20">
        <h2 className="text-xl font-semibold text-primary mb-4">
          Amateurfunkclub Spittal
        </h2>
        <div className="space-y-2 text-foreground-muted">
          <p>
            <span className="text-foreground font-medium">Vereinsname:</span>{" "}
            Amateurfunkclub Spittal an der Drau
          </p>
          <p>
            <span className="text-foreground font-medium">ADL:</span> 864
          </p>
          <p>
            <span className="text-foreground font-medium">ZVR-Zahl:</span>{" "}
            738176075
          </p>
          <p>
            <span className="text-foreground font-medium">Kontoverbindung:</span>{" "}
            <span className="font-mono">AT68 1700 0001 6005 6541</span>
          </p>
        </div>
      </div>

      <div className="space-y-6 text-foreground-muted">
        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">
            Rechtliche Hinweise
          </h2>
          <p>Angaben gemäß:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>E-Commerce-Gesetz (ECG) § 5</li>
            <li>Mediengesetz (MedienG) § 25</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">
            Online-Streitbeilegung
          </h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p className="mt-2">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">Urheberrecht</h2>
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
            Seiten unterliegen dem österreichischen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
            außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">
            Haftung für Links
          </h2>
          <p>
            Unsere Website kann Links zu externen Websites Dritter enthalten, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
            Seiten verantwortlich.
          </p>
          <p className="mt-2">
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
            Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt
            der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
            der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
            Rechtsverletzung nicht zumutbar.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">
            Inhalte Dritter
          </h2>
          <p>
            Wenn Sie der Meinung sind, dass Inhalte auf dieser Website Ihre
            Urheberrechte oder andere Rechte verletzen, kontaktieren Sie uns bitte
            unter der oben angegebenen E-Mail-Adresse. Wir werden den Sachverhalt
            prüfen und rechtsverletzende Inhalte umgehend entfernen.
          </p>
        </section>
      </div>
    </div>
  );
}
