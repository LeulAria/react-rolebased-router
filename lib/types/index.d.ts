import { ComponentType, LazyExoticComponent, ReactNode } from "react";
export interface RouterRedirect {
    page: string;
    permissions?: string[];
    protected?: boolean;
    redirectFallback?: string;
}
export interface RouteParam {
    [x: string]: JSX.Element | React.ReactNode | string | any;
}
export interface RouterConfig {
    path: string;
    exact: boolean;
    fallback: NonNullable<ReactNode> | null;
    component?: LazyExoticComponent<ComponentType<any>> | ComponentType | any;
    routes?: RouterConfig[];
    redirect?: RouterRedirect[];
    private?: boolean;
    permissions?: string[];
    redirectFallback?: string;
    routeParam?: RouteParam;
    [x: string]: any;
}
export interface IBlocked {
    isBlocked: boolean;
    component: LazyExoticComponent<ComponentType<any>> | ComponentType | any;
}
//# sourceMappingURL=index.d.ts.map