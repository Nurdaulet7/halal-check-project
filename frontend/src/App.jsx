import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import { HalalVertification } from "./pages/HalalVertification.jsx";
import { BarcodeScanner } from "./pages/BarcodeScanner.jsx";
import { EAdditivies } from "./pages/EAdditivies.jsx";
import { HalalCertification } from "./pages/HalalCertification.jsx";
import { EstablishmentsMap } from "./pages/EstablishmentsMap.jsx";
import { AboutUs } from "./pages/AboutUs.jsx";
import { FAQ } from "./pages/FAQ.jsx";
import { ContactUs } from "./pages/ContactUs.jsx";
import Error from "./Error/Error.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<HalalVertification />} />
          <Route path="/scanner" element={<BarcodeScanner />} />
          <Route path="/additivies" element={<EAdditivies />} />
          <Route path="/certificate" element={<HalalCertification />} />
          <Route path="/establishments" element={<EstablishmentsMap />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Sidebar>
      <Error />
    </BrowserRouter>
  );
};

export default App;
