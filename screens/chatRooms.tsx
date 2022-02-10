import React from "react";
import { View ,Text,ImageBackground} from "react-native";
import {useRoute} from '@react-navigation/native'
import { FlatList } from "react-native-gesture-handler";
import chatMessages from '../data/Chats'
import ChatMessage from "../components/ChatMessage";
import BG from '../assets/images/BG.png'
import InputBox from "../components/inputBox";
import styels from "../components/ChatMessage/styels";
import NewMessageButton from "../components/NewMessageButton";
const chatRoomScreen=()=>{
    const route = useRoute()
return(
    <ImageBackground style={{width:'100%',height:"100%"}} source={BG}>
    <FlatList
    data={chatMessages.messages}
    renderItem={({item})=><ChatMessage message={item}
    />}
    inverted
    />
    <InputBox />
    </ImageBackground>
 
)
}

export default chatRoomScreen