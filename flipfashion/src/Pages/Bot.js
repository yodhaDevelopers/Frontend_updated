import React, { useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./css/bot.css";

import CancelSharpIcon from '@mui/icons-material/CancelSharp';


//Add socket in function args
function Bot({ username, room, onClose }) {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        const userMessageData = {
            room: room,
            author: username,
            message: currentMessage,
            time:
                new Date(Date.now()).getHours() +
                ":" +
                new Date(Date.now()).getMinutes(),
        };

    setMessageList((list) => [...list, userMessageData]);
    setCurrentMessage("");
        
        console.log((response));
    
        const rasa_response = await fetch('http://localhost:5010/get_intent',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_input: currentMessage }),
        });

        let rasa_answer = await rasa_response.json()
        rasa_answer = rasa_answer["intent"]
        console.log(rasa_answer);
        let response;
        if (rasa_answer === "outfit_generation"){
                response = await fetch('http://26ae-34-142-146-28.ngrok-free.app/get_falcon_response',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ user_input: currentMessage }),
                })
                const image_response = await fetch('http://2629-34-142-207-12.ngrok.io/get_image', {
                    method: 'POST',
                    body: JSON.stringify({ user_input: currentMessage }),
                });
    
                if (image_response.ok) {
                    const blob = await image_response.blob();
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'generated_image.png';
                    link.click();
                    URL.revokeObjectURL(url);
                } else {
                    console.error('Image request failed');
                }
        }
        else{
                response = await fetch('http://7843-35-236-162-101.ngrok-free.app/get_response', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user_input: currentMessage }),
            });
        }
        let answer=await response.json()
        console.log(answer["falcon_response"]);
        const botMessageData = {
                room: room,
                author: username,
                message: answer["falcon_response"],
                time:
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
            };

         setMessageList((list) => [...list, botMessageData]);
    };

    return (
        <div className="chat-window">
            <div className="chat-header">
                <p>FlipFashion Bot</p>
                <CancelSharpIcon />
            </div>

            <div className="chat-body">
                <ScrollToBottom className="message-container">
                    {messageList.map((messageContent) => {
                        return (
                            <div
                                className="message"
                                id={username === messageContent.author ? "you" : "other"}
                            >
                                <div>
                                    <div className="message-content">
                                        <p>{messageContent.message}</p>
                                    </div>
                                    <div className="message-meta">
                                        <p id="time">{messageContent.time}</p>
                                        <p id="author">{messageContent.author}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </ScrollToBottom>
            </div>
            <div className="chat-footer">
                <input
                    type="text"
                    value={currentMessage}
                    placeholder="Hey..."
                    onChange={(event) => {
                        setCurrentMessage(event.target.value);
                    }}
                    onKeyPress={(event) => {
                        event.key === "Enter" && sendMessage();
                    }}
                />
                <button onClick={sendMessage}>&#9658;</button>
            </div>
        </div>
    );
}

export default Bot;