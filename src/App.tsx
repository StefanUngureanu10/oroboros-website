import './App.css'

import { FadeInOnScroll } from './components/FadeInOnScroll';
import { Shows } from './components/ShowList';
import { Navbar } from './components/Navbar';
import { Music } from './components/Music';
import { Desc } from './components/Desc';
import { BandPhoto } from './components/BandPic';
import { Gallery } from './components/Gallery';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/Arrow';
import { PressKit } from './components/Presskit';
import { Merch } from './components/Merch';

import bandPhoto from './assets/oroboros_bandpic.png';

function App() {
  return (
    <div>
      <ScrollToTop />
      
      <FadeInOnScroll>
        <Navbar />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <section id="home">
          <BandPhoto 
           image={bandPhoto} 
          />
        </section>
      </FadeInOnScroll>
      
      <section id="about">  
        <FadeInOnScroll>
          <Desc />
        </FadeInOnScroll>
      </section>

      <section id="music">
      <FadeInOnScroll>
        <Music />
      </FadeInOnScroll>
      </section>

      <section id="shows">
        <FadeInOnScroll>
          <Shows />
        </FadeInOnScroll>
      </section>

      <section id="merch">
        <FadeInOnScroll>
          <Merch />
        </FadeInOnScroll>
      </section>

      <section id="gallery">
        <FadeInOnScroll>
          <Gallery />
        </FadeInOnScroll>
      </section>

      <section id="infos-downloads">
        <FadeInOnScroll>
          <PressKit />
        </FadeInOnScroll>
      </section>
      
      <section id="contact">
        <FadeInOnScroll>
          <ContactUs />
        </FadeInOnScroll>
      </section>

      <section>
        <Footer />
      </section>

    </div>
  )
}

export default App
