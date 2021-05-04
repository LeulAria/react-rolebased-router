import React, {Suspense} from "react";
import {Redirect, Route, useHistory} from "react-router-dom";
import {IBlocked} from "./types";

interface IProps {
  userAuthRoles: string[];
  loginRedirectPath: string;
  isUserAuthenticated: boolean;
  blocked?: IBlocked;
  [route: string]: any;
}

const SubRoute: React.FC<IProps> = ({
  userAuthRoles,
  loginRedirectPath,
  isUserAuthenticated,
  blocked,
  ...route
}) => {
  // checks if user is permitted from permission arr to usersRole arr
  const isPermitted = (permissions: string[]) =>
    permissions.some((permission) => userAuthRoles.indexOf(permission) !== -1);

  return (
    <Suspense fallback={route.fallback}>
      <Route
        path={route.path}
        render={(props) => {
          // block routing to specific route path
          if (blocked) {
            if (blocked.isBlocked) {
              if (blocked.component) {
                return blocked.component;
              }
            }
          }

          //check if role redirect
          if (route.redirect) {
            // check if redirect first
            // loop through redirectes to check the permittability
            for (let redirect of route.redirect) {
              // check if redirect is for protected
              if (redirect.protected) {
                // if user authenticated
                if (isUserAuthenticated) {
                  return <Redirect to={redirect.page} />;
                }
              }
              // check if redirect with permissions
              if (redirect.permissions) {
                // check if user is permitted
                if (isPermitted(redirect.permissions)) {
                  return <Redirect to={redirect.page} />;
                }
              }
            }
            return <Redirect to={route.redirectFallback || loginRedirectPath} />;
          }
          if (route.protected) {
            if (isUserAuthenticated) {
              if (route.component) {
                return <route.component {...props} routes={route.routes} />;
              }
            } else if (route.fallbackRouter) {
              return <Redirect to={route.fallbackRouter} />;
            } else {
              return <Redirect to={loginRedirectPath} />;
            }
          }
          if (route.permissions) {
            if (isPermitted(route.permissions)) {
              if (route.component) {
                return <route.component {...props} routes={route.routes} />;
              }
            } else if (route.fallbackRouter) {
              return <Redirect to={route.fallbackRouter} />;
            } else {
              return <Redirect to={loginRedirectPath} />;
            }
          } else {
            if (route.component) {
              return <route.component {...props} routes={route.routes} />;
            }
          }
        }}
      />
    </Suspense>
  );
};

export default SubRoute;
