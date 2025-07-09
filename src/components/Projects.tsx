import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Code, Database, Brain, Zap } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "The Coder Companion",
      description: "An intelligent AI-powered coding assistant that helps developers write better code, debug issues, and learn new technologies. Built with advanced machine learning algorithms.",
      technologies: ["React", "Node.js", "OpenAI API", "TypeScript", "MongoDB"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=center",
      liveUrl: "https://coder-companion.vercel.app",
      githubUrl: "https://github.com/pagidimarrisai/coder-companion",
      icon: Brain,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "ZapReach",
      description: "A lightning-fast email marketing platform with real-time analytics, automated campaigns, and intelligent targeting. Revolutionizing how businesses connect with customers.",
      technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
      liveUrl: "https://zapreach.io",
      githubUrl: "https://github.com/pagidimarrisai/zapreach",
      icon: Zap,
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Code Watch",
      description: "Real-time code monitoring and performance analytics dashboard. Track your applications' health, monitor API responses, and get instant alerts for critical issues.",
      technologies: ["React", "Python", "Flask", "Judge0 API", "Docker"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      liveUrl: "https://code-watch.dev",
      githubUrl: "https://github.com/pagidimarrisai/code-watch",
      icon: Code,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "AI-Waiter",
      description: "Smart restaurant management system powered by AI. Features voice ordering, inventory management, and predictive analytics for optimizing restaurant operations.",
      technologies: ["React", "Python", "Gemini API", "LangChain", "Firebase"],
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&crop=center",
      liveUrl: "https://ai-waiter.app",
      githubUrl: "https://github.com/pagidimarrisai/ai-waiter",
      icon: Brain,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Subhiksha",
      description: "Comprehensive agricultural platform connecting farmers with buyers, providing market insights, weather predictions, and crop management tools for sustainable farming.",
      technologies: ["React", "Node.js", "MongoDB", "ML Models", "AWS"],
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop&crop=center",
      liveUrl: "https://subhiksha.farm",
      githubUrl: "https://github.com/pagidimarrisai/subhiksha",
      icon: Database,
      gradient: "from-green-600 to-blue-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">My Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Crafting digital experiences that bridge innovation and functionality. 
            Each project represents a journey of learning, creativity, and technical excellence.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-32"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Info */}
              <motion.div
                className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ x: index % 2 === 1 ? -10 : 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${project.gradient}`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Featured Project
                  </span>
                </div>

                <h3 className="heading-md">{project.title}</h3>
                
                <div className="glass-card p-6">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link cursor-hover"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link cursor-hover"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>

              {/* Laptop Mockup */}
              <motion.div
                className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: index % 2 === 1 ? -5 : 5,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative mx-auto max-w-lg">
                  {/* Laptop Base */}
                  <div className="relative">
                    <svg
                      viewBox="0 0 400 300"
                      className="w-full h-auto drop-shadow-2xl"
                    >
                      {/* Laptop Screen */}
                      <rect
                        x="50"
                        y="20"
                        width="300"
                        height="200"
                        rx="12"
                        fill="url(#screenGradient)"
                        stroke="hsl(var(--border))"
                        strokeWidth="2"
                      />
                      
                      {/* Screen Content */}
                      <foreignObject x="60" y="30" width="280" height="180">
                        <div className="w-full h-full rounded-lg overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                            <h4 className="text-white font-semibold text-sm">
                              {project.title}
                            </h4>
                          </div>
                        </div>
                      </foreignObject>

                      {/* Laptop Base */}
                      <path
                        d="M30 240 L370 240 L380 260 L20 260 Z"
                        fill="hsl(var(--card))"
                        stroke="hsl(var(--border))"
                        strokeWidth="2"
                      />

                      {/* Trackpad */}
                      <rect
                        x="180"
                        y="245"
                        width="40"
                        height="10"
                        rx="2"
                        fill="hsl(var(--muted))"
                      />

                      <defs>
                        <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(var(--card))" />
                          <stop offset="100%" stopColor="hsl(var(--muted))" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 blur-xl -z-10 rounded-2xl`} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Ready to Build CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-32"
        >
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
            <div className="relative z-10">
              <h3 className="heading-md mb-6">Ready to Build Your Next Idea?</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's collaborate and bring your vision to life with cutting-edge technology 
                and innovative solutions.
              </p>
              <motion.button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary cursor-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;