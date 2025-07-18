// import { SiReact, SiNodedotjs, SiMongodb, SiPython, SiJavascript, SiTypescript, SiAmazonaws, SiFirebase } from 'react-icons/si';
// import { motion } from 'framer-motion';
// import { ArrowRight, Github, Linkedin, Instagram, Twitter } from 'lucide-react';

// const Hero = () => {
//   const socialLinks = [
//     { icon: Twitter, href: 'https://twitter.com/pagidimarrisai', label: 'Twitter' },
//     { icon: Instagram, href: 'https://instagram.com/pagidimarrisai', label: 'Instagram' },
//     { icon: Github, href: 'https://github.com/pagidimarrisai', label: 'GitHub' },
//     { icon: Linkedin, href: 'https://linkedin.com/in/pagidimarrisai', label: 'LinkedIn' },
//   ];

//   const techLogos = [
//   { name: 'React', color: '#61DAFB', icon: SiReact },
//   { name: 'Node.js', color: '#339933', icon: SiNodedotjs },
//   { name: 'MongoDB', color: '#47A248', icon: SiMongodb },
//   { name: 'Python', color: '#3776AB', icon: SiPython },
//   { name: 'JavaScript', color: '#F7DF1E', icon: SiJavascript },
//   { name: 'TypeScript', color: '#3178C6', icon: SiTypescript },
//   { name: 'AWS', color: '#FF9900', icon: SiAmazonaws },
//   { name: 'Firebase', color: '#FFCA28', icon: SiFirebase },
// ];


//   const handleConnectClick = () => {
//     document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16">
//       {/* Background gradient animation */}
//       <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10">
//         <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent animate-pulse" />
//       </div>

//       {/* Social Links - Left */}
//       <motion.div
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ delay: 0.5 }}
//         className="fixed left-4 bottom-8 z-30 flex flex-col space-y-4 lg:left-6"
//       >
//         {socialLinks.map((social, index) => (
//           <motion.a
//             key={social.label}
//             href={social.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-link cursor-hover"
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.7 + index * 0.1 }}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <social.icon className="w-5 h-5" />
//           </motion.a>
//         ))}
//       </motion.div>

//       {/* Email - Right */}
//       <motion.div
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ delay: 0.5 }}
//         className="fixed right-4 bottom-8 z-30 lg:right-6"
//       >
//         <motion.a
//           href="mailto:pagidimarrisai27@gmail.com"
//           className="vertical-text cursor-hover font-medium text-sm tracking-wider hover:text-primary transition-colors"
//           style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
//           whileHover={{ y: -5 }}
//         >
//           pagidimarrisai27@gmail.com
//         </motion.a>
//       </motion.div>

//       {/* Main Content Container */}
//       <div className="relative z-20 w-full max-w-7xl mx-auto px-4 lg:px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          
//           {/* Left Content - 65% */}
//           <div className="lg:col-span-8 text-center lg:text-left">
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               className="space-y-6 lg:space-y-8"
//             >
//               <motion.p
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-muted-foreground font-medium text-lg lg:text-xl"
//               >
//                 Hi, I'm
//               </motion.p>

//               <motion.h1
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//                 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-space-grotesk"
//               >
//                 Pagidimarri Sai
//               </motion.h1>

//               <motion.h2
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//                 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground font-space-grotesk font-medium"
//               >
//                 Full Stack Developer & AI Enthusiast
//               </motion.h2>

//               <motion.p
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//                 className="text-lg lg:text-xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto lg:mx-0 leading-relaxed"
//               >
//                 Crafting innovative digital experiences with cutting-edge technologies. 
//                 Passionate about AI, machine learning, and building scalable web applications 
//                 that make a difference.
//               </motion.p>

//               <motion.div
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.7 }}
//                 className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start items-center pt-4 lg:pt-8"
//               >
//                 <motion.button
//                   onClick={handleConnectClick}
//                   className="btn-primary cursor-hover flex items-center gap-3 group w-full sm:w-auto"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Let's Connect
//                   <motion.div
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <ArrowRight className="w-5 h-5" />
//                   </motion.div>
//                 </motion.button>

//                 <motion.a
//                   href="#projects"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
//                   }}
//                   className="btn-glass cursor-hover w-full sm:w-auto"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   View My Work
//                 </motion.a>
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Right Content - 35% */}
//           <div className="lg:col-span-4 flex justify-center lg:justify-end">
//             <motion.div
//               initial={{ scale: 0, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.8, duration: 0.8 }}
//               className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
//             >
//               {/* Outer Rotating Circle */}
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 className="absolute inset-0 rounded-full border-2 border-primary/20"
//               >
//                 {/* Tech Logo Positions */}
//                 {techLogos.map((tech, index) => {
//                   const angle = (360 / techLogos.length) * index;
//                   const radius = 45; // percentage from center
//                   const x = Math.cos((angle * Math.PI) / 180) * radius;
//                   const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
//                   return (
//                     <motion.div
//                       key={tech.name}
//                       className="absolute w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center glass-card"
//                       style={{
//                         left: `calc(50% + ${x}% - 1rem)`,
//                         top: `calc(50% + ${y}% - 1rem)`,
//                       }}
//                       animate={{ rotate: -360 }}
//                       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                       whileHover={{ scale: 1.2 }}
//                     >
//                       <div 
//                         className="w-4 h-4 lg:w-5 lg:h-5 rounded-full"
//                         style={{ backgroundColor: tech.color }}
//                       />
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>

//               {/* Inner Rotating Circle */}
//               <motion.div
//                 animate={{ rotate: -360 }}
//                 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//                 className="absolute inset-8 rounded-full border-2 border-primary/30"
//               />

//               {/* Center PS Logo */}
//               <motion.div
//                 className="absolute inset-0 flex items-center justify-center"
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-bold text-2xl lg:text-3xl font-space-grotesk shadow-2xl">
//                   PS
//                 </div>
//               </motion.div>

//               {/* Floating Particles */}
//               {[...Array(8)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   className="absolute w-2 h-2 bg-primary/40 rounded-full"
//                   style={{
//                     left: `${Math.random() * 100}%`,
//                     top: `${Math.random() * 100}%`,
//                   }}
//                   animate={{
//                     y: [0, -20, 0],
//                     opacity: [0.3, 1, 0.3],
//                     scale: [1, 1.2, 1],
//                   }}
//                   transition={{
//                     duration: 2 + Math.random() * 2,
//                     repeat: Infinity,
//                     delay: Math.random() * 2,
//                   }}
//                 />
//               ))}
//             </motion.div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
//           >
//             <motion.div
//               animate={{ y: [0, 15, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="w-1 h-3 bg-primary rounded-full mt-2"
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
"use client";

import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import {
  ArrowRight,
  Github,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";

const Hero = () => {
  const socialLinks = [
    {
      icon: Twitter,
      href: "https://twitter.com/SaiPagidimarri",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/sai_sathyanarayana_chary",
      label: "Instagram",
    },
    {
      icon: Github,
      href: "https://github.com/pagidimarri-sai",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/pagidimarri-sai",
      label: "LinkedIn",
    },
  ];

  const techLogos = [
    { name: "React", color: "#61DAFB", icon: SiReact },
    { name: "Node.js", color: "#339933", icon: SiNodedotjs },
    { name: "MongoDB", color: "#47A248", icon: SiMongodb },
    { name: "Python", color: "#3776AB", icon: SiPython },
    { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
    { name: "TypeScript", color: "#3178C6", icon: SiTypescript },
    // { name: "AWS", color: "#FF9900", icon: SiAmazonaws },
    { name: "Firebase", color: "#FFCA28", icon: SiFirebase },
  ];

  const handleConnectClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent animate-pulse" />
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed left-4 bottom-8 z-30 flex flex-col space-y-4 lg:left-6"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link cursor-hover"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <social.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </motion.div>

      {/* Email */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed right-4 bottom-8 z-30 lg:right-6"
      >
        <motion.a
          href="mailto:pagidimarrisai27@gmail.com"
          className="vertical-text cursor-hover font-medium text-sm tracking-wider hover:text-primary transition-colors"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          whileHover={{ y: -5 }}
        >
          pagidimarrisai27@gmail.com
        </motion.a>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Left */}
          <div className="lg:col-span-8 text-center lg:text-left">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:space-y-8"
            >
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground font-medium text-lg lg:text-xl"
              >
                Hi, I'm
              </motion.p>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-space-grotesk"
              >
                Pagidimarri Sai
              </motion.h1>

             <motion.h2
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground font-space-grotesk font-medium"
>
  <Typewriter
    words={['Full Stack Developer', 'AI Enthusiast']}
    loop={0} // infinite
    cursor
    cursorStyle="_"
    typeSpeed={80}
    deleteSpeed={50}
    delaySpeed={2000}
  />
</motion.h2>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg lg:text-xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto lg:mx-0 leading-relaxed"
              >
                Crafting innovative digital experiences with cutting-edge
                technologies. Passionate about AI, machine learning, and
                building scalable web applications that make a difference.
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start items-center pt-4 lg:pt-8"
              >
                <motion.button
                  onClick={handleConnectClick}
                  className="btn-primary cursor-hover flex items-center gap-3 group w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Connect
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>

                <motion.a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-glass cursor-hover w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              {/* Outer Rotating Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border-2 border-primary/20"
              >
                {techLogos.map((tech, index) => {
                  const angle = (360 / techLogos.length) * index;
                  const radius = 45;
                  const x =
                    Math.cos((angle * Math.PI) / 180) * radius;
                  const y =
                    Math.sin((angle * Math.PI) / 180) * radius;

                  const Icon = tech.icon;

                  return (
                    <motion.div
                      key={tech.name}
                      className="absolute w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md shadow-md"
                      style={{
                        left: `calc(50% + ${x}% - 1.25rem)`,
                        top: `calc(50% + ${y}% - 1.25rem)`,
                        backgroundColor: "white",
                      }}
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <Icon className="w-5 h-5" style={{ color: tech.color }} />
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Inner Rotating Circle */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-8 rounded-full border-2 border-primary/30"
              />

              {/* Center PS Logo */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-bold text-2xl lg:text-3xl font-space-grotesk shadow-2xl">
                  PS
                </div>
              </motion.div>

              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/40 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
