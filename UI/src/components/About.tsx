import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    emoji: "💬",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    skills: ["C++", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Backend & Frameworks",
    emoji: "⚙️",
    color: "from-emerald-500/20 to-green-500/20",
    borderColor: "border-emerald-500/30",
    skills: ["Node.js", "Express.js", "React.js", "TypeScript"],
  },
  {
    title: "Databases & Cloud",
    emoji: "☁️",
    color: "from-purple-500/20 to-violet-500/20",
    borderColor: "border-purple-500/30",
    skills: ["PostgreSQL", "DynamoDB", "Redis", "AWS", "Lambda", "EC2", "RDS", "SQS", "SNS", "S3", "EventBridge"],
  },
  {
    title: "Tools & Observability",
    emoji: "🛠️",
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-500/30",
    skills: ["Docker", "GitHub", "Postman", "CloudFormation", "DynaTrace", "Splunk", "Control-M", "DPA"],
  },
  {
    title: "Coding",
    emoji: "🏆",
    color: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/30",
    skills: ["LeetCode (500+ problems solved)"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Journey</span> 🗺️
          </h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* XP Card */}
            <div className="glass rounded-2xl p-6 border border-zinc-800/50">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎮</span>
                <div>
                  <h3 className="text-white font-bold text-lg">Developer Stats</h3>
                  <p className="text-zinc-500 text-sm">Level: Mid-Level Engineer</p>
                </div>
              </div>

              {/* Achievement Badges */}
              <div className="flex flex-wrap gap-2">
                {["🐍 Python", "☕ Java", "⚛️ React", "🐳 Docker", "☁️ AWS"].map((badge, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                    className="px-3 py-1 bg-zinc-800/80 text-xs font-semibold rounded-full border border-zinc-700/50 text-zinc-300"
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="prose prose-invert prose-lg text-zinc-400">
              <p>
                I am highly active on <strong>LeetCode</strong> and have a strong, proven command over Data Structures and Algorithms (DSA) as well as SQL. I thrive on breaking down complex logical problems and writing optimized, efficient solutions. 💡
              </p>
              <p>
                Beyond building applications, I continuously sharpen my problem-solving skills to write better, faster code. Check out my profiles below! 👇
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://leetcode.com/u/Ronin_Hinokami/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass hover:bg-yellow-500/10 text-yellow-500 font-medium transition-all hover:scale-105 active:scale-95 border border-yellow-500/20"
              >
                🏆 LeetCode Profile
              </a>
              <a
                href="https://github.com/Hunter-Prash"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass hover:bg-zinc-800 text-white font-medium transition-all hover:scale-105 active:scale-95 border border-zinc-700/50"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57" />
                </svg>
                GitHub Profile
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">⚔️ Technical Arsenal</h3>
            <div className="flex flex-col gap-4">
              {skillCategories.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                  className={`rounded-xl p-5 border ${category.borderColor} bg-gradient-to-r ${category.color} backdrop-blur-sm hover:scale-[1.02] transition-transform cursor-default`}
                >
                  <h4 className="font-semibold mb-3 text-xs uppercase tracking-widest text-white/80 flex items-center gap-2">
                    <span>{category.emoji}</span> {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1.5 bg-zinc-900/60 hover:bg-zinc-800/80 transition-colors text-zinc-300 text-sm font-medium rounded-md border border-zinc-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
