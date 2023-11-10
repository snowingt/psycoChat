import { createBrowserRouter } from "react-router-dom";
import { Home } from "../page/Home";
import ChatApp from "../page/ChatApp";
import SignInSide from "../components/SingInSide";
import { Layout } from "../layout/Layout";
import ChatContent from "../page/ChatContent";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/chat", element: <ChatContent /> },
      { path: "/login", element: <SignInSide /> },
    ],
  },
]);
