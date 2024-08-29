import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import RootLayout from "./layout/rootLayout"
import Home from "./pages/home"
import Politics from "./pages/politics"
import Business from "./pages/business"
import Categories from "./pages/categories"
import Health from "./pages/health"
import Design from "./pages/design"
import Contact from "./pages/contact"
import Sport from "./pages/sport"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "categories",
          element: <Categories />
        },
        {
          path: "politics",
          element: <Politics/>
        },
        {
          path: "/business",
          element: <Business/>
        },
        {
          path: "/health",
          element: <Health/>
        },
        {
          path: "/design",
          element: <Design/>
        },
        {
          path: "/sport",
          element: <Sport/>
        },
        {
          path: "/contact",
          element: <Contact/>
        }
      ]
    }
  ])
  return ( <RouterProvider router={router} />
  )
}

export default App
