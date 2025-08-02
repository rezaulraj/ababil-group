import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/HomePage";
import NotFound from "./components/NotFound";
import PeopleAbabil from "./pages/peoples/PeopleAbabil";
import ContactPage from "./pages/contact/ContactPage";
import HeroAllJobs from "./pages/alljob/HeroAllJobs";
import Alljobs from "./pages/alljob/Alljobs";
import HeroCareer from "./pages/career/HeroCareer";
import CareerPage from "./pages/career/CareerPage";
import MediaNews from "./pages/mediaandnews/MediaNews";
import LatestNewsDetails from "./pages/mediaandnews/LatestNewsDetails";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import Industries from "./pages/industries/Industries";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/people-at-ababil-group" element={<PeopleAbabil />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/for-employers" element={<Alljobs />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/media-and-news" element={<MediaNews />} />
          <Route path="/media-and-news/:slug" element={<LatestNewsDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
