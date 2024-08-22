import React, { useState, useCallback } from "react";
import nlp from "compromise";
import { assets } from "../assets/assets";
import { IoSend } from "react-icons/io5";
import { Link } from "react-router-dom";
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
      {
        type: "bot",
        text: "Great, what business do you work with and what's the business? ",
      },
    ],
    [
      {
        type: "bot",
        text: "What's your role in it? For example: I'm the chat bot.",
      },
    ],
  ]);
  const [currentPage, setCurrentPage] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [BussinessDetails, setBussinessDetails] = useState("");
  const [UserRoleInBussiness, setUserRoleInBussiness] = useState("");
  const [modelOpen, setmodelOpen] = useState(false);

  console.log({
    username: userName,
    useremail: userEmail,
    Bussinessdtls: BussinessDetails,
    userRole: UserRoleInBussiness,
  });

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
          // newMessages[currentPage].push({
          //   type: "bot",
          //   text: `Thank you! We've noted your email as ${email}.`,
          // });
        } else {
          // newMessages[currentPage].push({
          //   type: "bot",
          //   text: "That doesn't seem like a valid email. Can you please provide a valid email address?",
          // });
          setUserEmail(userInput);
          console.log("not able to catch the email");
        }
      }

      if (currentPage === 2) {
        setBussinessDetails(userInput);
        // newMessages[currentPage].push({
        //   type: "bot",
        //   text: "Thank you for sharing!",
        // });
      }

      if (currentPage === 3) {
        setUserRoleInBussiness(userInput);
        setmodelOpen(true);
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
      allMessages = messages[currentPage - 1].slice(-3);
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
    <section className={`relative`}>
      {/* overlay */}
      <div
        className={`fixed top-0  left-0 w-full h-full bg-black opacity-60 z-10 ${
          modelOpen ? "block" : "hidden"
        }`}
      ></div>

      {/* content */}

      <div className={` px-10`}>
        <img
          src={assets.logodark}
          className="sm:w-[95px] w-[100px] md:w-[100px] "
          alt=""
        />
      </div>
      <div
        className={`  chat w-[100%] flex items-center justify-center`}
      >
        <div className="chat-container px-10 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] h-auto pt-2 pb-12  flex items-center justify-center flex-col gap-10 ">
          <div className="page-indicator flex flex-col gap-5 w-full">
            <div className="flex justify-between">
              <div className="flex gap-4 items-center ">
                <p className="text-[#000000] text-[18px]">
                  create your Santa profile
                </p>
                <p>• signout</p>
              </div>
              <span>{currentPage + 1}/4 completed</span>
            </div>
            <div className="flex gap-5 justify-between ">
              <span
                className={`w-[150px] h-[4px] rounded-md bg-[#8000FF]
                  `}
              ></span>
              <span
                className={`w-[150px] h-[4px] rounded-md ${
                  currentPage >= 1 ? "bg-[#8000FF]" : "bg-[#888]"
                } `}
              ></span>
              <span
                className={`w-[150px] h-[4px] rounded-md ${
                  currentPage >= 2 ? "bg-[#8000FF]" : "bg-[#888]"
                } `}
              ></span>
              <span
                className={`w-[150px] h-[4px] rounded-md ${
                  currentPage >= 3 ? "bg-[#8000FF]" : "bg-[#888]"
                } `}
              ></span>
            </div>
          </div>
          <div className=" flex flex-col relative gap-5 w-full ">
            {combinedMessages().map((msg, index) => (
              <div
                key={index}
                className={`text-[15px]  w-[60%] px-3 py-2  ${
                  msg.type === "bot"
                    ? "bg-[#412675] text-white self-start rounded-es-[20px] rounded-ss-[3px] rounded-e-[20px]"
                    : "bg-[#E0CFFC] text-[#1F2544] self-end rounded-s-[20px] rounded-se-[3px] rounded-ee-[20px]"
                } `}
              >
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <div className="chat-input-container w-full relative">
            <input
              type="text"
              className="w-full bg-[#E0CFFC] text-[18px] px-5 py-2 rounded-[50px] outline-none"
              placeholder="message santa..."
              value={userInput}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <button
              className="  absolute right-[15px] top-[50%]  -translate-y-[50%] "
              onClick={handleSendMessage}
            >
              <IoSend />
            </button>
          </div>
        </div>
      </div>

      {/* model */}
      <div
        className={`model z-20 bg-[#412675] w-[25%] h-[30%] rounded-[5px] ${
          modelOpen
            ? "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            : "hidden"
        }`}
      >
        <div className="w-full h-full gap-10 flex flex-col items-center justify-center">
          <p className="text-white">Santa will reach you soon</p>
          <Link
            to="/services"
            className="bg-white px-2 py-2 text-[#412675] rounded-[7px]"
          >
            <p>Our services</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
