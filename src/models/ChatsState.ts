import UserChat from "./UserChat"

export default interface ChatsState {
    isLoading:boolean
    error:string | null
    selectedChatId:string
    userChats:UserChat[]
    
}