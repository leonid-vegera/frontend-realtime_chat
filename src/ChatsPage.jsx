import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic('71f977b1-32e2-4530-9b9a-985129adee2b', props.user.username, props.user.secret)
  return (
    <div>
      <MultiChatSocket {...chatProps}/>
      <MultiChatWindow {...chatProps} style={{height: '100vh'}}/>
    </div>
  )
}

export default ChatsPage;