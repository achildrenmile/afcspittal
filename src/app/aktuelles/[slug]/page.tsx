import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/aktuelles";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function formatDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("de-AT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function AktuellesPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link
        href="/aktuelles"
        className="inline-flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors mb-6"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Zurück zur Übersicht
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">{post.title}</h1>
          <p className="text-foreground-muted">{formatDate(post.date)}</p>
        </header>

        <div
          className="prose prose-lg max-w-none text-foreground-muted prose-headings:text-primary prose-a:text-primary prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </div>
  );
}
