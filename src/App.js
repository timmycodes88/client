import { Outlet } from "react-router-dom"
import tw from "twin.macro"

export default function App() {
  return (
    <GlobalStyles>
      <Outlet />
    </GlobalStyles>
  )
}

const GlobalStyles = tw.div`text-white`
