import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import CardView from "./components/CardView";
import CardOne from "./components/CardOne";
import CardThree from "./components/CardThree";

import './App.css';

const App = () => (
    <div className="app-container">
        <Sidebar />
        <div className="main-container">
            <Header />
            <div className="main-first-container">
                <CardView />
                <div className="source-container">
                    <CardOne />
                    <CardThree req="photo" />
                </div>
            </div>
        </div>

    </div>
)

export default App