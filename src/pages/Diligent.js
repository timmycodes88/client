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
          <h1>Chat</h1>
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

const Wrapper = tw.div``
const Header = tw.header``
const InnerWrap = tw.div``
const Side = tw.aside``
const Main = tw.main``
