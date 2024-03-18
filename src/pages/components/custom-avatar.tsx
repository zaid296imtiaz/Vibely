import { Avatar as AntdAvatar, AvatarProps } from "antd";

type Props = AvatarProps & {
    name?: string
}

export const CustomAvatar = ({name, style,...rest}: Props) => {
  return (
    <AntdAvatar
      alt={name}
      size="small"
      style={{
        backgroundColor: "#68add0",
        display: "flex",
        alignItems: "center",
        border: "none",
        ...style
      }}
      {...rest}
    >
      {name}
    </AntdAvatar>
  );
};
