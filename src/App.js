import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IntroPage from "./components/IntroPage/IntroPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/Register/RegisterPage";
import Auth from "./hoc/auth";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Auth(IntroPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
