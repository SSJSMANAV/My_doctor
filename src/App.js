import Home from "./components/Home/home";
import SignUp from "./components/Signup/signup";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./components/Login/login";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/log-in", element: <LogIn /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
