import { motion } from 'framer-motion';
import { Play, Clock, Users, TimerReset, ExternalLink } from 'lucide-react';

const YouTube = () => {
  return (
    <section id="youtube" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">Study with Satya</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Raw, real-time study marathons. Join me for 10–12+ hour live study sessions.
            No edits. No excuses. Just pure deep focus — so you can stay motivated and
            build discipline, together.
          </p>
        </motion.div>

        {/* Video Embed + Channel Info */}
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
              <div className="relative aspect-video rounded-2xl overflow-hidden glass-card p-2">
  <iframe
    className="w-full h-full rounded-xl"
    src="https://www.youtube.com/embed/ChPh8kPX9eI"
    title="Study With Satya - Live Study Session"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
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
                  <h3 className="heading-md">Live Study Room</h3>
                  <p className="text-muted-foreground">Deep Focus, Real Sessions</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Be part of a growing community of students & professionals who show up daily.
                My live study streams help you stay accountable — whether you’re studying
                for exams, coding, or building your career.
              </p>
            </div>

            {/* Channel Stats */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div whileHover={{ scale: 1.05 }} className="glass-card p-4 text-center">
                <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-bold text-xl">200+</div>
                <div className="text-sm text-muted-foreground">Subscribers</div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="glass-card p-4 text-center">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-bold text-xl">500+</div>
                <div className="text-sm text-muted-foreground">Hours Streamed</div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="glass-card p-4 text-center">
                <TimerReset className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-bold text-xl">12+ Hrs</div>
                <div className="text-sm text-muted-foreground">Longest Session</div>
              </motion.div>
            </div>

            {/* What You'll Get */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Why Join:</h4>
              <div className="space-y-3">
                {[
                  "Stay focused for long hours",
                  "Study & work alongside me live",
                  "Build discipline & consistency",
                  "No excuses, just deep work",
                  "Grow with a supportive community"
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Subscribe Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex gap-4"
            >
              <motion.a
                href="https://youtube.com/@sai_sathyanarayana_chary"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary cursor-hover flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-4 h-4" />
                Subscribe & Study
              </motion.a>

              <motion.a
                href="https://youtube.com/@sai_sathyanarayana_chary"
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
      </div>
    </section>
  );
};

export default YouTube;
