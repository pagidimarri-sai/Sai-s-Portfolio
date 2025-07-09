import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import YouTube from '@/components/YouTube';
import Contact from '@/components/Contact';
import Cursor from '@/components/Cursor';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Education />
        <Certifications />
        <YouTube />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
