import { FC } from "react";
import { RouterProvider } from "react-router-dom";

import { App as AntdProvider } from "antd";

import { router } from "./routers";

const App: FC = () => (
  <AntdProvider>
    <RouterProvider router={router} />
  </AntdProvider>
);

export { App };
