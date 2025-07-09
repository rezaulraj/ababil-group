import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/HomePage";
import NotFound from "./components/NotFound";
import PeopleAbabil from "./pages/peoples/PeopleAbabil";
import ContactPage from "./pages/contact/ContactPage";
import HeroAllJobs from "./pages/alljob/HeroAllJobs";
import Alljobs from "./pages/alljob/Alljobs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/people-at-ababil-group" element={<PeopleAbabil />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/all-jobs" element={<Alljobs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
