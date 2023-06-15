import { uniqueId } from "lodash";
import { TodoInfo } from "models.todos";

import { InputerProps, TodoItemProps } from "app/components";
import { useGlobalStore } from "app/stores";

const useTodos = () => {
  const todos = useGlobalStore((s) => s.todos);
  const setTodos = useGlobalStore((s) => s.setTodos);

  // 新增TODO
  const handleAdd: InputerProps["onAdd"] = (text) => {
    const newTodo: TodoInfo = { id: uniqueId(), state: "todo", content: text };
    setTodos([...todos, newTodo]);
  };

  //修改TODO
  const handleUpdate: TodoItemProps["onUpdate"] = (id, isTodo) => {
    const index = todos.findIndex((v) => v.id === id);
    if (~index) todos[index].state = isTodo ? "todo" : "done";
  };

  //删除TODO
  const handleDelete: TodoItemProps["onDelete"] = (id) => {
    const nextTodos = todos.filter((v) => v.id !== id);
    setTodos(nextTodos);
  };

  return { todos, handleAdd, handleUpdate, handleDelete };
};

export { useTodos };
