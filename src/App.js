import { Routes, Route, Link } from 'react-router-dom'

import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Homepage";
import Damage from "./Components/Damage/Damage";
import Social from "./Components/Social/Social";
import "./index.css"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/damage" element={<Damage/>}/>
        <Route path="/social" element={<Social/>}/>
      </Routes>
    </div>
  );
}

export default App;
