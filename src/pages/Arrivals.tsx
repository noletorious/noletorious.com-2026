import { WorkLayout } from "@/components/blocks/WorkLayout";
import { Users, UserCheck, ShieldAlert, UserMinus } from "lucide-react";

export default function Arrivals() {
  return (
    <WorkLayout
      title="Arrivals Case Study"
      subtitle="App concept based on TriMet's Transit Tracker data"
    >
      <div className="flex flex-col gap-16">
        
        {/* Splash Image */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-muted border border-border/50">
           <img 
             src='/arrivals/trimet-arrivals.png' 
             alt="TriMet Arrivals App Concept" 
             className="absolute inset-0 w-full h-full object-cover"
           />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
           <div className="md:col-span-2 space-y-6">
             <h2 className="text-2xl font-bold">Overview</h2>
             <p className="text-muted-foreground text-lg leading-relaxed">
               The transit tracker tool on trimet.org is the most used feature on the website. 
               As a rider myself, I wanted to create a transit-tracker focused app that would 
               leverage TriMet's public transit tracker API.
             </p>
             <h3 className="text-xl font-bold mt-8">The Problem</h3>
             <p className="text-muted-foreground">
               Many people rely on transit tracker information and having it accessible via a 
               mobile app would allow TriMet to extend their services and utilize more of their 
               capabilities beyond the browser.
             </p>
           </div>
           
           <div className="bg-card/50 border border-border/40 rounded-xl p-6 backdrop-blur-md">
             <h3 className="text-xl font-bold mb-4">Key Metrics</h3>
             <ul className="space-y-3 text-sm text-muted-foreground">
               <li className="flex items-start gap-2">
                 <span className="text-primary font-bold">•</span>
                 8 million pageviews per month
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-primary font-bold">•</span>
                 95% come for transit tracker, trip planner, and alerts
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-primary font-bold">•</span>
                 70% access trimet.org on their phone
               </li>
             </ul>
           </div>
        </div>

        {/* Personas */}
        <div className="space-y-8">
           <h2 className="text-3xl font-bold border-b border-border/40 pb-4">The Rider Personas</h2>
           <p className="text-muted-foreground max-w-2xl">
              From our Audience Segmentation Survey Research Report, we generally 
              break each persona into four categories:
           </p>
           
           <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border/40 bg-card/40 text-center">
                 <UserCheck className="h-8 w-8 text-primary" />
                 <span className="font-semibold">Transit-Reliant</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border/40 bg-card/40 text-center">
                 <Users className="h-8 w-8 text-primary" />
                 <span className="font-semibold">Strategic Rider</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border/40 bg-card/40 text-center">
                 <ShieldAlert className="h-8 w-8 text-primary" />
                 <span className="font-semibold">Transit Hesitant</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border/40 bg-card/40 text-center">
                 <UserMinus className="h-8 w-8 text-primary" />
                 <span className="font-semibold">Non-Rider</span>
              </div>
           </div>
        </div>

        {/* Final Mockup */}
        <div className="space-y-8">
           <h2 className="text-3xl font-bold border-b border-border/40 pb-4">Final Design</h2>
           <div className="relative w-full rounded-2xl overflow-hidden border border-border/50 bg-muted">
              <img 
                 src='/arrivals/arrivals-xd-screenshot.jpg' 
                 alt="Final UI Mocks" 
                 className="w-full h-auto"
              />
           </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-8 text-center">
           <h3 className="text-2xl font-bold mb-4">Takeaways</h3>
           <p className="text-muted-foreground max-w-3xl mx-auto">
             Boosting ridership starts with boosting rider confidence. Our experimental app 
             simplifies transit complexities, striking the right balance between efficiency, 
             user expectations, data utilization, and available resources.
           </p>
        </div>

      </div>
    </WorkLayout>
  );
}
