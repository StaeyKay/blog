import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/rootLayout";
import Home from "./pages/home";
import Politics from "./pages/politics";
import Business from "./pages/business";
import Categories from "./pages/categories";
import Health from "./pages/health";
import Design from "./pages/design";
import Contact from "./pages/contact";
import Sport from "./pages/sport";
import LandingPage from "./pages/landing";
import DashboardLayout from "./pages/dasboard/layout/dashboardLayout";
import Profile from "./pages/dasboard/pages/profile";
import Overview from "./pages/dasboard/pages/overview";
import Blog from "./pages/dasboard/pages/blog";
import DashboardCategories from "./pages/dasboard/pages/dashboardCategories";
import AuthLayout from "./pages/auth/layout/authLayout";
import Signup from "./pages/auth/signup";
import Signin from "./pages/auth/signin";

function App() {
  const router = createBrowserRouter([
    // {
    //   index: true,
    //   element: <LandingPage/>
    // },
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "politics",
          element: <Politics />,
        },
        {
          path: "business",
          element: <Business />,
        },
        {
          path: "health",
          element: <Health />,
        },
        {
          path: "design",
          element: <Design />,
        },
        {
          path: "sport",
          element: <Sport />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "dashboard/:userId",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "blogs",
          element: <Blog />,
        },
        {
          path: "blogs/:blogId",
          element: <Blog />,
        },
        {
          path: "categories",
          element: <DashboardCategories />,
        },
      ],
    },
    {
      path: "auth",
      element: <AuthLayout />,
      children: [
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "login",
          element: <Signin />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
