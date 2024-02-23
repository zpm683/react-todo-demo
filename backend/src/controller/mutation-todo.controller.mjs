// eslint-disable-next-line no-unused-vars
import express from "express";

import * as todoService from "../service/todo.service.mjs";
import { validateMutationPayload } from "../utils/validation.utils.mjs";

/**
 * mutation Todo Controller
 * 突变待办事项控制器，用于处理修改待办事项的请求
 * @param {express.Request} req - 请求对象
 * @param {express.Response} res - 响应对象
 */
const mutationTodoController = async (req, res, next) => {
  try {
    // 校验参数
    if (!validateMutationPayload(req.body)) {
      return res.sendStatus(500);
    }

    const { id, value, state } = req.body;

    // 添加待办事项
    if (!id && value && !state) {
      console.log("添加", req.body);
      const id = await todoService.addTodo(value);
      return res.send(JSON.stringify({ id }));
    }

    // 更新待办事项
    if (id && !value && state) {
      console.log("更新", req.body);

      await todoService.updateTodo(id, state);
      return res.sendStatus(200);
    }

    // 删除待办事项
    if (id && !value && !state) {
      console.log("删除", req.body);

      await todoService.delTodo(id);
      return res.sendStatus(200);
    }

    // 如果没有匹配的操作，返回 500 错误
    return res.sendStatus(500);
  } catch (error) {
    next(error);
  }
};

export { mutationTodoController };
