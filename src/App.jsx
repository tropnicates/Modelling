import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"; // Import the Footer component
import "./index.css"

const App = () => {
  return (
      <div className="App">
        <Navbar />
        <Header />
        <Footer />
      </div>

  );
}
export default App;
