import { motion } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        className="relative bg-[#1a0b2e] rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full m-4 max-h-[90vh] overflow-y-auto"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={e => e.stopPropagation()}
      >
        <motion.button
          className="absolute top-4 right-4 text-white/70 hover:text-white focus:outline-none z-10 bg-black/20 p-2 rounded-full backdrop-blur-sm"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X size={20} />
        </motion.button>

        <div>
          {/* Video Demo */}
          <div className="aspect-video">
            <iframe
              src={project.videoDemo}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                {project.name}
              </h3>

              <p className="text-purple-200/80 mb-8 text-lg leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Technical Challenges</h4>
                  <ul className="space-y-3">
                    {project.challenges?.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3 text-purple-200/70">
                        <span className="text-purple-400 mt-0">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.live && 
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                }
                {project.github && 
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white/10 text-white rounded-full flex items-center gap-2 hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    View Code
                  </motion.a>
                }
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;