import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------- HELPERS ---------- */
const openings = ["Sure", "Absolutely", "Got it", "Happy to help"];
const closings = [
  "Let me know if you want to go deeper.",
  "Feel free to ask more questions.",
  "I am here if you need help.",
];
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

/* ---------- NLP INTENTS ---------- */
const intents = [
  {
    keywords: ["resume", "cv", "curriculum vitae", "job profile"],
    response:
      "I can help you create an ATS friendly resume that increases interview calls.",
  },
  {
    keywords: ["linkedin", "profile", "recruiter"],
    response:
      "I optimize LinkedIn profiles so recruiters can find you easily.",
  },
  {
    keywords: ["interview", "hr round", "mock"],
    response:
      "I provide interview preparation and mock interviews to boost confidence.",
  },
  {
    keywords: ["react", "frontend", "website", "project"],
    response:
      "I build modern React frontend projects with clean UI and responsiveness.",
  },
];

/* ---------- MAIN ---------- */
const VoiceBot = () => {
  const [mode, setMode] = useState("voice");
  const [listening, setListening] = useState(false);
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text:
        "Hi, I am your career assistant. Ask me about resumes, LinkedIn, interviews, or frontend projects.",
    },
  ]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ---------- SPEAK ---------- */
  const speak = (text) => {
    if (mode !== "voice") return;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  /* ---------- NLP ---------- */
  const getReply = (userText) => {
    const cleaned = userText.toLowerCase();

    let core =
      "I can help with resumes, LinkedIn profiles, interviews, or frontend projects.";

    for (const intent of intents) {
      if (intent.keywords.some((k) => cleaned.includes(k))) {
        core = intent.response;
        break;
      }
    }

    const reply = pick(openings) + ". " + core + " " + pick(closings);

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userText },
      { role: "bot", text: reply },
    ]);

    speak(reply);
  };

  /* ---------- VOICE ---------- */
  const startListening = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      alert("Speech recognition not supported.");
      return;
    }

    const recognition = new SR();
    recognition.lang = "en-US";
    recognition.start();
    setListening(true);

    recognition.onresult = (e) => {
      setListening(false);
      getReply(e.results[0][0].transcript);
    };

    recognition.onerror = () => setListening(false);
  };

  /* ---------- TEXT ---------- */
  const handleSend = () => {
    if (!input.trim()) return;
    getReply(input);
    setInput("");
  };

  return (
    <>
      {/* Mobile Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full bg-sky-400 text-slate-900 shadow-xl"
      >
        Chat
      </button>

      {/* Desktop Bot */}
      <div className="hidden md:block">
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className={`fixed right-4 bottom-20 z-50
            bg-black/40 backdrop-blur-xl
            border border-white/10
            rounded-2xl shadow-2xl text-white
            ${minimized ? "w-56 h-12 p-2" : "w-[380px] max-h-[70vh] p-4"}
            flex flex-col`}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-sm">AI Assistant</span>
            <button
              onClick={() => setMinimized(!minimized)}
              className="text-xs"
            >
              {minimized ? "Expand" : "Minimize"}
            </button>
          </div>

          {!minimized && (
            <BotUI
              mode={mode}
              setMode={setMode}
              messages={messages}
              listening={listening}
              startListening={startListening}
              input={input}
              setInput={setInput}
              handleSend={handleSend}
              chatEndRef={chatEndRef}
            />
          )}
        </motion.div>
      </div>

      {/* Mobile Sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            exit={{ y: 300 }}
            className="md:hidden fixed inset-x-0 bottom-0 z-50
            bg-black/90 backdrop-blur-xl rounded-t-2xl p-5
            max-h-[85vh] flex flex-col text-white"
          >
            <div className="flex justify-between mb-2">
              <h4 className="font-semibold">AI Assistant</h4>
              <button onClick={() => setOpen(false)}>Close</button>
            </div>

            <BotUI
              mode={mode}
              setMode={setMode}
              messages={messages}
              listening={listening}
              startListening={startListening}
              input={input}
              setInput={setInput}
              handleSend={handleSend}
              chatEndRef={chatEndRef}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ---------- UI ---------- */
const BotUI = ({
  mode,
  setMode,
  messages,
  listening,
  startListening,
  input,
  setInput,
  handleSend,
  chatEndRef,
}) => (
  <>
    <div className="flex gap-2 mb-2">
      <button
        onClick={() => setMode("voice")}
        className={`flex-1 py-1 rounded-lg text-sm ${
          mode === "voice" ? "bg-sky-400 text-slate-900" : "bg-white/10"
        }`}
      >
        Voice
      </button>
      <button
        onClick={() => setMode("text")}
        className={`flex-1 py-1 rounded-lg text-sm ${
          mode === "text" ? "bg-sky-400 text-slate-900" : "bg-white/10"
        }`}
      >
        Text
      </button>
    </div>

    <div className="flex-1 overflow-y-auto mb-3 space-y-2">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`text-sm p-2 rounded-lg max-w-[85%] ${
            msg.role === "user"
              ? "bg-sky-400 text-slate-900 ml-auto"
              : "bg-white/10"
          }`}
        >
          {msg.text}
        </div>
      ))}
      <div ref={chatEndRef} />
    </div>

    {mode === "voice" ? (
      <button
        onClick={startListening}
        className={`w-full py-2 rounded-xl ${
          listening ? "bg-red-500" : "bg-sky-400 text-slate-900"
        }`}
      >
        {listening ? "Listening..." : "Speak"}
      </button>
    ) : (
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-3 py-2 rounded-lg bg-white/10 outline-none"
          placeholder="Type here..."
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 rounded-lg bg-sky-400 text-slate-900"
        >
          Send
        </button>
      </div>
    )}
  </>
);

export default VoiceBot;
