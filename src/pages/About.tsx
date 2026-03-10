import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Eye, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-brand-primary text-white py-24">
        <div className="container-custom text-center space-y-4">
          <h1 className="text-5xl font-bold">About Prince Academy</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">Discover our legacy of excellence and our commitment to shaping the leaders of tomorrow.</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container-custom py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img 
            src="https://picsum.photos/seed/school-building/800/600" 
            alt="Prince Academy Building" 
            className="rounded-3xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
            <p className="text-4xl font-bold text-brand-primary">25+</p>
            <p className="text-slate-500 font-medium">Years of Excellence</p>
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="text-3xl font-bold uppercase tracking-tight">A World Class School With A Difference</h2>
          <p className="text-slate-600 leading-relaxed">
            The Academy Campus is sprawled over 100 bighas of land with modern architecture and wide space. The location, climate, and infrastructure is very conducive and eco-friendly for a healthy academic life. It is located only 3km away from the main city, free from the hustle-bustle and pollution of the city, situated at the Jaipur-Bikaner highway in an extremely peaceful area.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Prince Academy was envisaged as a co-educational English medium school with a new approach, established by PRINCE ACADEMY OF HIGHER EDUCATION. It is a purpose-built school; it has learning spaces to support the child and respect their expression of individuality.
          </p>
          <p className="text-slate-600 leading-relaxed font-medium">
            Parents no longer need to worry about extracurricular activities and developing hobbies for their wards, as Prince Academy shall surely provide them with the best environment for these activities during school hours.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-slate-100 py-24">
        <div className="container-custom grid md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-[2rem] shadow-sm space-y-6">
            <div className="w-16 h-16 bg-blue-50 text-brand-primary rounded-2xl flex items-center justify-center">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To create a future-ready learning ecosystem where academic excellence, innovation, integrity and character-building unite to shape confident, responsible and globally aware individuals.
            </p>
          </div>
          <div className="bg-white p-12 rounded-[2rem] shadow-sm space-y-6">
            <div className="w-16 h-16 bg-amber-50 text-brand-secondary rounded-2xl flex items-center justify-center">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To provide a holistic, value-driven and intellectually stimulating educational environment. To nurture critical thinkers, problem-solvers and lifelong learners equipped with modern skills and strong ethics. To cultivate discipline, creativity, leadership and respect for cultural diversity.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container-custom py-24 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Why Choose Prince Academy?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We offer more than just academics; we offer a foundation for life.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            'Experienced & Dedicated Faculty',
            'Modern Infrastructure & Labs',
            'Focus on Holistic Development',
            'Excellent Academic Results',
            'Safe & Secure Campus',
            'Extensive Sports Facilities',
          ].map((item, idx) => (
            <div key={item} className="flex items-center space-x-4 p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
              <CheckCircle className="text-brand-accent shrink-0" />
              <span className="font-semibold text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Desks */}
      <section className="container-custom py-24 space-y-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">From the Chairman's Desk</h2>
            <p className="text-slate-600 italic leading-relaxed">
              "Education is not just about learning facts, but training the mind to think. At Prince Academy, we strive to create an environment where every child feels valued and inspired to reach their full potential."
            </p>
            <div>
              <p className="font-bold text-brand-primary">Dr. Piyush Schand</p>
              <p className="text-sm text-slate-500">Chairman, Prince Academy</p>
            </div>
          </div>
          <img 
            src="https://picsum.photos/seed/chairman/600/400" 
            alt="Chairman" 
            className="rounded-3xl shadow-lg"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <img 
            src="https://picsum.photos/seed/director/600/400" 
            alt="Director" 
            className="rounded-3xl shadow-lg order-2 lg:order-1"
            referrerPolicy="no-referrer"
          />
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl font-bold">From the Director's Desk</h2>
            <p className="text-slate-600 italic leading-relaxed">
              "Our focus is on providing a balanced education that combines academic rigor with creative expression and physical well-being. We are proud of our students' achievements and their growth as individuals."
            </p>
            <div>
              <p className="font-bold text-brand-primary">Mr. Jogendra Singh</p>
              <p className="text-sm text-slate-500">Director, Prince Academy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
