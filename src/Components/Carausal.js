import React from "react";
import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native";

export default function Carausal(props) {
  const {} = props;
  return (
    <ScrollView
      horizontal={true}
      style={{ flexDirection: "row", marginTop:-10}}
      showsHorizontalScrollIndicator={false}
    >
      <View
        style={{
          backgroundColor: `#f08080`,
          padding: 10,
          margin: 10,
          marginRight: 0,
          borderRadius: 5,
        }}
      >
        <Image
          style={{ height: 60, width: 50 }}
          source={{
            uri:
              "https://i.pinimg.com/564x/4d/d5/34/4dd534352e24d08dbd52aa1f3b942b81.jpg",
          }}
        ></Image>
        <Text style={{ color: "white", textAlign: "center" }}>MEN</Text>
      </View>
      <View
        style={{
          backgroundColor: `#8b0000`,
          padding: 10,
          margin: 10,
          marginRight: 0,
          borderRadius: 5,
        }}
      >
        <Image
          style={{ height: 60, width: 50 }}
          source={{
            uri:
              "https://5.imimg.com/data5/UO/EO/IG/ANDROID-91808111/product-jpeg-500x500.jpg",
          }}
        ></Image>
        <Text style={{ color: "white", textAlign: "center" }}>WOMEN</Text>
      </View>
      <View
        style={{
          backgroundColor: `#ffb6c1`,
          padding: 10,
          margin: 10,
          marginRight: 0,
          borderRadius: 5,
        }}
      >
        <Image
          style={{ height: 60, width: 50 }}
          source={{
            uri:
              "https://cdn.shopify.com/s/files/1/2192/5961/articles/Orbasics_neutral-kids-clothes-preview_600x600_crop_center.jpg?v=1610114895",
          }}
        ></Image>
        <Text style={{ color: "white", textAlign: "center" }}>KIDS</Text>
      </View>
      <View
        style={{
          backgroundColor: `#ff1493`,
          padding: 10,
          margin: 10,
          marginRight: 0,
          borderRadius: 5,
        }}
      >
        <Image
          style={{ height: 60, width: 50 }}
          source={{
            uri:
              "https://images-na.ssl-images-amazon.com/images/I/91u8quEw26L._SX355_.jpg",
          }}
        ></Image>
        <Text style={{ color: "white", textAlign: "center" }}>HOME</Text>
      </View>
      <View
        style={{
          backgroundColor: `#f08080`,
          padding: 10,
          margin: 10,
          marginRight: 0,
          borderRadius: 5,
        }}
      >
        <Image
          style={{ height: 60, width: 50 }}
          source={{
            uri:
              "https://i.pinimg.com/564x/4d/d5/34/4dd534352e24d08dbd52aa1f3b942b81.jpg",
          }}
        ></Image>
        <Text style={{ color: "white", textAlign: "center" }}>MEN</Text>
      </View>
      <View
        style={{
          backgroundColor: `#8b0000`,
          padding: 10,
          margin: 10,
          marginRight: 0,
          borderRadius: 5,
        }}
      >
        <Image
          style={{ height: 60, width: 50 }}
          source={{
            uri:
              "https://5.imimg.com/data5/UO/EO/IG/ANDROID-91808111/product-jpeg-500x500.jpg",
          }}
        ></Image>
        <Text style={{ color: "white", textAlign: "center" }}>WOMEN</Text>
      </View>
      <View
        style={{
          backgroundColor: `#ffb6c1`,
          padding: 10,
          margin: 10,
          marginRight: 0,
          borderRadius: 5,
        }}
      >
        <Image
          style={{ height: 60, width: 50 }}
          source={{
            uri:
              "https://cdn.shopify.com/s/files/1/2192/5961/articles/Orbasics_neutral-kids-clothes-preview_600x600_crop_center.jpg?v=1610114895",
          }}
        ></Image>
        <Text style={{ color: "white", textAlign: "center" }}>KIDS</Text>
      </View>
      <View
        style={{
          backgroundColor: `#ff1493`,
          padding: 10,
          margin: 10,
          marginRight: 0,
          borderRadius: 5,
        }}
      >
        <Image
          style={{ height: 60, width: 50 }}
          source={{
            uri:
              "https://images-na.ssl-images-amazon.com/images/I/91u8quEw26L._SX355_.jpg",
          }}
        ></Image>
        <Text style={{ color: "white", textAlign: "center" }}>HOME</Text>
      </View>
    </ScrollView>
  );
}
