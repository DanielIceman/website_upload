import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { CVUpload } from "./CVUpload";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond within 48 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h2>
        </div>
        
        <CVUpload />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="bg-[linear-gradient(135deg,_hsl(199_95%_96%)_0%,_hsl(199_95%_92%)_100%)] p-8 rounded-2xl border-2 border-primary/30">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Email</p>
                  <a href="mailto:info@arcticworkforce.com" className="text-primary hover:underline">
                    info@arcticworkforce.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Phone</p>
                  <a href="tel:+4712345678" className="text-primary hover:underline">
                    +47 123 45 678
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Location</p>
                  <p className="text-muted-foreground">
                    Oslo, Norway
                    <br />
                    Serving all Nordic countries
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white/80 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2">Business Hours</h4>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM (CET)
                  <br />
                  Saturday - Sunday: Closed
                </p>
              </div>
              
              <div className="mt-6 p-6 bg-primary/10 rounded-xl border-l-4 border-primary">
                <p className="text-sm text-foreground">
                  <strong>Response Time:</strong> We aim to respond to all inquiries within 48 hours. For urgent matters, please mention this in your message.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-lg border-2">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Send Us a Message
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Have a question or ready to get started? Fill out the form below and our team will get back to you promptly.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Select 
                  value={formData.subject}
                  onValueChange={(value) => setFormData({ ...formData, subject: value })}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="job-seeker">I'm Looking for Work</SelectItem>
                    <SelectItem value="employer">I Want to Hire Workers</SelectItem>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="mt-2"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
