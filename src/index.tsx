import React from "react";
import { Switch } from "react-router-dom";
import { RouterConfig, IBlocked, IBlockedComponent } from "./types";
import SubRoute from "./SubRoute";

interface IProps {
  routes: RouterConfig[];
  userAuthRoles: string[];
  loginRedirectPath: string;
  isUserAuthenticated: boolean;
  blocked?: IBlocked;
  blockedComponent?: IBlockedComponent;
}

const Router: React.FC<IProps> = ({
  routes,
  userAuthRoles,
  loginRedirectPath,
  isUserAuthenticated,
  blocked,
  blockedComponent
}) => {
  return (
    <Switch>
      {routes &&
        routes.map((route: any) => (
          <SubRoute
            key={route.path}
            userAuthRoles={userAuthRoles}
            loginRedirectPath={loginRedirectPath}
            isUserAuthenticated={isUserAuthenticated}
            blocked={blocked}
            blockedComponent={blockedComponent}
            {...route}
          />
        ))}
    </Switch>
  );
};

export default Router;
