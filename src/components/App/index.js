// == Import
import Header from "src/components/Header";
import "./styles.scss";
import Description from "../Description";
import { Routes, Route } from "react-router-dom";

// == Composant
const App = () => (
    <div className="app">
        <div className="app__header">
            <h1 className="app__title">MOGO</h1>
            <Header />
        </div>
        <Routes>
            <Route path='/' element={<Description />}/>
        </Routes>
    </div>
);

// == Export
export default App;
