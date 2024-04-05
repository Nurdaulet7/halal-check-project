import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import { HalalVertification } from "./pages/HalalVertification/HalalVertification.jsx";
import { BarcodeScanner } from "./pages/BarcodeScanner.jsx";
import { EAdditivies } from "./pages/EAdditivies/EAdditivies.jsx";
import { HalalCertification } from "./pages/Certification/HalalCertification.jsx";
import { AboutUs } from "./pages/AboutUs/AboutUs.jsx";
import { FAQ } from "./pages/FAQ/FAQ.jsx";
import { ContactUs } from "./pages/ContactUs/ContactUs.jsx";
import Error from "./Error/Error.jsx";
import Main from "./pages/Main.jsx";
import SingleProduct from "./pages/HalalVertification/SingleProduct.jsx";
import { ProductsList } from "./components/MainContent/ProductsList.jsx";
import AdditiviesList from "./pages/EAdditivies/AdditiviesList.jsx";
import AdditiveInfo from "./pages/EAdditivies/AdditiveInfo.jsx";
import CertificationList from "./pages/Certification/CertificationList.jsx";
import CertificationInfo from "./pages/Certification/CertificationInfo.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/vertification" element={<HalalVertification />}>
            <Route index element={<ProductsList />} />
            <Route path=":slug" element={<SingleProduct />} />
          </Route>

          <Route path="/additivies" element={<EAdditivies />}>
            <Route index element={<AdditiviesList />} />
            <Route path=":additiveSlug" element={<AdditiveInfo />} />
          </Route>

          <Route path="/certificate" element={<HalalCertification />}>
            <Route index element={<CertificationList />} />
            <Route path=":certificateSlug" element={<CertificationInfo />} />
          </Route>

          <Route path="/about" element={<AboutUs />} />

          <Route path="/scanner" element={<BarcodeScanner />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Sidebar>
      <Error />
    </BrowserRouter>
  );
};

export default App;
