
import { Navigation } from "@/components/blocks/Navigation";
import { Header } from "@/components/blocks/Header";
import { TabContentRenderer } from "@/components/blocks/TabContentRenderer";
import { Footer } from "@/components/blocks/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main className="flex-1">
        <Header />
        <TabContentRenderer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
