export default function Datenschutz() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-2">
        Datenschutzerklärung
      </h1>
      <p className="text-foreground-muted mb-8">Stand: Jänner 2026</p>

      <div className="bg-background-alt rounded-lg p-6 mb-8 border border-foreground-muted/20">
        <h2 className="text-xl font-semibold text-primary mb-4">
          Verantwortlicher
        </h2>
        <div className="space-y-2 text-foreground-muted">
          <p>
            <span className="text-foreground font-medium">Name:</span>{" "}
            Ing. Michael Linder, MSc. (OE8YML)
          </p>
          <p>
            <span className="text-foreground font-medium">Anschrift:</span>{" "}
            Nötsch 219, 9611 Nötsch im Gailtal, Österreich
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

      <div className="space-y-8 text-foreground-muted">
        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">Überblick</h2>
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
            Diese Datenschutzerklärung informiert Sie darüber, welche Daten wir
            erheben, wie wir diese verwenden und welche Rechte Sie gemäß der
            Datenschutz-Grundverordnung (DSGVO) haben.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">
            Daten, die wir erheben
          </h2>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">
            Automatisch erfasste Daten
          </h3>
          <p>
            Beim Besuch unserer Website können folgende Daten automatisch erfasst
            werden:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>IP-Adresse (kann durch Cloudflare anonymisiert werden)</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Browsertyp und -version</li>
            <li>Betriebssystem</li>
            <li>Referrer-URL (die Seite, von der Sie kamen)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">
            Cloudflare CDN und Sicherheit
          </h2>

          <div className="bg-secondary/20 border-l-4 border-accent p-4 my-4 rounded-r">
            <p className="text-foreground">
              <strong>Wichtig:</strong> Diese Website verwendet Cloudflare als
              Content Delivery Network (CDN) und Sicherheitsdienst.
            </p>
          </div>

          <p>
            Cloudflare, Inc. ist ein US-amerikanisches Unternehmen, das CDN-,
            DDoS-Schutz- und Sicherheitsdienste anbietet. Wenn Sie auf unsere
            Website zugreifen, läuft Ihre Verbindung über das Netzwerk von
            Cloudflare.
          </p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">
            Von Cloudflare verarbeitete Daten:
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>IP-Adressen (für Routing und Sicherheit)</li>
            <li>HTTP-Anfragedaten (Header, URLs)</li>
            <li>
              Sicherheitsrelevante Informationen (zur Erkennung und Abwehr von
              Angriffen)
            </li>
          </ul>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">
            Aufgaben von Cloudflare:
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full mt-2 border-collapse">
              <thead>
                <tr className="border-b border-foreground-muted/30">
                  <th className="text-left py-2 pr-4 text-foreground">Zweck</th>
                  <th className="text-left py-2 text-foreground">Beschreibung</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-foreground-muted/20">
                  <td className="py-2 pr-4">CDN</td>
                  <td className="py-2">
                    Zwischenspeichert und liefert statische Inhalte von Servern in
                    Ihrer Nähe
                  </td>
                </tr>
                <tr className="border-b border-foreground-muted/20">
                  <td className="py-2 pr-4">DDoS-Schutz</td>
                  <td className="py-2">
                    Schützt unseren Dienst vor Distributed-Denial-of-Service-Angriffen
                  </td>
                </tr>
                <tr className="border-b border-foreground-muted/20">
                  <td className="py-2 pr-4">SSL/TLS</td>
                  <td className="py-2">
                    Verschlüsselt Daten während der Übertragung
                  </td>
                </tr>
                <tr className="border-b border-foreground-muted/20">
                  <td className="py-2 pr-4">Sicherheit</td>
                  <td className="py-2">
                    Blockiert bösartigen Datenverkehr und Bot-Angriffe
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">
            Cloudflare verarbeitet Daten gemäß ihrer Datenschutzrichtlinie:{" "}
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              https://www.cloudflare.com/privacypolicy/
            </a>
          </p>
          <p className="mt-2">
            Cloudflare ist nach dem EU-U.S. Data Privacy Framework zertifiziert.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">
            Rechtsgrundlage der Verarbeitung
          </h2>
          <p>Wir verarbeiten Ihre Daten auf Grundlage von:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)</strong>{" "}
              – Für Sicherheit, Betrugsprävention und Verbesserung des Dienstes
            </li>
            <li>
              <strong>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</strong> – Wenn
              Sie ausdrücklich zugestimmt haben
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">
            Cookies und Tracking
          </h2>
          <p>
            Diese Website verwendet nur technisch notwendige Cookies, die für den
            Betrieb der Website erforderlich sind.
          </p>
          <p className="mt-2">
            Wir verwenden <strong>keine</strong>:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Tracking-Cookies</li>
            <li>Werbe-Cookies</li>
            <li>Drittanbieter-Analysen (Google Analytics, etc.)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">
            Ihre Rechte nach der DSGVO
          </h2>
          <p>
            Sie haben folgende Rechte in Bezug auf Ihre personenbezogenen Daten:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Auskunftsrecht (Art. 15)</strong> – Sie können eine Kopie
              Ihrer Daten anfordern
            </li>
            <li>
              <strong>Recht auf Berichtigung (Art. 16)</strong> – Korrektur
              unrichtiger Daten
            </li>
            <li>
              <strong>Recht auf Löschung (Art. 17)</strong> – Löschung Ihrer Daten
              (&quot;Recht auf Vergessenwerden&quot;)
            </li>
            <li>
              <strong>Recht auf Einschränkung (Art. 18)</strong> – Einschränkung
              der Verarbeitung Ihrer Daten
            </li>
            <li>
              <strong>Recht auf Datenübertragbarkeit (Art. 20)</strong> – Erhalt
              Ihrer Daten in einem übertragbaren Format
            </li>
            <li>
              <strong>Widerspruchsrecht (Art. 21)</strong> – Widerspruch gegen die
              Verarbeitung aufgrund berechtigter Interessen
            </li>
          </ul>
          <p className="mt-4">
            Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter{" "}
            <a
              href="mailto:oe8yml@oevsv.at"
              className="text-accent hover:underline"
            >
              oe8yml@oevsv.at
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">
            Datensicherheit
          </h2>
          <p>
            Wir setzen geeignete technische und organisatorische Maßnahmen zum
            Schutz Ihrer Daten ein:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Alle Daten werden über HTTPS/TLS-Verschlüsselung übertragen</li>
            <li>Regelmäßige Sicherheitsupdates</li>
            <li>Zugriffsbeschränkungen auf personenbezogene Daten</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">
            Internationale Datenübermittlung
          </h2>
          <p>
            Ihre Daten können durch die Nutzung von Cloudflare in Länder außerhalb
            des Europäischen Wirtschaftsraums (EWR) übermittelt und dort
            verarbeitet werden. Cloudflare nimmt am EU-U.S. Data Privacy Framework
            teil, das einen angemessenen Schutz für personenbezogene Daten bietet,
            die aus der EU in die USA übermittelt werden.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">Beschwerden</h2>
          <p>
            Wenn Sie der Meinung sind, dass Ihre Datenschutzrechte verletzt
            wurden, haben Sie das Recht, eine Beschwerde bei einer
            Aufsichtsbehörde einzureichen. In Österreich ist die zuständige
            Behörde:
          </p>
          <div className="bg-background-alt rounded-lg p-4 mt-4 border border-foreground-muted/20">
            <p className="text-foreground font-medium">
              Österreichische Datenschutzbehörde
            </p>
            <p>Barichgasse 40-42</p>
            <p>1030 Wien, Österreich</p>
            <p>
              <a
                href="mailto:dsb@dsb.gv.at"
                className="text-accent hover:underline"
              >
                dsb@dsb.gv.at
              </a>
            </p>
            <p>
              <a
                href="https://www.dsb.gv.at"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://www.dsb.gv.at
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-accent mb-3">
            Änderungen dieser Datenschutzerklärung
          </h2>
          <p>
            Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren.
            Die jeweils aktuelle Version ist auf dieser Seite mit dem Datum
            &quot;Stand&quot; oben verfügbar.
          </p>
        </section>
      </div>
    </div>
  );
}
