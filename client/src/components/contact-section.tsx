import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, MessageSquare, Github } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: "Network error" }));
        throw new Error(errorData.message || "Failed to send message");
      }
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "✅ Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", projectType: "", message: "" });
    },
    onError: (error: any) => {
      console.error("Contact form error:", error);
      toast({
        title: "❌ Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim()) {
      toast({
        title: "❌ Error",
        description: "Please enter your name.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.email.trim()) {
      toast({
        title: "❌ Error", 
        description: "Please enter your email.",
        variant: "destructive",
      });
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "❌ Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.projectType) {
      toast({
        title: "❌ Error",
        description: "Please select a project type.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.message.trim()) {
      toast({
        title: "❌ Error",
        description: "Please enter a message.",
        variant: "destructive",
      });
      return;
    }
    
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-card/20 to-card/40">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text" data-testid="heading-contact">
          💎 Get In Touch
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6" data-testid="heading-work-together">
              Let's Work Together
            </h3>
            <p className="text-muted-foreground mb-8" data-testid="text-contact-description">
              Ready to bring your Roblox project to life? I'm available for freelance work 
              and collaboration opportunities. Let's discuss your vision and create something amazing.
              <br /><br />
              <span className="text-primary font-semibold">💬 Your message will be received and I'll get back to you soon!</span>
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-primary" size={20} />
                <span data-testid="text-email">Developer_Vortex@proton.me</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare className="text-primary" size={20} />
                <span data-testid="text-discord">lua_lord</span>
              </div>
              
            </div>
          </div>
          
          <Card className="glass-card hover:border-primary/50 transition-all duration-300 hover:shadow-2xl rounded-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your full name"
                    className="bg-input border-border focus:border-primary transition-colors"
                    data-testid="input-name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    className="bg-input border-border focus:border-primary transition-colors"
                    data-testid="input-email"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="projectType" className="block text-sm font-medium mb-2">
                    Project Type
                  </Label>
                  <Select 
                    value={formData.projectType} 
                    onValueChange={(value) => handleInputChange("projectType", value)}
                  >
                    <SelectTrigger className="bg-input border-border focus:border-primary transition-colors" data-testid="select-project-type">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="scripting">LuaU Scripting Project</SelectItem>
                      <SelectItem value="uiux">UI/UX Design</SelectItem>
                      <SelectItem value="fullgame">Full Game Development</SelectItem>
                      <SelectItem value="optimization">Code Optimization</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell me about your project... What kind of Roblox experience are you looking to create?"
                    className="bg-input border-border resize-none focus:border-primary transition-colors"
                    data-testid="textarea-message"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full elegant-button text-white rounded-xl py-6 text-lg font-semibold"
                  disabled={contactMutation.isPending}
                  data-testid="button-send-message"
                >
                  {contactMutation.isPending ? "✈️ Sending..." : "🚀 Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
