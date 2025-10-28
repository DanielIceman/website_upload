import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
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
        
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none space-y-8 text-foreground">
          <section>
            <p className="text-muted-foreground mb-6">
              <strong>Effective Date:</strong> January 1, 2025
            </p>
            <p className="leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your use of Arctic Workforce's website and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Services Overview</h2>
            <p className="leading-relaxed mb-4">
              Arctic Workforce provides recruitment and workforce management services, connecting qualified workers with employers in the Nordic region and beyond.
            </p>
            <h3 className="text-xl font-semibold mb-3">1.1 For Job Seekers</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Job matching and placement services</li>
              <li>CV review and career guidance</li>
              <li>Interview preparation support</li>
              <li>Ongoing employment support</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3">1.2 For Employers</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Access to pre-vetted candidates</li>
              <li>Recruitment process management</li>
              <li>Workforce compliance assistance</li>
              <li>Long-term staffing solutions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. User Responsibilities</h2>
            <h3 className="text-xl font-semibold mb-3">2.1 Job Seekers</h3>
            <p className="leading-relaxed mb-4">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide accurate and truthful information</li>
              <li>Keep your contact information up to date</li>
              <li>Respond promptly to communications</li>
              <li>Maintain professional conduct during all interactions</li>
              <li>Not misrepresent your qualifications or experience</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.2 Employers</h3>
            <p className="leading-relaxed mb-4">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide accurate job descriptions and requirements</li>
              <li>Comply with all applicable labor laws and regulations</li>
              <li>Offer fair wages and working conditions</li>
              <li>Treat all candidates with respect and fairness</li>
              <li>Pay agreed fees in a timely manner</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Fees and Payment</h2>
            <p className="leading-relaxed mb-4">
              <strong>For Job Seekers:</strong> Our services are free for individuals seeking employment.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>For Employers:</strong> Fees are determined on a case-by-case basis and will be clearly communicated before service commencement. Payment terms will be specified in separate service agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
            <p className="leading-relaxed mb-4">
              All content on our website, including text, graphics, logos, and software, is the property of Arctic Workforce and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
            <p className="leading-relaxed mb-4">
              While we strive to provide excellent service, Arctic Workforce is not liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Employment decisions made by employers</li>
              <li>The accuracy of information provided by third parties</li>
              <li>Any disputes between employers and employees</li>
              <li>Loss of business opportunities or income</li>
            </ul>
            <p className="leading-relaxed mb-4">
              Our total liability shall not exceed the fees paid for our services in the past 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Termination</h2>
            <p className="leading-relaxed mb-4">
              We reserve the right to terminate or suspend access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or our business.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Dispute Resolution</h2>
            <p className="leading-relaxed mb-4">
              Any disputes arising from these Terms shall be governed by Norwegian law. We encourage resolution through good faith negotiations before pursuing legal action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Changes to Terms</h2>
            <p className="leading-relaxed mb-4">
              We may update these Terms from time to time. We will notify users of any material changes via email or website notification. Continued use of our services after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
            <p className="leading-relaxed">
              For questions about these Terms, please contact us at:<br />
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