import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styels = StyleSheet.create({
    container:{
        padding:8,
    },
    messageBox:{
        borderRadius:15,
        padding:10,

    },
    name:{
        color:Colors.light.tint,
        fontWeight:'bold',
        marginBottom:5,
    },
    message:{
    },
    time:{
        alignSelf:'flex-end',
        color:'gray'
    }
})

export default styels;