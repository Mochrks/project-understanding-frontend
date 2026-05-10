import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen bg-nike-white text-nike-black font-sans selection:bg-nike-black selection:text-nike-white flex flex-col">
      {/* Simple Header */}
      <header className="px-6 md:px-12 h-24 flex items-center justify-between border-b border-nike-hairline">
        <Link to="/" className="font-display text-3xl uppercase tracking-tighter">
          LEARNING THEORY
        </Link>
        <div className="flex gap-8 font-black text-[10px] uppercase tracking-widest">
          <Link to="/theory" className="hover:opacity-50 transition-opacity">Frontend</Link>
          <Link to="/theory-be" className="hover:opacity-50 transition-opacity">Backend</Link>
        </div>
      </header>

      <main className="flex-grow">
        {/* Minimalist Hero */}
        <section className="px-6 md:px-12 py-32 md:py-48 border-b border-nike-hairline">
          <div className="max-w-5xl space-y-12">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="font-display text-8xl md:text-[180px] leading-[0.8] uppercase tracking-tighter"
            >
              LEARN. <br />
              BUILD. <br />
              MASTER.
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-4xl font-medium max-w-3xl text-nike-mute leading-tight"
            >
              Professional curriculum for modern fullstack development.
              Pure engineering knowledge, zero distractions.
            </motion.p>
          </div>
        </section>

        {/* Tracks Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          {/* Frontend */}
          <Link to="/theory" className="group p-12 md:p-24 border-b md:border-b-0 md:border-r border-nike-hairline hover:bg-nike-black hover:text-nike-white transition-all duration-500">
            <div className="space-y-12">
              <span className="font-display text-2xl opacity-40">01</span>
              <div className="space-y-4">
                <h2 className="font-display text-6xl md:text-8xl uppercase leading-none">Frontend <br /> Track</h2>
                <p className="text-lg opacity-60 font-medium max-w-sm">Master UI systems, React internals, and performance optimization.</p>
              </div>
              <div className="flex items-center gap-3 font-black text-xs uppercase tracking-widest">
                Start Learning <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Backend */}
          <Link to="/theory-be" className="group p-12 md:p-24 border-b md:border-b-0 border-nike-hairline hover:bg-nike-black hover:text-nike-white transition-all duration-500">
            <div className="space-y-12">
              <span className="font-display text-2xl opacity-40">02</span>
              <div className="space-y-4">
                <h2 className="font-display text-6xl md:text-8xl uppercase leading-none">Backend <br /> Track</h2>
                <p className="text-lg opacity-60 font-medium max-w-sm">Deep dive into database architecture, API engines, and systems.</p>
              </div>
              <div className="flex items-center gap-3 font-black text-xs uppercase tracking-widest">
                Start Learning <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="p-6 md:p-12 border-t border-nike-hairline flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-display text-xl tracking-tighter">LEARNING THEORY</div>
        <div className="flex gap-12 font-black text-[10px] uppercase tracking-widest opacity-40">
          <span>© COPYRIGHT 2026 MOCHRKS</span>

        </div>
      </footer>
    </div>
  );
};

export default Home;