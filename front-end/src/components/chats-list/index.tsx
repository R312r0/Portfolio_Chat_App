import React, {useState} from 'react';
import {useGetUserChatsQuery, useGetUsersByIdsQuery, useRemoveChatByIdMutation} from "../../services/messaging";
import CreateChatModal from "../create-chat-modal";
import {skipToken} from "@reduxjs/toolkit/query";
const OUR_USER_ID = "6584555374a429632e353e71"


const ChatsList = () => {

    const [showCreateChatModal, setShowCreateChatModal] = useState(false)
    const [removeChatById] = useRemoveChatByIdMutation();
    const {data : chat, isSuccess: chatSuccess} = useGetUserChatsQuery();

    const {data: user} = useGetUsersByIdsQuery(chat?.map((item) => {
        return item.ownersId.filter(ow => ow !== OUR_USER_ID)[0]
    }) || skipToken)

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
                {chat && chat.map(item => {

                    const targetUser = user && user
                        .find(u => u._id === item.ownersId.filter(id => id !== OUR_USER_ID)[0])
                    return <li>
                        <span>{targetUser?.name} - ({targetUser?.nickName}) </span>
                        <button onClick={() => onChatDelete(item._id)}>🗑️</button>
                    </li>
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