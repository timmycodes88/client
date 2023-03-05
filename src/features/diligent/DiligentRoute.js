import { useActionData, useLoaderData, useSubmit } from "react-router-dom"

export async function dilgentLoader() {
  const feed = []
  const groups = []
  return { feed, groups }
}

const SEND_MESSAGE = "SEND_MESSAGE"
const CREATE_GROUP = "CREATE_GROUP"

export async function diligentAction({ request }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData.entries())

  switch (data.type) {
    case SEND_MESSAGE:
      break
    case CREATE_GROUP:
      break
    default:
      throw new Error("Invalid action")
  }
  return null
}

export const useDiligent = () => ({ ...useLoaderData(), ...useActionData() })

export const useDiligentActions = () => {
  const submit = useSubmit()

  return {}
}
