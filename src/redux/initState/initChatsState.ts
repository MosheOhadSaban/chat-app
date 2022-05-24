import ChatsState from "../../models/ChatsState";

const initChatsState:ChatsState = {
    isLoading: false,
    error: null,
    selectedChatId: "",
    userChats: []
}

export default initChatsState