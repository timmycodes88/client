import { redirect, useSubmit } from "react-router-dom"

export const signInLoader = async () => {
  const isSignedIn = false

  if (isSignedIn) return redirect("/")

  return null
}

const SIGN_OUT = "SIGN_OUT"
export const SIGN_IN = "SIGN_IN"

export const signInAction = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData.entries())

  switch (data.type) {
    case SIGN_OUT:
      // sign out user
      return redirect("/sign-in")
    case SIGN_IN:
      const { username, email, password, creating } = data

      if (creating) {
        // create user

        const error = false

        if (error) return { error: "Error creating user" }
        return redirect("/")
      } else {
        // sign in user

        const error = false

        if (error) return { error: "Error signing in user" }
        return redirect("/")
      }
    default:
      throw new Error("Invalid action")
  }
}

export const useAuthActions = () => {
  const submit = useSubmit()

  return {
    signOut: () => submit({ type: SIGN_OUT }, { method: "post" }),
  }
}
