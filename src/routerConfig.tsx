import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CatalogContainer from "./components/CatalogContainer/CatalogContainer";
import MainContainer from "./components/MainContainer/MainContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MainContainer />
      },
      {
        path: "catalog",
        element: <CatalogContainer />
      }
    ],
  },
]);

export default router;