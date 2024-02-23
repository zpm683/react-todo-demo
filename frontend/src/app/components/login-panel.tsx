import { CSSProperties, FC } from "react";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

type LoginPanelProps = {
  css?: CSSProperties;
  onLogin?: (username: string, password: string) => void;
};

const LoginPanel: FC<LoginPanelProps> = ({ onLogin = () => void 0, css }) => {
  const onFinish = (values: any) => {
    onLogin(values.username, values.password);
  };

  return (
    <Form
      name="normal_login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      style={css}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <a href=".">Forgot password</a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export { LoginPanel };
export type { LoginPanelProps };
