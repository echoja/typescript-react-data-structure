import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import Layout from "./Layout";
import DiscriminatedUnions from "./pages/DiscriminatedUnions";
import HoveredWithDelayMs from "./pages/HoveredWithDelayMs";
import SimpleString from "./pages/SimpleString";
import SimpleStringWithDelay from "./pages/SimpleStringWithDelay";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout> HOME </Layout>} />
      <Route
        path="/simple-string"
        element={
          <Layout>
            <SimpleString />
          </Layout>
        }
      />
      <Route
        path="/simple-string-with-delay"
        element={
          <Layout>
            <SimpleStringWithDelay />
          </Layout>
        }
      />
      <Route
        path="/hovered-with-delay-ms"
        element={
          <Layout>
            <HoveredWithDelayMs />
          </Layout>
        }
      />
      <Route
        path="/discriminated-unions"
        element={
          <Layout>
            <DiscriminatedUnions />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
