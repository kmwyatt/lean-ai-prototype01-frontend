import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IntroPage from "./components/IntroPage/IntroPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/Register/RegisterPage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={IntroPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
