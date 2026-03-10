import React from 'react';
import { FileText, Calendar, CreditCard, Users, ShieldCheck, Star } from 'lucide-react';

export default function Academics() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-brand-primary text-white py-24">
        <div className="container-custom text-center space-y-4">
          <h1 className="text-5xl font-bold">Academics</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">A curriculum designed for the 21st century, focusing on excellence and innovation.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-24 space-y-24">
        {/* Academic Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Our Academic Approach</h2>
            <p className="text-slate-600 leading-relaxed">
              Prince Academy follows the CBSE curriculum with a focus on experiential learning. We believe in nurturing curiosity and encouraging students to think critically and solve problems creatively.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'CBSE Curriculum', icon: ShieldCheck },
                { title: 'Digital Classrooms', icon: FileText },
                { title: 'Expert Faculty', icon: Users },
                { title: 'Holistic Growth', icon: Calendar },
              ].map((item) => (
                <div key={item.title} className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                  <item.icon className="text-brand-secondary" size={20} />
                  <span className="font-semibold text-slate-700">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <img 
            src="https://picsum.photos/seed/classroom/800/600" 
            alt="Classroom" 
            className="rounded-3xl shadow-xl"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Quick Links / Documents */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Fee Structure', desc: 'Detailed breakdown of fees for the current academic year.', icon: CreditCard, link: '#' },
            { title: 'Academic Calendar', desc: 'Stay updated with important dates, holidays, and events.', icon: Calendar, link: '#' },
            { title: 'Mandatory Disclosure', desc: 'Public disclosure documents as per CBSE norms.', icon: FileText, link: '#' },
          ].map((item) => (
            <div key={item.title} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-4 hover:border-brand-primary transition-colors group">
              <div className="w-12 h-12 bg-white text-brand-primary rounded-xl flex items-center justify-center shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              <button className="text-brand-primary font-bold text-sm flex items-center hover:underline">
                Download PDF <FileText size={14} className="ml-2" />
              </button>
            </div>
          ))}
        </div>

        {/* Foundation Courses */}
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-white space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Foundation Courses</h2>
            <p className="text-slate-400">Preparing students for competitive exams from an early stage.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['UPSC', 'CUET', 'CLAT', 'ICAR'].map((course) => (
              <div key={course} className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-all">
                <h4 className="text-2xl font-bold text-brand-secondary mb-2">{course}</h4>
                <p className="text-slate-400 text-sm">Comprehensive coaching and guidance.</p>
              </div>
            ))}
          </div>
        </div>

        {/* Co-Curricular */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Co-Curricular Programs</h2>
            <p className="text-slate-600">Beyond academics, we focus on the overall growth of our students.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'National Stage', 'Felicitation Program', 'Subject Enrichment',
              'Prince Olympiad', 'Visionary Creative Space', 'Adhesion Meet'
            ].map((program) => (
              <div key={program} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center space-x-4">
                <div className="w-10 h-10 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center shrink-0">
                  <Star size={20} fill="currentColor" />
                </div>
                <span className="font-bold text-slate-700">{program}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
