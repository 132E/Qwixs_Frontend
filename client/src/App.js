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
import EditBusiness from "./components/EditBusiness";
import ServicesList from "./pages/ServicesList";
import AddServices from "./components/AddServices";
import SignUp from "./components/SingUp";
import About from "./pages/About";

const App = () => {
  const [owners, setOwners] = useState();
  const [businesses, setBusinesses] = useState();
  const [services, setServices] = useState();

  const getAllBusinesses = async () => {
    let res = await axios.get(`${BASE_URL}/business`);
    // console.log(res);
    setBusinesses(res.data);
  };

  useEffect(() => {
    getAllBusinesses();
  }, []);

  const getAllOwners = async () => {
    let res = await axios.get(`${BASE_URL}/owner`);
    // console.log(res);
    setOwners(res.data);
  };

  useEffect(() => {
    getAllOwners();
  }, []);

  const getAllServices = async () => {
    let res = await axios.get(`${BASE_URL}/services`);
    // console.log(res);
    setServices(res.data);
  };

  useEffect(() => {
    getAllServices();
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
            path="/owner/:ownerId"
            element={<Owner businesses={businesses} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login owners={owners} />} />
          <Route path="/owner/:ownerId/addbusiness" element={<AddBusiness />} />
          <Route
            path="/owner/:ownerId/editbusiness"
            element={<EditBusiness />}
          />
          <Route
            path="/business"
            element={<BusinessList businesses={businesses} />}
          />
          <Route path="/business/:businessId" element={<BusinessDetails />} />
          <Route
            path="/services"
            element={<ServicesList services={services} />}
          />
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
