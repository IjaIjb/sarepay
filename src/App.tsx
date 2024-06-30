import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/dashboard/Home";
import Business from "./pages/dashboard/business/Business";
import Disbursement from "./pages/dashboard/disbursement/Disbursement";
import Collections from "./pages/dashboard/collections/Collections";
import Commerce from "./pages/dashboard/commerce/Commerce";
import Loan from "./pages/dashboard/loan/Loan";
import Settings from "./pages/dashboard/settings/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/home" replace />} />
        {/* <-------- Dashboard Route-------> */}
        <Route
          path="/dashboard"
          element={
            // <ProtectedRoute >
            <Dashboard />
            // {/* </ProtectedRoute> */}
          }
        >
          {/* <-------- dashboard -------> */}
          <Route path="/dashboard/home" element={<Home />} />
          <Route path="/dashboard/business" element={<Business />} />
          <Route path="/dashboard/disbursement" element={<Disbursement />} />
          <Route path="/dashboard/collections" element={<Collections />} />
          <Route path="/dashboard/commerce" element={<Commerce />} />
          <Route path="/dashboard/loan" element={<Loan />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          {/* <Route path="/dashboard/disbursement" element={<Home />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
