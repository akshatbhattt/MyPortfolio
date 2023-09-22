import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Sociallink from "./Component/Sociallink";
import About from "./Component/About";
import Projects from "./Component/Projects";
import Experience from "./Component/Experience";
import Contact from "./Component/Contact";


function App() {
  return (
    <>
    <div>
      <Navbar/> 
      <Home/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>


      <Sociallink/>
    </div>




    </>
  );
}

export default App;
