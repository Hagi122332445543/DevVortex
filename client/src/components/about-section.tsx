import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-r from-card/30 to-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-8 gradient-text" data-testid="heading-about">About Me</h2>
            <p className="text-muted-foreground text-lg mb-8" data-testid="text-about-description">
              I'm a passionate Roblox developer with expertise in LuaU scripting and UI/UX design. 
              I specialize in creating immersive gaming experiences, optimized code architectures, 
              and intuitive user interfaces that enhance player engagement.
            </p>
            
            {/* Skills */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium" data-testid="text-skill-luau">LuaU Scripting</span>
                  <span className="text-primary" data-testid="text-skill-luau-percentage">100%</span>
                </div>
                <div className="bg-border rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full skill-bar transition-all duration-2000" 
                    style={{ width: isVisible ? '100%' : '0%' }}
                    data-testid="progress-luau"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium" data-testid="text-skill-uiux">UI/UX Design</span>
                  <span className="text-secondary" data-testid="text-skill-uiux-percentage">75%</span>
                </div>
                <div className="bg-border rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-secondary to-primary h-2 rounded-full skill-bar transition-all duration-2000" 
                    style={{ width: isVisible ? '75%' : '0%' }}
                    data-testid="progress-uiux"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Game development workspace" 
                className="rounded-xl shadow-lg w-full h-auto transition-transform duration-500 group-hover:scale-105 animate-glow"
                data-testid="img-workspace"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
