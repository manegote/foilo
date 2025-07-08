import { useParams, Link } from "react-router-dom";
import { Calendar, GitBranch, ArrowLeft, ExternalLink, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-16 text-center pt-32">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The requested project could not be found.</p>
          <Button asChild variant="outline">
            <Link to="/projects">← Back to Projects</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'border-success text-success';
      case 'in-progress': return 'border-accent text-accent';
      case 'planning': return 'border-warning text-warning';
      case 'paused': return 'border-muted text-muted-foreground';
      default: return 'border-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'in-progress': return Clock;
      case 'planning': return AlertCircle;
      case 'paused': return AlertCircle;
      default: return Clock;
    }
  };

  const StatusIcon = getStatusIcon(project.status);
  const subprojects = project.subprojects ? projects.filter(p => project.subprojects?.includes(p.id)) : [];
  const parentProject = project.parentProject ? projects.find(p => p.id === project.parentProject) : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 pt-32">
        <Breadcrumb items={[
          { label: "Projects", path: "/projects" },
          { label: project.title }
        ]} />
        
        <div className="py-8">
          {/* Back Button */}
          <Button asChild variant="outline" className="mb-6">
            <Link to="/projects">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Projects
            </Link>
          </Button>

          {/* Header */}
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-bold">{project.title}</h1>
              <div className={`flex items-center gap-2 px-3 py-1 border ${getStatusColor(project.status)}`}>
                <StatusIcon className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {project.status.replace('-', ' ').toUpperCase()}
                </span>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {/* Project Relationships */}
            {parentProject && (
              <div className="border border-accent/20 bg-accent/5 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <GitBranch className="w-4 h-4 text-accent" />
                  <span className="font-medium">Part of Larger Project</span>
                </div>
                <p className="text-muted-foreground">
                  This project is a subproject of{" "}
                  <Link to={`/projects/${parentProject.id}`} className="text-accent hover:underline">
                    {parentProject.title}
                  </Link>
                </p>
              </div>
            )}

            {subprojects.length > 0 && (
              <div className="border border-accent/20 bg-accent/5 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <GitBranch className="w-4 h-4 text-accent" />
                  <span className="font-medium">Required Subprojects</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {subprojects.map(sub => (
                    <Link 
                      key={sub.id}
                      to={`/projects/${sub.id}`}
                      className="block p-3 border border-border hover:bg-card transition-colors"
                    >
                      <div className="font-medium">{sub.title}</div>
                      <div className="text-sm text-muted-foreground">{sub.category}</div>
                      <div className={`text-xs mt-1 ${getStatusColor(sub.status).split(' ')[1]}`}>
                        {sub.status.replace('-', ' ').toUpperCase()}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Project Images */}
          {project.images && project.images.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Project Images</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-64 object-cover border border-border"
                  />
                ))}
              </div>
            </section>
          )}

          {/* Project Details */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Project Details</h2>
            <div className="prose prose-invert max-w-none">
              <div 
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: project.details.replace(/\n/g, '<br />').replace(/#{1,6}\s+(.+)/g, '<h3 class="text-xl font-semibold text-foreground mt-8 mb-4">$1</h3>')
                }} 
              />
            </div>
          </section>

          {/* Project Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Timeline */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Timeline</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Started: {project.startDate}</span>
                </div>
                {project.completedDate && (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Completed: {project.completedDate}</span>
                  </div>
                )}
                <div className="text-xs text-muted-foreground">
                  Category: {project.category}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1 border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {project.technologies.map(tech => (
                  <div key={tech} className="p-3 border border-border text-center">
                    <span className="text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Challenges & Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {project.challenges && project.challenges.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Challenges</h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <AlertCircle className="w-4 h-4 mt-0.5 text-warning flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.outcomes && project.outcomes.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Outcomes</h3>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 mt-0.5 text-success flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="border-t border-border pt-8">
            <div className="flex justify-between">
              <Button asChild variant="outline">
                <Link to="/projects">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  All Projects
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/gallery">
                  View Gallery
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;