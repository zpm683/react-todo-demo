import { Divider } from "antd";

import { FlexBox, Inputer, Title, TodoItem } from "app/components";
import { useTodos } from "app/hooks/useTodos";
import { useGlobalStore } from "app/stores";

const Todo = () => {
  const name = useGlobalStore((s) => s.name);
  const { todos, handleAdd, handleDelete, handleUpdate } = useTodos();

  return (
    <FlexBox gap={10}>
      <Title subTitle={name} />
      <Inputer onAdd={handleAdd} />
      <Divider />
      {todos.map((info) => (
        <TodoItem
          key={info.id}
          data={info}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </FlexBox>
  );
};

export { Todo };
