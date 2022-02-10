import moment from "moment";
import React from "react";
import { View ,Text,Image,TouchableWithoutFeedback} from "react-native";
import { ChatRoom } from "../../types";
import styles from "./styles";
import style from "./styles";
import {useNavigation} from '@react-navigation/native'

export type ChatListItemProps ={
    chatRoom : ChatRoom
}

const ChatListItem =(props:ChatRoom)=>{
    const {chatRoom} = props;
    const user = chatRoom.users[1]
    const navigation = useNavigation()
    const onClick=()=>{
        navigation.navigate('ChatRoom',{id:chatRoom.id,
        name:user.name,
        image:user.imageUri,
    
    
    })
    }
    return(
        <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
        <View style={styles.leftcontainer}>
            <Image source={{uri : user.imageUri}} style={styles.avatar} />
        <View style={styles.midcontainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text numberOfLines={2} style={styles.lastmessage}>{chatRoom.lastMessage.content}</Text>
        </View>
        </View>
            <Text style={styles.time}>
                {moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')}
                
            </Text>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default ChatListItem