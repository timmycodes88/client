import { createBrowserRouter, redirect } from "react-router-dom"
import App from "./App"
import {
  dilgentLoader,
  diligentAction,
} from "./features/diligent/DiligentRoute"
import { signInAction, signInLoader } from "./features/sign-in/SignInRoute"
import Diligent from "./pages/Diligent"
import SignIn from "./pages/SignIn"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        loader: dilgentLoader,
        action: diligentAction,
        element: <Diligent />,
      },
      {
        path: "sign-in",
        loader: signInLoader,
        action: signInAction,
        element: <SignIn />,
      },
    ],
  },
  { path: "*", loader: () => redirect("/sign-in") },
])
export default router
