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
import TherapistLogin from './pages/forms/TherapistLogin';
import TherapistRegister from './pages/forms/TherapistRegister';
import TherapistDashboardLayout from './Layouts/TherapistDashboardLayout';
import Dashboard from './pages/therapistDashboard/Dashboard';
import Assessments from './pages/therapistDashboard/Assessments';
import Calender from './pages/therapistDashboard/Calender';
import Clients from './pages/therapistDashboard/Clients';
import Resources from './pages/therapistDashboard/Resources';
import Settings from './pages/therapistDashboard/Settings';
import TherapistProfile from './pages/therapistDashboard/Profile';
import UserProfile from './pages/dashboard/UserProfile';
import Blog from './pages/therapistDashboard/Blog';

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
    path: "/therapist-login",
    element:<TherapistLogin/>
   },
   {
    path: "/therapist-register",
    element:<TherapistRegister/>
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
        path: "user-profile",
        element: <UserProfile/>
      },

      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
  
  {
    path: "/therapist-dashboard",
    element:<TherapistDashboardLayout/>,
    children: [
      {
        index: true, 
        element: <Dashboard/>
      },

      {
        path: "assessments",
        element: <Assessments/>
      },
      {
        path: "calendar",
        element: <Calender/>
      },
      {
        path: "clients",
        element: <Clients/>
      },
      {
        path: "blog",
        element: <Blog/>
      },
      {
        path: "resources",
        element: <Resources/>
      },
      {
        path: "settings",
        element: <Settings/>
      },
      {
        path: "profile",
        element: <TherapistProfile/>
      },
     
    ]
   },

  ]);

 


  return <RouterProvider router={router} />;
}
export default App
