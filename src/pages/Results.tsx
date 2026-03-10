import React from 'react';
import { Trophy, Award, Star, CheckCircle } from 'lucide-react';

const results = [
  { year: '2025', title: 'CBSE Class XII Result', stats: '100% Pass Percentage, 45+ Students above 95%' },
  { year: '2025', title: 'CBSE Class X Result', stats: '100% Pass Percentage, 60+ Students above 95%' },
  { year: '2025', title: 'CUET Results', stats: 'Top ranks in various streams.' },
  { year: '2024', title: 'CBSE Class XII Result', stats: 'Outstanding performance with multiple state toppers.' },
  { year: '2024', title: 'CBSE Class X Result', stats: 'Exceptional results with high average score.' },
];

export default function Results() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-brand-primary text-white py-24">
        <div className="container-custom text-center space-y-4">
          <h1 className="text-5xl font-bold">Academic Results</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">Celebrating the hard work and success of our brilliant students.</p>
        </div>
      </section>

      {/* Results List */}
      <section className="container-custom py-24 space-y-12">
        <div className="grid gap-8">
          {results.map((result, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center gap-8 hover:shadow-md transition-shadow">
              <div className="w-24 h-24 bg-blue-50 text-brand-primary rounded-2xl flex flex-col items-center justify-center shrink-0">
                <span className="text-xs font-bold uppercase">Year</span>
                <span className="text-2xl font-bold">{result.year}</span>
              </div>
              <div className="space-y-2 flex-grow">
                <h3 className="text-2xl font-bold text-slate-800">{result.title}</h3>
                <p className="text-slate-600">{result.stats}</p>
              </div>
              <button className="btn-primary py-2 px-6 text-sm whitespace-nowrap">View Detailed List</button>
            </div>
          ))}
        </div>

        {/* Toppers Section */}
        <div className="bg-slate-50 rounded-[3rem] p-12 md:p-24 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Our Shining Stars</h2>
            <p className="text-slate-500">Meet some of our top performers who have made us proud.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center space-y-4">
                <div className="relative inline-block">
                  <img 
                    src={`https://picsum.photos/seed/student-${i}/200/200`} 
                    alt="Topper" 
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-brand-secondary text-white p-1.5 rounded-full shadow-lg">
                    <Trophy size={16} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Student Name</h4>
                  <p className="text-brand-primary font-bold text-lg">98.6%</p>
                  <p className="text-slate-500 text-xs uppercase tracking-wider">Class XII - 2025</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
