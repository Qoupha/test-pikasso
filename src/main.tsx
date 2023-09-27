import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/providers/store.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Post from "./pages/post/index.tsx";
import PostCheck from "./pages/postCheck/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Post />,
  },
  {
    path: "/:id",
    element: <PostCheck />,
    loader: (page) => {
      return page.params;
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
