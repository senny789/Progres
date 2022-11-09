import { Box, Flex, Heading, Text, Spacer } from "@chakra-ui/react";
import { Home } from "./Components/Home";
import { LoggedInHome } from "./Components/LoggedIn/LoggedInHome";
import { Login } from "./Components/Login";
import { SignUp } from "./Components/SignUp";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Welcome } from "./Components/LoggedIn/Welcome";
import { Tasks } from "./Components/LoggedIn/Tasks";
import { Progression } from "./Components/LoggedIn/Progression";
import { TaskDetails } from "./Components/LoggedIn/TaskDetails";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/SignUp",
      element: <SignUp />,
    },
    {
      path: "/ln",
      element: <LoggedInHome />,
      children: [
        {
          path: "/ln/home",
          element: <Welcome />,
        },
        {
          path: "/ln/tasks",
          element: <Tasks />,
        },
        {
          path: "/ln/progression",
          element: <Progression />,
        },
        {
          path: "/ln/taskDetails",
          element: <TaskDetails />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
