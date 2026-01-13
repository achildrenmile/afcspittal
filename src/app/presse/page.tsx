import { getAllPressEntries } from "@/lib/presse";

function formatDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("de-AT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default async function Presse() {
  const entries = await getAllPressEntries();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-6">Presse</h1>

      {entries.length === 0 ? (
        <p className="text-foreground-muted">
          Derzeit gibt es keine Pressemeldungen.
        </p>
      ) : (
        <div className="space-y-6">
          {entries.map((entry) => (
            <a
              key={entry.slug}
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-background-alt rounded-lg border border-background-alt hover:border-primary transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                    {entry.title}
                    {entry.type === "pdf" && (
                      <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded">
                        PDF
                      </span>
                    )}
                  </h2>
                  <div className="flex items-center gap-3 mt-1 text-sm text-foreground-muted">
                    <span className="font-medium">{entry.source}</span>
                    <span>•</span>
                    <span>{formatDate(entry.date)}</span>
                  </div>
                  {entry.descriptionHtml && (
                    <div
                      className="mt-3 text-foreground-muted prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: entry.descriptionHtml }}
                    />
                  )}
                </div>
                <svg
                  className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
