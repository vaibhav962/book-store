import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { RoutePaths } from "../utils/enum";

//component lazy loading
const Register = lazy(() => import("../pages/register"));

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Register} />
    </Switch>
  );
};

export default AppRoutes;
