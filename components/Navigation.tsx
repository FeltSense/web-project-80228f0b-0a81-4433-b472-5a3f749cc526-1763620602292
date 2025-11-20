import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg py-4 px-6 md:px-12 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">
          Velocity Fitness
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/services" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
            Services
          </Link>
          <Link href="/classes" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
            Classes
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/join" className="px-5 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-md">
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}