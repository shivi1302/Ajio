import React, { Component } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import images from "../../Components/images";
import navigationString from "../../constants/navigationString";
import { useNavigation } from "@react-navigation/native";


export default class DetailPage extends Component {
 
  render() {
// const navigation = useNavigation();

    let item = this.props.route.params.shivi;
    const { navigation } = this.props;
    return (
      <View style={{ marginTop: 35, flex: 1 }}>
        <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ height: 30, width: 30 }}
              source={images.backArrow}
            ></Image>
          </TouchableOpacity>
          <Image
            style={{ height: 30, width: 30, marginLeft: "auto" }}
            source={images.search}
          ></Image>
          <Image
            style={{ height: 32, width: 30, marginLeft: 20}}
            source={images.wishlist}
          ></Image>
        </View>
        <ScrollView>
          <Image
            style={{
              height: 400,
              width: 400,
              resizeMode: "contain",
              marginLeft: -20,
              marginVertical: 20,
            }}
            source={{ uri: item.image }}
          />
          <Text
            style={{
              marginLeft: 20,
              fontSize: 15,
              color: "#696969",
              fontWeight: "bold",
            }}
          >
            {item.name}
          </Text>
          <Text style={{ marginLeft: 20, fontSize: 12, color: `#778899` }}>
            {item.details}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 20,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Rs. {item.price}
            </Text>
            
            <Text
              style={{
                color: "green",
                marginLeft: 20,
                marginTop: 25,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              82% OFF
            </Text>
          </View>
          <Text style={{
                marginLeft: 14,
                marginTop: 0,
                fontSize: 15,
                color:"green"
              }}> Savings: - Rs.{item.mrp}</Text>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 10,
              color: "gray",
              marginTop: 5,
            }}
          >
            Prices inclusive of all taxes.
          </Text>

          <View
            style={{
              flexDirection: "row",
              padding: 10,
              flexWrap: "wrap",
              borderWidth: 2,
              borderRadius: 10,
              marginTop: 10,
              borderColor: `#dcdcdc`,
              marginHorizontal: 10,
            }}
          >
            <Text style={{ fontSize: 10 }}>
              Get Up To Extra 30% Off on Rs. 1490 and Above On Your First
              Purchase.
            </Text>
            <View style={{ backgroundColor: `#dcdcdc`, padding: 10,borderRadius:10,marginTop:5 }}>
              <Text style={{ color: "#696969" }}>Use Code FIRSTBUY</Text>
            </View>
          </View>
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
            + 7 More Offers
          </Text>
          <View
            style={{
              backgroundColor: `#dcdcdc`,
              width: "100%",
              height: 5,
              marginTop: 10,
            }}
          ></View>
          <Text
            style={{
              marginLeft: 20,
              marginTop: 20,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Color
          </Text>
          <Text style={{ marginLeft: 21, fontSize: 15 }}>Floral</Text>

          <View
            style={{
              backgroundColor: `#dcdcdc`,
              width: "100%",
              height: 5,
              marginTop: 10,
            }}
          ></View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 20,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Select Size
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#6495ed",
                marginLeft: "auto",
                fontSize: 13,
                marginTop: 25,
                marginHorizontal: 20,
              }}
            >
              Size Chart
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20,
              marginVertical: 10,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: `#dcdcdc`,
                height: 45,
                width: 45,
                padding: 11,
                borderRadius: 5,
                marginRight: 5,
              }}
            >
              <Text>XS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: `#dcdcdc`,
                height: 45,
                width: 45,
                padding: 11,
                borderRadius: 5,
                marginRight: 5,
              }}
            >
              <Text>S</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: `#dcdcdc`,
                height: 45,
                width: 45,
                padding: 11,
                borderRadius: 5,
                marginRight: 5,
              }}
            >
              <Text>M</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: `#dcdcdc`,
                height: 45,
                width: 45,
                padding: 11,
                borderRadius: 5,
                marginRight: 5,
              }}
            >
              <Text>L</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: `#dcdcdc`,
                height: 45,
                width: 45,
                padding: 11,
                borderRadius: 5,
                marginRight: 5,
              }}
            >
              <Text>XL</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: `#dcdcdc`,
              width: "100%",
              height: 5,
              marginTop: 10,
            }}
          ></View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 20,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Delivery Details
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#6495ed",
                marginLeft: "auto",
                fontSize: 13,
                marginTop: 25,
                marginHorizontal: 20,
              }}
            >
              Check delivery date
            </Text>
          </View>

          <View
            style={{
              backgroundColor: `#dcdcdc`,
              width: "100%",
              height: 5,
              marginTop: 10,
            }}
          ></View>
          <Text
            style={{
              marginLeft: 20,
              marginTop: 20,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Returns
          </Text>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 13,
              color: "gray",
              marginTop: 5,
            }}
          >
            Easy 30 days return and exchange.Return Policies may vary based on
            products and promotions. For full details on your Returns Policies,
            please
          </Text>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 20,
            marginBottom: 5,
            marginTop: 5,
          }}
        >
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
              width: 200,
              height: 50,
              borderRadius: 10,
              marginLeft: 10,
            }}
            onPress={() =>
              {navigation.navigate(navigationString.HomePage, {
                screen: navigationString.HomePage,
                params: { addedProduct: item},
              })}
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
