import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import navigationString from "../constants/navigationString";
export default function CartCard(props) {
  const { data } = props;
  return (
    <View style={{ backgroundColor: `#dcdcdc`, padding: 20 }}>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          flexDirection: "row",
        }}
      >
        <Image
          style={{
            height: 100,
            width: 100,
            marginVertical: 10,
            resizeMode: "contain",
          }}
          source={{ uri: data.image }}
        ></Image>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ color: "#696969", marginTop: 5 }}>{data.name}</Text>
          <Text style={{ fontSize: 12 }}>{data.details}</Text>
          <Text>Rs.{data.price}</Text>
          <Text style={{color:"red"}}>- Rs.{data.mrp}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginTop: 2.5 }}>QTY. </Text>
            <TextInput keyboardType="numeric"
              maxLength={1}>
              <Text>1</Text>
            </TextInput>
          </View>
        </View>
        
        
      </View>
      <TouchableOpacity >
        <Text
            style={{
              fontWeight: "bold",
              color: "#6495ed",
              marginLeft: "auto",
              fontSize: 13,
              marginTop: 5,
              marginHorizontal: 20,
            }}

          >
           Remove
          </Text>
        </TouchableOpacity>
    </View>
  );
}
