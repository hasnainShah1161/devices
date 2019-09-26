import React from "react";
import Header from "../header/Header";
import Index from "../../container/index/Index";
import { Route } from "react-router-dom";
import AddDevice from "../../container/addDevice/AddDevice";
import Settings from "../settings/Settings";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <Route path="/index" exact component={Index} />
      <Route path="/index/user" exact component={() => <h2>hello user</h2>} />
      <Route path="/index/settings" exact component={Settings} />
      <Route path="/index/add-device" exact component={AddDevice} />
    </div>
  );
}
