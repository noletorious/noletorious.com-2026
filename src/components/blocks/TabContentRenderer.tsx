import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ProjectGrid } from '@/components/blocks/ProjectGrid';

export function TabContentRenderer() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'work' | 'about' | 'hello'>('work');

  // Sync state with URL hash
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash === 'work' || hash === 'about' || hash === 'hello') {
      setActiveTab(hash);
    } else if (!hash) {
      // Default to work if no hash is present
      navigate({ ...location, hash: 'work' }, { replace: true });
    }
  }, [location, navigate]);

  const handleTabClick = (tabId: 'work' | 'about' | 'hello') => {
    setActiveTab(tabId);
    navigate({ ...location, hash: tabId });
  };

  const tabs = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'hello', label: 'Hello' },
  ] as const;

  return (
    <div className="mx-auto w-full max-w-5xl px-6">
      <div className="mb-8 flex items-center gap-6 border-b border-border/40 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              "text-lg font-medium transition-colors hover:text-foreground",
              activeTab === tab.id 
                ? "text-foreground border-b-2 border-foreground pb-4 -mb-[18px]" 
                : "text-muted-foreground"
            )}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="min-h-[500px]" role="tabpanel">
        {activeTab === 'work' && <ProjectGrid />}
        {activeTab === 'about' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl py-8">
            <h2 className="text-2xl font-bold mb-6">About</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Hello, my name is Noel. I'm a Design Engineer based in Portland, Oregon. 
                Right now, I'm working at TriMet focusing on addressing rider pain points 
                in the UX through data-driven and rider-centered design.
              </p>
              <p>
                My background sits right at the intersection of design and development. 
                I speak designer, I'm developer-friendly, and I plan like an engineer. 
                Whether it's building a new frontend architecture, designing a comprehensive 
                design system, or animating a 3D scene in Spline, I enjoy the entire process of 
                bringing a product to life.
              </p>
              <p>
                When I'm not coding or designing, I'm usually tinkering with new AI tools, 
                exploring motion graphics, or looking for the next side quest to accept.
              </p>
            </div>
          </div>
        )}
        {activeTab === 'hello' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl py-8">
            <h2 className="text-2xl font-bold mb-6">Say Hello</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I'm currently open to new opportunities and collaborations. 
                If you have a project in mind, or just want to chat about design, 
                engineering, or public transit, feel free to reach out.
              </p>
              <div className="pt-4 flex flex-col gap-4">
                <a 
                  href="mailto:hello@noletorious.com" 
                  className="inline-flex items-center text-foreground font-medium hover:text-primary transition-colors text-xl"
                >
                  hello@noletorious.com
                </a>
                <p className="text-sm">
                  I try to respond to all emails within 24 hours.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
