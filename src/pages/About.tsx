import { Mail, MapPin, Calendar, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 pt-32">
        <Breadcrumb items={[{ label: "About" }]} />
        
        <div className="py-8 space-y-16">
          {/* Introduction */}
          <section>
            <h1 className="text-4xl font-bold mb-6">About This Portfolio</h1>
            <div className="space-y-6 text-lg">
              <p className="text-muted-foreground leading-relaxed">
                This portfolio documents my journey in electronics engineering, with a focus on 
                designing and building custom solutions for real-world problems. From lithium-ion 
                battery packs to specialized tools and test equipment, each project represents 
                a step toward building better, more reliable systems.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My work centers around custom lithium battery pack design and manufacturing, 
                but extends to all the supporting infrastructure needed to do this work properly: 
                load testers, spot welders, reflow ovens, and the countless small tools that 
                make precision work possible.
              </p>
            </div>
          </section>

          {/* What I Do */}
          <section className="border-t border-border pt-16">
            <h2 className="text-3xl font-bold mb-8">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Battery Pack Design</h3>
                <p className="text-muted-foreground">
                  Custom lithium-ion battery packs for applications where commercial solutions 
                  don't fit. This includes unusual form factors, specific voltage/capacity 
                  combinations, and integrated BMS systems for specialized use cases.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">PCB Development</h3>
                <p className="text-muted-foreground">
                  Circuit board design for control systems, power management, and testing 
                  equipment. From simple breakout boards to complex multi-layer designs 
                  with high-current and high-frequency considerations.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Custom Tools</h3>
                <p className="text-muted-foreground">
                  Building specialized equipment for electronics work: programmable load 
                  testers, precision spot welders, reflow ovens, and measurement instruments. 
                  Tools designed for reliability and precision rather than cost optimization.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">3D Design & Manufacturing</h3>
                <p className="text-muted-foreground">
                  Mechanical design for enclosures, fixtures, and mechanical components. 
                  3D printing for prototypes and small-batch production, with a focus on 
                  functional parts rather than aesthetic pieces.
                </p>
              </div>
            </div>
          </section>

          {/* Approach */}
          <section className="border-t border-border pt-16">
            <h2 className="text-3xl font-bold mb-8">My Approach</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold mb-2">Safety First</h3>
                <p className="text-muted-foreground">
                  Working with lithium batteries and high-voltage systems requires comprehensive 
                  safety planning. Every project includes multiple layers of protection and 
                  extensive testing before any kind of deployment.
                </p>
              </div>
              
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold mb-2">Build What You Need</h3>
                <p className="text-muted-foreground">
                  Rather than buying expensive commercial solutions, I often build custom tools 
                  and equipment. This provides better understanding of the systems and often 
                  results in more capable, lower-cost solutions.
                </p>
              </div>
              
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold mb-2">Document Everything</h3>
                <p className="text-muted-foreground">
                  Every project includes thorough documentation of design decisions, testing 
                  procedures, and lessons learned. This portfolio serves as both a reference 
                  for future work and a resource for others tackling similar challenges.
                </p>
              </div>
              
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold mb-2">Quality Over Speed</h3>
                <p className="text-muted-foreground">
                  I prioritize getting things right over getting them done quickly. This means 
                  extensive testing, proper validation, and building systems that will work 
                  reliably for years rather than months.
                </p>
              </div>
            </div>
          </section>

          {/* Current Goals */}
          <section className="border-t border-border pt-16">
            <h2 className="text-3xl font-bold mb-8">Current Goals</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                The main goal is building a complete business ecosystem around custom lithium 
                battery pack design and manufacturing. This requires not just the technical 
                knowledge to design good packs, but all the supporting infrastructure:
              </p>
              
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                  <span>Testing and validation equipment for quality control</span>
                </li>
                <li className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                  <span>Assembly tools and fixtures for consistent manufacturing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                  <span>Modular enclosure systems for various form factors</span>
                </li>
                <li className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                  <span>Comprehensive safety and testing protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                  <span>Supply chain relationships for reliable component sourcing</span>
                </li>
              </ul>
              
              <p className="text-muted-foreground leading-relaxed">
                Each project on this site represents a piece of this larger puzzle. Some are 
                directly related (like the load tester and spot welder), while others provide 
                supporting capabilities (like the reflow oven for PCB assembly).
              </p>
            </div>
          </section>

          {/* Technologies */}
          <section className="border-t border-border pt-16">
            <h2 className="text-3xl font-bold mb-8">Technologies & Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Design & CAD</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Fusion 360 for 3D modeling</li>
                  <li>KiCad for PCB design</li>
                  <li>FreeCAD for mechanical design</li>
                  <li>Various simulation tools</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Manufacturing</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>3D printing (FDM & resin)</li>
                  <li>PCB assembly and reflow</li>
                  <li>Spot welding and assembly</li>
                  <li>Basic machining operations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Testing & Validation</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Battery testing and characterization</li>
                  <li>Thermal analysis and management</li>
                  <li>Electrical safety testing</li>
                  <li>Load testing and validation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="border-t border-border pt-16">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Interested in custom battery solutions, collaborating on projects, or discussing 
                technical challenges? I'm always open to interesting conversations about 
                electronics, battery systems, and building better tools.
              </p>
              
              <div className="flex gap-4">
                <Button asChild variant="govuk">
                  <Link to="/contact">
                    <Mail className="mr-2 w-4 h-4" />
                    Contact Me
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/projects">
                    View Projects
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;