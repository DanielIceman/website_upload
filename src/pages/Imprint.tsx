import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Imprint() {
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
        
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Imprint</h1>
        
        <div className="prose prose-slate max-w-none space-y-8 text-foreground">
          <section>
            <p className="text-muted-foreground mb-6">
              Information in accordance with legal disclosure requirements
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Company Information</h2>
            <div className="bg-accent/20 p-6 rounded-lg space-y-2">
              <p className="leading-relaxed">
                <strong>Company Name:</strong> Arctic Workforce
              </p>
              <p className="leading-relaxed">
                <strong>Legal Form:</strong> Private Limited Company
              </p>
              <p className="leading-relaxed">
                <strong>Registration Number:</strong> [To be provided]
              </p>
              <p className="leading-relaxed">
                <strong>VAT Number:</strong> [To be provided]
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
            <div className="bg-accent/20 p-6 rounded-lg space-y-2">
              <p className="leading-relaxed">
                <strong>Postal Address:</strong><br />
                Arctic Workforce<br />
                [Street Address]<br />
                Oslo, Norway
              </p>
              <p className="leading-relaxed">
                <strong>Email:</strong> info@arcticworkforce.com
              </p>
              <p className="leading-relaxed">
                <strong>Phone:</strong> +47 123 45 678
              </p>
              <p className="leading-relaxed">
                <strong>Website:</strong> www.arcticworkforce.com
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Management</h2>
            <p className="leading-relaxed mb-4">
              <strong>Managing Director(s):</strong> [To be provided]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Regulatory Authority</h2>
            <p className="leading-relaxed mb-4">
              Arctic Workforce is registered with the Norwegian Labour and Welfare Administration (NAV) and complies with all applicable Norwegian labor laws and recruitment regulations.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Supervising Authority:</strong> Norwegian Labour and Welfare Administration (NAV)
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Professional Indemnity Insurance</h2>
            <p className="leading-relaxed mb-4">
              <strong>Insurance Provider:</strong> [To be provided]<br />
              <strong>Coverage Area:</strong> Nordic countries and European Union
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Dispute Resolution</h2>
            <p className="leading-relaxed mb-4">
              The European Commission provides a platform for online dispute resolution (ODR) accessible at: <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>
            </p>
            <p className="leading-relaxed mb-4">
              We are willing to participate in dispute resolution proceedings before a consumer arbitration board.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Liability for Content</h2>
            <p className="leading-relaxed mb-4">
              The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness, or topicality. According to statutory provisions, we are responsible for our own content on these pages. However, we are not obligated to monitor transmitted or stored third-party information or investigate circumstances pointing to illegal activity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Liability for Links</h2>
            <p className="leading-relaxed mb-4">
              Our website contains links to external third-party websites, over whose contents we have no control. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Copyright</h2>
            <p className="leading-relaxed mb-4">
              The content and works created by the site operators on these pages are subject to Norwegian copyright law. The reproduction, editing, distribution, and any kind of use outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Protection Officer</h2>
            <p className="leading-relaxed mb-4">
              For questions regarding data protection and privacy, please contact:<br />
              <strong>Email:</strong> privacy@arcticworkforce.com<br />
              <strong>Phone:</strong> +47 123 45 678
            </p>
          </section>

          <section className="border-t pt-6 mt-8">
            <p className="text-sm text-muted-foreground">
              <strong>Last Updated:</strong> January 1, 2025
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}