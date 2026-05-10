import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Code2,
  ChevronRight,
  Layers,
  Cpu,
  Zap,
  ShieldCheck,
  Search,
  ArrowLeft,
  X
} from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { theoryData, TheoryTopic } from '@/data/theoryData';
import { Link } from 'react-router-dom';

export const TheoryHub = () => {
  const [selectedTopic, setSelectedTopic] = useState<TheoryTopic | null>(theoryData[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categories = ['All', 'Fundamental', 'Core Engineering', 'Architecture', 'Advanced'];

  const getCategoryCount = (category: string) => {
    if (category === 'All') return theoryData.length;
    return theoryData.filter(t => t.category === category).length;
  };

  const filteredData = theoryData.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.fullTheory.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || topic.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Fundamental': return <Layers className="w-4 h-4" />;
      case 'Core Engineering': return <Cpu className="w-4 h-4" />;
      case 'Architecture': return <Zap className="w-4 h-4" />;
      case 'Advanced': return <ShieldCheck className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex h-screen bg-nike-white text-nike-black font-sans overflow-hidden selection:bg-nike-black selection:text-nike-white">
      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-full md:w-[400px] bg-nike-white border-r border-nike-hairline flex flex-col h-screen transition-transform duration-300
        lg:relative lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-8 border-b border-nike-hairline flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display text-2xl uppercase tracking-tighter">FE - Theory</span>
          </Link>
          <button className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 border-b border-nike-hairline space-y-6">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:opacity-100 transition-opacity" />
            <input
              placeholder="Search Tracks..."
              className="w-full pl-10 pr-4 py-3 bg-nike-gray rounded-none border-none outline-none text-sm font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === cat
                  ? 'bg-nike-black text-nike-white'
                  : 'bg-nike-gray text-nike-black hover:bg-nike-hairline'
                  }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat} ({getCategoryCount(cat)})
              </button>
            ))}
          </div>
        </div>

        <div className="flex-grow overflow-y-auto custom-scrollbar">
          {filteredData.map(topic => (
            <button
              key={topic.id}
              onClick={() => {
                setSelectedTopic(topic);
                setIsSidebarOpen(false);
              }}
              className={`w-full text-left p-6 border-b border-nike-hairline transition-colors flex items-start gap-4 group ${selectedTopic?.id === topic.id ? 'bg-nike-gray' : 'hover:bg-nike-gray/50'
                }`}
            >
              <div className="p-3 bg-nike-white border border-nike-hairline group-hover:border-nike-black transition-colors">
                {getCategoryIcon(topic.category)}
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-sm uppercase tracking-tight mb-1">{topic.title}</h4>
                <p className="text-[11px] font-medium text-nike-mute line-clamp-1">{topic.description}</p>
              </div>
              <ChevronRight className={`w-4 h-4 self-center transition-transform ${selectedTopic?.id === topic.id ? 'translate-x-1' : 'opacity-20'}`} />
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow bg-nike-white overflow-y-auto custom-scrollbar relative">
        <AnimatePresence mode="wait">
          {selectedTopic ? (
            <motion.div
              key={selectedTopic.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-8 md:p-16 lg:p-24 max-w-5xl mx-auto"
            >
              <div className="space-y-8 mb-16">
                <span className="inline-block bg-nike-black text-nike-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                  {selectedTopic.category}
                </span>
                <h1 className="text-5xl md:text-8xl font-display uppercase tracking-tighter leading-[0.85]">
                  {selectedTopic.title}
                </h1>
                <p className="text-xl md:text-2xl font-medium text-nike-mute leading-relaxed">
                  {selectedTopic.description}
                </p>
              </div>

              <div className="space-y-20">
                <section className="space-y-8">
                  <div className="flex items-center gap-4 border-b border-nike-hairline pb-4">
                    <BookOpen className="w-6 h-6" />
                    <h3 className="text-2xl font-display uppercase tracking-tight">The Architecture</h3>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-lg md:text-xl font-medium text-nike-charcoal leading-relaxed">
                      {selectedTopic.fullTheory}
                    </p>
                  </div>
                </section>

                <section className="space-y-8">
                  <div className="flex items-center gap-4 border-b border-nike-hairline pb-4">
                    <Code2 className="w-6 h-6" />
                    <h3 className="text-2xl font-display uppercase tracking-tight">Implementation</h3>
                  </div>
                  <div className="bg-nike-gray p-1 border border-nike-hairline group">
                    <div className="bg-nike-white px-4 py-2 border-b border-nike-hairline flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase tracking-widest text-nike-mute">production_logic.js</span>
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-nike-hairline" />
                        <div className="w-2.5 h-2.5 rounded-full bg-nike-hairline" />
                      </div>
                    </div>
                    <SyntaxHighlighter
                      language="javascript"
                      style={atomDark}
                      customStyle={{
                        padding: '2rem',
                        fontSize: '14px',
                        background: '#111111',
                        borderRadius: '0'
                      }}
                    >
                      {selectedTopic.codeSnippet}
                    </SyntaxHighlighter>
                  </div>
                </section>

                <footer className="pt-20 border-t border-nike-hairline flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-nike-mute">
                  <span>© 2026 LEARNING THEORY</span>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="hover:text-nike-black transition-colors"
                  >
                    Back to Top
                  </button>
                </footer>
              </div>
            </motion.div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-12 text-center">
              <Zap className="w-16 h-16 mb-6 opacity-10" />
              <h2 className="text-4xl font-display uppercase tracking-tighter">Choose Your Path.</h2>
              <p className="text-nike-mute font-medium">Select a module from the track list to begin.</p>
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Mobile Toggle */}
      <button
        className="fixed bottom-6 right-6 lg:hidden w-14 h-14 bg-nike-black text-nike-white rounded-full flex items-center justify-center shadow-xl z-50"
        onClick={() => setIsSidebarOpen(true)}
      >
        <Search className="w-6 h-6" />
      </button>
    </div>
  );
};

export default TheoryHub;
