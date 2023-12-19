// == Import
import "./styles.scss";
import Header from "src/components/Header";
import Description from "src/components/Description";
import Career from "src/components/Career";
import Contact from "src/components/Contact";
import Projects from "src/components/Projects";
import Skills from "src/components/skills";
import NotFound from "src/components/NotFound";
import { Routes, Route, useLocation } from "react-router-dom";

// == Composant
const App = () =>  {
  const location = useLocation();
  let classname = "m-3 font-semibold ";

  switch (location.pathname) {
    case "/":
      classname += "app app--description";
      break;
    case "/parcours":
      classname += "app app--career";
      break;
    case "/competences":
      classname += "app app--skills";
      break;
    case "/projets":
      classname += "app app--projects";
      break;
    case "/contact":
      classname += "app app--contact";
      break;
    case "":
      classname += "app app--description";
    default: classname += "app app--description"
    break;
  }
  
  return (
    <div className={classname}>
        <div className="app__header">
            <Header />
        </div>
        <Routes>
            <Route path='/' element={<Description />}/>
            <Route path='/parcours' element={<Career />} />
            <Route path='/competences' element={<Skills />} />
            <Route path='/projets' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
);
  }

// == Export
export default App;
