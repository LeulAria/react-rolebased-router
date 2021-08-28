import React from "react";
import { RouteProps } from "react-router-dom";
import { IBlocked } from "./types";
interface IProps {
    userAuthRoles: string[];
    loginRedirectPath: string;
    isUserAuthenticated: boolean;
    blocked?: IBlocked;
    routeProps?: RouteProps;
    [route: string]: any;
}
declare const SubRoute: React.FC<IProps>;
export default SubRoute;
//# sourceMappingURL=SubRoute.d.ts.map