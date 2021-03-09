import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from "react-native";
import images from "../../Components/images";
import navigationString from "../../constants/navigationString";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
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
  passwordValidator = () => {
    let { password } = this.state;
    let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    let isValidPassword = regexPassword.test(password);
    if (!isValidPassword) {
      this.setState({
        passwordError: "** Password is not valid",
      });
    }
    if (password == "") {
      this.setState({
        passwordError: "** Password field cannot be empty",
      });
    } else if (isValidPassword) {
      this.setState({
        passwordError: "",
      });
    }
  };
  render() {
    let { emailError, passwordError } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{ flex: 0.07 }}></View>
          <View style={{ flex: 0.3 }}>
            <Text
              style={styles.skip}
            >
              Skip
            </Text>
            <Image
              style={styles.logoimage}
              source={images.logo}
            ></Image>
            <Text
              style={styles.mainWelcome}
            >
              Welcome to AJIO
            </Text>
          </View>
          <View style={{ flex: 0.55 }}>
            <TextInput
              placeholder="Enter Email"
              onBlur={() => this.emailValidator()}
              onChangeText={(text) => {
                this.setState({ email: text });
              }}
              style={styles.text}
            ></TextInput>
            <Text
              style={{
                color: "red",
                marginTop: -27,
                fontSize: 10,
                marginLeft: 40,
              }}
            >
              {emailError}
            </Text>
            <TextInput
              placeholder="Enter Password"
              onBlur={() => this.passwordValidator()}
              onChangeText={(text) => {
                this.setState({ password: text });
              }}
              style={{
                backgroundColor: "#dcdcdc",
                margin: 30,
                marginTop: 5,
                height: 60,
                borderRadius: 5,
                paddingLeft: 10,
              }}
            ></TextInput>
            <Text
              style={{
                color: "red",
                marginTop: -27,
                fontSize: 10,
                marginLeft: 40,
              }}
            >
              {passwordError}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                margin: 30,
                marginTop: 5,
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
                Login
              </Text>
            </TouchableOpacity>
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
            <Text
              style={{
                color: "gray",
                fontSize: 15,
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Don't have an account ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate(navigationString.Signup)
              }
            >
              <Text
                style={{ color: "#6495ed", fontSize: 15, textAlign: "center" }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{
                margin: 30,
                height: 60,
                borderRadius: 10,
                borderWidth: 1,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 10,
                    margin: 15,
                  }}
                  source={images.fb}
                ></Image>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    paddingTop: 17,
                    fontSize: 15,
                  }}
                >
                  Continue with Facebook
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                margin: 30,
                marginTop: -5,
                height: 60,
                borderRadius: 10,
                borderWidth: 1,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{
                    height: 50,
                    width: 30,
                    borderRadius: 10,
                    margin: 5,
                    marginLeft: 15,
                  }}
                  source={images.google}
                ></Image>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    paddingTop: 17,
                    fontSize: 15,
                    marginLeft: 10,
                  }}
                >
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
container:{ flex: 1, marginTop: 35, margin: 10 },
skip:{
  color: "#6495ed",
  textAlign: "right",
  fontWeight: "bold",
},
logoimage:{
  height: 60,
  width: 70,
  marginTop: 30,
  marginLeft: 140,
  marginRight: 100,
},
mainWelcome:{
  fontSize: 22,
  fontWeight: "bold",
  textAlign: "center",
  marginTop: 10,
},
text:{
  backgroundColor: `#dcdcdc`,
  margin: 30,
  height: 60,
  borderRadius: 5,
  paddingLeft: 10,
},

})
export default Login;

// onPress={()=>this.props.navigation.navigate(navigationString.Signup)}
