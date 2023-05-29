import {PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
    <div style={{height: '100vh'}}>
      <PrettyChatWindow
        projectId="71f977b1-32e2-4530-9b9a-985129adee2b"
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
      />
    </div>
  )
}

export default ChatsPage;