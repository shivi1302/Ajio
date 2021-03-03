import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import navigationString from "../constants/navigationString";


export default function Card(props) {
const navigation = useNavigation();
  const { data, onAdd } = props;
  // let {item}=data
  return (
    
    <View
      style={{
        margin:15
      }}
    >
      <TouchableOpacity onPress={()=>
      navigation.navigate(navigationString.DetailPage, {shivi:data})
    }>
      <Image
        style={{ height: 200, width: 150, borderRadius: 10, marginLeft: 0 }}
        source={{ uri: data.image }}
      ></Image></TouchableOpacity>
      <Text
        style={{ textAlign:"center",fontWeight: "bold", color: "#696969" }}
      >
        {data.name}
      </Text>
      <Text style={{ textAlign:"center", color: `#778899`}}>
        {data.details}
      </Text>
      <Text style={{ textAlign:"center",fontWeight: "bold" }}>
        {data.price}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          margin: 30,
          marginTop: 10,
          marginLeft: 20,
          width: 100,
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
          onPress={() => {
            onAdd();
          }}
        >
          Add to Cart
        </Text>
      </TouchableOpacity>
    </View>
    
  );
}
