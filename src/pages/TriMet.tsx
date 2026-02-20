import { WorkLayout } from "@/components/blocks/WorkLayout";

// Note: Spline load strategy: 
// 1. We will use an <iframe> embed rather than @splinetool/react-spline for extreme performance gains. 
// 2. We'll lazy load the iframe using loading="lazy" to not block the main thread.

export default function TriMet() {
  return (
    <WorkLayout
      title="TriMet"
      subtitle="How life moves - UX/I Designer & Developer"
    >
      <div className="flex flex-col gap-16">
        {/* Splash Section with 3D embed */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-border/50">
           <iframe 
             src='https://my.spline.design/lipstickpole-ee8f5b8f60da7eeecfd2b451fc659dcd/' 
             frameBorder="0" 
             width="100%" 
             height="100%" 
             loading="lazy"
             title="TriMet Spline Model"
             className="absolute inset-0"
           />
        </div>

        {/* Info Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">My roles</h3>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>UX/I Designer</li>
              <li>AI Tinker</li>
              <li>Front-end Developer</li>
              <li>Video Production & Storytelling</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Technologies</h3>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>React, Tailwind</li>
              <li>Adobe Creative Cloud (Ae, Ps, Ai)</li>
              <li>Spline & Motion</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Overview</h3>
            <p className="text-muted-foreground">
              TriMet is the public transit agency for the Portland, Oregon, metropolitan area. 
              My core focus revolves around addressing rider pain points in the UX through 
              data-driven and rider-centered design.
            </p>
          </div>
        </div>

        {/* Gallery / Milestones Showcase */}
        <div className="space-y-8">
           <h2 className="text-3xl font-bold border-b border-border/40 pb-4">Key Milestones</h2>
           
           <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-4">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-muted border border-border/50">
                 <img src="/trimet/v2/blog.trimet.org.png" alt="Blog refresh" className="object-cover w-full h-full" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Blog Refresh (2025)</h4>
                <p className="text-sm text-muted-foreground mt-1">Accessibility and design improvements for blog.trimet.org. Better reading experience, cleaner layout.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-muted border border-border/50">
                 <img src="/trimet/v2/dark-mode.png" alt="Trimet Dark Mode" className="object-cover w-full h-full object-top" />
              </div>
              <div>
                <h4 className="text-lg font-bold">TriMet.org Redesign (2022)</h4>
                <p className="text-sm text-muted-foreground mt-1">Served as front-end React developer and UI designer to launch the modern web experience.</p>
              </div>
            </div>
           </div>
        </div>

      </div>
    </WorkLayout>
  );
}
