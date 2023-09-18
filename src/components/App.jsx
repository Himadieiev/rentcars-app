import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./../pages/Home/Home";
import Catalog from "./../pages/Catalog/Catalog";
import Favorites from "./../pages/Favorites/Favorites";

const App = () => {
  const [favoritesCars, setFavoritesCars] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/catalog"
          element={
            <Catalog
              setFavoritesCars={setFavoritesCars}
              favoritesCars={favoritesCars}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favoritesCars={favoritesCars}
              setFavoritesCars={setFavoritesCars}
            />
          }
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
