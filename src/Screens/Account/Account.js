import React, { Component } from "react";
import {
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import images from "../../Components/images";
import * as ImagePicker from "expo-image-picker";
import navigationString from "../../constants/navigationString";
export default class Account extends Component {
  state = {
    selectedImage:
      "https://iconape.com/wp-content/png_logo_vector/user-circle.png",
  };
  selectImage = () => {
    Alert.alert(
      "Profile Image",
      "Select appropriate Image for your Profile",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Gallery",
          onPress: this.getImageUsingGallery,
        },
        {
          text: "Camera",
          onPress: this.getImageUsingCamera,
        },
      ],
      { cancelable: false }
    );
  };

  getImageUsingCamera = async () => {
    let picker = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    if (picker.cancelled === true) {
      return;
    }
    this.setState({
      selectedImage: picker.uri,
    });
  };

  getImageUsingGallery = async () => {
    let picker = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    if (picker.cancelled === true) {
      return;
    }
    this.setState({
      selectedImage: picker.uri,
    });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            paddingTop: 25,
            paddingHorizontal: 15,
            height: 60,
            backgroundColor: "white",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>My Account</Text>
        </View>
        <ScrollView>
          <TouchableOpacity style={{ alignItems: "center", marginTop: 10 }}>
            <Image
              style={{
                resizeMode: "contain",
                width: 100,
                height: 100,
                borderRadius: 200,
              }}
              source={{ uri: this.state.selectedImage }}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              width: 200,
              height: 50,
              borderRadius: 10,
              margin: 10,
              marginLeft: 80,
              marginBottom: 30,
            }}
            onPress={this.selectImage}
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
              Update Profile
            </Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              marginBottom: 1,
            }}
          >
            <Text style={{ margin: 15, fontSize: 15 }}> Customer Care</Text>
            <Image
              style={{
                marginLeft: "auto",
                height: 25,
                width: 15,
                resizeMode: "contain",
                marginRight: 15,
                marginTop: 15,
              }}
              source={images.goTo}
            ></Image>
          </View>

          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              marginBottom: 1,
            }}
          >
            <Text style={{ margin: 15, fontSize: 15 }}>Notifications</Text>
            <Image
              style={{
                marginLeft: "auto",
                height: 25,
                width: 15,
                resizeMode: "contain",
                marginRight: 15,
                marginTop: 15,
              }}
              source={images.goTo}
            ></Image>
          </View>

          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              marginBottom: 1,
            }}
          >
            <Text style={{ margin: 15, fontSize: 15 }}>
              Return Creation Demo
            </Text>
            <Image
              style={{
                marginLeft: "auto",
                height: 25,
                width: 15,
                resizeMode: "contain",
                marginRight: 15,
                marginTop: 15,
              }}
              source={images.goTo}
            ></Image>
          </View>

          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              marginBottom: 1,
            }}
          >
            <Text style={{ margin: 15, fontSize: 15 }}>How To Return</Text>
            <Image
              style={{
                marginLeft: "auto",
                height: 25,
                width: 15,
                resizeMode: "contain",
                marginRight: 15,
                marginTop: 15,
              }}
              source={images.goTo}
            ></Image>
          </View>

          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              marginBottom: 1,
            }}
          >
            <Text style={{ margin: 15, fontSize: 15 }}>
              How Do I Redeem My Coupon?
            </Text>
            <Image
              style={{
                marginLeft: "auto",
                height: 25,
                width: 15,
                resizeMode: "contain",
                marginRight: 15,
                marginTop: 15,
              }}
              source={images.goTo}
            ></Image>
          </View>

          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              marginBottom: 1,
            }}
          >
            <Text style={{ margin: 15, fontSize: 15 }}>Terms & Conditions</Text>
            <Image
              style={{
                marginLeft: "auto",
                height: 25,
                width: 15,
                resizeMode: "contain",
                marginRight: 15,
                marginTop: 15,
              }}
              source={images.goTo}
            ></Image>
          </View>

          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              marginBottom: 1,
            }}
          >
            <Text style={{ margin: 15, fontSize: 15 }}>
              Returns and Refunds Policy
            </Text>
            <Image
              style={{
                marginLeft: "auto",
                height: 25,
                width: 15,
                resizeMode: "contain",
                marginRight: 15,
                marginTop: 15,
              }}
              source={images.goTo}
            ></Image>
          </View>

          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              marginBottom: 1,
            }}
          >
            <Text style={{ margin: 15, fontSize: 15 }}>
              We Respect Your Privacy
            </Text>
            <Image
              style={{
                marginLeft: "auto",
                height: 25,
                width: 15,
                resizeMode: "contain",
                marginRight: 15,
                marginTop: 15,
              }}
              source={images.goTo}
            ></Image>
          </View>

          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              marginBottom: 1,
            }}
          >
            <Text style={{ margin: 15, fontSize: 15 }}>Fees & Payments</Text>
            <Image
              style={{
                marginLeft: "auto",
                height: 25,
                width: 15,
                resizeMode: "contain",
                marginRight: 15,
                marginTop: 15,
              }}
              source={images.goTo}
            ></Image>
          </View>

          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              marginBottom: 1,
            }}
          >
            <Text style={{ margin: 15, fontSize: 15 }}>Who We Are</Text>
            <Image
              style={{
                marginLeft: "auto",
                height: 25,
                width: 15,
                resizeMode: "contain",
                marginRight: 15,
                marginTop: 15,
              }}
              source={images.goTo}
            ></Image>
          </View>

          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              marginBottom: 1,
            }}
          >
            <Text style={{ margin: 15, fontSize: 15 }}>Join Our Team</Text>
            <Image
              style={{
                marginLeft: "auto",
                height: 25,
                width: 15,
                resizeMode: "contain",
                marginRight: 15,
                marginTop: 15,
              }}
              source={images.goTo}
            ></Image>
          </View>
          <TouchableOpacity
            style={{
              borderWidth:1,
              width: 200,
              height: 50,
              borderRadius: 10,
              margin: 10,
              marginLeft: 80,
              marginBottom: 30,
            }}
            
          >
            <Text
              style={{
                textAlign: "center",
                color: "black",
                fontWeight: "bold",
                paddingTop: 12,
                fontSize: 15,
              }}
              onPress={() =>
                this.props.navigation.navigate(navigationString.Login)
              }
            >
              Logout
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: "gray",
              fontSize: 12,
              textAlign: "center",
              marginTop:-10
            }}
          >
            {" "}
            Version 7.0.2 Build 1406
          </Text>
        </ScrollView>
      </View>
    );
  }
}
