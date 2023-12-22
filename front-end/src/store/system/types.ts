export type User = {
    _id: string,
    name: string,
    nickName: string,
    phoneNumber: string
}

export type Chat = {
    _id: string,
    ownersId: string[]
    messages: []
}

export type Message = {
    _id: string,
    authorId: string,
    content: string
}