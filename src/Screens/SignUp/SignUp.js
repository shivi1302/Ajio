import React, { Component } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import images from "../../Components/images";
import navigationString from "../../constants/navigationString";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameError: "",
      email: "",
      password: "",
      emailError: "",
    };
  }

  emailValidator = () => {
    let { email } = this.state;
    let regexMail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    let isValidMail = regexMail.test(email);
    if (!isValidMail) {
      this.setState({
        emailError: "** Email is not valid",
      });
    }
    if (email == "") {
      this.setState({
        emailError: "** Email field cannot be empty",
      });
    } else if (isValidMail) {
      this.setState({
        emailError: "",
      });
    }
  };
  nameValidator() {
    let { name } = this.state;
    let regexName = /^[a-z A-Z ,.'-]+$/;
    let isValid = regexName.test(name);

    if (!isValid) {
      this.setState({
        nameError: "** Name is not valid",
      });
    }
    if (name == "") {
      this.setState({
        nameError: "** Name field can not be empty",
      });
    } else if (isValid) {
      this.setState({
        nameError: "",
      });
    }
  }
  render() {
    const { navigation } = this.props;
    const { emailError, nameError } = this.state;
    return (
      <View style={{ margin: 10, marginTop: 35 }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ height: 30, width: 30 }}
              source={images.backArrow}
            ></Image>
          </TouchableOpacity>
          <Text
            style={{
              color: "#6495ed",
              marginLeft: "auto",
              marginRight: 10,
              fontWeight: "bold",
            }}
          >
            Skip
          </Text>
        </View>
        <ScrollView>
          <View>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                margin: 10,
              }}
            >
              Welcome to AJIO
            </Text>
            <Text
              style={{
                color: "gray",
                fontSize: 12,
                margin: 10,
                marginBottom: 20,
              }}
            >
              Join/ Sign-in using
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                height: 40,
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 5,
                borderWidth: 1,
                width: 150,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{
                    height: 25,
                    width: 25,
                    borderRadius: 7,
                    marginLeft: 10,
                    marginTop: 6,
                    marginBottom: 15,
                    marginRight: 15,
                  }}
                  source={images.fb}
                ></Image>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    paddingTop: 10,
                    fontSize: 12,
                  }}
                >
                  Facebook
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 40,
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 5,
                borderWidth: 1,
                width: 150,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{
                    height: 50,
                    width: 35,
                    borderRadius: 7,
                    marginLeft: 10,
                    marginTop: -6,
                    marginBottom: 15,
                    marginRight: 15,
                  }}
                  source={images.google}
                ></Image>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    paddingTop: 10,
                    fontSize: 12,
                  }}
                >
                  Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10, marginLeft: -10 }}>
            <TextInput
              placeholder="Enter Email"
              onBlur={() => this.emailValidator()}
              onChangeText={(text) => {
                this.setState({ email: text });
              }}
              style={{
                backgroundColor: `#dcdcdc`,
                margin: 30,
                height: 60,
                width: 300,
                borderRadius: 5,
                paddingLeft: 10,
              }}
            ></TextInput>
            <Text
              style={{
                color: "red",
                marginTop: -20,
                fontSize: 10,
                marginLeft: 40,
              }}
            >
              {emailError}
            </Text>
            <TextInput
              placeholder="Name"
              onBlur={() => this.nameValidator()}
              onChangeText={(text) => {
                this.setState({ name: text });
              }}
              style={{
                backgroundColor: `#dcdcdc`,
                marginTop: 10,
                margin: 30,
                height: 60,
                width: 300,
                borderRadius: 5,
                paddingLeft: 10,
              }}
            ></TextInput>
            <Text
              style={{
                color: "red",
                marginTop: -20,
                fontSize: 10,
                marginLeft: 40,
              }}
            >
              {nameError}
            </Text>
            <TextInput
              placeholder="Mobile* "
              style={{
                backgroundColor: `#dcdcdc`,
                marginTop: 10,
                margin: 30,
                height: 60,
                width: 300,
                borderRadius: 5,
                paddingLeft: 10,
              }}
              keyboardType="numeric"
              maxLength={10}
            ></TextInput>
            <Text
              style={{
                marginLeft: 40,
                fontSize: 10,
                color: "gray",
                marginTop: -25,
              }}
            >
              OTP will be sent to this number for verification
            </Text>
            <TextInput
              placeholder="Password*"
              onChangeText={(text) => {
                this.setState({ password: text });
              }}
              style={{
                backgroundColor: `#dcdcdc`,
                marginTop: 20,
                margin: 30,
                height: 60,
                width: 300,
                borderRadius: 5,
                paddingLeft: 10,
              }}
            ></TextInput>
            <Text
              style={{
                color: "gray",
                fontSize: 12,
                textAlign: "center",
                marginTop: -15,
              }}
            >
              By Signing In, I agree to{" "}
              <Text style={{ color: "#6495ed" }}>Terms & Conditions.</Text>
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                margin: 30,
                marginTop: 30,
                height: 60,
                borderRadius: 10,
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
                Start Shopping
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Signup;

{
  /* <Text onPress={()=>navigation.goBack()} >Go BAck</Text> */
}
