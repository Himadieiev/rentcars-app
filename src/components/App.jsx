import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./../pages/Home/Home";
import Catalog from "./../pages/Catalog/Catalog";
import Favorites from "./../pages/Favorites/Favorites";
import { FavoritesProvider } from "../context/FavoritesContext";

const App = () => {
  return (
    <FavoritesProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </FavoritesProvider>
  );
};

export default App;
