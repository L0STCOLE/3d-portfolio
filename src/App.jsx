import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Hero, Navbar, Projects, Skills } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Hero />
        <div className="relative z-10 bg-primary py-16 md:py-24">
          <Experience />
        </div>
        <div className="relative z-10 bg-primary py-16 md:py-24 border-t border-border">
          <Projects />
        </div>
        <div className="relative z-10 bg-primary py-16 md:py-24 border-t border-border">
          <Skills />
        </div>
        <div className="relative z-10 bg-primary py-16 md:py-24 border-t border-border">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
