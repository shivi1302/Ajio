import React from "react";
import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native";
export default function Card(props){
    const { data,onAdd} = props;
    return(
        <View style={{marginBottom:20}}>
        <Image style={{height:250,width:200,borderRadius:10,marginLeft:75}} source={{uri:data.image}}>
                    </Image>
                    <Text style={{fontWeight:"bold",textAlign:"center",color:"#696969"}}>{data.name}</Text>
                    <Text style={{textAlign:"center",color:`#778899`}}>{data.details}</Text>
                    <Text style={{fontWeight:"bold",textAlign:"center"}}>{data.price}</Text>
                    <TouchableOpacity
              style={{
                backgroundColor: "black",
                margin: 30,
                marginTop: 10,
                marginLeft:75,
                width:200,
                height: 60,
                borderRadius: 10,
              }}
              
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  paddingTop: 17,
                  fontSize: 15,
                }}
                onPress={()=>{
                    onAdd();
                }}
              >
                Add to Cart
              </Text>
            </TouchableOpacity>
        </View>
    )
}