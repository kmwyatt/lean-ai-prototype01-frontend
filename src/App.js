import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IntroPage from "./components/IntroPage/IntroPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
import AdminPage from "./components/AdminPage/AdminPage";
import MyPage from "./components/MyPage/MyPage";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import WorksPage from "./components/WorksPage/WorksPage";

function App() {
  return (
    <Router>
      <Route path="/" component={Header} />
      <Switch>
        <Route exact path="/" component={Auth(IntroPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/project" component={Auth(ProjectPage, true, 1)} />
        <Route path="/admin" component={Auth(AdminPage, true, 9)} />
        <Route path="/mypage" component={Auth(MyPage, true)} />
        <Route path="/works" component={Auth(WorksPage, true, 1)} />
      </Switch>
      <Route path="/" component={Footer} />
    </Router>
  );
}

export default App;
