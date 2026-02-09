export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} noletorious
        </span>
        <span className="text-xs text-muted-foreground">
          Portland, OR
        </span>
      </div>
    </footer>
  );
}
