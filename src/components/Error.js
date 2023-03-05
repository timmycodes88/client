import { useAsyncError, useRouteError } from "react-router-dom"
import tw from "twin.macro"

export default function Error() {
  const routeError = useRouteError()
  const asyncError = useAsyncError()
  const error = routeError || asyncError

  console.log(error)

  return (
    <Wrapper>
      <Message>{error.message}</Message>
    </Wrapper>
  )
}

const Wrapper = tw.div`flex flex-col items-center justify-center h-screen bg-neutral-900`
const Message = tw.div`text-3xl text-red-500`
