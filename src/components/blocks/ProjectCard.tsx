import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  name: string;
  imageSrc: string;
  url: string;
  logoSrc?: string;
  description?: string;
  isPlaceholder?: boolean;
}

export function ProjectCard({
  name,
  imageSrc,
  url,
  logoSrc,
  description,
  isPlaceholder,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const CardContent = (
    <div className="group relative flex aspect-square flex-col overflow-hidden rounded-2xl border border-border/40 bg-card/40 transition-all hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-primary/5">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
      <img
        src={imageSrc}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      <div className="relative z-20 mt-auto flex items-center gap-3 p-6 text-white">
        {logoSrc && (
          <img
            src={logoSrc}
            alt={`${name} logo`}
            className="h-8 w-8 rounded-full bg-white/10 p-1 backdrop-blur-md"
          />
        )}
        <h3 className="text-xl font-bold tracking-tight">{name}</h3>
      </div>
    </div>
  );

  if (!isPlaceholder) {
    return (
      <a href={url} className="block w-full">
        {CardContent}
      </a>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="block w-full text-left cursor-pointer">
          {CardContent}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl border-none bg-background/95 backdrop-blur-xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">{name}</DialogTitle>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
            >
              Visit Site <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <DialogDescription className="text-base mt-2">
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-6 aspect-video overflow-hidden rounded-xl border border-border/50 bg-muted">
           <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
              <span className="text-sm font-medium text-muted-foreground">Screenshot Placeholder</span>
           </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
