import logo from "./logo.svg";
import styles from "./App.module.css";
import { Route, Router } from "@solidjs/router";
import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/HomePage/HomePage";

const App = (props: any) => {
  return (
    <Router>
      <Route path="" component={LoginPage} />
      <Route path="/home" component={HomePage} />
    </Router>
  );
};

export default App;
