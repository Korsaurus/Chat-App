import './App.css';
import { ChatEngine } from "react-chat-engine"
import ChatFeed from "../chatFeed/chatFeed"

const App = () => {
    return (
        <div className="App">
            <ChatEngine
                height="100vh"
                projectID="
                2ca59af7-10ac-4497-80a2-55d4f0d5c5f2"
                userName="Korsaurus"
                userSecret="123123"
                renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
            />
        </div>
    );
}

export default App;