import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';

import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import UserHome from "./components/UserHome";
import AdminHome from "./components/AdminHome";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
