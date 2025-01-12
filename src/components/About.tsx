import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const skills = [
    { name: 'AI Development', level: 90 },
    { name: 'Machine Learning', level: 85 },
    { name: 'Python', level: 95 },
    { name: 'React', level: 80 },
    { name: 'TensorFlow', level: 85 }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am an AI Engineer with over 6 years of experience in software and AI application development. 
              Throughout my career, I've led the creation of 6+ AI applications in 2 years, with some platforms 
              scaling to support thousands of users.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My expertise lies in developing scalable AI solutions that solve real-world problems, 
              with a focus on computer vision and natural language processing applications.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="p-6 bg-gray-50 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">6+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">6+</h3>
            <p className="text-gray-600">AI Applications</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">1000+</h3>
            <p className="text-gray-600">Users Impacted</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;