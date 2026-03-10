import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-lg">P</div>
            <h2 className="text-xl font-bold tracking-tight">PRINCE ACADEMY</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Prince Academy is one of the BEST CBSE schools in India, sprawled over 100 bighas of land with modern architecture and wide space.
          </p>
          <div className="flex space-x-4">
            <Facebook size={20} className="text-slate-400 hover:text-brand-secondary cursor-pointer" />
            <Twitter size={20} className="text-slate-400 hover:text-brand-secondary cursor-pointer" />
            <Youtube size={20} className="text-slate-400 hover:text-brand-secondary cursor-pointer" />
            <Instagram size={20} className="text-slate-400 hover:text-brand-secondary cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-brand-primary pb-2 inline-block">Quick Links</h3>
          <ul className="space-y-3">
            {['About Us', 'Academics', 'Facilities', 'Sports', 'Results', 'Contact Us'].map((link) => (
              <li key={link}>
                <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-brand-secondary text-sm flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Facilities */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-brand-primary pb-2 inline-block">Facilities</h3>
          <ul className="space-y-3">
            {['Hostels', 'Swimming Pool', 'Gymnasium', 'Library', 'Laboratory', 'AI-Robotics'].map((link) => (
              <li key={link}>
                <Link to="/facilities" className="text-slate-400 hover:text-brand-secondary text-sm flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold mb-6 border-b border-brand-primary pb-2 inline-block">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 text-sm text-slate-400">
              <MapPin size={18} className="text-brand-secondary shrink-0" />
              <span>Ring Road (Jaipur-Bikaner Bypass), Sikar, Rajasthan - 332001</span>
            </li>
            <li className="flex items-center space-x-3 text-sm text-slate-400">
              <Phone size={18} className="text-brand-secondary shrink-0" />
              <span>9610-75-2222, 9610-76-2222</span>
            </li>
            <li className="flex items-center space-x-3 text-sm text-slate-400">
              <Mail size={18} className="text-brand-secondary shrink-0" />
              <span>princeacademy31@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-custom mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
        <p>&copy; {new Date().getFullYear()} Prince Academy Sikar. All Rights Reserved. Designed with Excellence.</p>
      </div>
    </footer>
  );
}
