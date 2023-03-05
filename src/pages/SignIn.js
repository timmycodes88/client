import { Form } from "react-router-dom"
import tw from "twin.macro"
import { SIGN_IN } from "../features/sign-in/SignInRoute"

export default function SignIn() {
  return (
    <Wrapper>
      <Box>
        <Title>Sign In</Title>
        <StyledForm method="post">
          <InputWrapper>
            <Label htmlFor="username">Username</Label>
            <Input name="username" type="text" />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="email">Email</Label>
            <Input name="email" type="email" />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Password</Label>
            <Input name="password" type="password" />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="creating">Creating</Label>
            <Input name="creating" type="checkbox" />
          </InputWrapper>
          <input className="hidden" name="type" value={SIGN_IN} />
          <SubmitButton type="submit">Submit</SubmitButton>
        </StyledForm>
      </Box>
    </Wrapper>
  )
}

const Wrapper = tw.div`flex flex-col items-center justify-center h-screen bg-neutral-900`
const Box = tw.div`flex flex-col items-center gap-10 justify-center w-96 p-8 bg-neutral-800 rounded-lg`

const Title = tw.h1`text-3xl text-neutral-100`
const StyledForm = tw(
  Form
)`flex flex-col items-center gap-4 justify-center w-full`
const InputWrapper = tw.div`flex flex-col items-start gap-1 w-full`
const Label = tw.label`text-neutral-100`
const Input = tw.input`w-full p-2 bg-neutral-700 rounded-lg outline-none text-neutral-100`
const SubmitButton = tw.button`w-full p-2 bg-neutral-700 rounded-lg text-neutral-100`
