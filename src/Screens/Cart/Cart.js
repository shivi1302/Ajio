import React, { Component } from "react";
import {
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CartCard from "../../Components/CartCard";
import images from "../../Components/images";
import navigationString from "../../constants/navigationString";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state={
      totalPrice:0,
      totalDiscount:0
    }
  }

  render() {
    let item = this.props.route.params.cartAddedItem;
    let{totalPrice,totalDiscount}=this.state
    
    const { navigation } = this.props;
    for(let i =0;i<item.length;i++){
      totalPrice=item[i].price + totalPrice,
      totalDiscount=item[i].mrp+ totalDiscount
    }
    return (
      <View style={{ marginTop: 35, flex: 1 }}>
        <View
          style={{ flexDirection: "row", marginHorizontal: 10, marginLeft: 20 }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ height: 20, width: 20 }}
              source={images.cross}
            ></Image>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 19,
              fontWeight: "bold",
              marginHorizontal: 20,
              marginTop: -5,
            }}
          >
            Bag
          </Text>
          <Image
            style={{
              height: 32,
              width: 30,
              marginLeft: "auto",
              marginRight: 5,
            }}
            source={images.wishlist}
          ></Image>
        </View>
        <ScrollView>
          <Image
            style={{ width: "100%", height: 50, marginVertical: 10 }}
            source={{
              uri:
                "https://assets.ajio.com/medias/sys_master/images/images/h4c/h3c/30906889895966/cart-page-banner-mobile2.jpg",
            }}
          ></Image>
          <FlatList
            data={item}
            showsVerticalScrollIndicator={false}
            keyExtractor={(index) => index.id}
            ItemSeparatorComponent={() => (
              <View style={{ marginBottom: 10 }}></View>
            )}
            renderItem={({ item }) => <CartCard data={item}></CartCard>}
          />
          <Text style={{color:"gray",fontSize:12,fontWeight:"bold",textAlign:"center",marginTop:10}}>Assured quality | 100% Handpicked | Easy Exchange</Text>
          <View style={{backgroundColor:"white",flexDirection:"row",marginBottom:3,marginVertical:15}}>
            <Text style={{margin:15,fontSize:15}}>Apply Coupon</Text>
            <Text style={{
              fontWeight: "bold",
              color: "#6495ed",
              marginLeft: "auto",
              fontSize: 13,
              marginTop: 17,
              marginHorizontal: 20,
              
            }}>Select </Text>
          </View>
            <View style={{backgroundColor:"white",marginVertical:5}}>
            <Text style={{fontWeight:"bold",fontSize:17,margin:10}}>Order Details</Text>
            <View style={{flexDirection:"row",margin:5}}>
              <Text style={{marginLeft:10}}>Bag Total</Text>
              <Text style={{marginLeft:"auto",marginRight:10}}>Rs.{totalPrice}</Text>
            </View>
            <View style={{flexDirection:"row",marginVertical:5}}>
              <Text style={{marginLeft:10}}>Bag Savings</Text>
              <Text style={{marginLeft:"auto",marginRight:10,color:"green"}}>- Rs.{totalDiscount}</Text>
            </View>
            <View style={{flexDirection:"row",marginVertical:5}}>
              <Text style={{marginLeft:10}}>Coupon Savings</Text>
              <Text style={{marginLeft:"auto",marginRight:10,color:"#6495ed"}}>Apply Coupon</Text>
            </View>
            <View style={{flexDirection:"row",marginVertical:5}}>
              <Text style={{marginLeft:10}}>Delivery</Text>
              <Text style={{marginLeft:"auto",marginRight:10}}>Free</Text>
            </View>
            <View style={{flexDirection:"row",marginVertical:5}}>
              <Text style={{marginLeft:10,fontWeight:"bold",fontSize:17}}>Total Amount</Text>
              <Text style={{marginLeft:"auto",marginRight:10,fontWeight:"bold",fontSize:17}}>Rs.{totalPrice-totalDiscount}</Text>
            </View>
            </View>
        </ScrollView>

        <View style={{flexDirection:"row"}}>
        <View style={{flexDirection:"column"}}>
        <Text style={{fontWeight:"bold",fontSize:12,marginLeft:10,marginTop:20}}>Rs.{totalPrice-totalDiscount}.00</Text>
        <Text style={{fontSize:12,marginLeft:10,color:"#6495ed",fontWeight:"bold"}}>View Details</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            marginHorizontal: 20,
            marginVertical: 10,
            height: 53,
            borderRadius: 10,
            width:230
          }}

          onPress={() =>
            {navigation.navigate(navigationString.CheckOut, {
              screen: navigationString.CheckOut,
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
            Confirm Order
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}
