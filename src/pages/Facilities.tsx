import React from 'react';
import { Shield, Music, Home, Truck, Waves, Activity, Book, Coffee, Palette, Cpu } from 'lucide-react';

const facilities = [
  { name: 'NCC', icon: Shield, desc: 'Developing character, discipline, and leadership qualities.' },
  { name: 'Musical Band', icon: Music, desc: 'Professional training in various musical instruments.' },
  { name: 'Hostels', icon: Home, desc: 'Comfortable and secure residential facilities for boys and girls.' },
  { name: 'Transportation', icon: Truck, desc: 'Safe and reliable bus service covering major routes.' },
  { name: 'Swimming Pool', icon: Waves, desc: 'International standard pool with professional coaching.' },
  { name: 'Gymnasium', icon: Activity, desc: 'Modern fitness equipment for physical well-being.' },
  { name: 'Library', icon: Book, desc: 'Extensive collection of books, journals, and digital resources.' },
  { name: 'Cafeteria', icon: Coffee, desc: 'Hygienic and nutritious meals for students and staff.' },
  { name: 'Dance & Music', icon: Palette, desc: 'Creative spaces for performing arts and expression.' },
  { name: 'AI-Robotics', icon: Cpu, desc: 'Cutting-edge technology lab for future-ready skills.' },
];

export default function Facilities() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-brand-primary text-white py-24">
        <div className="container-custom text-center space-y-4">
          <h1 className="text-5xl font-bold">Campus Facilities</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">Our world-class infrastructure supports every aspect of a student's growth.</p>
        </div>
      </section>

      {/* Grid */}
      <section className="container-custom py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((item, idx) => (
            <div key={item.name} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-50 text-brand-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden">
        <div className="container-custom space-y-12">
          <div className="flex justify-between items-end">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Campus Life in Pictures</h2>
              <p className="text-slate-400">A glimpse into the vibrant life at Prince Academy.</p>
            </div>
            <button className="btn-secondary hidden md:block">View Full Gallery</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden group relative">
                <img 
                  src={`https://picsum.photos/seed/facility-${i}/400/400`} 
                  alt={`Facility ${i}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
