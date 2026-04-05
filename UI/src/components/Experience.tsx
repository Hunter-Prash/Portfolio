import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Tata Consultancy Services (TCS)",
    role: "IT Infrastructure Support Engineer",
    period: "Jan 2022 – Present",
    location: "India",
    emoji: "🏢",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    highlights: [
      "Managed and monitored production infrastructure for enterprise clients across AWS (EC2, Lambda, S3, RDS), ensuring 99.9% uptime SLA compliance.",
      "Built automation scripts to reduce manual triage and incident response time by 40%.",
      "Leveraged DynaTrace, Splunk, and CloudWatch for real-time observability, proactive alerting, and root cause analysis across distributed microservices.",
      "Administered Control-M job scheduling for batch processing workflows, reducing job failures by 25% through proactive monitoring.",
      "Collaborated with cross-functional development teams to troubleshoot and resolve critical P1/P2 incidents in production environments.",
      "Worked with DynamoDB, PostgreSQL, and Redis for database health monitoring, query optimization, and backup management.",
    ],
    tech: ["AWS", "DynaTrace", "Splunk", "Control-M", "CloudFormation", "Docker"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-gradient">Experience</span> 💼
          </h2>
          <div className="w-20 h-1 bg-cyan-500 rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent hidden md:block"></div>

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative md:pl-20 mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 top-8 -translate-x-1/2 hidden md:block">
                <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]"></div>
              </div>

              {/* Experience Card */}
              <div className={`rounded-2xl p-8 border ${exp.borderColor} bg-gradient-to-br ${exp.color} backdrop-blur-sm relative overflow-hidden`}>
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 blur-[60px] pointer-events-none"></div>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{exp.emoji}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                      <p className="text-blue-400 font-semibold mt-1">{exp.role}</p>
                      <p className="text-zinc-500 text-sm mt-1 flex items-center gap-2">
                        📅 {exp.period} &nbsp;·&nbsp; 📍 {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Status badge */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-emerald-500/30 self-start">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">Current</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed"
                    >
                      <span className="text-blue-400 mt-1 shrink-0">▹</span>
                      {highlight}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/50">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-zinc-900/60 text-zinc-300 text-xs font-semibold rounded-md border border-zinc-700/50"
                    >
                      {tech}
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
