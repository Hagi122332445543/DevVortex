import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Combat Arena",
      description: "Advanced PvP combat system with combo mechanics and skill-based gameplay.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      tags: ["LuaU", "Combat"],
      link: "#"
    },
    {
      id: 2,
      title: "Game UI System",
      description: "Modern, responsive UI framework for Roblox games with smooth animations.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      tags: ["UI/UX", "Design"],
      link: "#"
    },
    {
      id: 3,
      title: "DataStore Manager",
      description: "Robust player data management system with backup and recovery features.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      tags: ["DataStore", "Backend"],
      link: "#"
    },
    {
      id: 4,
      title: "Animation Framework",
      description: "Flexible animation system for character movements and interactions.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      tags: ["Animation", "Framework"],
      link: "#"
    },
    {
      id: 5,
      title: "GUI Component Library",
      description: "Reusable UI components for rapid Roblox game development.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      tags: ["Components", "Library"],
      link: "#"
    },
    {
      id: 6,
      title: "Analytics Dashboard",
      description: "Real-time game analytics and player behavior tracking system.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      tags: ["Analytics", "Dashboard"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-l from-card/30 to-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text" data-testid="heading-projects">
          ⭐ Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="glass-card hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/30 group rounded-2xl overflow-hidden"
              data-testid={`card-project-${project.id}`}
            >
              <div className="overflow-hidden rounded-t-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  data-testid={`img-project-${project.id}`}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2" data-testid={`title-project-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`description-project-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="bg-primary/20 text-primary hover:bg-primary/30"
                      data-testid={`tag-project-${project.id}-${index}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="text-primary hover:text-primary/80 font-medium"
                  data-testid={`link-project-${project.id}`}
                >
                  View Project →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
