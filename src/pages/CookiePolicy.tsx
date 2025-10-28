import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Cookie Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-8 text-foreground">
          <section>
            <p className="text-muted-foreground mb-6">
              <strong>Effective Date:</strong> January 1, 2025
            </p>
            <p className="leading-relaxed mb-4">
              This Cookie Policy explains how Arctic Workforce uses cookies and similar technologies on our website. By using our website, you consent to the use of cookies as described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. What Are Cookies?</h2>
            <p className="leading-relaxed mb-4">
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold mb-3">2.1 Essential Cookies</h3>
            <p className="leading-relaxed mb-4">
              These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Session cookies:</strong> Temporary cookies that expire when you close your browser</li>
              <li><strong>Security cookies:</strong> Help protect against security threats</li>
              <li><strong>Language preference cookies:</strong> Remember your language selection</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.2 Performance Cookies</h3>
            <p className="leading-relaxed mb-4">
              These cookies collect information about how visitors use our website, such as which pages are visited most often. This helps us improve how our website works.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Analytics cookies (e.g., Google Analytics)</li>
              <li>Page load time tracking</li>
              <li>Error reporting</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.3 Functionality Cookies</h3>
            <p className="leading-relaxed mb-4">
              These cookies allow the website to remember choices you make and provide enhanced features.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Remember login details</li>
              <li>Store user preferences</li>
              <li>Personalize content</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.4 Marketing Cookies</h3>
            <p className="leading-relaxed mb-4">
              These cookies track your browsing habits to display relevant advertisements and measure the effectiveness of our marketing campaigns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Third-Party Cookies</h2>
            <p className="leading-relaxed mb-4">
              We may use third-party services that place cookies on your device, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
              <li><strong>Social Media Platforms:</strong> For social sharing features</li>
              <li><strong>Advertising Partners:</strong> To display relevant advertisements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Cookie Duration</h2>
            <div className="bg-accent/20 p-6 rounded-lg mb-4">
              <p className="leading-relaxed mb-4">
                <strong>Session Cookies:</strong> Deleted when you close your browser
              </p>
              <p className="leading-relaxed mb-4">
                <strong>Persistent Cookies:</strong> Remain on your device for a set period or until manually deleted
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Essential cookies: Session-based or up to 1 year</li>
                <li>Analytics cookies: Up to 2 years</li>
                <li>Marketing cookies: Up to 1 year</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Managing Cookies</h2>
            <p className="leading-relaxed mb-4">
              You can control and manage cookies in several ways:
            </p>
            
            <h3 className="text-xl font-semibold mb-3">5.1 Browser Settings</h3>
            <p className="leading-relaxed mb-4">
              Most browsers allow you to refuse or delete cookies. The method for doing so varies from browser to browser. Please check your browser's help menu for instructions.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">5.2 Opt-Out Tools</h3>
            <p className="leading-relaxed mb-4">
              You can opt out of certain cookies using these tools:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Google Analytics Opt-out: <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a></li>
              <li>Network Advertising Initiative: <a href="https://www.networkadvertising.org/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.networkadvertising.org/choices/</a></li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">5.3 Impact of Disabling Cookies</h3>
            <p className="leading-relaxed mb-4">
              Please note that if you disable cookies, some features of our website may not function properly, and your user experience may be affected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Updates to This Policy</h2>
            <p className="leading-relaxed mb-4">
              We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. We will notify users of any material changes by posting the updated policy on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
            <p className="leading-relaxed mb-4">
              If you have questions about our use of cookies, please contact us at:
            </p>
            <p className="leading-relaxed">
              <strong>Email:</strong> info@arcticworkforce.com<br />
              <strong>Phone:</strong> +47 123 45 678<br />
              <strong>Address:</strong> Oslo, Norway
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}