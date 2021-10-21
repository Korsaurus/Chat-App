import { ChatEngine } from 'react-chat-engine';

import ChatFeed from '../chatFeed/chatFeed';
import LoginForm from '../login/login';
import './App.css';

const projectID = '2ca59af7-10ac-4497-80a2-55d4f0d5c5f2';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;