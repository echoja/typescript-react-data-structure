import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import Layout from "./Layout";
import SimpleString from "./pages/SimpleString";

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
    </Routes>
  );
}

export default App;
