import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import Sidebar from "./components/Sidebar";
import SignupPage from "./Pages/SignupPage";

function App() {
  return (
    <BrowserRouter>
     <Sidebar/>
     <HomePage/>
     <Switch>
       <Route path ='/' exact component = {HomePage}/>
       <Route path ='/'  component = {HomePage}/>
       <Route path ='/'  component = {HomePage}/>
       <Route path ='/'  component = {HomePage}/>
       <Route path ='/'  component = {HomePage}/>
       <Route path ='/'  component = {HomePage}/>
       <Route path ='/signup' component = {SignupPage}/>
     </Switch>
     </BrowserRouter>
  );
}

export default App;
