import { WorkLayout } from "@/components/blocks/WorkLayout";

export default function Hop() {
  return (
    <WorkLayout
      title="Hop Fastpass"
      subtitle="Web/Motion Designer & Developer"
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
             title="Hop Spline Model"
             className="absolute inset-0"
           />
        </div>

        {/* Info Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">My roles</h3>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Web Design</li>
              <li>2D/3D Motion Graphics</li>
              <li>Front-end Development</li>
              <li>Video Production & Storytelling</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Technologies</h3>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>React JS</li>
              <li>Adobe (Ae, Ps, Ai)</li>
              <li>Google Earth Studio</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Overview</h3>
            <p className="text-muted-foreground">
              Hop Fastpass is a contactless fare card system simplifying payments 
              for public transportation in the Portland area. The true challenge lies in 
              shaping the brand's vision through strategic design input.
            </p>
          </div>
        </div>

        {/* Gallery / Milestones Showcase */}
        <div className="space-y-8">
           <h2 className="text-3xl font-bold border-b border-border/40 pb-4">Key Milestones</h2>
           
           <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-4">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-border/50 flex items-center justify-center">
                 <img src="/hop/hop-googleVC.gif" alt="Google Virtual Card Animation" className="object-contain h-full" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Virtual Card & Fares (2020)</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Created artwork for fare payments via the virtual card feature. 
                  Animated the Hopsters in and out as an additional form of proof of valid fare.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-muted border border-border/50">
                 <img src="/hop/new-customer-workflow.gif" alt="Hubspot Workflow" className="object-cover w-full h-full" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Marketing Automation (2023)</h4>
                <p className="text-sm text-muted-foreground mt-1">Targeted ~80,000 riders in the 'Riders Club'. Translated business goals into efficient email workflows with Hubspot.</p>
              </div>
            </div>
           </div>
        </div>

      </div>
    </WorkLayout>
  );
}
