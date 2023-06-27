import React from "react";
import "./assets/scss/App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Service from "./components/service/Service";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import ThemeProvider from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <About />
      <Service/>
      <Portfolio />
      <Contact/>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
