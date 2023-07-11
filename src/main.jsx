import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorRoute from "./components/ErrorRoute.jsx";
import Feed from "./components/Feed.jsx";
import Trending from "./components/Trending.jsx";
import Library from "./components/Library.jsx";
import Favourites from "./components/Favourites.jsx";
import Body from "./components/Body.jsx";
import Player from "./components/Player.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/player",
        element: <Player />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
