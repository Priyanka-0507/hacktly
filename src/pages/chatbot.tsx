import React, { useState } from "react";
import { MessageSquare } from "lucide-react"; 

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div>
      
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-4 right-4 p-3 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 transition-all"
          title="Open Chatbot"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {/* Chatbot Window */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-lg border border-gray-300">
          {/* Header */}
          <div className="flex justify-between items-center bg-teal-600 text-white p-3 rounded-t-lg">
            <span className="font-semibold">Chat with MedBot</span>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:text-gray-300"
            >
              ✕
            </button>
          </div>

          {/* Chatbot Iframe (Replace with your chatbot URL) */}
          <iframe
            src="https://chatbot.getmindpal.com/medbot" 
            allow="clipboard-read; clipboard-write; microphone"
            className="w-full h-full border-none"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
