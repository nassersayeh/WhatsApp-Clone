import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styels = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:10,
        alignItems:'flex-end',
        backgroundColor:'transparent',
    },
    mainContainer:{
        flexDirection:'row',
        backgroundColor:'white',
        padding:10,
        borderRadius:25,
        marginRight:10,
        flex:1,
        alignItems:'flex-end',
    },
    Button:{
        backgroundColor:Colors.light.tint,
        width:50,
        borderRadius:25,
        height:50,
        justifyContent:'center',
        alignItems:'center',

    },
    textInput:{
        flex:1,
        marginHorizontal:10,
    },
    icons:{
        marginHorizontal:5,
    }
})

export default styels