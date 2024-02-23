// 导入待办事项状态常量和数据访问对象
import { v4 } from "uuid";

import * as todoDAO from "../dao/todo.dao.mjs";
import { STATE } from "../constant/state.constant.mjs";

// 查询所有待办事项
const queryTodo = async () => {
  try {
    // 调用数据访问对象查询待办事项
    return await todoDAO.selectTodo();
  } catch (error) {
    // 如果发生错误，抛出错误
    throw error;
  }
};

// 添加新的待办事项
const addTodo = async (value) => {
  try {
    const id = v4();
    // 调用数据访问对象插入待办事项
    await todoDAO.insertTodo(id, value, STATE.TODO);
    return id;
  } catch (error) {
    // 如果发生错误，抛出错误
    throw error;
  }
};

// 删除待办事项
const delTodo = async (id) => {
  try {
    // 调用数据访问对象删除待办事项
    await todoDAO.deleteTodo(id);
  } catch (error) {
    // 如果发生错误，抛出错误
    throw error;
  }
};

// 更新待办事项状态
const updateTodo = async (id, state) => {
  try {
    // 调用数据访问对象更新待办事项状态
    await todoDAO.updateTodo(id, state);
  } catch (error) {
    // 如果发生错误，抛出错误
    throw error;
  }
};

// 导出函数
export { queryTodo, addTodo, delTodo, updateTodo };
