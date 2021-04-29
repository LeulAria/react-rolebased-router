import React from "react";
import { RouterConfig, IBlocked, IBlockedComponent } from "./types";
interface IProps {
    routes: RouterConfig[];
    userAuthRoles: string[];
    loginRedirectPath: string;
    isUserAuthenticated: boolean;
    blocked?: IBlocked;
    blockedComponent?: IBlockedComponent;
}
declare const Router: React.FC<IProps>;
export default Router;
//# sourceMappingURL=index.d.ts.map