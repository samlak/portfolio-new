import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, FileText, Copyright } from 'lucide-react';

const Contact = () => {
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

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/samlak',
      color: 'hover:text-purple-400'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://linkedin.com/in/devsamlak',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: <Mail size={24} />,
      url: 'mailto:samlak1999@gmail.com',
      color: 'hover:text-pink-400'
    },
    {
      name: 'Resume',
      icon: <FileText size={24} />,
      url: '/document/samlak-resume.pdf',
      color: 'hover:text-emerald-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#1a0b2e] relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Get in Touch
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mb-12">
          <p className="text-xl text-purple-200/80 max-w-2xl mx-auto">
            Let's collaborate on your next AI project. Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#2f1c4a]/30 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all ${link.color}`}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {link.icon}
              <span className="text-purple-200/80">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex items-center justify-center gap-2 text-purple-200/60"
        >
          <Copyright size={18} />
          <span>2025 • Haruna Salami</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;