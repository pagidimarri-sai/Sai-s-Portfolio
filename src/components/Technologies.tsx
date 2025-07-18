"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Code, Database, Cloud } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techStack = [
    { name: "React.js", color: "#61DAFB", category: "Frontend", icon: SiReact },
    { name: "Node.js", color: "#339933", category: "Backend", icon: SiNodedotjs },
    { name: "Python", color: "#3776AB", category: "Backend", icon: SiPython },
    { name: "JavaScript", color: "#F7DF1E", category: "Frontend", icon: SiJavascript },
    { name: "TypeScript", color: "#3178C6", category: "Frontend", icon: SiTypescript },
    { name: "MongoDB", color: "#47A248", category: "Database", icon: SiMongodb },
    { name: "Firebase", color: "#FFCA28", category: "Cloud", icon: SiFirebase },
    { name: "Docker", color: "#2496ED", category: "DevOps", icon: SiDocker },
    { name: "Git", color: "#F05032", category: "Tools", icon: SiGit },
    { name: "Tailwind CSS", color: "#06B6D4", category: "Frontend", icon: SiTailwindcss },
    { name: "Next.js", color: "#000000", category: "Frontend", icon: SiNextdotjs },
        { name: "Node.js", color: "#339933", category: "Backend", icon: SiNodedotjs },

  ];

  const categories = [
    { name: "Frontend", icon: Code, color: "#61DAFB" },
    { name: "Backend", icon: Database, color: "#339933" },
    { name: "Database", icon: Database, color: "#47A248" },
    { name: "Cloud", icon: Cloud, color: "#FF9900" },
  ];

  return (
    <section id="technologies" className="py-20 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mastering cutting-edge technologies to build scalable, performant, and innovative digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          {/* Mac Mockup */}
          <motion.div
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 xl:order-1"
          >
            <div className="relative mx-auto max-w-2xl">
              {/* Mac Monitor */}
              <div className="relative bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-3xl p-6 shadow-2xl">
                {/* Stand */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-b-2xl" />
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 dark:from-gray-500 dark:via-gray-600 dark:to-gray-500 rounded-full" />

                {/* Screen */}
                <div className="bg-black rounded-2xl p-4 relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-xl relative overflow-hidden">
                    {/* Grid with icons */}
                    <div className="absolute inset-4 grid grid-cols-4 grid-rows-3 gap-2">
                      {techStack.slice(0, 12).map((tech, index) => (
                        <motion.div
                          key={tech.name}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } : {}}
                          transition={{ delay: index * 0.1 }}
                          className="flex flex-col items-center justify-center p-2 rounded-lg glass group cursor-pointer"
                          whileHover={{ scale: 1.1, y: -5 }}
                        >
                          <div
                            className="flex items-center justify-center w-10 h-10 rounded-full mb-2"
                            style={{ backgroundColor: tech.color }}
                          >
                            <tech.icon size={20} color="#fff" />
                          </div>
                          <span className="text-xs text-white font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity">
                            {tech.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Floating Particles */}
                    {[...Array(20)].map((_, i) => (
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
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl -z-10 rounded-3xl" />
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8 order-1 xl:order-2"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: category.color + "20" }}
                  >
                    <category.icon className="w-6 h-6" style={{ color: category.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-md text-lg mb-3">{category.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack
                        .filter((tech) => tech.category === category.name)
                        .map((tech) => (
                          <motion.span
                            key={tech.name}
                            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {tech.name}
                          </motion.span>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
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
              <h3 className="heading-md mb-4">Always Learning, Always Innovating</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Technology evolves rapidly, and so do I. These technologies represent my current toolkit for building next-generation applications that push the boundaries of what's possible.
              </p>
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary cursor-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See My Projects
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
