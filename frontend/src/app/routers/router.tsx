import { createBrowserRouter, createHashRouter } from "react-router-dom";

import { getBaseURL } from "shared/utils";

import { APP_PATH } from "../constants";
import { Login, PageNotFound, Todo } from "../pages";

const createRouter =
  import.meta.env.ENV_BUILD_IN_SINGLEFILE === "true"
    ? createHashRouter
    : createBrowserRouter;

// config the router
const router = createRouter(
  [
    { index: true, element: <Login /> },
    { path: APP_PATH.LOGIN, element: <Login /> },
    { path: APP_PATH.TODO, element: <Todo /> },
    { path: "*", element: <PageNotFound /> },
  ],
  {
    basename: getBaseURL(),
  },
);

export { router };
