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
import Partner from "./pages/partner/Partner";
import { FaArrowUpFromBracket } from "react-icons/fa6";

function App() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/industry-focus" element={<Industries />} />
          <Route path="/people-at-ababil-group" element={<PeopleAbabil />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/workforce-solutions" element={<Alljobs />} />
          <Route path="/partner-with-us" element={<Partner />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/media-and-news" element={<MediaNews />} />
          <Route path="/media-and-news/:slug" element={<LatestNewsDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <div className="relative">
        <span className="fixed bottom-5 right-4 cursor-pointer">
          <FaArrowUpFromBracket
            onClick={handleScrollToTop}
            className="text-4xl p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors animate-pulse"
          />
        </span>
      </div>
    </>
  );
}

export default App;
