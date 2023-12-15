// == Import
import Header from "src/components/Header";
import "./styles.scss";
import Description from "../Description";
import { Routes, Route } from "react-router-dom";
import NotFound from "../NotFound";

// == Composant
const App = () => (
    <div className="app">
        <div className="app__header">
            <Header />
        </div>
        <Routes>
            <Route path='/' element={<Description />}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
);

// == Export
export default App;
