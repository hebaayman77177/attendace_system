import { Route, Switch } from "react-router-dom";
import { Router } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';

import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import UserHome from "./components/UserHome";
import AdminHome from "./components/AdminHome";
import LoginForm from "./components/LoginForm";
import history from "./history"

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/home">
          <UserHome />
        </Route>
        <Route path="/admin-home">
          <AdminHome />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
