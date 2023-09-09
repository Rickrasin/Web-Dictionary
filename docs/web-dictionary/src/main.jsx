import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Empty from "./pages/Empty/Empty.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/notfound", element: <NotFound /> },
      { path: "/empty", element: <Empty /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
