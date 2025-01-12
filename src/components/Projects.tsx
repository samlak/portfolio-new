import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, ArrowUpRightSquare } from 'lucide-react';

const Projects = ({ projects, onProjectClick }) => {
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

  const cardVariants = {
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
    <section id="projects" className="py-20 bg-[#1a0b2e] relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Past Projects
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          <p className="mt-6 text-lg text-purple-200/80 max-w-2xl mx-auto">
            Showcasing innovative solutions in AI and software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#2f1c4a]/30 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              onClick={() => onProjectClick(project)}
            >
              {/* Image Container */}
              <div className="relative aspect-video">
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-100"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] via-[#1a0b2e]/50 to-transparent opacity-90"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <motion.button
                    className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium flex items-center gap-2 hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details <ArrowUpRightSquare size={18} />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-purple-200/80 mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-purple-900/30 text-purple-300 rounded-full border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies?.length > 3 && (
                    <span className="px-3 py-1 text-sm bg-purple-900/30 text-purple-300 rounded-full border border-purple-500/20">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;