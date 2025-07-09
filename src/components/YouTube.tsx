import { motion } from 'framer-motion';
import { Play, Users, Clock, TrendingUp, ExternalLink } from 'lucide-react';

const YouTube = () => {
  return (
    <section id="youtube" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">Study with Satya</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing knowledge and empowering fellow developers through educational content, 
            tutorials, and insights into the latest technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Embed */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden glass-card p-2">
              <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden">
                {/* YouTube Video Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer"
                  >
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </motion.div>
                </div>
                
                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold mb-1">
                    Complete React Tutorial for Beginners
                  </h3>
                  <p className="text-white/80 text-sm">
                    Learn React from scratch with practical examples
                  </p>
                </div>
              </div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 blur-xl -z-10 rounded-2xl" />
          </motion.div>

          {/* Channel Info */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-xl">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="heading-md">Study with Satya</h3>
                  <p className="text-muted-foreground">Educational Technology Content</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Join me on an exciting journey of learning and discovery. My YouTube channel focuses on 
                making complex programming concepts simple and accessible for everyone, from beginners 
                to advanced developers.
              </p>
            </div>

            {/* Channel Stats */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-card p-4 text-center"
              >
                <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-bold text-xl">1.2K</div>
                <div className="text-sm text-muted-foreground">Subscribers</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-card p-4 text-center"
              >
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-bold text-xl">15+</div>
                <div className="text-sm text-muted-foreground">Videos</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-card p-4 text-center"
              >
                <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-bold text-xl">50K+</div>
                <div className="text-sm text-muted-foreground">Views</div>
              </motion.div>
            </div>

            {/* Content Topics */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">What You'll Learn:</h4>
              <div className="space-y-3">
                {[
                  "React.js & Modern JavaScript",
                  "Full Stack Development",
                  "Python & Machine Learning",
                  "Web Development Best Practices",
                  "Career Tips for Developers"
                ].map((topic, index) => (
                  <motion.div
                    key={topic}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{topic}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Subscribe Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex gap-4"
            >
              <motion.a
                href="https://youtube.com/@studywithsatya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary cursor-hover flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-4 h-4" />
                Subscribe Now
              </motion.a>
              
              <motion.a
                href="https://youtube.com/@studywithsatya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass cursor-hover flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                View Channel
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Featured Videos */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="heading-md text-center mb-12">Featured Content</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "React Hooks Explained",
                duration: "15:30",
                views: "12K",
                thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop&crop=center"
              },
              {
                title: "Python for Beginners",
                duration: "22:45",
                views: "18K",
                thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=225&fit=crop&crop=center"
              },
              {
                title: "Building REST APIs",
                duration: "28:12",
                views: "25K",
                thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=225&fit=crop&crop=center"
              }
            ].map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="glass-card overflow-hidden cursor-pointer group"
              >
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{video.views} views</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTube;