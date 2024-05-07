import { Navigate } from "react-router-dom";
import Layout from "../pages/Layout";
import TodoList from "../pages/TodoList";
import AddTodoList from "../pages/AddTodoList";
const routes = [
  {
    path: "/",
    element: <Navigate to="/layout" />,
  },
  {
    path: "/layout",
    element: <Navigate to="/todoList" />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/todoList",
        element: <TodoList />,
      },
      {
        path: "/addTodoList",
        element: <AddTodoList />,
      },
    ],
  },
];

export default routes;
