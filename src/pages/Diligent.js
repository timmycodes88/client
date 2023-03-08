import tw from "twin.macro"
import Feed from "../features/chat/components/Feed"
import MessageBox from "../features/chat/components/MessageBox"
import Groups from "../features/groups/components/Groups"

export default function Diligent() {
  return (
    <Wrapper>
      <Header>
        <h1>Header</h1>
      </Header>
      <InnerWrap>
        <Side>
          <h1>Chats</h1>
          <Groups />
        </Side>
        <Main>
          <Feed />
          <MessageBox />
        </Main>
      </InnerWrap>
    </Wrapper>
  )
}

const Wrapper = tw.div`h-screen`
const Header = tw.header`h-20 bg-zinc-900`
const InnerWrap = tw.div`flex h-[calc(100% - 5rem)]`
const Side = tw.aside`w-[20rem] h-full bg-zinc-800`
const Main = tw.main`w-full h-full bg-zinc-700`
