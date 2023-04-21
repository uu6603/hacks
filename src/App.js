import {
    Routes,
    Route,
    useNavigationType,
    useLocation,
  } from "react-router-dom";
  import Slide169Cause from "./pages/Slide169Cause";

  import { useEffect } from "react";
  
  function App() {
    const action = useNavigationType();
    const location = useLocation();
    const pathname = location.pathname;
  
    useEffect(() => {
      if (action !== "POP") {
        window.scrollTo(0, 0);
      }
    }, [action]);
  
    useEffect(() => {
      let title = "";
      let metaDescription = "";
  
      //TODO: Update meta titles and descriptions below
      switch (pathname) {
        case "/":
          title = "";
     
      }
  
      if (title) {
        document.title = title;
      }
  
      if (metaDescription) {
        const metaDescriptionTag = document.querySelector(
          'head > meta[name="description"]'
        );
        if (metaDescriptionTag) {
          metaDescriptionTag.content = metaDescription;
        }
      }
    }, [pathname]);
  
    return (
      <Routes>
        <Route path="/" element={<Slide169Cause />} />
  
      </Routes>
    );
  }
  export default App;
  