import React from 'react';
import { ArrowRight, Award, Users, BookOpen, Trophy, Star, CheckCircle, Home as HomeIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/school-hero/1920/1080" 
            alt="Prince Academy Campus" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container-custom relative z-10 text-white">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-6"
          >
            <span className="bg-brand-secondary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
              Best CBSE School in Sikar
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Nurturing Excellence, <br />
              <span className="text-brand-secondary">Empowering Futures</span>
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              Prince Academy is a co-educational CBSE English medium school with a new approach to education, sprawled over 100 bighas of eco-friendly campus.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/apply" className="btn-secondary flex items-center">
                Apply Now <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/about" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Students', value: '5000+', icon: Users },
            { label: 'Faculty', value: '250+', icon: BookOpen },
            { label: 'Campus Area', value: '100 Bighas', icon: Star },
            { label: 'Years of Excellence', value: '25+', icon: Trophy },
          ].map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center space-y-2"
            >
              <div className="w-12 h-12 bg-blue-50 text-brand-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon size={24} />
              </div>
              <h3 className="text-3xl font-bold text-brand-primary">{stat.value}</h3>
              <p className="text-slate-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-brand-primary font-bold text-sm uppercase tracking-widest">Welcome to Prince Academy</h2>
            <h3 className="text-4xl font-bold leading-tight">A Purpose-Built School for <span className="text-brand-secondary">Holistic Development</span></h3>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Prince Academy was envisaged as a co-educational CBSE English medium school with a new approach established by PRINCE ACADEMY OF HIGHER EDUCATION. It is a purpose-built school with learning spaces to support the children and respect their expression of individuality.
          </p>
          <ul className="space-y-4">
            {[
              'Modern architecture and wide open spaces',
              'Eco-friendly and peaceful environment',
              'Best teaching faculty from across India',
              'International standard facilities',
            ].map((item) => (
              <li key={item} className="flex items-center space-x-3 text-slate-700 font-medium">
                <CheckCircle size={20} className="text-brand-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link to="/about" className="btn-primary inline-flex items-center">
            Read Our Story <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-secondary rounded-full -z-10 opacity-20"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-primary rounded-full -z-10 opacity-10"></div>
          <img 
            src="https://picsum.photos/seed/school-campus/800/600" 
            alt="Campus Life" 
            className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Features/Facilities Preview */}
      <section className="bg-slate-100 py-24">
        <div className="container-custom space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold">World-Class Facilities</h2>
            <p className="text-slate-600">We provide an environment where students can explore their interests and excel in every field.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Smart Classrooms', desc: 'Equipped with the latest technology for interactive learning.', icon: BookOpen },
              { title: 'Sports Academy', desc: 'Professional coaching for Cricket, Basketball, and more.', icon: Trophy },
              { title: 'Laboratories', desc: 'State-of-the-art labs for Physics, Chemistry, and Biology.', icon: Award },
              { title: 'Hostel Facility', desc: 'Safe and comfortable residential facilities for students.', icon: HomeIcon },
              { title: 'Swimming Pool', desc: 'International standard pool with professional trainers.', icon: Star },
              { title: 'AI & Robotics', desc: 'Preparing students for the future with hands-on tech.', icon: CheckCircle },
            ].map((feature, idx) => (
              <motion.div 
                key={feature.title}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4 group"
              >
                <div className="w-14 h-14 bg-slate-50 text-brand-primary rounded-2xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <feature.icon size={28} />
                </div>
                <h4 className="text-xl font-bold">{feature.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/facilities" className="btn-primary">View All Facilities</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom">
        <div className="bg-brand-primary rounded-[3rem] p-12 md:p-24 text-white text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
          
          <h2 className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight">
            Ready to Start Your Journey with Us?
          </h2>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Admissions are open for the academic session 2026-27. Join the best CBSE school in Sikar today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/apply" className="btn-secondary">Apply Online Now</Link>
            <Link to="/contact" className="bg-white text-brand-primary px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Contact Admissions</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
