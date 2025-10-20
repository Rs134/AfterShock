import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Headline from './Components/Headline';
import Service from './Components/Service';
import Testimonials from './Components/Testimonials';
import Footer from './Footer';
import Chatbot from './Components/Chatbot';

function Home() {
  return (
    <>
      <Header />
      <section id="about"><Headline /></section>
      <section id="services"><Service /></section>
      <section id="testimonials"><Testimonials /></section>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chatbot" element={<Chatbot />} />
    </Routes>
  );
}

export default App;
