import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Anurag University",
      period: "2022 - 2026",
      cgpa: "8.3",
      description: "Specialized in software engineering, data structures, algorithms, and emerging technologies including AI and machine learning.",
      position: "right"
    },
    {
      degree: "Diploma in Electrical & Electronics Engineering",
      institution: "St Mary's Group of Institutions",
      period: "2020 - 2022",
      cgpa: "8.7",
      description: "Strong foundation in electronics, circuit design, and programming fundamentals that shaped my technical problem-solving approach.",
      position: "left"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Board of Secondary Education",
      period: "2019 - 2020",
      cgpa: "9.2",
      description: "Completed with distinction, developing strong analytical and mathematical skills that became the foundation for my technical journey.",
      position: "right"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey has been a continuous pursuit of excellence, 
            building a strong foundation in technology and innovation.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary-glow to-primary rounded-full hidden lg:block" />

          {/* Education Items */}
          <div className="space-y-12 lg:space-y-24">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: item.position === 'left' ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center justify-center lg:justify-${item.position === 'left' ? 'start' : 'end'}`}
              >
                <div className={`w-full lg:w-5/12 ${item.position === 'right' ? 'lg:ml-auto' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-card p-8 relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute top-8 left-1/2 lg:left-auto lg:right-auto transform -translate-x-1/2 lg:transform-none hidden lg:block">
                      <div className={`absolute ${item.position === 'left' ? '-right-16' : '-left-16'} top-1/2 transform -translate-y-1/2`}>
                        <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg relative">
                          <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-r from-primary to-primary-glow rounded-xl">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium text-muted-foreground">
                            {item.period}
                          </span>
                        </div>
                        <h3 className="heading-md mb-2">{item.degree}</h3>
                        <p className="text-primary font-semibold mb-1">{item.institution}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        <span className="font-semibold">CGPA: {item.cgpa}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">8.3</div>
              <div className="text-muted-foreground">Current CGPA</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">4+</div>
              <div className="text-muted-foreground">Years of Learning</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Technologies Mastered</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;