import { useState } from "react";

import { Button, Input, Space } from "antd";

type InputerProps = {
  onAdd?: (text: string) => void;
};

const Inputer: React.FC<InputerProps> = ({ onAdd = () => void 0 }) => {
  const [text, setText] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    if (!text) return;
    onAdd(text);
  };

  return (
    <Space.Compact size="large" style={{ width: "40%" }}>
      <Input placeholder="请输入" value={text} onChange={handleChange} />
      <Button type="primary" onClick={handleClick}>
        添加
      </Button>
    </Space.Compact>
  );
};

export { Inputer };
export type { InputerProps };
