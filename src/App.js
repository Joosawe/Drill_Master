import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import SignupPage from "./Pages/SignupPage";
import Login from "./Pages/Login";
import PrivateRoute from "./Pages/PrivateRoute";
import UserProfile from "./Pages/UserProfile";
import ForgotPassword from "./Pages/ForgotPassword";
import Main from "./components/AboutUs/Main";
import Drills from "./Pages/Drills";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/map" component={Map} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/drills" component={Drills} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/user-profile" component={UserProfile} />
          <Route path="/about-us" component={Main} />

          <Route path="*" component={() => "404  NOT FOUND"} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
