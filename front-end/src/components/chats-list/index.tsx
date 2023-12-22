import React, {useState} from 'react';
import {useGetUserChatsQuery, useRemoveChatByIdMutation} from "../../services/messaging";
import CreateChatModal from "../create-chat-modal";


const ChatsList = () => {

    const [showCreateChatModal, setShowCreateChatModal] = useState(false)
    const [removeChatById] = useRemoveChatByIdMutation();
    const {data, error, isLoading} = useGetUserChatsQuery('');

    const onChatDelete = async (id:string) => {

        try {
            await removeChatById({id: id})
        } catch(e) {
            console.log(e)
        }

    }


    return (
        <>
            <h1> Chats list </h1>
            <button onClick={() => setShowCreateChatModal(true)} > Create Chat </button>
            <ul>
                {data && data.map(item => {
                    return <li>{item._id} <button onClick={() => onChatDelete(item._id)}>🗑️</button></li>
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