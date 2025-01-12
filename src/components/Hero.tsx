import { motion } from "framer-motion";
import { Code, Brain, Users, Trophy, ArrowDownCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="about" className="lg:min-h-screen min-h-[65vh] bg-gradient-to-b from-[#1a0b2e] to-[#2f1c4a] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-slow-spin"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:text-left text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap lg:justify-start justify-center gap-4 mb-8"
          >
            <span className="px-4 py-1.5 text-sm font-medium text-purple-300 bg-purple-900/30 rounded-full border border-purple-500/20 backdrop-blur-sm">
              AI Engineer
            </span>
            <span className="px-4 py-1.5 text-sm font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-500/20 backdrop-blur-sm">
              Software Engineer
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-white">Haruna</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Salami
            </span>
          </motion.h1>

          <motion.p
            className="text-xl lg:px-0 md:px-3 px-1 text-purple-200/80 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Transforming ideas into intelligent solutions with{" "}
            <span className="text-purple-400 font-semibold">6+ years</span> of
            expertise in AI and software development. Built{" "}
            <span className="text-blue-400 font-semibold">
              10+ AI applications
            </span>{" "}
            with some scaling to support{" "}
            <span className="text-purple-400 font-semibold">
              thousands of users
            </span>
            .
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 lg:justify-start justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowDownCircle
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 text-white bg-white/10 rounded-full font-medium hover:bg-white/20 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm border border-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hidden lg:block"
        >
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>

            {/* Update the stats cards section */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="p-3 bg-purple-500/10 rounded-xl w-fit mb-4">
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">10+</h3>
                <p className="text-purple-200/80">AI Applications Built</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 mt-12">
                <div className="p-3 bg-blue-500/10 rounded-xl w-fit mb-4">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">6+</h3>
                <p className="text-purple-200/80">Years Experience</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="p-3 bg-purple-500/10 rounded-xl w-fit mb-4">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">500K+</h3>
                <p className="text-purple-200/80">Users Impacted</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 mt-12">
                <div className="p-3 bg-blue-500/10 rounded-xl w-fit mb-4">
                  <Trophy className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">2+</h3>
                <p className="text-purple-200/80">Hackathons Won</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
