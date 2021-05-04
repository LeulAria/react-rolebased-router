import React from "react";
import { IBlocked } from "./types";
interface IProps {
    userAuthRoles: string[];
    loginRedirectPath: string;
    isUserAuthenticated: boolean;
    blocked?: IBlocked;
    [route: string]: any;
}
declare const SubRoute: React.FC<IProps>;
export default SubRoute;
//# sourceMappingURL=SubRoute.d.ts.map