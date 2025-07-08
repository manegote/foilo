const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Electronics Engineering</h3>
            <p className="text-muted-foreground text-sm">
              Designing and building lithium-ion battery packs, PCBs, custom tools, 
              and electronics projects. Documenting the journey from concept to creation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/projects" className="text-muted-foreground hover:text-foreground">Projects</a></li>
              <li><a href="/blog" className="text-muted-foreground hover:text-foreground">Blog Posts</a></li>
              <li><a href="/gallery" className="text-muted-foreground hover:text-foreground">Gallery</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-foreground">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Lithium-ion Battery Design</li>
              <li>PCB Design & Manufacturing</li>
              <li>3D Modeling & Printing</li>
              <li>Reflow Oven Construction</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Electronics Engineering Portfolio. Built for showcasing hardware projects.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;