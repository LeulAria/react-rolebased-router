import React from "react";
import { SwitchProps } from "react-router-dom";
import { RouterConfig, IBlocked } from "./types";
export * from './types';
export * from './SubRoute';
interface IProps {
    routes: RouterConfig[];
    userAuthRoles?: string[];
    loginRedirectPath?: string;
    isUserAuthenticated?: boolean;
    blocked?: IBlocked;
    switchProps: SwitchProps;
}
declare const Router: React.FC<IProps>;
export default Router;
//# sourceMappingURL=index.d.ts.map