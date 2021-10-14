import { BrowserRouter } from "react-router-dom";
import HomePage from "./components/Homepage";

import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     <HomePage/>
     </BrowserRouter>
  );
}

export default App;
