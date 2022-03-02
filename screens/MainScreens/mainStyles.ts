import { scale } from "react-native-size-matters";
import { StyleSheet } from "react-native";
import Fonts from "../../constants/Fonts";
import Colors from "../../constants/Colors";

export const mainScreenStyles = StyleSheet.create({
    topTitle:{
        fontSize:Fonts.header.fontsizeHeader,
        fontFamily:Fonts.header.fontfamiltyalt,
        fontWeight:Fonts.header.fontweight



    },
    title:{
        fontFamily:Fonts.header.fontfamily,
        fontWeight:'bold'
    },
    headerDescription:{
        fontFamily:Fonts.header.fontfamily,
        fontWeight:'bold',
        color:Colors.dark.tint
    },
    mainContainer:{
      alignItems:'center'
    }


})