
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <Link href="/" className="text-xl font-bold text-velocity-primary hover:text-white transition-colors duration-300">
            Velocity Fitness
          </Link>
          <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} Velocity Fitness. All rights reserved.</p>
        </div>

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
          <Link href="/about" className="hover:text-velocity-primary transition-colors duration-300">
            About Us
          </Link>
          <Link href="/services" className="hover:text-velocity-primary transition-colors duration-300">
            Services
          </Link>
          <Link href="/contact" className="hover:text-velocity-primary transition-colors duration-300">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-velocity-primary transition-colors duration-300">
            Privacy Policy
          </Link>
        </div>

        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-velocity-primary transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C17.361 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-velocity-primary transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.91 1.045 4.075 1.88c-.835.835-1.748 1.7-1.808 2.97-.058 1.28-.072 1.69-.072 4.97c0 3.3.014 3.71.072 4.99.06 1.27.973 2.135 1.808 2.97.835.835 1.7 1.748 2.97 1.808 1.28.058 1.69.072 4.97.072 3.3 0 3.71-.014 4.99-.072 1.27-.06 2.135-.973 2.97-1.808.835-.835 1.748-1.7 1.808-2.97.058-1.28.072-1.69.072-4.97 0-3.3-.014-3.71-.072-4.99-.06-1.27-.973-2.135-1.808-2.97-.835-.835-1.7-1.748-2.97-1.808C15.71.014 15.3 0 12 0zm0 2.16c3.2 0 3.585.016 4.85.071 1.17.055 1.805.417 2.227.839.422.422.783 1.057.838 2.227.057 1.265.07 1.64.07 4.85 0 3.2-.015 3.585-.074 4.85-.061 1.17-.423 1.805-.844 2.227-.421.422-1.056.783-2.227.838-1.265.057-1.64.07-4.85.07-3.2 0-3.585-.015-4.85-.074-1.17-.061-1.805-.423-2.227-.844-.42-.421-.782-1.056-.838-2.227-.056-1.265-.07-1.64-.07-4.85 0-3.2.015-3.585.074-4.85.061-1.17.423-1.805.844-2.227.42-.421 1.056-.782 2.227-.838 1.265-.056 1.64-.07 4.85-.07zm0 3.658c-3.414 0-6.2 2.786-6.2 6.2 0 3.414 2.786 6.2 6.2 6.2 3.414 0 6.2-2.786 6.2-6.2 0-3.414-2.786-6.2-6.2-6.2zm0 10.16A3.992 3.992 0 018 12c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.21-1.79 4-4 4zm5.17-11.232c-.596 0-1.08.484-1.08 1.08s.484 1.08 1.08 1.08 1.08-.484 1.08-1.08-.484-1.08-1.08-1.08z" clipRule="evenodd" />
            </svg>
          </a>
          {/* Add more social icons as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
