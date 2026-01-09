import Link from "next/link";
import { getAllPosts } from "@/lib/aktuelles";

function formatDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("de-AT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function Aktuelles() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-6">Aktuelles</h1>

      {posts.length === 0 ? (
        <p className="text-foreground-muted">
          Derzeit gibt es keine aktuellen Beiträge.
        </p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/aktuelles/${post.slug}`}
              className="block p-6 bg-background-alt rounded-lg border border-background-alt hover:border-primary transition-colors"
            >
              <h2 className="text-xl font-semibold text-primary mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-foreground-muted mb-2">
                {formatDate(post.date)}
              </p>
              {post.excerpt && (
                <p className="text-foreground-muted">{post.excerpt}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
