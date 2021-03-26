<p align="center">
  <a href="https://github.com/LeulAria/react-role-based-router">
    <img width="200" src="https://raw.githubusercontent.com/LeulAria/react-role-based-router/main/assets/react-rolebased-routerlogo.png">
  </a>
</p>

<h1 align="center">react rolebased router</h1>

## Usage

Here is a quick example to get you started, **it's all you need**:

```tsx
import * as React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";
import ReactRoleAccessRouter from "react-rolebased-router";
import { RouterConfig } from "react-rolebased-router/lib/types";

const routes: RouterConfig[] = [
  {
    path: "/",
    exact: true,
    redirect: [
      {
        page: "/dashboard",
        permissions: ["admin"],
      }
    ],
    exact: true,
    fallback: <div>Loading...</div>,
  },
  {
    path: "/home",
    component: lazy(() => import("./pages/Home")),
    exact: true,
    fallback: <div>Loading...</div>,
    private: true,
    permissions: ["super-admin", "admin"]
  },
  ...
  {
    path: "/*",
    component: lazy(() => import("./pages/NotFound")),
    exact: false,
    fallback: <div>Loading...</div>,
  },
]

const App = () => {
  return (
    </BrowserRouter>
      <ReactRoleAccessRouter
        routes={routes}
        userAuthRoles={userRoles}
        loginRedirectPath={"/login"}
        isUserAuthenticated={loggedIn}
      />
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

See Demo:

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/bold-beaver-4lrq6)

🤔 Wana make it awesome, contribute, create an issue and more  are welcome.

2021.
