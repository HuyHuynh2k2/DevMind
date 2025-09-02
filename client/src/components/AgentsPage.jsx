import agent from "../utils/Agents1.png";
import background from "../utils/chatbotbg.jpg";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function AgentsPage() {
  const [startChat, setStartChat] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there! How can I help you today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const sendMessageToAI = async () => {
    if (!inputValue.trim()) return;

    const newMessages = [...messages, { sender: "user", text: inputValue }];
    setMessages(newMessages);
    setInputValue("");
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          conversation: newMessages.map((m) => ({
            role: m.sender === "user" ? "user" : "assistant",
            content: m.text,
          })),
        }),
      });

      const data = await res.json();

      if (data.reply) {
        setMessages([...newMessages, { sender: "bot", text: data.reply }]);
      }
    } catch (err) {
      console.error("Error sending message: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Agent avatar */}
      <div className="flex flex-col items-center animate-fadeIn">
        <div className="h-[10rem] w-[10rem]">
          <img src={agent} alt="AI Agent" className="rounded-full shadow-lg" />
        </div>

        {startChat ? (
          <p className="text-black font-bold text-2xl mt-3">Huy Huynh</p>
        ) : (
          <p className="text-white text-2xl mt-5">Hello</p>
        )}
      </div>

      {!startChat && (
        <div className="mt-12">
          <button
            onClick={() => setStartChat(true)}
            className="bg-black/80 text-white text-xl rounded-lg shadow-lg px-6 py-3 transition hover:bg-black hover:scale-105"
          >
            Start Chat
          </button>
        </div>
      )}

      {startChat && (
        <>
          {/* Messages */}
          <div className="flex flex-col w-[75%] bg-white/20 rounded-lg shadow-lg p-4 mt-6 mb-3 flex-grow overflow-y-auto max-h-[50vh]">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-white text-black self-start"
                }`}
              >
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
            ))}

            {isLoading && (
              <div className="p-2 rounded-lg max-w-[80%] bg-gray-300 text-black self-start">
                AI is typing...
              </div>
            )}
          </div>

          {/* Input bar */}
          <div className="flex w-[75%] gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessageToAI()}
              placeholder="Type your message..."
              className="text-white flex-grow rounded-lg p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={sendMessageToAI}
              className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
}
