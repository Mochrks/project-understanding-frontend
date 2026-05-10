import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database,
  Terminal,
  ChevronRight,
  Activity,
  Cpu,
  Code2,
  Search,
  ArrowLeft,
  X,
  Server,
  Workflow,
  Zap,
  ShieldCheck,
} from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { beTheoryData, BeTheoryTopic } from '@/data/beTheoryData';
import { Link } from 'react-router-dom';

export const BeTheoryHub = () => {
  const [selectedTopic, setSelectedTopic] = useState<BeTheoryTopic | null>(beTheoryData[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSelectTopic = (topic: BeTheoryTopic) => {
    setSelectedTopic(topic);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = ['All', ...Array.from(new Set(beTheoryData.map(t => t.category)))];

  const getCategoryCount = (category: string) => {
    if (category === 'All') return beTheoryData.length;
    return beTheoryData.filter(t => t.category === category).length;
  };

  const filteredData = beTheoryData.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.fullTheory.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || topic.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Fundamental Backend': return <Terminal className="w-4 h-4" />;
      case 'Basic Logic Backend': return <Cpu className="w-4 h-4" />;
      case 'Spring Boot': return <Database className="w-4 h-4" />;
      case 'DevOps': return <Workflow className="w-4 h-4" />;
      case 'Dockerize': return <Zap className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
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
            <span className="font-display text-2xl uppercase tracking-tighter">BE - Theory</span>
          </Link>
          <button className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 border-b border-nike-hairline space-y-6">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:opacity-100 transition-opacity" />
            <input
              placeholder="Search Backend Tracks..."
              className="w-full pl-10 pr-4 py-3 bg-nike-gray rounded-none border-none outline-none text-sm font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
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
              onClick={() => handleSelectTopic(topic)}
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

      {/* Main Content Area */}
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
                <p className="text-xl md:text-2xl font-medium text-nike-mute leading-relaxed border-l-4 border-nike-black pl-8 italic">
                  "{selectedTopic.description}"
                </p>
              </div>

              <div className="space-y-20">
                <section className="space-y-8">
                  <div className="flex items-center gap-4 border-b border-nike-hairline pb-4">
                    <Terminal className="w-6 h-6" />
                    <h3 className="text-2xl font-display uppercase tracking-tight">Core Principles</h3>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-lg md:text-2xl font-medium text-nike-charcoal leading-relaxed tracking-tight">
                      {selectedTopic.fullTheory}
                    </p>
                  </div>
                </section>

                <section className="space-y-8">
                  <div className="flex items-center gap-4 border-b border-nike-hairline pb-4">
                    <Code2 className="w-6 h-6" />
                    <h3 className="text-2xl font-display uppercase tracking-tight">Backend Implementation</h3>
                  </div>
                  <div className="bg-nike-black p-1 group">
                    <div className="bg-white/5 px-6 py-3 border-b border-white/10 flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">high-performance-logic.ts</span>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                      </div>
                    </div>
                    <SyntaxHighlighter
                      language="javascript"
                      style={atomDark}
                      customStyle={{
                        padding: '2.5rem',
                        fontSize: '15px',
                        lineHeight: '1.8',
                        background: 'transparent',
                        borderRadius: '0'
                      }}
                    >
                      {selectedTopic.codeSnippet}
                    </SyntaxHighlighter>
                  </div>
                </section>

                <footer className="pt-24 pb-12 border-t border-nike-hairline flex flex-col md:flex-row items-center justify-between gap-8 text-nike-mute">
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-xs font-black uppercase tracking-[0.3em]">BE - THEORY</span>
                    </div>
                    <p className="text-[10px] font-bold tracking-widest">© 2026 LEARNING THEORY</p>
                  </div>
                  <button
                    className="group flex flex-col items-center text-[10px] font-black uppercase tracking-[0.4em] gap-2 hover:text-nike-black transition-colors"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <ChevronRight className="w-4 h-4 -rotate-90 group-hover:-translate-y-1 transition-transform" />
                    Back to Top
                  </button>
                </footer>
              </div>
            </motion.div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-12 text-center">
              <Server className="w-20 h-20 mb-8 opacity-10 animate-pulse" />
              <h2 className="text-5xl font-display uppercase tracking-tighter">System Ready.</h2>
              <p className="text-nike-mute font-medium uppercase tracking-widest text-sm">Select an architectural pillar to begin implementation.</p>
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

export default BeTheoryHub;
