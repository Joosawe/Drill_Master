import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./components/Homepage";
import Sidebar from "./components/Sidebar";
import SignupPage from "./Pages/SignupPage";

function App() {
  return (
    <Router>
      <Sidebar/>
     <Switch>
       <Route exact path ='/'  component = {HomePage}/>
       <Route path ='/signup' component = {SignupPage}/>
     </Switch>
     </Router>
  );
}

export default App;
