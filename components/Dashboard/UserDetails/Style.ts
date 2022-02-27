import { scale } from "react-native-size-matters";
import { StyleSheet } from "react-native"; 
import Fonts from "../../../constants/Fonts";
export const Styles=StyleSheet.create({
    gridView:{
        width:"100%",
        backgroundColor:'white',
        paddingTop:scale(20)


    },
    touchable:{
        alignItems:'center',
    },
    navigationText:{
        fontFamily:Fonts.header.fontfamily

    }


})