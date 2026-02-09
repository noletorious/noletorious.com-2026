export function ProjectGrid() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-24 pb-24">
      <h2 className="mb-12 text-xl font-semibold tracking-tight">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-lg border border-border/40 bg-card/40 p-6 backdrop-blur-sm"
          >
            <div className="mb-4 h-40 rounded-md bg-muted" />
            <div className="h-4 w-2/3 rounded bg-muted" />
            <div className="mt-2 h-3 w-1/2 rounded bg-muted" />
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Projects powered by Sanity CMS — coming soon.
      </p>
    </section>
  );
}
