import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../../ui";
import { DCPages, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/dc" element={<DCPages />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/hero/:id" element={<HeroPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
