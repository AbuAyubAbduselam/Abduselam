import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import PreLoader from "./components/Preloader/Preloader";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Topbar from "./components/Topbar/Topbar";
import { ConfigProvider } from "antd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#2196f3",
        },
      }}
    >
      <div className="preload">
        <PreLoader />
        <ToastContainer className="toast-container" />
        <Topbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contacts />
        <Nav />
        <Footer />
      </div>
    </ConfigProvider>
  );
};

export default App;
