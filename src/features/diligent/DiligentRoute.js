import { useActionData, useLoaderData, useSubmit } from "react-router-dom"

export async function dilgentLoader() {
  const groups = [
    { users: [{ name: "Tim V", uid: 123 }], id: 0, name: "General Chat" },
    {
      users: [
        { name: "Tim V", uid: 123 },
        { name: "Gavin R", uid: 123 },
      ],
      id: 1,
      name: "Group 1",
    },
    { users: [{ name: "Tim V", uid: 123 }], id: 2, name: "Group 2" },
    { users: [{ name: "Tim V", uid: 123 }], id: 3, name: "Group 3" },
  ]

  //Get Active Group then get the feed
  const feed = []

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

  return {
    sendMessage: () => submit({ type: SEND_MESSAGE }, { method: "post" }),
    createGroup: () => submit({ type: CREATE_GROUP }, { method: "post" }),
  }
}
