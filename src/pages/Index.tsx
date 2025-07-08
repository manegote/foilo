import { Link } from "react-router-dom";
import { ArrowRight, Battery, Cpu, Wrench, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blogPosts";

const Index = () => {
  const featuredProjects = projects.filter(p => ["custom-battery-business", "lithium-pack-tester", "spot-welder-controller"].includes(p.id));
  const recentPosts = blogPosts.slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 pt-32">
        {/* Hero Section */}
        <section className="py-16 border-b border-border">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-6">
              Electronics Engineering Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Designing and building lithium-ion battery packs, PCBs, custom tools, reflow ovens, 
              3D models, and schematics. This site documents projects, shares knowledge, and 
              showcases what I've built in the world of electronics engineering.
            </p>
            <div className="flex gap-4">
              <Button asChild variant="govuk">
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/blog">
                  Read Blog Posts
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="py-16 border-b border-border">
          <h2 className="text-3xl font-bold mb-8">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Battery className="w-12 h-12 text-accent" />
              <h3 className="text-xl font-semibold">Battery Pack Design</h3>
              <p className="text-muted-foreground">
                Custom lithium-ion battery packs for specialized applications. From single prototypes 
                to small batch manufacturing with integrated BMS and safety systems.
              </p>
            </div>
            <div className="space-y-4">
              <Cpu className="w-12 h-12 text-accent" />
              <h3 className="text-xl font-semibold">PCB Development</h3>
              <p className="text-muted-foreground">
                Circuit board design and manufacturing for control systems, power management, 
                and testing equipment. Surface-mount and through-hole designs.
              </p>
            </div>
            <div className="space-y-4">
              <Wrench className="w-12 h-12 text-accent" />
              <h3 className="text-xl font-semibold">Custom Tools</h3>
              <p className="text-muted-foreground">
                Building specialized tools and equipment for electronics work: load testers, 
                spot welders, reflow ovens, and measurement instruments.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 border-b border-border">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Button asChild variant="outline">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div key={project.id} className="border border-border p-6 space-y-4">
                <img 
                  src={project.coverImage} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 border ${
                      project.status === 'completed' ? 'border-success text-success' :
                      project.status === 'in-progress' ? 'border-accent text-accent' :
                      'border-muted text-muted-foreground'
                    }`}>
                      {project.status.replace('-', ' ').toUpperCase()}
                    </span>
                    <Link 
                      to={`/projects/${project.id}`}
                      className="text-primary hover:underline text-sm"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Recent Posts</h2>
            <Button asChild variant="outline">
              <Link to="/blog">
                <BookOpen className="mr-2 w-4 h-4" />
                View All Posts
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="border border-border p-6 space-y-4">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.summary}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span>{post.datePosted}</span>
                      <span>{post.readingTime} min read</span>
                    </div>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-primary hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
