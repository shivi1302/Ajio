import React, { Component } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import images from "../../Components/images";
import navigationString from "../../constants/navigationString";

export default class DetailPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let item=this.props.route.params.shivi
    const { navigation } = this.props;
    console.log(this.props)
    return (
      <View style={{ margin: 20, marginTop: 35, flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ height: 30, width: 30 }}
              source={images.backArrow}
            ></Image>
          </TouchableOpacity>
          <Image
            style={{ height: 30, width: 30, marginLeft: 200 }}
            source={images.search}
          ></Image>
          <Image
            style={{ height: 32, width: 30, marginLeft: 0 }}
            source={images.wishlist}
          ></Image>
          <Image
            style={{
              height: 30,
              width: 30,
              resizeMode: "contain",
              marginLeft: "auto",
            }}
            source={images.bag}
          ></Image>
        </View>
        <ScrollView>
<Image style={{height:400,width:400,margin:10}} source={{uri:item.image}}/>
<Text style={{marginLeft:10,fontSize:20,color:"#696969"}}>{item.name}</Text>
<Text style={{marginLeft:10,fontSize:15,color:`#778899`}}>{item.details}</Text>










        </ScrollView>
        <View style={{ flexDirection: "row", marginLeft: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              borderRadius: 10,
              backgroundColor: `#dcdcdc`,
              height: 50,
              width: 50,
              padding: 12,
            }}
          >
            <Image
              style={{ height: 25, width: 25 }}
              source={images.whatsapp}
            ></Image>
          </TouchableOpacity>
          <View
            style={{
              marginLeft: 10,
              borderRadius: 10,
              backgroundColor: `#dcdcdc`,
              height: 50,
              width: 50,
              padding: 10,
            }}
          >
            <Image
              style={{ height: 30, width: 30 }}
              source={images.wishlist}
            ></Image>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              width: 150,
              height: 50,
              borderRadius: 10,
              marginLeft: 10,
            }}
            onPress={() =>
              this.props.navigation.navigate(navigationString.HomePage)
            }
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                paddingTop: 17,
                fontSize: 15,
              }}
            >
              Add to Bag
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
