import { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Filter, Calendar, Clock, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("");

  const categories = [...new Set(blogPosts.map(post => post.category))];
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchQuery === "" || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === "" || post.category === selectedCategory;
      const matchesTag = selectedTag === "" || post.tags.includes(selectedTag);
      
      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchQuery, selectedCategory, selectedTag]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedTag("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={setSearchQuery} />
      
      <main className="max-w-6xl mx-auto px-4 pt-32">
        <Breadcrumb items={[{ label: "Blog" }]} />
        
        <div className="py-8">
          <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Technical articles, project documentation, and lessons learned from electronics engineering projects.
          </p>

          {/* Search and Filters */}
          <div className="border border-border p-6 mb-8 space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Filter className="w-5 h-5" />
              <span>Filter Posts</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
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
              
              <div>
                <label className="block text-sm font-medium mb-2">Tag</label>
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full h-10 px-3 border border-input bg-background rounded-md"
                >
                  <option value="">All Tags</option>
                  {allTags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {(searchQuery || selectedCategory || selectedTag) && (
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">
                  Showing {filteredPosts.length} of {blogPosts.length} posts
                </span>
                <Button variant="outline" size="sm" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article key={post.id} className="border border-border hover:bg-card transition-colors">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.datePosted}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map(tag => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className="text-xs px-2 py-1 border border-border hover:bg-accent transition-colors"
                      >
                        #{tag}
                      </button>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-xs text-muted-foreground">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      Read Full Article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No posts found matching your search criteria.
              </p>
              <Button variant="outline" className="mt-4" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* Summary Stats */}
        <div className="border-t border-border py-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">{blogPosts.length}</div>
              <div className="text-muted-foreground">Total Posts</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{categories.length}</div>
              <div className="text-muted-foreground">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{filteredPosts.length}</div>
              <div className="text-muted-foreground">Currently Showing</div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;