import Footer from "./Components/Layout/Footer/Footer";
import Contact from "./Components/Layout/Contact/Contact";
import Header from "./Components/Layout/Header/Header";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Projects from "./Components/Layout/Projects/Projects";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="wrapper">
      <ToastContainer />
      <Navbar />
      <Header />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
