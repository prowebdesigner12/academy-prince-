import React from 'react';
import { ClipboardCheck, UserPlus, FileText, CheckCircle } from 'lucide-react';

export default function Apply() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-brand-primary text-white py-24">
        <div className="container-custom text-center space-y-4">
          <h1 className="text-5xl font-bold">Admission Application</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">Take the first step towards a bright future. Apply online for the academic session 2026-27.</p>
        </div>
      </section>

      <section className="container-custom py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Instructions */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-6">
              <h3 className="text-xl font-bold flex items-center">
                <ClipboardCheck className="mr-2 text-brand-primary" /> Application Process
              </h3>
              <ul className="space-y-6">
                {[
                  { step: '01', title: 'Fill Form', desc: 'Complete the online application form with accurate details.' },
                  { step: '02', title: 'Upload Docs', desc: 'Upload required documents like birth certificate and previous results.' },
                  { step: '03', title: 'Pay Fee', desc: 'Pay the registration fee online through our secure portal.' },
                  { step: '04', title: 'Interview', desc: 'Wait for our team to contact you for an interaction/interview.' },
                ].map((item) => (
                  <li key={item.step} className="flex space-x-4">
                    <span className="text-2xl font-bold text-brand-primary/20">{item.step}</span>
                    <div>
                      <h4 className="font-bold text-slate-800">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-brand-secondary/10 p-8 rounded-3xl border border-brand-secondary/20 space-y-4">
              <h4 className="font-bold text-brand-secondary flex items-center">
                <FileText className="mr-2" /> Required Documents
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center"><CheckCircle size={14} className="mr-2 text-brand-secondary" /> Birth Certificate</li>
                <li className="flex items-center"><CheckCircle size={14} className="mr-2 text-brand-secondary" /> Previous Class Marksheet</li>
                <li className="flex items-center"><CheckCircle size={14} className="mr-2 text-brand-secondary" /> Transfer Certificate (TC)</li>
                <li className="flex items-center"><CheckCircle size={14} className="mr-2 text-brand-secondary" /> Passport Size Photographs</li>
                <li className="flex items-center"><CheckCircle size={14} className="mr-2 text-brand-secondary" /> Aadhar Card Copy</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100">
            <form className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold border-b pb-2">Student Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Student's Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Date of Birth</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Gender</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Class Seeking Admission</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all">
                      <option>Nursery</option>
                      <option>LKG / UKG</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                        <option key={num}>Class {num}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold border-b pb-2">Parent Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Father's Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Mother's Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Mobile Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center py-4 text-lg">
                Submit Application <UserPlus size={20} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
