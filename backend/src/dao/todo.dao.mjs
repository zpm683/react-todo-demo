// 导入查询和修改函数
import { mutate, query } from "../utils/sqlite.utils.mjs";

// 定义表名
const TABLE_NAME = "todo";

// 查询所有待办事项
const selectTodo = async () => {
  // SQL 查询语句
  const SQL = `select * from ${TABLE_NAME};`;

  // 执行查询并返回结果
  return await query(SQL, []);
};

// 插入新的待办事项
const insertTodo = async (id, value, state) => {
  // SQL 插入语句
  const SQL = `insert into ${TABLE_NAME}(id, value, state) values (?, ?, ?);`;

  // 参数列表
  const param = [id, value, state];

  // 执行插入操作
  await mutate(SQL, param);
};

// 更新待办事项的状态
const updateTodo = async (id, state) => {
  // SQL 更新语句
  const SQL = `update ${TABLE_NAME} set state = ? where id = ?;`;

  // 参数列表
  const param = [state, id];

  // 执行更新操作
  await mutate(SQL, param);
};

// 删除待办事项
const deleteTodo = async (id) => {
  // SQL 删除语句
  const SQL = `delete from ${TABLE_NAME} where id = ?;`;

  // 参数列表
  const param = [id];

  // 执行删除操作
  await mutate(SQL, param);
};

// 导出函数
export { selectTodo, insertTodo, updateTodo, deleteTodo };
