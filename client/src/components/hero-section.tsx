import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Roblox Developer</span>
            <br />
            <span className="text-3xl md:text-5xl text-secondary">& UI/UX Designer</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Creating professional Roblox experiences through advanced LuaU scripting, 
            optimization, and modern game development practices with 100% LuaU expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="elegant-button text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 text-lg"
              data-testid="button-view-work"
            >
              ✨ View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-card text-foreground px-10 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 text-lg"
              data-testid="button-get-in-touch"
            >
              💬 Get In Touch
            </button>
          </div>
        </div>
      </div>
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-primary transition-colors"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="text-muted-foreground text-xl animate-float" />
      </button>
    </section>
  );
}
