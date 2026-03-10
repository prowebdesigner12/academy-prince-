import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-brand-primary text-white py-24">
        <div className="container-custom text-center space-y-4">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">We are here to help. Reach out to us for any queries or information.</p>
        </div>
      </section>

      <section className="container-custom py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Get in Touch</h2>
              <p className="text-slate-600">Our team is available to assist you with admissions, academics, and more.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 text-brand-primary rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-slate-500 text-sm">Jaipur Bikaner Bypass, On Palwas Road, Sikar, Rajasthan - 332001</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-50 text-brand-secondary rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-slate-500 text-sm">9610-75-2222, 9610-76-2222</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-50 text-brand-accent rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-slate-500 text-sm">princeacademy31@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Office Hours</h4>
                  <p className="text-slate-500 text-sm">Mon - Sat: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h4 className="font-bold mb-4 text-brand-primary">Key Contacts</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between"><span>M.R. Agarwal (MD)</span> <span className="font-semibold">+91 98287 07938</span></li>
                <li className="flex justify-between"><span>Ms. Poonam Chauhan (Principal)</span> <span className="font-semibold">+91 96102 43938</span></li>
                <li className="flex justify-between"><span>Dharmpal (Academic Head)</span> <span className="font-semibold">+91 90017 59938</span></li>
                <li className="flex justify-between"><span>Dinesh Sharma (Coord. X)</span> <span className="font-semibold">+91 97999 37938</span></li>
                <li className="flex justify-between"><span>Neha Panwar (Coord. VII-IX)</span> <span className="font-semibold">+91 99504 76938</span></li>
                <li className="flex justify-between"><span>Karuna Yadav (Coord. Mont-VI)</span> <span className="font-semibold">+91 90017 91938</span></li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" placeholder="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all">
                    <option>General Inquiry</option>
                    <option>Admission Query</option>
                    <option>Academic Query</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center">
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="container-custom">
        <div className="w-full h-[400px] bg-slate-200 rounded-[3rem] overflow-hidden shadow-inner flex items-center justify-center text-slate-400">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4 opacity-20" />
            <p className="font-bold">Interactive Map Placeholder</p>
            <p className="text-sm">Ring Road, Sikar, Rajasthan</p>
          </div>
        </div>
      </section>
    </div>
  );
}
