import React from 'react';
import {useAddNewChatMutation, useGetUsersQuery} from "../../services/messaging";

interface CreateChatModalProps {
    handleModal: (value: React.SetStateAction<boolean>) => void
}

const OUR_USER_ID = "6584555374a429632e353e71"

const CreateChatModal = (props : CreateChatModalProps) => {

    const {data, error, isLoading} = useGetUsersQuery();
    const [addNewChat] = useAddNewChatMutation();

    const onNewChatSave = async (targetId: string) => {
        try {
            await addNewChat({owners: [OUR_USER_ID, targetId]})
        } catch (e) {
            console.log("Error unable to create new chat.")
        }
    }

    return <div>
        <h1> Create chat modal </h1>
        <button onClick={() => props.handleModal(false)}> Close </button>
        <span> Choose user to make chat with </span>
        <ul>
            {data && data.map(item => {
                if (item._id !== OUR_USER_ID) {
                    return (
                        <li>
                            {item.nickName}
                            <button onClick={() => onNewChatSave(item._id)}>+</button>
                        </li>
                    )
                }
            })}
        </ul>
    </div>

}

export default CreateChatModal;