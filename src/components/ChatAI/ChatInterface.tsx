import React, { useState, useRef, useEffect } from "react";
import {
  SendOutlined,
  LoadingOutlined,
  RobotOutlined,
  UserOutlined,
  ExpandOutlined,
} from "@ant-design/icons";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import { sendMessageToGemini } from "../../services/geminiService";
import "./ChatAI.scss";
import "highlight.js/styles/atom-one-dark.css";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface ChatInterfaceProps {
  isOpen: boolean;
  onOpenFullPage?: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  isOpen,
  onOpenFullPage,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Xin chào! Tôi là trợ lý AI của bạn. Tôi có thể giúp gì cho bạn?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const aiResponse = await sendMessageToGemini(inputValue);

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      // Log error for debugging
      console.error(error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="chat-ai-interface">
      {/* Header */}
      <div className="chat-header">
        <div className="chat-header-content">
          <RobotOutlined className="chat-header-icon" />
          <div className="chat-header-text">
            <h3>Trợ Lý AI</h3>
            <span className="chat-status">
              <span className="status-dot"></span>
              Đang hoạt động
            </span>
          </div>
          {onOpenFullPage && (
            <button
              className="expand-button"
              onClick={onOpenFullPage}
              title="Mở trang đầy đủ"
            >
              <ExpandOutlined />
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-message ${
              message.sender === "user" ? "user-message" : "ai-message"
            }`}
          >
            <div className="message-avatar">
              {message.sender === "user" ? <UserOutlined /> : <RobotOutlined />}
            </div>
            <div className="message-content">
              <div className="message-bubble">
                {message.sender === "ai" ? (
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight, rehypeRaw]}
                    components={{
                      p: ({ children }) => (
                        <p className="markdown-p">{children}</p>
                      ),
                      h1: ({ children }) => (
                        <h1 className="markdown-h1">{children}</h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="markdown-h2">{children}</h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="markdown-h3">{children}</h3>
                      ),
                      ul: ({ children }) => (
                        <ul className="markdown-ul">{children}</ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="markdown-ol">{children}</ol>
                      ),
                      li: ({ children }) => (
                        <li className="markdown-li">{children}</li>
                      ),
                      code: ({ className, children, ...props }) => {
                        const match = /language-(\w+)/.exec(className || "");
                        return match ? (
                          <code
                            className={`${className} markdown-code-block`}
                            {...props}
                          >
                            {children}
                          </code>
                        ) : (
                          <code className="markdown-code-inline" {...props}>
                            {children}
                          </code>
                        );
                      },
                      pre: ({ children }) => (
                        <pre className="markdown-pre">{children}</pre>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="markdown-blockquote">
                          {children}
                        </blockquote>
                      ),
                      a: ({ children, href }) => (
                        <a
                          href={href}
                          className="markdown-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      ),
                      strong: ({ children }) => (
                        <strong className="markdown-strong">{children}</strong>
                      ),
                      em: ({ children }) => (
                        <em className="markdown-em">{children}</em>
                      ),
                    }}
                  >
                    {message.text}
                  </ReactMarkdown>
                ) : (
                  <p>{message.text}</p>
                )}
              </div>
              <div className="message-time">
                {message.timestamp.toLocaleTimeString("vi-VN", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="chat-message ai-message">
            <div className="message-avatar">
              <RobotOutlined />
            </div>
            <div className="message-content">
              <div className="message-bubble typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="chat-input-container">
        <input
          ref={inputRef}
          type="text"
          className="chat-input"
          placeholder="Nhập tin nhắn của bạn..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
        />
        <button
          className="chat-send-button"
          onClick={handleSendMessage}
          disabled={!inputValue.trim() || isLoading}
        >
          {isLoading ? (
            <LoadingOutlined className="button-icon" />
          ) : (
            <SendOutlined className="button-icon" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
