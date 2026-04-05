import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-10 md:p-16 border border-zinc-800/80 shadow-2xl relative overflow-hidden"
        >
          {/* Animated corner decorations */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px]"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 blur-[50px]"></div>

          <motion.span
            className="text-6xl inline-block mb-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            🤝
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Let's build something <span className="text-gradient">together</span> ✨
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            I'm currently seeking a full-time Software Engineering role where I can bring my technical support experience and coding skills to a high-impact team. Let's connect! 🚀
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <motion.a
              href="mailto:rajaji.prashant@gmail.com"
              className="px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              👋 Say Hello
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/prashant-rajaji"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full glass hover:bg-zinc-800/50 text-white font-bold text-lg transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              LinkedIn Profile
            </motion.a>
          </div>

          <p className="mt-8 text-zinc-400 text-sm font-bold relative z-10">
            📬 rajaji.prashant@gmail.com
          </p>
        </motion.div>

        <footer className="mt-20 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm flex items-center gap-2">
            Made with <span className="text-red-400 animate-pulse">❤️</span> by Prashant · © {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors hover:scale-110 inline-block">
              LinkedIn
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors hover:scale-110 inline-block">
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
