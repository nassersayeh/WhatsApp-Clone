import { StyleSheet } from "react-native";
const styles= StyleSheet.create({
    avatar:{
        width:60,
        height:60,
        marginRight:15,
        borderRadius:50
    },
    container:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        padding:10,
    },
    leftcontainer:{
        flexDirection:'row',

    },
    midcontainer:{
        justifyContent:'space-around'
    },
    username:{
        fontWeight:'bold',
        fontSize:16,

    },
    status:{
        fontSize:16,
        color:'gray'
    },

})
export default styles