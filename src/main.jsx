import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import FindBlood from './Component/FindBlood/FindBlood.jsx';
import Emergency from './Component/Emergency/Emergency.jsx';
import Register from './Component/Register/Register.jsx';
import Volunteer from './Component/Register/Volunteer.jsx';
import Organization from './Component/Register/Organization.jsx';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/findBLood",
        element: <FindBlood></FindBlood>,
      },
      {
        path: "/emergency",
        element: <Emergency></Emergency>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/volunteer",
        element: <Volunteer></Volunteer>,
      },
      {
        path: "/organization",
        element: <Organization></Organization>,
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


