
export default function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-xl font-bold gradient-text mb-2" data-testid="text-footer-brand">Developer Vortex</div>
            <p className="text-muted-foreground" data-testid="text-footer-description">
              Roblox Developer & UI/UX Designer
            </p>
          </div>
          
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p data-testid="text-copyright">© 2025 Developer Vortex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
