import { useNavigate } from "react-router-dom";

import { FlexBox, LoginPanel, LoginPanelProps, Title } from "app/components";
import { APP_PATH } from "app/constants";

const Login = () => {
  const navigate = useNavigate();

  // 登录
  const handelLogin: LoginPanelProps["onLogin"] = (uid, pwd) => {
    // TODO: call login api
    navigate(APP_PATH.TODO);
  };

  return (
    <FlexBox height="70vh" gap={40}>
      <Title />
      <LoginPanel css={{ width: 400 }} onLogin={handelLogin} />
    </FlexBox>
  );
};

export { Login };
