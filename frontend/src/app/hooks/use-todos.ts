import { useLockFn, useMount } from "ahooks";
import { produce } from "immer";
import { State } from "models.todos";

import { addTodoAPI, deleteTodoAPI, updateTodoAPI } from "app/apis";
import { useGlobalStore } from "app/stores";

const useTodos = () => {
  const todos = useGlobalStore((s) => s.todos);
  const setTodos = useGlobalStore((s) => s.setTodos);
  const fetchTodos = useGlobalStore((s) => s.fetchTodos);

  // 新增TODO
  const addTodo = async (value: string) => {
    const { id } = await addTodoAPI({ value });
    setTodos([...todos, { id, value, state: "TODO" }]);
  };

  //修改TODO
  const updateTodo = async (id: string, state: State) => {
    await updateTodoAPI({ id, state });

    const index = todos.findIndex((v) => v.id === id);
    setTodos(
      produce(todos, (d) => {
        d[index].state = state;
      }),
    );
  };

  //删除TODO
  const deleteTodo = async (id: string) => {
    await deleteTodoAPI({ id });
    const nextTodos = todos.filter((v) => v.id !== id);
    setTodos(nextTodos);
  };

  useMount(() => {
    fetchTodos();
  });

  return {
    todos,
    addTodo: useLockFn(addTodo),
    updateTodo: useLockFn(updateTodo),
    deleteTodo: useLockFn(deleteTodo),
  };
};

export { useTodos };
