import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function WorkLayout({
  children,
  title,
  subtitle,
  backTo = "/",
  backLabel = "Back to Projects",
}: {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  backTo?: string;
  backLabel?: string;
}) {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12 md:py-20 animate-in fade-in duration-500">
      <div className="mb-12 flex flex-col items-start gap-6 border-b border-border/40 pb-8">
        <Link
          to={backTo}
          className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {backLabel}
        </Link>
        <div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-xl text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {children}
      </div>
    </div>
  );
}
