import React from "react";
import { Layout, Menu } from "antd";
import "./index.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
const { Header, Footer, Content } = Layout;
const tabTitles = {
  TODOLIST: "todoList",
  ADDTODO: "addTodoList",
};
const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const items = [
    {
      key: "/todoList",
      label: "ToDoList",
    },
    {
      key: "/addTodoList",
      label: "AddToDoList",
    },
  ];

  const onMenuClick = (key) => {
    if (key && !key?.includes("null")) {
      navigate(key);
    }
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          textAlign: "center",
          color: "#fff",
          height: 64,
          paddingInline: 48,
          lineHeight: "64px",
          backgroundColor: "#2b2b2b",
          fontFamily: "PingFangSC-Medium, sans-serif",
          fontSize: 30,
        }}
      >
        ToDoList
      </Header>
      <Content
        style={{
          minHeight: 120,
          color: "#000",
          backgroundColor: "#f2f2f2",
        }}
      >
        <div className="container">
          <Menu
            onSelect={(k) => onMenuClick(k.key)}
            defaultSelectedKeys={[location.pathname]}
            mode="horizontal"
            items={items}
          />
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        ToDoList ©{new Date().getFullYear()} Created by zhouql
      </Footer>
    </Layout>
  );
};

export default App;
