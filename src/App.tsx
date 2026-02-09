import { ThemeProvider } from "next-themes";
import { Navigation } from "@/components/blocks/Navigation";
import { ProjectGrid } from "@/components/blocks/ProjectGrid";
import { Footer } from "@/components/blocks/Footer";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">
          <ProjectGrid />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
