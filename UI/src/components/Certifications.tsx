import { motion } from 'framer-motion';
import { FaAws, FaExternalLinkAlt } from 'react-icons/fa';
import { SiGooglecloud } from 'react-icons/si';
import { MdVerified } from 'react-icons/md';

const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "Issued Mar 2025",
    credentialUrl: "#",
    icon: <FaAws className="text-3xl text-orange-400" />,
    color: "from-orange-500/15 to-amber-500/15",
    borderColor: "border-orange-500/30",
    badge: "☁️",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Issued Jan 2024",
    credentialUrl: "#",
    icon: <FaAws className="text-3xl text-orange-400" />,
    color: "from-orange-500/15 to-yellow-500/15",
    borderColor: "border-orange-500/30",
    badge: "⭐",
  },
  {
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI & AWS",
    date: "Issued Dec 2024",
    credentialUrl: "#",
    icon: <SiGooglecloud className="text-3xl text-blue-400" />,
    color: "from-purple-500/15 to-pink-500/15",
    borderColor: "border-purple-500/30",
    badge: "🤖",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "Issued Nov 2024",
    credentialUrl: "#",
    icon: <SiGooglecloud className="text-3xl text-blue-400" />,
    color: "from-blue-500/15 to-cyan-500/15",
    borderColor: "border-blue-500/30",
    badge: "✨",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications <span className="text-gradient">&amp; Courses</span> 🎓
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
          <p className="text-zinc-400 mt-6 max-w-2xl text-lg">
            Verified credentials that back up my skills. Click to view each credential.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.a
              key={idx}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`group rounded-2xl p-6 border ${cert.borderColor} bg-gradient-to-br ${cert.color} backdrop-blur-sm hover:scale-[1.03] transition-all cursor-pointer relative overflow-hidden block`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex items-start gap-4 relative z-10">
                {/* Icon */}
                <div className="glass rounded-xl p-3 border border-zinc-700/50 shrink-0">
                  {cert.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-white font-bold text-lg leading-snug group-hover:text-blue-400 transition-colors">
                      {cert.badge} {cert.title}
                    </h3>
                    <FaExternalLinkAlt className="text-zinc-600 group-hover:text-blue-400 transition-colors shrink-0 mt-1" />
                  </div>
                  <p className="text-zinc-400 text-sm mt-2 flex items-center gap-1.5">
                    <MdVerified className="text-blue-400 shrink-0" />
                    {cert.issuer}
                  </p>
                  <p className="text-zinc-500 text-xs mt-1">{cert.date}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
