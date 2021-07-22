
import './App.css';

import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import WhyBumble from './components/WhyBumble'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

function App() {
    return (
        <div className="App">
            <Nav />
            <Hero />
            <About />
            <WhyBumble />
            <Carousel />
            <Footer />

        </div>
    );
}

export default App;
