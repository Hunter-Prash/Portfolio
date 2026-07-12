import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaJava, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiSpringboot } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    title: 'LogStream',
    emoji: '💻',
    description: "It's a full stack platform used to analyze logs coming from various applications fully hosted on AWS. Helps teams reduce manual triaging times of incidents.",
    tech: [
      { name: 'React', icon: <FaReact className="text-sm" />, color: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20' },
      { name: 'Node.js', icon: <FaNodeJs className="text-sm" />, color: 'text-green-400 bg-green-400/10 border-green-400/20' },
      { name: 'TypeScript', icon: <SiTypescript className="text-sm" />, color: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-sm" />, color: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20' },
      { name: 'AWS (Lambda, RDS, EventBridge, SQS, SNS, ECR, ECS)', icon: <FaAws className="text-sm" />, color: 'text-orange-400 bg-orange-400/10 border-orange-400/20' }
    ],
    link: 'https://logstream-frontend.vercel.app',
    github: '#',
    color: 'from-cyan-500/10 to-rose-500/10',
    borderHover: 'hover:border-rose-500/50',
    detailPage: '/project/logstream',
  },
  {
    title: 'Payment Gateway',
    emoji: '💳',
    description: "A robust payment gateway integration handling secure transactions and high throughput processing.",
    upcoming: true,
    tech: [
      { name: 'Java', icon: <FaJava className="text-sm" />, color: 'text-red-400 bg-red-400/10 border-red-400/20' },
      { name: 'Spring Boot', icon: <SiSpringboot className="text-sm" />, color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
      { name: 'AWS', icon: <FaAws className="text-sm" />, color: 'text-orange-400 bg-orange-400/10 border-orange-400/20' },
      { name: 'Docker', icon: <FaDocker className="text-sm" />, color: 'text-blue-400 bg-blue-400/10 border-blue-400/20' }
    ],
    link: '#',
    github: '#',
    color: 'from-rose-500/10 to-cyan-500/10',
    borderHover: 'hover:border-cyan-500/50',
  },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 relative border-y border-zinc-800/30">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Work</span> 🏗️
          </h2>
          <div className="w-20 h-1 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.5)]"></div>
          <p className="text-zinc-400 mt-6 max-w-2xl text-lg">
            A showcase of my completed projects and works. 🚀
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              onClick={() => project.detailPage && window.open(project.detailPage, '_blank')}
              className={`group rounded-2xl border border-zinc-800 ${project.borderHover} transition-all ${project.detailPage ? 'cursor-pointer' : ''} hover:shadow-xl relative overflow-hidden`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Project Header with emoji */}
              <div className="h-40 bg-zinc-900/50 relative overflow-hidden flex items-center justify-center border-b border-zinc-800/50">
                <motion.span
                  className="text-6xl block"
                  whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                  transition={{ type: "spring" }}
                >
                  {project.emoji}
                </motion.span>
                
                {project.upcoming && (
                  <div className="absolute top-3 left-3 glass rounded-lg px-3 py-1 border border-cyan-500/50 flex items-center gap-1 z-20 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                    <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">🚀 Upcoming</span>
                  </div>
                )}
              </div>

              <div className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="px-2 py-1 text-[10px] font-bold rounded bg-rose-500/10 text-rose-400 border border-rose-500/30 hover:bg-rose-500/20 hover:border-rose-500/50 hover:shadow-[0_0_10px_rgba(244,63,94,0.4)] transition-all uppercase tracking-wide">
                      Code
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="px-2 py-1 text-[10px] font-bold rounded bg-rose-500/10 text-rose-400 border border-rose-500/30 hover:bg-rose-500/20 hover:border-rose-500/50 hover:shadow-[0_0_10px_rgba(244,63,94,0.4)] transition-all uppercase tracking-wide">
                      Live Demo
                    </a>
                  </div>
                </div>
                <p className="text-zinc-400 mb-5 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((techItem, techIdx) => (
                    <span key={techIdx} className={`px-2.5 py-1 text-xs font-semibold flex items-center gap-1.5 rounded-md border ${techItem.color}`}>
                      {techItem.icon}
                      {techItem.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
