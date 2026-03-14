import React from 'react';
import { Calendar, ArrowRight, Newspaper, Bell, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    id: 1,
    title: 'Annual Sports Meet 2026 Announced',
    date: 'March 25, 2026',
    category: 'Sports',
    excerpt: 'The much-awaited Annual Sports Meet is scheduled to take place from March 25th to 28th. Students are encouraged to participate in various track and field events.',
    image: 'https://picsum.photos/seed/sports-news/800/400'
  },
  {
    id: 2,
    title: 'Science Exhibition: Innovate 2.0',
    date: 'April 05, 2026',
    category: 'Academic',
    excerpt: 'Our students will showcase their innovative projects and scientific experiments at the upcoming Science Exhibition. Join us to witness the future of technology.',
    image: 'https://picsum.photos/seed/science-news/800/400'
  },
  {
    id: 3,
    title: 'Admissions Open for Session 2026-27',
    date: 'Ongoing',
    category: 'Admission',
    excerpt: 'Prince Academy is now accepting applications for the new academic session. Limited seats available for classes Nursery to IX and XI.',
    image: 'https://picsum.photos/seed/admission-news/800/400'
  },
  {
    id: 4,
    title: 'International Yoga Day Celebration',
    date: 'June 21, 2026',
    category: 'Event',
    excerpt: 'A special yoga session will be organized for students and faculty to promote physical and mental well-being.',
    image: 'https://picsum.photos/seed/yoga-news/800/400'
  }
];

export default function News() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-brand-primary text-white py-24">
        <div className="container-custom text-center space-y-4">
          <h1 className="text-5xl font-bold">News & Events</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">Stay updated with the latest happenings, announcements, and achievements at Prince Academy.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* News Feed */}
          <div className="lg:col-span-2 space-y-12">
            {newsItems.map((news, idx) => (
              <motion.article 
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 group"
              >
                <div className="relative h-64 md:h-96 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-brand-secondary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {news.category}
                  </div>
                </div>
                <div className="p-8 md:p-12 space-y-6">
                  <div className="flex items-center text-slate-400 text-sm">
                    <Calendar size={16} className="mr-2" />
                    {news.date}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 group-hover:text-brand-primary transition-colors leading-tight">
                    {news.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {news.excerpt}
                  </p>
                  <Link to={`/news/${news.id}`} className="inline-flex items-center text-brand-primary font-bold group/link">
                    Read Full Article <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-12">
            {/* Search or Filter */}
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 space-y-6">
              <h3 className="text-xl font-bold flex items-center">
                <Bell size={20} className="mr-2 text-brand-secondary" />
                Quick Notifications
              </h3>
              <ul className="space-y-4">
                {[
                  'Holiday on March 20th for Holi.',
                  'Parent-Teacher Meeting on Saturday.',
                  'Uniform distribution starts Monday.',
                  'New bus routes added for Sikar city.'
                ].map((note, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-slate-600">
                    <Info size={16} className="text-brand-primary shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {['Academic', 'Sports', 'Admission', 'Event', 'Achievements', 'Campus'].map((cat) => (
                  <button key={cat} className="px-4 py-2 rounded-xl bg-slate-50 text-slate-600 text-sm font-semibold hover:bg-brand-primary hover:text-white transition-all">
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-brand-primary p-8 rounded-[2rem] text-white space-y-6">
              <h3 className="text-xl font-bold">Subscribe to Newsletter</h3>
              <p className="text-blue-100 text-sm">Get the latest news and updates delivered to your inbox.</p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                />
                <button className="w-full btn-secondary py-3">Subscribe Now</button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
