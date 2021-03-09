import React, {Component} from "react";
import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native";

export default class WishList extends Component {
 render(){
     return(
         <View style={{alignItems:"center"}}>
             <Text style={{fontSize:25,margin:30}}>
                 My WishList
             </Text>
         </View>
     )
 }
}