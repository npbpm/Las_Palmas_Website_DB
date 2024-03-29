import "./styles/App.css";
import { Routes, Route /* Navigate */ } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import NavBar from "./NavBar";
import Footer from "./Footer";
import WhoAreWe from "./WhoAreWe";
import Arrive from "./Arrive";
import CocoraValley from "./CocoraValley";
import Restaurant from "./Restaurant";
import CofeeHouse from "./CofeeHouse";
import Lodging from "./Lodging";
import Camping from "./Camping";
import Games from "./Games";
import Horsebackriding from "./Horsebackriding";
import Glamping from "./Glamping";
import Cocoraviva from "./Cocoraviva";
import Packages from "./Packages";
import Reviews from "./Reviews";
import Bookings from "./Bookings";
import Contact from "./Contact";
import Loading from "./Loading";
import { withStyles } from "@mui/styles";
import style from "./styles/AppStyle";
import { LanguageProvider } from "./context/LanguageContext";
import { AuthProvider } from "./context/auth/AuthContext";
import setAuthToken from "./utils/setAuthToken";
import { useEffect, useState } from "react";

function App(props) {
  const { classes } = props;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const onPageLoad = () => {
      setIsLoading(false);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  return (
    <div className="App">
      <AuthProvider>
        <LanguageProvider>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="container">
              <div className={classes.homeHeader}>
                {/* <DispAppBar /> */}
                <NavBar />
              </div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
                <Route path="/packages-and-sales" element={<Packages />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/booking" element={<Bookings />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/who-are-we" element={<WhoAreWe />} />
                <Route path="/arrive" element={<Arrive />} />
                <Route path="/cocora-valley" element={<CocoraValley />} />
                <Route path="/restaurant" element={<Restaurant />} />
                <Route path="/cofee-house" element={<CofeeHouse />} />
                <Route path="/lodging" element={<Lodging />} />
                <Route path="/camping" element={<Camping />} />
                <Route path="/games" element={<Games />} />
                <Route path="/horseback-riding" element={<Horsebackriding />} />
                {/* <Route path="/regional-crafts" element={<Regionalcrafts />} /> */}
                <Route path="/cocora-nidos-del-condor" element={<Glamping />} />
                <Route path="/cocora-viva" element={<Cocoraviva />} />
              </Routes>
              <Footer />
            </div>
          )}
        </LanguageProvider>
      </AuthProvider>
    </div>
  );
}

export default withStyles(style)(App);
