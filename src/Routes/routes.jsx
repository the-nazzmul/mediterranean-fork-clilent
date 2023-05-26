import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import ChefRecipes from "../Pages/ChefRecipes";
import Blog from "../Pages/Blog";
import PrivateRoute from "./Private/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch('https://the-mediterranean-fork-server-the-nazzmul.vercel.app/chefs')
        },
        {
            path: "/blog",
            element: <Blog></Blog>
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path:"/register",
            element: <Register></Register>
        },
        {
            path:"/chefs/:id",
            element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
            loader: ({params})=> fetch (`https://the-mediterranean-fork-server-the-nazzmul.vercel.app/chefs/${params.id}`)
        }
    ]
    }
   
  ]);

  export default router