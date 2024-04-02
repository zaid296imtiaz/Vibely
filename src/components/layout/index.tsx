import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";
import { Header } from "./header";
import { DashboardOutlined, FireFilled } from "@ant-design/icons";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
      Header={Header}
      Title={(titleProps) => <ThemedTitleV2 {...titleProps} text="Vibely" icon={<FireFilled />} />}
    >
      {children}
    </ThemedLayoutV2>
  );
};
