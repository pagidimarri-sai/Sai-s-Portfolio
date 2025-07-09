import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Award, Monitor } from 'lucide-react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Supervised Machine Learning",
      provider: "Coursera",
      date: "2023",
      description: "Comprehensive course covering regression, classification, and neural networks with hands-on projects.",
      link: "https://coursera.org/verify/certificate-id",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg",
      skills: ["Python", "TensorFlow", "Machine Learning", "Neural Networks"]
    },
    {
      title: "Responsive Web Design",
      provider: "freeCodeCamp",
      date: "2022",
      description: "Complete certification covering HTML5, CSS3, responsive design principles, and accessibility standards.",
      link: "https://freecodecamp.org/certification/pagidimarrisai/responsive-web-design",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png",
      skills: ["HTML5", "CSS3", "Responsive Design", "Accessibility"]
    },
    {
      title: "Intro to Machine Learning",
      provider: "Kaggle",
      date: "2023",
      description: "Practical introduction to machine learning concepts with real-world datasets and competitions.",
      link: "https://kaggle.com/learn/certification/pagidimarrisai/intro-to-machine-learning",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png",
      skills: ["Data Science", "Pandas", "Scikit-learn", "Data Analysis"]
    }
  ];

  const techStack = [
    { name: "React.js", color: "#61DAFB" },
    { name: "Node.js", color: "#339933" },
    { name: "Python", color: "#3776AB" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "MongoDB", color: "#47A248" },
    { name: "Firebase", color: "#FFCA28" },
    { name: "AWS", color: "#FF9900" },
    { name: "Docker", color: "#2496ED" },
    { name: "Git", color: "#F05032" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "Next.js", color: "#000000" }
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications 
            and comprehensive tech stack mastery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
          {/* Mac Screen Mockup */}
          <motion.div
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-2xl">
              {/* Mac Monitor */}
              <div className="relative bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-3xl p-6 shadow-2xl">
                {/* Monitor Stand */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-b-2xl" />
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 dark:from-gray-500 dark:via-gray-600 dark:to-gray-500 rounded-full" />
                
                {/* Screen */}
                <div className="bg-black rounded-2xl p-4 relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-xl relative overflow-hidden">
                    {/* Tech Stack Visualization */}
                    <div className="absolute inset-4 grid grid-cols-4 gap-2">
                      {techStack.map((tech, index) => (
                        <motion.div
                          key={tech.name}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } : {}}
                          transition={{ delay: index * 0.1 }}
                          className="flex flex-col items-center justify-center p-2 rounded-lg glass"
                          whileHover={{ scale: 1.1 }}
                        >
                          <div 
                            className="w-6 h-6 rounded-full mb-1"
                            style={{ backgroundColor: tech.color }}
                          />
                          <span className="text-xs text-white font-medium text-center">
                            {tech.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Floating Particles */}
                    {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full opacity-60"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Apple Logo */}
                  <div className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full opacity-80" />
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl -z-10 rounded-3xl" />
            </div>
          </motion.div>

          {/* Certifications List */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-primary to-primary-glow rounded-xl group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="heading-md text-lg">{cert.title}</h3>
                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link cursor-hover opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-semibold text-primary">{cert.provider}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{cert.date}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
            <div className="relative z-10">
              <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="heading-md mb-4">Always Learning, Always Growing</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Technology evolves rapidly, and so do I. These certifications represent my commitment 
                to staying current with industry best practices and emerging technologies.
              </p>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary cursor-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Collaborate
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;