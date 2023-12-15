// == Import
import "./styles.scss";
import Header from "src/components/Header";
import Description from "src/components/Description";
import Career from "src/components/Career";
import Contact from "src/components/Contact";
import Projects from "src/components/Projects";
import Skills from "src/components/skills";
import NotFound from "src/components/NotFound";
import { Routes, Route } from "react-router-dom";

// == Composant
const App = () => (
    <div className="app">
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

// == Export
export default App;
