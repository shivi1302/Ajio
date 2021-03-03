import React, { Component } from "react";
import { View, Text, Image, TextInput,FlatList } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Carausal from "../../Components/Carausal";
import Card from "../../Components/Card";
import images from "../../Components/images";
import navigationString from "../../constants/navigationString";


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainCardArray: [
        {
          id: 1,
          name: "MIRASA",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210228/BW5c/603abdadaeb2696981747e8f/the_kaftan_company_green_kaftans_with_floral_detail.jpg",
          details: "Kaftan",
          price: "Rs.3,299",
        },
        {
          id: 2,
          name: "AVASA",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210228/fKVw/603abda2f997dd5c40011fa7/the_kaftan_company_red_floral_print_skater_dress.jpg",
          details:"Flared Kurta",
          price: "Rs.329",
        },
        {
          id: 3,
          name: "Vaamsi",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210228/63i9/603abd30f997dd5c40011906/the_kaftan_company_black_v-neck_a-line_dress.jpg",
          details: "Kaftan",
          price: "Rs.4251",
        },
        {
          id: 4,
          name: "FUSION",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210228/JefB/603abcabaeb2696981746eee/forever_new_white_floral_print_tiered_dress.jpg",
          details: "Kaftan",
          price: "Rs.2,299",
        },
        {
          id: 5,
          name: "LEVIS",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210228/X5Sv/603abb1af997dd5c4000f713/forever_new_soft_green_tapered_fit_pants_with_insert_pockets.jpg",
          details: " floral details",
          price: "Rs.299",
        },
      ],
      mainCardArrayMen: [
        {
          id: 1,
          name: "NETPLAY",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210225/dE8W/6037bd67aeb2696981705c5c/netplay_white_checked_slim_fit_shirt_with_patch_pocket.jpg",
          details: "Checked Slim Fit Shirt",
          price: "Rs.999",
        },
        {
          id: 2,
          name: "ALTHEORY",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210225/Htst/6037c4e07cdb8c1f144e0466/altheory_olive_green_striped_slim_fit_cotton_shirt.jpg",
          details: "Cotton Shirt",
          price: "Rs.1,329",
        },
        {
          id: 3,
          name: "BLACKBERRYS",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210228/by2V/603abe40f997dd5c400128f3/blackberrys_pink_floral_print_slim_fit_shirt.jpg",
          details: "Slim Fit Shirt",
          price: "Rs.2.199",
        },
        {
          id: 4,
          name: "French Collection",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210225/CuFQ/60375f3e7cdb8c1f144d8115/french_connection_grey_slim_fit_t-shirt_with_joggers.jpg",
          details: "Slim Fit T-shirt",
          price: "Rs.3,299",
        },
        {
          id: 5,
          name: "FIRST CLASS",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210225/yCWg/6037c4f07cdb8c1f144e0517/first_class_khaki_printed_flat-front_chinos_with_insert_pockets.jpg",
          details: "Flat-Front Chinos ",
          price: "Rs.899",
        },
      ],
      increament: 1,
      counter: 0,
    };
  }

  componentDidMount() {
    this.focusListner = this.props.navigation.addListener("focus", () => {
      alert("Welcome");
    });
  }
  componentWillUnmount() {
    if (this.focusListner) {
      this.focusListner();
    }
  }
  addToCart = () => {
    let { increament, counter } = this.state;
    this.setState({
      counter: counter + increament,
    });
  };
  render() {
    const { navigation } = this.props;
    let { mainCardArray, counter, mainCardArrayMen } = this.state;
    return (
      <View style={{ marginTop: 25, flex: 1 }}>
        <View style={{ flex: 0.2, flexDirection: "row", margin: 10 }}>
          <Image
            style={{ height: 25, width: 25, marginTop: 10 }}
            source={images.hamburgur}
          ></Image>
          <Image
            style={{ marginLeft: 80, height: 70, width: 150 }}
            source={images.ajio}
          ></Image>
          <Image
            style={{ marginRight:-20,marginLeft:5, height: 30, width: 20, marginTop: 20 }}
            source={images.bell}
          ></Image>
          <View style={{ flexDirection: "column", marginLeft: 30 }}>
              <Text
                style={{
                  marginLeft: 20,
                  borderRadius: 20,
                  fontSize: 10,
                  backgroundColor: "pink",
                  textAlign: "center",
                }}
              >
                {counter}
              </Text>
              <Image
                style={{
                  height: 30,
                  width: 30,
                  marginBottom: -1,
                  marginLeft: 15,
                }}
                source={images.bag}
              ></Image>
            </View>
        </View>
        <TextInput
          placeholder="Search by Product,Brand & more..."
          style={{
            fontSize: 12,
            padding: 10,
            paddingLeft: 20,
            color: "gray",
            borderRadius: 10,
            margin: 20,
            marginTop: 55,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,

            elevation: 2,
          }}
        ></TextInput>
        <ScrollView>
          <Carausal />
          <Image
            style={{
              height: 200,
              width: "auto",
              margin: 0,
              marginTop: -20,
              resizeMode: "contain",
            }}
            source={{
              uri:
                "https://assets.ajio.com/medias/sys_master/images/images/h75/h49/30800466051102/28022021-d-unisex-bbsprebuzz-wishlistnow.jpg",
            }}
          ></Image>
          <Image
            style={{
              height: 50,
              width: "auto",
              marginTop: -50,
              resizeMode: "contain",
            }}
            source={{
              uri:
                "https://assets.ajio.com/medias/sys_master/images/images/h0c/h6f/30636198625310/16022021-d-unisex-experienceajio-sectionheader.jpg",
            }}
          ></Image>
          <Image
            style={{
              height: 50,
              width: "auto",
              marginTop: -20,
              resizeMode: "contain",
            }}
            source={{
              uri:
                "https://assets.ajio.com/medias/sys_master/images/images/h15/hb8/30703884632094/20022021-D-unisex-experienceajio-referral.jpg",
            }}
          ></Image>
          <Image
            style={{
              height: 50,
              width: "auto",
              marginTop: -20,
              resizeMode: "contain",
            }}
            source={{
              uri:
                "https://assets.ajio.com/medias/sys_master/images/images/hd8/hfe/30350643429406/04022021-d-unisex-experienceajio-signup-upto500.jpg",
            }}
          ></Image>
          <Image
            style={{
              height: 200,
              width: "auto",
              marginTop: -45,
              resizeMode: "contain",
            }}
            source={{
              uri:
                "https://assets.ajio.com/medias/sys_master/images/images/h24/h3b/30636200394782/18022021-D-unisex-experienceajio-extra20extra30freeshipping.jpg",
            }}
          ></Image>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              margin: 10,
              marginTop: -20,
              textAlign: "center",
            }}
          >
            Fresh Arrivals - Clothing For Women
          </Text>
          <FlatList
          data={mainCardArray}
          showsVerticalScrollIndicator = {false}
          numColumns ={2}
          keyExtractor={(item)=>item.id}
          ItemSeparatorComponent = {()=>(<View style={{marginBottom:10}}></View>)}
          renderItem={({item})=>(<Card data= {item} onAdd={this.addToCart}></Card>)}
          />

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              margin: 10,
              marginTop: -20,
              textAlign: "center",
            }}
          >
            Fresh Arrivals - Clothing For Men
          </Text>
          
          <FlatList
          data={mainCardArrayMen}
          showsVerticalScrollIndicator = {false}
          numColumns ={2}
          keyExtractor={(item)=>item.id}
          ItemSeparatorComponent = {()=>(<View style={{marginBottom:10}}></View>)}
          renderItem={({item})=>(<Card data= {item} onAdd={this.addToCart}></Card>)}
          />
          <Image
            style={{ width: "auto", height: 50, resizeMode: "contain" }}
            source={{
              uri:
                "https://assets.ajio.com/medias/sys_master/images/images/hec/h1d/28296208187422/29102020-D-mhp-ajiocares-strip.jpg",
            }}
          ></Image>
        </ScrollView>

        {/* <View style={{ flexDirection: "row", marginLeft: 15, paddingTop: 5 }}>
          <TouchableOpacity>
            <View style={{ flexDirection: "column" }}>
              <Image
                style={{ height: 35, width: 30, marginTop: 15, marginLeft: 10 }}
                source={images.home}
              ></Image>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(navigationString.Stores)
            }
          >
            <View style={{ flexDirection: "column", marginLeft: 30 }}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                  marginTop: 17,
                  marginLeft: 10,
                  marginBottom: 5,
                }}
                source={images.store}
              ></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(navigationString.Account)
            }
          >
            <View style={{ flexDirection: "column", marginLeft: 30 }}>
              <Image
                style={{ height: 30, width: 30, marginTop: 15, marginLeft: 10 }}
                source={images.account}
              ></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(navigationString.WishList)
            }
          >
            <View style={{ flexDirection: "column", marginLeft: 10 }}>
              <Image
                style={{
                  height: 40,
                  width: 40,
                  marginTop: 15,
                  marginBottom: -5,
                  marginLeft: 30,
                }}
                source={images.wishlist}
              ></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(navigationString.Cart)
            }
          >
            <View style={{ flexDirection: "column", marginLeft: 30 }}>
              <Text
                style={{
                  marginLeft: 20,
                  borderRadius: 20,
                  fontSize: 10,
                  backgroundColor: "pink",
                  textAlign: "center",
                }}
              >
                {counter}
              </Text>
              <Image
                style={{
                  height: 30,
                  width: 30,
                  marginBottom: -1,
                  marginLeft: 15,
                }}
                source={images.bag}
              ></Image>
            </View>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

export default HomePage;

//  <Text style={{marginTop:20}} onPress={()=>navigation.goBack()} >Go BAck</Text>
