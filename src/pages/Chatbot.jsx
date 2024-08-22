import React, { useState, useCallback } from "react";
import nlp from "compromise";
import { assets } from "../assets/assets";
// import './ChatComponent.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    [
      { type: "bot", text: "Hi, Welcome to Social Santa!" },
      {
        type: "bot",
        text: "It'll take just 60 seconds, I promise. If you have any issues, feel free to email us at socialsanta2@gmail.com",
      },
      {
        type: "bot",
        text: "Okay, first up,  What's your name and where are you based? Please drop your city and country.",
      },
      { type: "bot", text: "For example: Hi, I'm Rahul. I'm from Goa ,India." },
    ],
    [
      {
        type: "bot",
        text: "Ho ho ho nice name, now just give me your email and mobile number so we can contact you for business.(I won’t give you unnecessary notification promise)",
      },
      // { type: 'bot', text: "For example: 'Hi, I'm Farza. I'm from San Francisco, USA.'" }
    ],
    [
      { type: "bot", text: "Great! What brings you here today?" },
      {
        type: "bot",
        text: "For example: 'I'm here to learn about digital marketing.'",
      },
    ],
    [
      {
        type: "bot",
        text: "Thanks for sharing! Please provide your email so we can keep in touch.",
      },
      { type: "bot", text: "For example: 'myemail@example.com'" },
    ],
  ]);
  const [currentPage, setCurrentPage] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  console.log("username", userName);
  console.log("useremail", userEmail);
  console.log("curpage", currentPage);

  const handleInputChange = useCallback((e) => {
    setUserInput(e.target.value);
  }, []);

  const handleSendMessage = () => {
    if (userInput.trim() !== "") {
      const newMessages = [...messages];
      newMessages[currentPage].push({ type: "user", text: userInput });

      if (currentPage === 0 && !userName) {
        const doc = nlp(userInput);
        const names = doc.people().out("array");

        if (names.length > 0) {
          const name = names[0];
          setUserName(name);
          // newMessages[currentPage].push({
          //   type: "bot",
          //   text: `Nice to meet you, ${name}`,
          // });
        } else {
          // newMessages[currentPage].push({ type: 'bot', text: "Sorry, I didn't catch your name and location. Can you please repeat?" });
          console.log("no able to catch the name");
        }
      }

      if (currentPage === 1 && !userEmail) {
        const emailPattern =
          /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
        const extractedEmail = userInput.match(emailPattern);

        if (extractedEmail) {
          const email = extractedEmail[0];
          setUserEmail(email);
          newMessages[currentPage].push({
            type: "bot",
            text: `Thank you! We've noted your email as ${email}.`,
          });
        } else {
          newMessages[currentPage].push({
            type: "bot",
            text: "That doesn't seem like a valid email. Can you please provide a valid email address?",
          });
        }
      }

      if (currentPage === 2) {
        newMessages[currentPage].push({
          type: "bot",
          text: "Thank you for sharing!",
        });
      }

      setMessages(newMessages);
      setUserInput("");

      // Proceed to the next page after 5 seconds if the user provided valid input
      setTimeout(() => {
        if (currentPage < 3) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      }, 3000); // 5000ms = 5 seconds
    }
  };

  const combinedMessages = () => {
    // Combine messages from all previous tabs with the current tab
    let allMessages = [];
    if (currentPage > 0) {
      allMessages = messages[currentPage - 1].slice(-2);
    }
    allMessages = allMessages.concat(messages[currentPage]);
    return allMessages;
  };

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        handleSendMessage();
      }
    },
    [handleSendMessage]
  );

  return (
    <>
      <div className="px-10">
        <img
          src={assets.logodark}
          className="sm:w-[95px] w-[100px] md:w-[100px] "
          alt=""
        />
      </div>
     <div className="chat w-[100%] flex items-center justify-center">
     <div className="chat-container px-10 w-[50%] h-auto py-10 bg-blue-400 flex items-center justify-center flex-col gap-10 ">
        <div className="page-indicator flex flex-col gap-5">
          <div className="flex ">
            <p>create your Santa profile</p>
            <span>{currentPage + 1}/4 completed</span>
          </div>
          <div className="flex ">
            <span className={`w-[100px] h-[4px] bg-[#888]`}></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="chat-box flex flex-col gap-5">
          {combinedMessages().map((msg, index) => (
            <div
              key={index}
              className={`chat-message flex flex-col gap-1 ${msg.type} `}
            >
              <p>{msg.type}</p>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="chat-input-container">
          <input
            type="text"
            className="chat-input"
            placeholder="Type your message here..."
            value={userInput}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button className="chat-send-button" onClick={handleSendMessage}>
            ➤
          </button>
        </div>
      </div>
     </div>
    </>
  );
};

export default Chatbot;

// import nlp from 'compromise';
// import React from 'react'

// const Chatbot = () => {
//       // extract name
//   const name = "Hi I am kiran, new delhi  India.";
//   // const username = name.match(/\b[A-Z][a-z]*\b/);
//   const doc = nlp(name);
//   const names = doc.people().normalize().out("array");
//   console.log(names[0]);

//   // extract email
//   const mail = "my mail is kiran@gmail.com";
//   const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
//   const emailMatch = mail.match(emailPattern);
//   if (emailMatch){
//     console.log(emailMatch[0])
//   } else{
//     console.log("please enter email")
//   }

//   return (
//     <section className='h-[100vh]'>
//       chatbot
//     </section>
//   )
// }

// export default Chatbot
