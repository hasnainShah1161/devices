import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Login from "./container/login/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";
import Dashboard from "./components/dashboard/Dashboard";

toast.configure({
  autoClose: 8000,
  draggable: false
  //etc you get the idea
});
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <ProtectedRoutes path="/index" component={Dashboard} />
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;
