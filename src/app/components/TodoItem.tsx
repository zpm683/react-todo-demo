import { DeleteOutlined } from "@ant-design/icons";
import { Button, Col, Row, Switch, Typography } from "antd";
import { TodoInfo } from "models.todos";

type TodoItemProps = Partial<{
  /** Todo数据 */
  data: TodoInfo | undefined;
  /** 切换Todo状态的事件 */
  onUpdate: (id: string, isTodo: boolean) => void;
  /** 删除Todo的事件 */
  onDelete: (id: string) => void;
}>;

/**
 *  一条Todo
 *  包含状态/内容/删除
 */
const TodoItem: React.FC<TodoItemProps> = ({
  data,
  onDelete = () => void 0,
  onUpdate = () => void 0,
}) => {
  // 没有数据时不渲染
  if (!data) return null;

  const { id, state, content } = data;

  /** 事件：切换Todo状态 */
  const handleChange = (checked: boolean) => {
    onUpdate(id, checked);
  };

  /** 事件：点击删除按钮 */
  const handleClickDelete = () => {
    onDelete(id);
  };

  return (
    <Row style={{ width: 500 }}>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <Switch defaultChecked={state === "todo"} onChange={handleChange} />
      </Col>
      <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <Typography.Text>{content}</Typography.Text>
      </Col>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <Button
          danger
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={handleClickDelete}
        />
      </Col>
    </Row>
  );
};

export { TodoItem };
export type { TodoItemProps };
