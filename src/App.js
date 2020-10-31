import './App.css';

// Components
import Hero from './sections/Hero'
import About from './sections/About'
import Solutions from './sections/Solutions'
import Services from './sections/Services'
import CallToAction from './sections/CallToAction'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Solutions/>
      <Services/>
      <CallToAction/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}

export default App;
