import React from "react";
import { RouterConfig, IBlocked } from "./types";
interface IProps {
    routes: RouterConfig[];
    userAuthRoles: string[];
    loginRedirectPath: string;
    isUserAuthenticated: boolean;
    blocked?: IBlocked;
}
declare const Router: React.FC<IProps>;
export default Router;
//# sourceMappingURL=index.d.ts.map