import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission (static site)
    alert("Thank you for your message! This is a demo form - no actual email was sent.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 pt-32">
        <Breadcrumb items={[{ label: "Contact" }]} />
        
        <div className="py-8">
          <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Interested in custom battery solutions, project collaboration, or technical discussions? 
            I'd be happy to hear from you.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or question..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" variant="govuk" className="w-full">
                  <Send className="mr-2 w-4 h-4" />
                  Send Message
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  * Required fields. This is a demonstration form for the portfolio.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-0.5 text-accent" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">contact@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 text-accent" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Available for remote collaboration</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">What I Can Help With</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Custom lithium battery pack design</li>
                  <li>• Electronics consulting and design review</li>
                  <li>• PCB design and manufacturing advice</li>
                  <li>• Testing equipment and tool development</li>
                  <li>• Technical writing and documentation</li>
                  <li>• Project collaboration opportunities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Response Time</h3>
                <p className="text-muted-foreground">
                  I typically respond to inquiries within 24-48 hours. For urgent matters 
                  or time-sensitive projects, please mention this in your message subject line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;