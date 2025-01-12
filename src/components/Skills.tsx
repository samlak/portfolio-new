import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Brain } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["JavaScript", "HTML", "CSS", "Typescript", "Python", "Solidity"]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["MongoDB", "Supabase", "PostgreSQL",]
    },
    {
      title: "AI & ML",
      icon: <Brain size={24} />,
      skills: ["Prompt Engineering", "LangChain", "RAG", "LLM", "Fine-tuning"]
    },
    {
      title: "Libraries & Tools",
      icon: <Code size={24} />,
      skills: ["React JS", "Node JS", "Next JS", "Tailwind CSS", "Matplotlib", "Pandas" ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#1a0b2e]">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Skills & Expertise
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#2f1c4a]/50 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="p-6 bg-[#2f1c4a]/30 rounded-xl text-center border border-purple-500/20">
            <h3 className="text-4xl font-bold text-purple-400 mb-2">6+</h3>
            <p className="text-purple-200/80">Years Experience</p>
          </div>
          <div className="p-6 bg-[#2f1c4a]/30 rounded-xl text-center border border-purple-500/20">
            <h3 className="text-4xl font-bold text-purple-400 mb-2">10+</h3>
            <p className="text-purple-200/80">AI Applications</p>
          </div>
          <div className="p-6 bg-[#2f1c4a]/30 rounded-xl text-center border border-purple-500/20">
            <h3 className="text-4xl font-bold text-purple-400 mb-2">500K+</h3>
            <p className="text-purple-200/80">Users Impacted</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;