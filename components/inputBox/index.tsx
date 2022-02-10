import React, { useState } from "react";
import styels from "./styels";
import { View ,Text} from "../Themed";
import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const InputBox = () =>{

    const [message, setMessage] = useState('')
    const onMicrophonePress = ()=>{
        console.warn('Microphone')
    }
    const onSendPress = ()=>{
        console.warn(`Sending .. ${message}`)
        setMessage('');

    }
    const onPress = ()=>{
        if(!message){
            onMicrophonePress();
        }else{
            onSendPress();
        }
    }
    return(
        <View style={styels.container}>
            <View style={styels.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color={'gray'}/>
                <TextInput style={styels.textInput}
                placeholder="Type a message"
                multiline
                value={message}
                onChangeText={setMessage}
                />
                <Entypo name="attachment" size={24} color={'gray'} style={styels.icons}/>
                {!message && <Fontisto name="camera" size={24} color={'gray'}/>}
            </View>
            <TouchableOpacity onPress={onPress}>
            <View style={styels.Button}>
                {
                    !message ? <MaterialCommunityIcons name="microphone" size={28} color={'white'}/>
                    : <MaterialCommunityIcons name="send" size={28} color={'white'}/>
                }
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox