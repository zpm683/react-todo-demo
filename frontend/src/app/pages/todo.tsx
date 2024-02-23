import { Divider } from "antd";

import { FlexBox, Inputer, Title, TodoItem } from "app/components";
import { useTodos } from "app/hooks";
import { useGlobalStore } from "app/stores";

const Todo = () => {
  const name = useGlobalStore((s) => s.name);
  const { todos, addTodo, deleteTodo, updateTodo } = useTodos();

  return (
    <FlexBox gap={10}>
      <Title subTitle={name} />
      <Inputer onAdd={addTodo} />
      <Divider />
      {todos.map((info) => (
        <TodoItem
          key={info.id}
          data={info}
          onUpdate={updateTodo}
          onDelete={deleteTodo}
        />
      ))}
    </FlexBox>
  );
};

export { Todo };
