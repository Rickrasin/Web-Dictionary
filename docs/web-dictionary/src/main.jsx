import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Home from "./pages/Home/Home.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Home /> }],
  },
]);
import { Provider } from "react-redux";
import store from "./redux/store.jsx";

import { ThemeProvider } from "./context/ThemeContext";
import { AudioProvider } from "./context/AudioContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <AudioProvider>
        <ThemeProvider>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </ThemeProvider>
      </AudioProvider>
    </QueryClientProvider>
  </Provider>
);
