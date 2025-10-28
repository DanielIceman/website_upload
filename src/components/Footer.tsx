import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(135deg,_hsl(207_80%_25%)_0%,_hsl(220_50%_15%)_100%)] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <Link to="/privacy-policy" className="text-primary-light hover:text-white transition-colors font-medium">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="text-primary-light hover:text-white transition-colors font-medium">
            Terms of Service
          </Link>
          <Link to="/cookie-policy" className="text-primary-light hover:text-white transition-colors font-medium">
            Cookie Policy
          </Link>
          <Link to="/imprint" className="text-primary-light hover:text-white transition-colors font-medium">
            Imprint
          </Link>
        </div>
        
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-white/70">
            © 2025 Arctic Workforce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
