import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Calendar, ExternalLink, GitBranch } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { projects } from "@/data/projects";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const statuses = [...new Set(projects.map(project => project.status))];
  const categories = [...new Set(projects.map(project => project.category))];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = searchQuery === "" || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesStatus = selectedStatus === "" || project.status === selectedStatus;
      const matchesCategory = selectedCategory === "" || project.category === selectedCategory;
      
      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [searchQuery, selectedStatus, selectedCategory]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'border-success text-success';
      case 'in-progress': return 'border-accent text-accent';
      case 'planning': return 'border-warning text-warning';
      case 'paused': return 'border-muted text-muted-foreground';
      default: return 'border-muted text-muted-foreground';
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedStatus("");
    setSelectedCategory("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={setSearchQuery} />
      
      <main className="max-w-6xl mx-auto px-4 pt-32">
        <Breadcrumb items={[{ label: "Projects" }]} />
        
        <div className="py-8">
          <h1 className="text-4xl font-bold mb-6">Engineering Projects</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A portfolio of electronics engineering projects including battery systems, PCB designs, 
            custom tools, and supporting infrastructure. Some projects are part of larger goals.
          </p>

          {/* Search and Filters */}
          <div className="border border-border p-6 mb-8 space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Filter className="w-5 h-5" />
              <span>Filter Projects</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full h-10 px-3 border border-input bg-background rounded-md"
                >
                  <option value="">All Statuses</option>
                  {statuses.map(status => (
                    <option key={status} value={status}>
                      {status.replace('-', ' ').toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full h-10 px-3 border border-input bg-background rounded-md"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {(searchQuery || selectedStatus || selectedCategory) && (
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">
                  Showing {filteredProjects.length} of {projects.length} projects
                </span>
                <Button variant="outline" size="sm" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="border border-border hover:bg-card transition-colors">
                <img 
                  src={project.coverImage} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      <Link 
                        to={`/projects/${project.id}`} 
                        className="hover:text-primary transition-colors"
                      >
                        {project.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className={`text-xs px-2 py-1 border ${getStatusColor(project.status)}`}>
                      {project.status.replace('-', ' ').toUpperCase()}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Relationships */}
                  {project.parentProject && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <GitBranch className="w-3 h-3" />
                      <span>Part of larger project</span>
                    </div>
                  )}

                  {project.subprojects && project.subprojects.length > 0 && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <GitBranch className="w-3 h-3" />
                      <span>{project.subprojects.length} subprojects</span>
                    </div>
                  )}

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>Started {project.startDate}</span>
                    </div>
                    {project.completedDate && (
                      <span>Completed {project.completedDate}</span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 border border-border"
                      >
                        #{tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs text-muted-foreground">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Link 
                      to={`/projects/${project.id}`}
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      View Project Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found matching your search criteria.
              </p>
              <Button variant="outline" className="mt-4" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* Summary Stats */}
        <div className="border-t border-border py-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">{projects.length}</div>
              <div className="text-muted-foreground">Total Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">
                {projects.filter(p => p.status === 'completed').length}
              </div>
              <div className="text-muted-foreground">Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">
                {projects.filter(p => p.status === 'in-progress').length}
              </div>
              <div className="text-muted-foreground">In Progress</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{filteredProjects.length}</div>
              <div className="text-muted-foreground">Currently Showing</div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;