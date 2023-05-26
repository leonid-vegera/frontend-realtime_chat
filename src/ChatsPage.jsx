import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic('961e361d-4e9f-47d4-a49f-370d7cde436a', props.user.username, props.user.secret)
  return (
    <div>
      <MultiChatSocket {...chatProps}/>
      <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
    </div>
  )
}

export default ChatsPage;