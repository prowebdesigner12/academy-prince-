import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, Users, BookOpen, Trophy, Star, CheckCircle, Home as HomeIcon, Quote, Calendar, Newspaper, GraduationCap, Phone, MapPin, Mail, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920&auto=format&fit=crop",
      tag: "Ranked #1 CBSE School in Sikar",
      title: "Where Dreams",
      highlight: "Take Flight",
      description: "Sprawled over 100 bighas, Prince Academy combines traditional values with modern innovation to nurture the leaders of tomorrow."
    },
    {
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1920&auto=format&fit=crop",
      tag: "Academic Excellence",
      title: "Empowering Minds",
      highlight: "For Success",
      description: "Our world-class faculty and state-of-the-art laboratories provide the perfect environment for academic brilliance."
    },
    {
      image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1920&auto=format&fit=crop",
      tag: "Sports & Fitness",
      title: "Building Future",
      highlight: "Champions",
      description: "With professional coaching and Olympic-standard facilities, we nurture the athletic potential of every student."
    },
    {
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1920&auto=format&fit=crop",
      tag: "Innovation Hub",
      title: "Leading With",
      highlight: "Technology",
      description: "From AI and Robotics to advanced computer labs, we prepare students for the digital frontier of the 21st century."
    },
    {
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1920&auto=format&fit=crop",
      tag: "Holistic Growth",
      title: "Nurturing Every",
      highlight: "Individual",
      description: "We focus on character building, arts, and cultural values to ensure our students grow into responsible global citizens."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6 }}
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </motion.div>
        </AnimatePresence>

        <div className="container-custom relative z-10 text-white pointer-events-none">
          {/* Text content removed as per user request */}
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center space-x-4 z-20">
          {slides.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-12 bg-brand-secondary' : 'w-2 bg-white/40 hover:bg-white/60'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-8 hidden md:block z-20">
          <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-brand-secondary hover:border-brand-secondary transition-all">
            <ChevronLeft size={20} />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-8 hidden md:block z-20">
          <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-brand-secondary hover:border-brand-secondary transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Scrolling Stats & Quick Links Bar */}
      <section className="bg-white border-y border-slate-100 py-4 overflow-hidden -mt-12 relative z-30">
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 40, 
              ease: "linear", 
              repeat: Infinity 
            }}
            className="flex items-center space-x-12 whitespace-nowrap px-6"
          >
            {[
              { name: 'Fee Structure', path: '/academics/fees', icon: Award },
              { name: 'Admissions', path: '/apply', icon: GraduationCap },
              { name: 'School News', path: '/news', icon: Newspaper },
              { name: 'Contact Us', path: '/contact', icon: Phone },
              { name: '5000+ Students', path: '/about', icon: Users },
              { name: '250+ Faculty', path: '/about', icon: BookOpen },
              { name: '100 Bighas Campus', path: '/facilities', icon: Star },
              { name: '25+ Years Legacy', path: '/about', icon: Trophy },
              // Duplicate for seamless loop
              { name: 'Fee Structure', path: '/academics/fees', icon: Award },
              { name: 'Admissions', path: '/apply', icon: GraduationCap },
              { name: 'School News', path: '/news', icon: Newspaper },
              { name: 'Contact Us', path: '/contact', icon: Phone },
              { name: '5000+ Students', path: '/about', icon: Users },
              { name: '250+ Faculty', path: '/about', icon: BookOpen },
              { name: '100 Bighas Campus', path: '/facilities', icon: Star },
              { name: '25+ Years Legacy', path: '/about', icon: Trophy },
            ].map((item, i) => (
              <Link 
                key={i} 
                to={item.path}
                className="flex items-center space-x-3 group shrink-0"
              >
                <div className="w-8 h-8 bg-blue-50 text-brand-primary rounded-lg flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <item.icon size={16} />
                </div>
                <span className="font-bold text-slate-700 text-sm group-hover:text-brand-primary transition-colors">{item.name}</span>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Academic Excellence Section */}
      <section className="bg-brand-primary py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="container-custom relative z-10 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <h2 className="text-brand-secondary font-bold text-sm uppercase tracking-widest">Academic Excellence</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">Our Shining <span className="text-brand-secondary italic">Stars</span></h3>
            </div>
            <Link to="/results" className="text-white flex items-center hover:text-brand-secondary transition-colors font-semibold">
              View All Results <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="relative flex overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 25, 
              ease: "linear", 
              repeat: Infinity 
            }}
            className="flex space-x-8 px-6"
          >
            {[
              { name: 'Rahul Sharma', score: '98.6%', class: 'Class XII', img: 'https://picsum.photos/seed/student1/400/500' },
              { name: 'Priya Verma', score: '97.8%', class: 'Class X', img: 'https://picsum.photos/seed/student2/400/500' },
              { name: 'Amit Singh', score: '97.4%', class: 'Class XII', img: 'https://picsum.photos/seed/student3/400/500' },
              { name: 'Sneha Gupta', score: '96.9%', class: 'Class X', img: 'https://picsum.photos/seed/student4/400/500' },
              { name: 'Vikram Aditya', score: '96.5%', class: 'Class XII', img: 'https://picsum.photos/seed/student5/400/500' },
              { name: 'Ananya Singh', score: '96.2%', class: 'Class X', img: 'https://picsum.photos/seed/student6/400/500' },
              { name: 'Rohan Meena', score: '95.8%', class: 'Class XII', img: 'https://picsum.photos/seed/student7/400/500' },
              { name: 'Ishita Jain', score: '95.5%', class: 'Class X', img: 'https://picsum.photos/seed/student8/400/500' },
              // Duplicate for seamless loop
              { name: 'Rahul Sharma', score: '98.6%', class: 'Class XII', img: 'https://picsum.photos/seed/student1/400/500' },
              { name: 'Priya Verma', score: '97.8%', class: 'Class X', img: 'https://picsum.photos/seed/student2/400/500' },
              { name: 'Amit Singh', score: '97.4%', class: 'Class XII', img: 'https://picsum.photos/seed/student3/400/500' },
              { name: 'Sneha Gupta', score: '96.9%', class: 'Class X', img: 'https://picsum.photos/seed/student4/400/500' },
              { name: 'Vikram Aditya', score: '96.5%', class: 'Class XII', img: 'https://picsum.photos/seed/student5/400/500' },
              { name: 'Ananya Singh', score: '96.2%', class: 'Class X', img: 'https://picsum.photos/seed/student6/400/500' },
              { name: 'Rohan Meena', score: '95.8%', class: 'Class XII', img: 'https://picsum.photos/seed/student7/400/500' },
              { name: 'Ishita Jain', score: '95.5%', class: 'Class X', img: 'https://picsum.photos/seed/student8/400/500' },
            ].map((topper, idx) => (
              <div 
                key={idx}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] overflow-hidden group w-64 shrink-0"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={topper.img} 
                    alt={topper.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-brand-secondary text-white px-3 py-1 rounded-full font-bold text-sm">
                    {topper.score}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-bold text-white">{topper.name}</h4>
                  <p className="text-blue-200 text-xs">{topper.class}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="container-custom grid lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-brand-primary font-bold text-sm uppercase tracking-widest">Welcome to Prince Academy</h2>
            <h3 className="text-5xl font-bold leading-tight">A Purpose-Built School for <span className="text-brand-secondary underline decoration-brand-secondary/30 underline-offset-8">Holistic Development</span></h3>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed">
            Prince Academy was envisaged as a co-educational CBSE English medium school with a new approach established by PRINCE ACADEMY OF HIGHER EDUCATION. It is a purpose-built school with learning spaces to support the children and respect their expression of individuality.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Modern Architecture', icon: HomeIcon },
              { title: 'Eco-friendly Campus', icon: Star },
              { title: 'Expert Faculty', icon: Users },
              { title: 'Global Standards', icon: Award },
            ].map((item) => (
              <div key={item.title} className="flex items-center space-x-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center text-brand-primary">
                  <item.icon size={20} />
                </div>
                <span className="font-bold text-slate-700">{item.title}</span>
              </div>
            ))}
          </div>
          <Link to="/about" className="btn-primary inline-flex items-center px-8 py-4">
            Read Our Story <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
        <div className="relative">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-secondary rounded-full -z-10 opacity-10 blur-2xl"></div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-primary rounded-full -z-10 opacity-10 blur-2xl"></div>
          <motion.div
            initial={{ rotate: -2 }}
            whileHover={{ rotate: 0 }}
            className="relative z-10"
          >
            <img 
              src="https://picsum.photos/seed/school-campus/800/1000" 
              alt="Campus Life" 
              className="rounded-[3rem] shadow-2xl w-full object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-[200px]">
              <p className="text-4xl font-bold text-brand-primary">25+</p>
              <p className="text-slate-500 font-medium text-sm">Years of Educational Legacy</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="bg-slate-50 py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-brand-primary font-bold text-sm uppercase tracking-widest">Stay Updated</h2>
              <h3 className="text-4xl font-bold">Latest <span className="text-brand-secondary">News & Events</span></h3>
            </div>
            <Link to="/news" className="btn-primary bg-white text-brand-primary border border-slate-200 hover:bg-slate-50">
              View All News
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: 'Annual Sports Meet 2026', date: 'March 25, 2026', icon: Trophy, category: 'Sports' },
              { title: 'Science Exhibition: Innovate 2.0', date: 'April 05, 2026', icon: BookOpen, category: 'Academic' },
              { title: 'New Academic Session Admissions', date: 'Ongoing', icon: GraduationCap, category: 'Admission' },
            ].map((event, idx) => (
              <motion.div 
                key={event.title}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-6 group"
              >
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 bg-slate-50 text-brand-primary rounded-2xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <event.icon size={28} />
                  </div>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {event.category}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-slate-400 text-sm">
                    <Calendar size={14} className="mr-2" />
                    {event.date}
                  </div>
                  <h4 className="text-xl font-bold group-hover:text-brand-primary transition-colors">{event.title}</h4>
                </div>
                <Link to="/news" className="text-brand-primary font-bold text-sm flex items-center group/link">
                  Read More <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 overflow-hidden">
        <div className="container-custom text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-brand-primary font-bold text-sm uppercase tracking-widest">Testimonials</h2>
          <h3 className="text-4xl font-bold">What Our <span className="text-brand-secondary">Community</span> Says</h3>
          <p className="text-slate-600">Hear from the parents and students who have experienced the Prince Academy difference.</p>
        </div>
        
        <div className="relative flex overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 30, 
              ease: "linear", 
              repeat: Infinity 
            }}
            className="flex space-x-8 whitespace-nowrap"
          >
            {[
              { name: 'Rajesh Kumar', role: 'Parent', text: 'The best decision for my son\'s future. The focus on both academics and sports is unparalleled in Sikar.' },
              { name: 'Anjali Sharma', role: 'Student (Class XII)', text: 'Prince Academy gave me the confidence to pursue my dreams. The teachers are more like mentors.' },
              { name: 'Dr. S.P. Singh', role: 'Parent', text: 'A truly international standard school with deep-rooted Indian values. Highly recommended for holistic growth.' },
              { name: 'Mrs. Sunita Devi', role: 'Parent', text: 'The infrastructure is world-class. My daughter loves the swimming pool and the robotics lab.' },
              { name: 'Mr. Vikram Singh', role: 'Parent', text: 'Prince Academy has a very disciplined environment which is essential for a student\'s growth.' },
              { name: 'Karan Verma', role: 'Alumni', text: 'I cleared my JEE Mains with the help of the amazing faculty here. Grateful for the support.' },
              { name: 'Megha Jain', role: 'Student', text: 'The hostel feels like a second home. The food is hygienic and the staff is very caring.' },
              // Duplicate for seamless loop
              { name: 'Rajesh Kumar', role: 'Parent', text: 'The best decision for my son\'s future. The focus on both academics and sports is unparalleled in Sikar.' },
              { name: 'Anjali Sharma', role: 'Student (Class XII)', text: 'Prince Academy gave me the confidence to pursue my dreams. The teachers are more like mentors.' },
              { name: 'Dr. S.P. Singh', role: 'Parent', text: 'A truly international standard school with deep-rooted Indian values. Highly recommended for holistic growth.' },
              { name: 'Mrs. Sunita Devi', role: 'Parent', text: 'The infrastructure is world-class. My daughter loves the swimming pool and the robotics lab.' },
              { name: 'Mr. Vikram Singh', role: 'Parent', text: 'Prince Academy has a very disciplined environment which is essential for a student\'s growth.' },
              { name: 'Karan Verma', role: 'Alumni', text: 'I cleared my JEE Mains with the help of the amazing faculty here. Grateful for the support.' },
              { name: 'Megha Jain', role: 'Student', text: 'The hostel feels like a second home. The food is hygienic and the staff is very caring.' },
            ].map((testimonial, idx) => (
              <div 
                key={idx}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 relative w-[400px] flex-shrink-0 whitespace-normal inline-block align-top"
              >
                <Quote className="absolute top-8 right-8 text-slate-100" size={64} />
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-brand-secondary fill-brand-secondary" />)}
                </div>
                <p className="text-slate-600 italic leading-relaxed mb-8 relative z-10">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Principal's Message Section */}
      <section className="bg-white py-24">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-secondary/10 rounded-full -z-10"></div>
            <img 
              src="https://picsum.photos/seed/principal/600/700" 
              alt="Principal" 
              className="rounded-[3rem] shadow-2xl w-full object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-primary text-white p-8 rounded-3xl shadow-2xl max-w-[250px]">
              <h4 className="font-bold text-xl">Dr. Piyush Schand</h4>
              <p className="text-blue-200 text-sm">Principal, Prince Academy</p>
            </div>
          </motion.div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-brand-primary font-bold text-sm uppercase tracking-widest">Leadership Vision</h2>
              <h3 className="text-4xl font-bold">Message from the <span className="text-brand-secondary">Principal</span></h3>
            </div>
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 text-slate-100" size={80} />
              <p className="text-slate-600 text-lg italic leading-relaxed relative z-10 pl-8">
                "Our mission is to empower students to become lifelong learners and responsible global citizens. At Prince Academy, we provide a nurturing environment that encourages curiosity, creativity, and critical thinking. We believe in the potential of every child and strive to help them reach their highest aspirations."
              </p>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We focus on a balanced curriculum that integrates academic excellence with physical education, arts, and technology. Our dedicated faculty works tirelessly to ensure that each student receives personalized attention and support.
            </p>
            <Link to="/about" className="text-brand-primary font-bold flex items-center group">
              Read Full Message <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container-custom space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <h2 className="text-brand-secondary font-bold text-sm uppercase tracking-widest">Visual Journey</h2>
              <h3 className="text-4xl font-bold">Campus <span className="text-brand-secondary">Gallery</span></h3>
              <p className="text-slate-400 max-w-xl">Take a look at our state-of-the-art infrastructure and vibrant campus life.</p>
            </div>
            <Link to="/facilities" className="btn-secondary">View All Photos</Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: 'https://picsum.photos/seed/gal1/600/600', span: 'col-span-1 row-span-1' },
              { img: 'https://picsum.photos/seed/gal2/800/600', span: 'col-span-2 row-span-1' },
              { img: 'https://picsum.photos/seed/gal3/600/600', span: 'col-span-1 row-span-1' },
              { img: 'https://picsum.photos/seed/gal4/600/800', span: 'col-span-1 row-span-2' },
              { img: 'https://picsum.photos/seed/gal5/600/600', span: 'col-span-1 row-span-1' },
              { img: 'https://picsum.photos/seed/gal6/800/600', span: 'col-span-2 row-span-1' },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 0.98 }}
                className={`${item.span} rounded-3xl overflow-hidden relative group cursor-pointer`}
              >
                <img 
                  src={item.img} 
                  alt={`Gallery ${idx}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <Star size={20} className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-brand-primary font-bold text-sm uppercase tracking-widest">Common Queries</h2>
            <h3 className="text-4xl font-bold">Frequently Asked <span className="text-brand-secondary">Questions</span></h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact & Map Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-8"
            >
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-slate-900">Get in Touch</h4>
                <p className="text-slate-500">Have more questions? Our admissions team is here to help you.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 text-brand-primary rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800">Our Location</h5>
                    <p className="text-sm text-slate-600">Ring Road (Jaipur-Bikaner Bypass), Sikar, Rajasthan - 332001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-50 text-brand-secondary rounded-2xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800">Phone Numbers</h5>
                    <p className="text-sm text-slate-600">9610-75-2222, 9610-76-2222</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800">Email Address</h5>
                    <p className="text-sm text-slate-600">princeacademy31@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Map Embed Placeholder */}
              <div className="w-full h-64 rounded-3xl overflow-hidden border border-slate-100 shadow-inner relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.844116035174!2d75.16147437546206!3d27.56739697626343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca37666666667%3A0x6666666666666666!2sPrince%20Academy%20Sikar!5e0!3m2!1sen!2sin!4v1710400000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Prince Academy Location"
                ></iframe>
              </div>
            </motion.div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {[
                { q: 'What is the admission process for the new session?', a: 'The admission process involves filling out an online application form, followed by an interaction/test and document verification.' },
                { q: 'Does the school provide hostel facilities?', a: 'Yes, we have separate, fully-equipped hostels for boys and girls with 24/7 security and nutritious meals.' },
                { q: 'What is the student-teacher ratio at Prince Academy?', a: 'We maintain an ideal student-teacher ratio of 25:1 to ensure personalized attention for every student.' },
                { q: 'Are there any extra-curricular activities?', a: 'Absolutely! We offer a wide range of activities including sports, music, dance, robotics, and NCC to ensure holistic development.' },
                { q: 'Is there a school transport facility?', a: 'Yes, we provide safe and reliable bus services covering all major routes in and around Sikar city.' },
                { q: 'What curriculum does the school follow?', a: 'Prince Academy is affiliated with CBSE and follows the NCERT curriculum with a focus on modern pedagogical methods.' },
              ].map((faq, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 ${activeFaq === i ? 'border-brand-primary ring-1 ring-brand-primary/10' : 'border-slate-100'}`}
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full p-6 flex items-center justify-between text-left group"
                  >
                    <h4 className="font-bold text-slate-800 flex items-center">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 shrink-0 text-xs transition-colors ${activeFaq === i ? 'bg-brand-primary text-white' : 'bg-blue-50 text-brand-primary'}`}>Q</span>
                      {faq.q}
                    </h4>
                    <ChevronDown 
                      size={20} 
                      className={`text-slate-400 transition-transform duration-300 ${activeFaq === i ? 'rotate-180 text-brand-primary' : 'group-hover:text-slate-600'}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-11 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom">
        <div className="bg-brand-primary rounded-[4rem] p-12 md:p-24 text-white text-center space-y-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/10 rounded-full -ml-32 -mb-32 blur-2xl"></div>
          
          <div className="space-y-4">
            <h2 className="text-4xl md:text-7xl font-bold max-w-4xl mx-auto leading-tight">
              Empower Your Child's <span className="text-brand-secondary">Future</span> Today
            </h2>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto leading-relaxed">
              Admissions are open for the academic session 2026-27. Give your child the gift of world-class education.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/apply" className="btn-secondary px-10 py-4 text-lg">Apply Online Now</Link>
            <Link to="/contact" className="bg-white text-brand-primary px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">Contact Admissions</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
