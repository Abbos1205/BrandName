import React from 'react'
import './App.css';
import Header from '../Header/Header';
import MainSection from '../MainSection';
import About from '../About';
import Clients from '../Clients';
import AboutUs from '../AboutUs';
import Pricing from '../Pricing';
import GetInTouch from '../GetInTouch'
import Footer from '../Footer'


class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <MainSection />
        <About />
        <Clients />
        <AboutUs />
        <Pricing />
        <GetInTouch />
        <Footer />
      </div>
    );
  }
}

export default App;
