import React from 'react';
import { Trophy, Target, Activity, Users, Star } from 'lucide-react';

const sports = [
  { name: 'Cricket Academy', desc: 'Professional pitch and coaching for aspiring cricketers.' },
  { name: 'Basketball', desc: 'Standard courts with regular practice sessions.' },
  { name: 'Shooting Range', desc: 'Precision training with safety and expert guidance.' },
  { name: 'Yoga & Aerobics', desc: 'Focusing on mental and physical flexibility.' },
  { name: 'Football', desc: 'Large grounds for team play and tournaments.' },
  { name: 'Wrestling & Boxing', desc: 'Specialized training for combat sports.' },
];

export default function Sports() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-brand-primary text-white py-24">
        <div className="container-custom text-center space-y-4">
          <h1 className="text-5xl font-bold">Sports & Athletics</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">Building champions on and off the field through dedication and discipline.</p>
        </div>
      </section>

      {/* Overview */}
      <section className="container-custom py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">Excellence in <span className="text-brand-secondary">Sports</span></h2>
          <p className="text-slate-600 leading-relaxed">
            At Prince Academy, we believe that sports are integral to a student's development. Our sports program is designed to identify and nurture talent, providing students with the best coaching and facilities to excel at state and national levels.
          </p>
          <div className="space-y-4">
            {[
              'Professional Coaches for all disciplines',
              'Regular State and National level participation',
              'Specialized training camps',
              'Modern equipment and infrastructure',
            ].map((item) => (
              <div key={item} className="flex items-center space-x-3 text-slate-700 font-medium">
                <div className="w-6 h-6 bg-brand-accent/20 text-brand-accent rounded-full flex items-center justify-center">
                  <Star size={14} fill="currentColor" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://picsum.photos/seed/cricket/400/500" alt="Cricket" className="rounded-2xl shadow-lg w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="space-y-4">
            <img src="https://picsum.photos/seed/basketball/400/240" alt="Basketball" className="rounded-2xl shadow-lg w-full h-full object-cover" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/football/400/240" alt="Football" className="rounded-2xl shadow-lg w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="bg-slate-50 py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sports.map((sport) => (
              <div key={sport.name} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-brand-primary transition-all group">
                <div className="w-12 h-12 bg-blue-50 text-brand-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Trophy size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{sport.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{sport.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="container-custom py-24">
        <div className="bg-brand-secondary rounded-[3rem] p-12 md:p-24 text-white text-center space-y-8">
          <h2 className="text-4xl font-bold">Our Sporting Achievements</h2>
          <p className="text-amber-100 max-w-2xl mx-auto">Our students have consistently brought laurels to the academy at various levels of competition.</p>
          <div className="grid sm:grid-cols-3 gap-12">
            <div>
              <p className="text-5xl font-bold mb-2">150+</p>
              <p className="text-amber-100 font-medium">State Level Medals</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">45+</p>
              <p className="text-amber-100 font-medium">National Players</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">10+</p>
              <p className="text-amber-100 font-medium">International Participations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
