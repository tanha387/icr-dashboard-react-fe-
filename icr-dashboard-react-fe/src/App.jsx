import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import AllUsIpo from "./pages/AllUsIpo";
import IndividualIpoView from "./pages/IndividualIpoView";
import NotFoundPage from "./pages/NotFoundPage";

import Page1 from "./pages/Page1";
import InverstorView from "./components/InvestorView/InverstorView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllUsIpo />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="/:id" element={<IndividualIpoView />} />
          <Route path="/all-investors" element={<InverstorView />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
