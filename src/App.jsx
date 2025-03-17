import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Service";
import Contact from "./components/contact/Contact";
import NotFound from "./components/notfound/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/loading/Loading"; 
import Project from "./components/projects/Project";
import ProgressKLProj from "./components/projects/ProgressKLProj";
import EmptyPage from "./components/projects/EmptyPage";

const App = () => {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); 
  }, []);

  return (
    <Router>
      {loading ? ( <Loading /> ) : (
        <>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/progress-proj" element={<ProgressKLProj />} />
            <Route path="/emptypage" element={<EmptyPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
