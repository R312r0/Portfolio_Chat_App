import React, {useState} from 'react';
import {useGetUserChatsQuery} from "../../services/messaging";
import CreateChatModal from "../create-chat-modal";


const ChatsList = () => {

    const [showCreateChatModal, setShowCreateChatModal] = useState(false)
    const {data, error, isLoading} = useGetUserChatsQuery('');

    console.log(data);

    return (
        <>
            <h1> Chats list </h1>
            <button onClick={() => setShowCreateChatModal(true)} > Create Chat </button>
            <ul>
                {data && data.map(item => {
                    return <li>{item._id} <button>🗑️</button></li>
                })}
            </ul>


            {showCreateChatModal ?
                <CreateChatModal handleModal={setShowCreateChatModal}/>
                : null
            }

        </>

    )

}

export default ChatsList;