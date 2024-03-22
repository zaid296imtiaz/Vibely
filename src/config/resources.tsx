import {
  DashboardOutlined,
  ProjectOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

export const resources: IResourceItem[] = [
  /**
   * WIKI:
   *
   * list -> get all records (Read)
   * show -> get single record (Read)
   * create -> create a record (Create)
   * edit -> update a record (Update)
   * delete -> delete a record (Delete)
   * clone -> copy a record
   */

  {
    name: "dashboard",
    list: "/",
    meta: {
      label: "Dashboard",
      icon: <DashboardOutlined />,
    },
  },
  {
    name: "companies",
    list: "/",
    show: "/companies/:id",
    create: "companies/new",
    edit: "companies/edit/:id",
    meta: {
      label: "Companies",
      icon: <ShopOutlined />,
    },
  },
  {
    name: "tasks",
    list: "/tasks",
    create: "tasks/new",
    edit: "tasks/edit/:id",
    meta: {
      label: "Tasks",
      icon: <ProjectOutlined />,
    },
  },
];
