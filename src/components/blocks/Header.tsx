import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FileText, Github, Linkedin, Mail } from "lucide-react";

export function Header() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12 md:py-20">
      <Card className="overflow-hidden border-none bg-transparent shadow-none">
        <CardContent className="p-0">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-primary/20 bg-muted">
                  <img
                    src="/noel-torres.jpg"
                    alt="Noel Torres"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    Noel Torres
                  </h1>
                  <p className="text-muted-foreground mt-2 text-lg">
                    [Design Engineer, Front-end, Motion]
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://x.com/noletorious"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.922H5.078z" />
                        </svg>
                        <span className="sr-only">X (formerly Twitter)</span>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>Follow on X</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://linkedin.com/in/noletorious/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>Connect on LinkedIn</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://github.com/noletorious"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>View GitHub Profile</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="mailto:hello@noletorious.com"
                        className="hover:text-foreground transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>hello@noletorious.com</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <div className="ml-0 flex items-center gap-2 border-l border-border/50 pl-4 md:ml-2">
                  <span className="text-sm font-medium">Resume:</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href="https://docs.google.com/document/d/13EKFulUlZ61oi_a2CbkMpPkvlOZILOOJcWD42_jx55M/edit?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-foreground transition-colors"
                        >
                          <FileText className="h-5 w-5" />
                          <span className="sr-only">Resume</span>
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>View Resume</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
