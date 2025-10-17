import Header from './Components/Header';
import Headline from './Components/Headline';
import Service from './Components/Service';
import Testimonials from './Components/Testimonials';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />

      <section id="about">
        <Headline />
      </section>

      <section id="services">
        <Service />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>
      
      <Footer />
    </>
  );
}

export default App;
