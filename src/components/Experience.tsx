import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      company: 'Penmaniacs',
      role: 'AI Engineer',
      period: 'December 2022 - Present',
      location: 'Remote',
      description: 'AI educational assistant helping students write and collect research data efficiently.',
      achievements: [
        'Spearheaded product development from idea to revenue-generating platform with thousands of users',
        'Enhanced development speed by 40% through refined prompt engineering system',
        'Improved academic content quality scores by 30%',
        'Architected scalable infrastructure supporting rapid user growth'
      ]
    },
    {
      company: 'Venngage',
      role: 'Software Engineer',
      period: 'May 2021 - March 2023',
      location: 'Remote',
      description: 'Leading infographics platform enabling users to create beautiful visualizations.',
      achievements: [
        'Redesigned website improving load speed and SEO, maintaining top Google ranking',
        'Contributed to Vizdium development, a free data visualization tool',
        'Drove website traffic to 24 million visits',
        'Supported onboarding of 500,000+ users'
      ]
    },
    {
      company: 'Freelance',
      role: 'Software Developer',
      period: 'December 2019 - April 2021',
      location: 'Remote',
      description: 'Independent software development consulting for various clients.',
      achievements: [
        'Developed data scraping automation reducing manual collection time by 85%',
        'Built blockchain crowdfunding platform for solar energy projects',
        'Created crypto portfolio management dashboard with Bitclout integration'
      ]
    },
    {
      company: '8-Qube',
      role: 'Software Engineer',
      period: 'March 2019 - December 2019',
      location: 'Remote',
      description: 'Inventory management software for multi-location businesses.',
      achievements: [
        'Designed and deployed automated inventory management system',
        'Engineered offline-online sync system for low-connectivity areas',
        'Improved efficiency and accuracy for store owners'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-[#2f1c4a]">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Work Experience
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-[#1a0b2e]/50 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-colors">
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-2 text-purple-300">
                    <Building size={18} className="text-purple-400" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-300">
                    <Calendar size={18} className="text-purple-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-300">
                    <MapPin size={18} className="text-purple-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{exp.role}</h3>
                <p className="text-purple-200/80 mb-6">{exp.description}</p>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-purple-200/70">
                      <span className="text-purple-400">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;