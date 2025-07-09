import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cayman from "./Components/Porsche/Cayman.jsx"; // Existing Navbar
import Sls from "./Components/Merc/Sls.jsx"; // Existing Card Component
import { data } from "./data.jsx"; // Existing Data

// New Component Imports
import G_Wagon_Carousel from "./Components/Mercedes/G_Wagon_Carousel.jsx";
import Cybertruck_AppCard from "./Components/Tesla/Cybertruck_AppCard.jsx";
import LaFerrari_FlashSale from "./Components/Ferrari/LaFerrari_FlashSale.jsx";
import Aventador_Footer from "./Components/Lamborghini/Aventador_Footer.jsx"; // Corrected import path

import styles from "./App.module.css"; // Keep App.module.css for overall layout if needed

const App = () => {
  return (
    <>
      <Cayman /> {/* Navbar */}
      <div className={styles.container}>
        <G_Wagon_Carousel /> {/* Carousel Section */}
        <Cybertruck_AppCard /> {/* App Download Card */}
      </div>

      <LaFerrari_FlashSale /> {/* Flash Sale Section */}

      <Aventador_Footer /> {/* Main Footer */}
    </>
  );
};

export default App;