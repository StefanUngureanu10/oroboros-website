import './App.css'

import { FadeInOnScroll } from './components/FadeInOnScroll';
import { Shows } from './components/ShowList';
import { Navbar } from './components/Navbar';
import { Music } from './components/Music';
import { Desc } from './components/Desc';
import { Gallery } from './components/Gallery';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/Arrow';
import { PressKit } from './components/Presskit';
import { Merch } from './components/Merch';

//import { BandPhoto } from './components/BandPic';
//import bandPhoto from './assets/Plakat_SoMe_Story.jpg';

function App() {
  return (
    <div>
      <ScrollToTop />

      <Navbar />

      <section id="home" style={{ backgroundColor: "#111" }}>
        {/*
        <FadeInOnScroll>
          <BandPhoto
           image={bandPhoto}
          />
        </FadeInOnScroll>
        */}
      </section>

      <section id="about" style={{ backgroundColor: "#111" }}>
        <FadeInOnScroll>
          <Desc />
        </FadeInOnScroll>
      </section>

      <section id="music" style={{ backgroundColor: "#111" }}>
        <FadeInOnScroll>
          <Music />
        </FadeInOnScroll>
      </section>

      <section id="shows" style={{ backgroundColor: "#111" }}>
        <FadeInOnScroll>
          <Shows />
        </FadeInOnScroll>
      </section>

      <section id="merch" style={{ backgroundColor: "#111" }}>
        <FadeInOnScroll>
          <Merch />
        </FadeInOnScroll>
      </section>

      <section id="gallery" style={{ backgroundColor: "#111" }}>
        <FadeInOnScroll>
          <Gallery />
        </FadeInOnScroll>
      </section>

      <section id="infos-downloads" style={{ backgroundColor: "#111" }}>
        <FadeInOnScroll>
          <PressKit />
        </FadeInOnScroll>
      </section>

      <section id="contact" style={{ backgroundColor: "#111" }}>
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
