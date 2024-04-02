import { AuthPage, ThemedTitleV2 } from "@refinedev/antd";
import { authCredentials } from "../../providers";
import { DashboardOutlined, FireFilled } from "@ant-design/icons";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      registerLink={false}
      forgotPasswordLink={false}
      title={<ThemedTitleV2 icon={<FireFilled />} collapsed={false} text="Vibely CRM" />}
      formProps={{
        initialValues: authCredentials,
      }}
    />
  );
};
