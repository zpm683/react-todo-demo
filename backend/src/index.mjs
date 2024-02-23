// 导入必要的模块
import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";

import { mutationTodoController } from "./controller/mutation-todo.controller.mjs";
// 导入控制器
import { queryTodoController } from "./controller/query-todo.controller.mjs";

// 加载.env文件内容到　process.env
dotenv.config();

// 创建 Express 应用
const app = express();

// 端口号
const port = Number(process.env.PORT);

// 使用跨域中间件
app.use(cors());

// 使用 JSON 解析中间件
app.use(json());

// GET /query API 路由，用于查询待办事项数据
app.get("/query", queryTodoController);

// POST /mutation API 路由，用于修改待办事项数据
app.post("/mutation", mutationTodoController);

// 启动 Express 应用
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
