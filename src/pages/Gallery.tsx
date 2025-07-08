import { useState, useMemo } from "react";
import { Search, Filter, X, Download, Maximize2, Tag, Image } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { galleryImages } from "@/data/galleryImages";

const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [...new Set(galleryImages.map(img => img.category))];
  const allTags = [...new Set(galleryImages.flatMap(img => img.tags))];

  const filteredImages = useMemo(() => {
    return galleryImages.filter(image => {
      const matchesSearch = searchQuery === "" || 
        image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === "" || image.category === selectedCategory;
      const matchesTag = selectedTag === "" || image.tags.includes(selectedTag);
      
      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchQuery, selectedCategory, selectedTag]);

  const selectedImageData = selectedImage ? galleryImages.find(img => img.id === selectedImage) : null;

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedTag("");
  };

  const handleDownload = (imageUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={setSearchQuery} />
      
      <main className="max-w-6xl mx-auto px-4 pt-32">
        <Breadcrumb items={[{ label: "Gallery" }]} />
        
        <div className="py-8">
          <h1 className="text-4xl font-bold mb-6">Project Gallery</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Visual documentation of projects, designs, PCBs, tools, and components. 
            Click any image to view fullscreen with download options.
          </p>

          {/* Search and Filters */}
          <div className="border border-border p-6 mb-8 space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Filter className="w-5 h-5" />
              <span>Filter Images</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search images..."
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
                  Showing {filteredImages.length} of {galleryImages.length} images
                </span>
                <Button variant="outline" size="sm" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative border border-border hover:border-accent transition-colors cursor-pointer"
                onClick={() => setSelectedImage(image.id)}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-48 object-cover"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button size="sm" variant="outline" className="bg-white/10 text-white border-white/20">
                    <Maximize2 className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="bg-white/10 text-white border-white/20"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(image.url, `${image.title}.jpg`);
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>

                {/* Image Info */}
                <div className="p-3 space-y-2">
                  <h3 className="font-medium text-sm line-clamp-1">{image.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{image.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {image.tags.slice(0, 2).map(tag => (
                      <button
                        key={tag}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTag(tag);
                        }}
                        className="text-xs px-2 py-1 border border-border hover:bg-accent transition-colors"
                      >
                        #{tag}
                      </button>
                    ))}
                    {image.tags.length > 2 && (
                      <span className="text-xs text-muted-foreground self-center">
                        +{image.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <Image className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground text-lg">
                No images found matching your search criteria.
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
              <div className="text-2xl font-bold text-primary">{galleryImages.length}</div>
              <div className="text-muted-foreground">Total Images</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{categories.length}</div>
              <div className="text-muted-foreground">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{filteredImages.length}</div>
              <div className="text-muted-foreground">Currently Showing</div>
            </div>
          </div>
        </div>
      </main>

      {/* Fullscreen Modal */}
      {selectedImage && selectedImageData && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-white/10 text-white border-white/20 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-4 h-4" />
            </Button>
            
            <img 
              src={selectedImageData.url} 
              alt={selectedImageData.title}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm text-white p-4 rounded">
              <h3 className="text-lg font-semibold mb-2">{selectedImageData.title}</h3>
              <p className="text-sm mb-4">{selectedImageData.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {selectedImageData.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-white/20 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-white/10 text-white border-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(selectedImageData.url, `${selectedImageData.title}.jpg`);
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Gallery;