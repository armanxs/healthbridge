import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Call to Action */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Ready to get started?</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-6">
            Your health is your greatest asset. Let us help you take the first step towards better well-being.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-sky-500 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-600 transition-colors duration-300"
          >
            Contact Us Today
          </Link>
        </div>

        {/* Contact Info and Links */}
        <div className="border-t border-slate-700 pt-8 mt-8 grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="md:col-span-1">
             <h3 className="font-semibold text-white mb-2">HealthBridge</h3>
             <p className="text-sm text-slate-400">123 Health St, Wellness City, 12345</p>
             <p className="text-sm text-slate-400 mt-1">Phone: (123) 456-7890</p>
             <p className="text-sm text-slate-400">Fax: (123) 456-7891</p>
          </div>
          <div className="md:col-span-2 flex flex-col md:flex-row justify-center md:justify-end items-center">
             <div className="flex space-x-6">
                <Link to="/services" className="hover:text-sky-400 transition-colors">Services</Link>
                <Link to="/about" className="hover:text-sky-400 transition-colors">About</Link>
                <Link to="/contact" className="hover:text-sky-400 transition-colors">Contact</Link>
             </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-slate-700 pt-6 mt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} HealthBridge. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;