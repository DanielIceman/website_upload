import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
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
        
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-8 text-foreground">
          <section>
            <p className="text-muted-foreground mb-6">
              <strong>Effective Date:</strong> January 1, 2025
            </p>
            <p className="leading-relaxed mb-4">
              Arctic Workforce ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3">1.1 Personal Information</h3>
            <p className="leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Register for our services</li>
              <li>Submit a CV or job application</li>
              <li>Contact us through our website</li>
              <li>Subscribe to our newsletter</li>
            </ul>
            <p className="leading-relaxed mb-4">
              This information may include: name, email address, phone number, employment history, qualifications, and other relevant professional information.
            </p>

            <h3 className="text-xl font-semibold mb-3">1.2 Automatically Collected Information</h3>
            <p className="leading-relaxed mb-4">
              We automatically collect certain information when you visit our website, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>IP address and browser type</li>
              <li>Device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide and manage our recruitment services</li>
              <li>Match candidates with suitable employers</li>
              <li>Communicate with you about job opportunities</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and enhance security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Information Sharing and Disclosure</h2>
            <p className="leading-relaxed mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Employers:</strong> When you apply for positions or authorize us to share your information</li>
              <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our business</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
            <p className="leading-relaxed mb-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
            <p className="leading-relaxed mb-4">
              Under GDPR and other applicable data protection laws, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
            <p className="leading-relaxed mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. International Data Transfers</h2>
            <p className="leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
            <p className="leading-relaxed mb-4">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
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