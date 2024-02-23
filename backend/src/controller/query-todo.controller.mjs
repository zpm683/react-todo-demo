// eslint-disable-next-line no-unused-vars
import express from "express";

import * as todoService from "../service/todo.service.mjs";

/**
 * query Todo Controller
 * 查询待办事项控制器，用于处理查询待办事项的请求
 * @param {express.Request} req - Express 框架的请求对象
 * @param {express.Response} res - Express 框架的响应对象
 */
const queryTodoController = async (req, res, next) => {
  try {
    // 调用 todoService 中的 queryTodo 方法来获取待办事项数据
    const data = await todoService.queryTodo();

    // 如果没有数据，则返回一个空数组
    if (!data) {
      return res.send([]);
    }

    // 将数据转换为 JSON 字符串并发送给客户端
    return res.send(JSON.stringify(data));
  } catch (error) {
    // 如果发生错误，则将错误传递给 Express 的错误处理中间件
    next(error);
  }
};

export { queryTodoController };
