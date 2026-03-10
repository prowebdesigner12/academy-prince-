import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Facebook, Twitter, Youtube, Instagram, Linkedin, ChevronDown } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: 'Home', path: '/' },
  { 
    name: 'About', 
    path: '/about',
    submenu: [
      { name: 'Introduction', path: '/about/intro' },
      { name: 'Why Choose Us', path: '/about/why-us' },
      { name: 'Chairman’s Desk', path: '/about/chairman' },
      { name: 'Director’s Desk', path: '/about/director' },
      { name: 'Vision & Mission', path: '/about/vision' },
    ]
  },
  { 
    name: 'Academics', 
    path: '/academics',
    submenu: [
      { name: 'Apply Now', path: '/apply' },
      { name: 'Fee Structure', path: '/academics/fees' },
      { name: 'Academic Calendar', path: '/academics/calendar' },
    ]
  },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Sports', path: '/sports' },
  { name: 'Results', path: '/results' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-brand-primary text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:9610752222" className="flex items-center hover:text-brand-secondary transition-colors">
              <Phone size={14} className="mr-2" /> 9610-75-2222
            </a>
            <a href="mailto:princeacademy31@gmail.com" className="flex items-center hover:text-brand-secondary transition-colors">
              <Mail size={14} className="mr-2" /> princeacademy31@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Facebook size={16} className="cursor-pointer hover:text-brand-secondary" />
            <Twitter size={16} className="cursor-pointer hover:text-brand-secondary" />
            <Youtube size={16} className="cursor-pointer hover:text-brand-secondary" />
            <Instagram size={16} className="cursor-pointer hover:text-brand-secondary" />
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={cn(
        "transition-all duration-300 py-4",
        scrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-sm"
      )}>
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xl">P</div>
            <div>
              <h1 className="text-xl font-bold text-brand-primary leading-tight">PRINCE ACADEMY</h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Best CBSE School in Sikar</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={cn(
                    "text-sm font-semibold transition-colors flex items-center",
                    location.pathname === item.path ? "text-brand-secondary" : "text-slate-700 hover:text-brand-primary"
                  )}
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={14} className="ml-1 group-hover:rotate-180 transition-transform" />}
                </Link>
                
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-100">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-primary transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/apply" className="btn-primary py-2 text-sm">Apply Now</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-slate-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={cn(
          "lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-screen py-6 shadow-xl" : "max-h-0"
        )}>
          <div className="container-custom flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className="text-lg font-semibold text-slate-700 block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="ml-4 mt-2 flex flex-col space-y-2 border-l-2 border-slate-100 pl-4">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="text-sm text-slate-500"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/apply" className="btn-primary text-center" onClick={() => setIsOpen(false)}>Apply Now</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
