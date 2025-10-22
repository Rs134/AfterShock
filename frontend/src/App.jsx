import Header from './Components/Header';
import Headline from './Components/Headline';
import Service from './Components/Service';
import Testimonials from './Components/Testimonials';
import Chatbot from './Components/Chatbot';
import Footer from './Footer';

function Home() {
  return (
    <>
      <Header />
      
      <section id="about">
        <Headline />
      </section>
      
      <section id="services">
        <Service />
        <Chatbot />
      </section>
      
      <section id="testimonials">
        <Testimonials />
      </section>
      
      <Footer />
    </>
  );
}

export default Home;
