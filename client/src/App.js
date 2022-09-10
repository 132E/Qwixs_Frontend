import "./App.css";
import Nav from "./components/Nav";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { BASE_URL } from "./globals";

import Home from "./pages/Home";
import Login from "./components/Login";
import Owner from "./components/Owner";
import BusinessList from "./pages/BusinessList";
import BusinessDetails from "./pages/BusinessDetails";
import AddBusiness from "./components/AddBusiness";
import ServicesList from "./pages/ServicesList";
import AddServices from "./components/AddServices";
import SignUp from "./components/SingUp";
import About from "./pages/About";

const App = () => {
  const [owners, setOwners] = useState();
  const [businesses, setBusinesses] = useState();

  const getAllBusinesses = async () => {
    let res = await axios.get(`${BASE_URL}/business`);
    // console.log(res);
    setBusinesses(res.data);
  };

  useEffect(() => {
    getAllBusinesses();
  }, []);

  const getAllOwners = async () => {
    let res = await axios.get("http://localhost:8000/owner");
    setOwners(res.data);
  };

  useEffect(() => {
    getAllOwners();
  }, []);

  return (
    <div>
      <header>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/business"
            element={<BusinessList businesses={businesses} />}
          />
          <Route
            path="/owner/:ownerId"
            element={<Owner businesses={businesses} />}
          />
          <Route path="/business/:businessId" element={<BusinessDetails />} />
          <Route path="/services" element={<ServicesList />} />
          <Route path="/owners/ownerId/addbusiness" element={<AddBusiness />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login owners={owners} />} />
          <Route path="/singup" element={<SignUp />} />
          <Route
            path="/business/:businessId/services"
            element={<AddServices />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
