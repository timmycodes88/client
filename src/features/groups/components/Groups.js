import tw from "twin.macro"
import { useDiligent } from "../../diligent/DiligentRoute"

export default function Groups() {
  const { groups } = useDiligent()
  return (
    <Wrapper>
      {groups.map(group => (
        <Group key={group.id} {...group} />
      ))}
    </Wrapper>
  )
}

const Group = ({ name }) => (
  <StyledGroup>
    <h1>{name}</h1>
  </StyledGroup>
)

const Wrapper = tw.div`flex flex-col gap-2 h-full overflow-y-auto`
const StyledGroup = tw.div`flex items-center h-12 rounded-2xl mx-2 px-4 bg-zinc-700 hover:bg-zinc-600 cursor-pointer`
