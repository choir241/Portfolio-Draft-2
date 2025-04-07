
import Header from '@/components/Header';
import ProjectCarousel from '@/components/ProjectCarousel';
import FeatureBubbles from '@/components/FeatureBubbles';
import ContactCards from '@/components/ContactCards';
import StreamCarousel from '@/components/StreamCarousel';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-portfolio-lightest">
      <Header />
      <ProjectCarousel />
      <FeatureBubbles />
      <ContactCards />
      <StreamCarousel />
      <TestimonialCarousel />
      <Footer />
    </main>
  );
};

export default Index;
