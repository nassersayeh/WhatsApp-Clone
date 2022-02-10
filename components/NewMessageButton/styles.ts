import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.light.tint,
        width:50,
        height:50,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:10,
        right:10,
    }
})
export default styles