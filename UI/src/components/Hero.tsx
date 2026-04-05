import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const titles = [
  "Full-Stack Developer",
  "Cloud Architect",
  "Problem Solver",
  "LeetCode Warrior",
  "API Craftsman",
];

function TypingText() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  return (
    <span className="text-gradient">
      {titles[titleIndex].slice(0, charIndex)}
      <span className="animate-pulse text-blue-400">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      {/* Floating code snippets */}
      <motion.div
        className="absolute top-32 left-10 glass rounded-lg px-4 py-2 text-xs font-mono text-blue-400/60 hidden lg:block border border-zinc-800/50"
        animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        const skills = ["🔥", "🚀"]
      </motion.div>
      <motion.div
        className="absolute top-60 right-16 glass rounded-lg px-4 py-2 text-xs font-mono text-purple-400/60 hidden lg:block border border-zinc-800/50"
        animate={{ y: [0, 20, 0], rotate: [2, -2, 2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        git push origin main ✨
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 glass rounded-lg px-4 py-2 text-xs font-mono text-emerald-400/60 hidden lg:block border border-zinc-800/50"
        animate={{ y: [0, -10, 0], rotate: [1, -3, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        npm run deploy 🚀
      </motion.div>
      <motion.div
        className="absolute top-44 right-1/3 glass rounded-lg px-4 py-2 text-xs font-mono text-yellow-400/60 hidden lg:block border border-zinc-800/50"
        animate={{ y: [0, 12, 0], rotate: [-1, 3, -1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      >
        sam build && sam deploy ☁️
      </motion.div>
      <motion.div
        className="absolute bottom-60 right-24 glass rounded-lg px-4 py-2 text-xs font-mono text-orange-400/60 hidden lg:block border border-zinc-800/50"
        animate={{ y: [0, -18, 0], rotate: [2, -1, 2] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      >
        aws configure --profile dev 🔑
      </motion.div>
      <motion.div
        className="absolute top-80 left-16 glass rounded-lg px-4 py-2 text-xs font-mono text-cyan-400/60 hidden lg:block border border-zinc-800/50"
        animate={{ y: [0, 14, 0], rotate: [-2, 1, -2] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
      >
        docker compose up -d 🐳
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-1/3 glass rounded-lg px-4 py-2 text-xs font-mono text-pink-400/60 hidden lg:block border border-zinc-800/50"
        animate={{ y: [0, -12, 0], rotate: [1, -2, 1] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      >
        aws lambda invoke --function ⚡
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10 pb-32">
        {/* Waving hand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <motion.span
            className="text-6xl inline-block"
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
          >
            👋
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-8 border border-zinc-800"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">Open to Opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-tight"
        >
          Hey, I'm <span className="text-gradient">Prashant</span> 🎯
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-2xl md:text-3xl font-semibold text-zinc-300 mb-6 h-10"
        >
          <TypingText />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          I'm a Software Engineer transitioning from a strong IT background.
          I leverage deep problem-solving skills to build scalable, beautiful web applications.
        </motion.p>

        {/* Stats bar - gamified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-10"
        >
          <div className="glass rounded-xl px-5 py-3 border border-zinc-800 flex items-center gap-3">
            <span className="text-2xl">🏆</span>
            <div className="text-left">
              <p className="text-white font-bold text-lg leading-tight">500+</p>
              <p className="text-zinc-500 text-xs">LC Problems</p>
            </div>
          </div>

          <div className="glass rounded-xl px-5 py-3 border border-zinc-800 flex items-center gap-3">
            <span className="text-2xl">☁️</span>
            <div className="text-left">
              <p className="text-white font-bold text-lg leading-tight">AWS</p>
              <p className="text-zinc-500 text-xs">Cloud Expert</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            🚀 View My Work
          </a>
          <a
            href="https://github.com/Hunter-Prash"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full glass text-white font-medium hover:bg-zinc-800/50 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
