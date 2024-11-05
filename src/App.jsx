import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from "./pages/home";
import About from "./pages/about";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from './components/Hero';
import Login from './pages/forms/Login';
import Register from './pages/forms/Register';
import DashboardLayout from './Layouts/DashbordLayout';
import DashboardHome from './pages/dashboard/DashboardHome';
import Mood from './pages/dashboard/Mood';
import Breathing from './pages/dashboard/Breathing';
import Reminders from './pages/dashboard/Reminders';
import SupportChat from './pages/dashboard/SupportChat';
import Logout from './pages/dashboard/Logout';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
   {
    path: "/navbar",
    element:<Navbar/>
   },
   {
    path: "/footer",
    element:<Footer/>
   },
   {
    path: "/hero",
    element:<Hero/>
   },
   {
    path: "/register",
    element:<Register/>
   },
   {
    path: "/login",
    element:<Login/>
   },
    
   {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true, 
        element: <DashboardHome />,
      },
      {
        path: "mood", 
        element: <Mood />,
      },
      {
        path: "breathing",
        element: <Breathing />,
      },
      {
        path: "reminders",
        element: <Reminders />,
      },
      {
        path: "supportchat",
        element: <SupportChat />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
    ],
  }
  

  ]);

  return <RouterProvider router={router} />;
}
export default App
