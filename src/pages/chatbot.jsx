import { Helmet } from 'react-helmet-async';
import { ChatbotView } from 'src/sections/chatbot/view';

// ----------------------------------------------------------------------

export default function ChatbotPage() {
  return (
    <>
      <Helmet>
        <title> Chatbot | myFARM </title>
      </Helmet>

      <ChatbotView />
    </>
  );
}
