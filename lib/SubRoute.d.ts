import React from "react";
import { IBlocked, IBlockedComponent } from "./types";
interface IProps {
    userAuthRoles: string[];
    loginRedirectPath: string;
    isUserAuthenticated: boolean;
    blocked?: IBlocked;
    blockedComponent: IBlockedComponent;
    [route: string]: any;
}
declare const SubRoute: React.FC<IProps>;
export default SubRoute;
//# sourceMappingURL=SubRoute.d.ts.map