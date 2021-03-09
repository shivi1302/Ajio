import React, { Component } from "react";
import { View, Image, ScrollView, Text, TouchableOpacity,Share,Linking } from "react-native";
import images from "../../Components/images";
import openMap from 'react-native-open-maps';
export default class CheckOut extends Component {
  openMail=()=>{
    Linking.openURL('mailto:shivi@gmail.com?subject=Order ID for Ajio App&body=Thankyou for shopping with us')
  }
  dialCall = () => {
 
    let phoneNumber = '';
 
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${1234567890}';
    }
    else {
      phoneNumber = 'telprompt:${1234567890}';
    }
 
    Linking.openURL(phoneNumber);
  };
  // share a custom message
  onShare = async () => {
    try {
        const result = await Share.share({
            message:
                'My order Id is 2948324 which is on My Ajio App designed by shivi'
        });

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error) {
        alert(error.message);
    }
}
// open geo location
_goToYosemite() {
    openMap({ latitude:30.1359574, longitude:77.2889107 });
}

  render() {
    checkItem = this.props.route.params.addedProduct;
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ height: 30, width: 30, marginLeft: 10, marginTop: 5 }}
              source={images.backArrow}
            ></Image>
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 20,
              marginTop: 8,
              fontWeight: "bold",
              fontSize: 17,
              marginBottom: 8,
            }}
          >
            Order Confirmation
          </Text>
        </View>
        <ScrollView>
          <View style={{ backgroundColor: `#dcdcdc` }}>
            <Text
              style={{
                color: "gray",
                fontSize: 12,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 15,
              }}
            >
              Secure Payments | Genuine Products | Easy Exchange
            </Text>
            <View
              style={{
                margin: 20,
                backgroundColor: "white",
                borderRadius: 10,
                padding: 10,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 17, fontWeight: "bold", marginLeft: 20 }}
                >
                  Home Delivery
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      marginLeft: 50,
                      color: "#6495ed",
                      fontWeight: "bold",
                      marginTop: 4,
                      fontSize: 12,
                    }}
                  >
                    Change Address
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 14,
                  marginLeft: 20,
                  marginTop: 10,
                }}
              >
                Shivi Gupta
              </Text>
              <Text style={{ color: "gray", marginLeft: 20 }}>
                H.No. 123,ShivPuri Colony, yamuna nagar,Haryana,135001
              </Text>
              <Text style={{ color: "gray", marginLeft: 20 }}>
                Phone: 9876543210
              </Text>
            </View>

            <View
              style={{
                marginHorizontal: 20,
                backgroundColor: "white",
                borderRadius: 10,
                padding: 10,
                marginBottom: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 17, fontWeight: "bold", marginLeft: 20 }}
                >
                  Expected Delivery
                </Text>
                <Text
                  style={{
                    marginLeft: 50,
                    color: "gray",
                    marginTop: 3,
                    fontSize: 14,
                  }}
                >
                  17th Mar
                </Text>
              </View>
            </View>

            <View
              style={{
                marginHorizontal: 20,
                backgroundColor: "white",
                borderRadius: 10,
                padding: 10,
                marginBottom: 20,
              }}
            >
              <Text
                style={{ fontSize: 17, fontWeight: "bold", marginLeft: 20 }}
              >
                Order Details
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: 20,
                backgroundColor: "white",
                borderRadius: 10,
                padding: 10,
                marginBottom: 20,
              }}
            >
              <Text
                style={{ fontSize: 17, fontWeight: "bold", marginLeft: 20 }}
              >
                Payments
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={{ flexDirection: "row", margin: 20, flexWrap: "wrap" }}>
          <TouchableOpacity onPress={this.onShare}>
            <Image
              style={{
                height: 50,
                width: 50,
                margin: 10,
                marginLeft: 20,
                resizeMode: "contain",
              }}
              source={{
                uri: "http://cdn.onlinewebfonts.com/svg/img_93739.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.dialCall}>
            <Image
              style={{
                height: 50,
                width: 50,
                margin: 10,
                marginLeft: 20,
                resizeMode: "contain",
              }}
              source={{
                uri: "http://simpleicon.com/wp-content/uploads/phone-book.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.openMail}>
            <Image
              style={{
                height: 50,
                width: 50,
                margin: 10,
                marginLeft: 20,
                resizeMode: "contain",
              }}
              source={{
                uri:
                  "https://cdn.icon-icons.com/icons2/1182/PNG/512/1490129331-rounded07_82197.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this._goToYosemite}>
            <Image
              style={{
                height: 50,
                width: 50,
                margin: 10,
                marginLeft: 20,
                resizeMode: "contain",
              }}
              source={ images.location
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
