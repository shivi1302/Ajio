import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

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
          price: 3299,
          mrp : 154
        },
        {
          id: 2,
          name: "AVASA",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210228/fKVw/603abda2f997dd5c40011fa7/the_kaftan_company_red_floral_print_skater_dress.jpg",
          details: "Flared Kurta",
          price:4526,
          mrp : 254
        },
        {
          id: 3,
          name: "Vaamsi",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210228/63i9/603abd30f997dd5c40011906/the_kaftan_company_black_v-neck_a-line_dress.jpg",
          details: "Kaftan",
          price: 999,
          mrp : 154
        },
        {
          id: 4,
          name: "FUSION",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210228/JefB/603abcabaeb2696981746eee/forever_new_white_floral_print_tiered_dress.jpg",
          details: "Kaftan",
          price: 2999,
          mrp : 54
        },
        {
          id: 5,
          name: "LEVIS",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210228/X5Sv/603abb1af997dd5c4000f713/forever_new_soft_green_tapered_fit_pants_with_insert_pockets.jpg",
          details: " floral details",
          price: 5236,
          mrp : 102
        },
      ],
      mainCardArrayMen: [
        {
          id: 6,
          name: "NETPLAY",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210225/dE8W/6037bd67aeb2696981705c5c/netplay_white_checked_slim_fit_shirt_with_patch_pocket.jpg",
          details: "Checked Slim Fit Shirt",
          price: 999,
          mrp : 110
        },
        {
          id: 7,
          name: "ALTHEORY",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210225/Htst/6037c4e07cdb8c1f144e0466/altheory_olive_green_striped_slim_fit_cotton_shirt.jpg",
          details: "Cotton Shirt",
          price: 1329,
          mrp : 154
        },
        {
          id: 8,
          name: "BLACKBERRYS",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210228/by2V/603abe40f997dd5c400128f3/blackberrys_pink_floral_print_slim_fit_shirt.jpg",
          details: "Slim Fit Shirt",
          price: 2199,
          mrp : 100
        },
        {
          id: 9,
          name: "French Collection",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210225/CuFQ/60375f3e7cdb8c1f144d8115/french_connection_grey_slim_fit_t-shirt_with_joggers.jpg",
          details: "Slim Fit T-shirt",
          price: 3299,
          mrp : 99
        },
        {
          id: 10,
          name: "FIRST CLASS",
          image:
            "https://assets.ajio.com/medias/sys_master/root/20210225/yCWg/6037c4f07cdb8c1f144e0517/first_class_khaki_printed_flat-front_chinos_with_insert_pockets.jpg",
          details: "Flat-Front Chinos ",
          price: 899,
          mrp : 120
        },
      ],
     
      counter: 0,
      cartForm:[],
    };
  }

  componentDidMount = () => {
  let{cartForm}=this.state
    this.focusListner = this.props.navigation.addListener("focus", () => {
      console.log(this.props);
      if (this.props.route.params) {
        this.addToCart(this.props.route.params.addedProduct);
        
      }
    });
  };
  componentWillUnmount() {
    if (this.focusListner) {
      this.focusListner();
    }
  }
  addToCart = (item) => {
    let {cartForm ,counter} = this.state;
    let newCart =[...cartForm,...[item]]
  let index = cartForm.findIndex((data)=> data.id == item.id  )
  if(!(index==-1)){
    Alert.alert("Already Added to Cart","Item is already added to cart")
    this.setState({
    })
  }
  else{
    this.setState({
      cartForm:newCart,
      counter:counter+1
    });
  }
  };
  render() {
    let { mainCardArray, counter, mainCardArrayMen,item ,cartForm} = this.state;
    const { navigation } = this.props;
    return (
  
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image style={styles.hamburgur} source={images.hamburgur}></Image>
          <Image style={styles.ajioLogo} source={images.ajio}></Image>
          <Image style={styles.notification} source={images.bell}></Image>

          <TouchableOpacity onPress={() =>
          navigation.navigate(navigationString.Cart, { cartAddedItem: cartForm })
        }>
            <Text style={styles.cartNumber}>{counter}</Text>
            <Image style={styles.cart} source={images.bag} />
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Search by Product,Brand & more..."
          style={styles.search}
        ></TextInput>
        <ScrollView>
          <Carausal />
          <Image
            style={styles.image1}
            source={{
              uri:
                "https://assets.ajio.com/medias/sys_master/images/images/h75/h49/30800466051102/28022021-d-unisex-bbsprebuzz-wishlistnow.jpg",
            }}
          ></Image>
          <Image
            style={styles.image2}
            source={{
              uri:
                "https://assets.ajio.com/medias/sys_master/images/images/h0c/h6f/30636198625310/16022021-d-unisex-experienceajio-sectionheader.jpg",
            }}
          ></Image>
          <Image
            style={styles.image3}
            source={{
              uri:
                "https://assets.ajio.com/medias/sys_master/images/images/h15/hb8/30703884632094/20022021-D-unisex-experienceajio-referral.jpg",
            }}
          ></Image>
          <Image
            style={styles.image3}
            source={{
              uri:
                "https://assets.ajio.com/medias/sys_master/images/images/hd8/hfe/30350643429406/04022021-d-unisex-experienceajio-signup-upto500.jpg",
            }}
          ></Image>
          <Image
            style={styles.image4}
            source={{
              uri:
                "https://assets.ajio.com/medias/sys_master/images/images/h24/h3b/30636200394782/18022021-D-unisex-experienceajio-extra20extra30freeshipping.jpg",
            }}
          ></Image>
          <Text style={styles.textForBanner}>
            Fresh Arrivals - Clothing For Women
          </Text>
          <FlatList
            data={mainCardArray}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
              <View style={{ marginBottom: 10 }}></View>
            )}
            renderItem={({ item }) => (
              <Card data={item} onAdd={this.addToCart}></Card>
            )}
          />

          <Text style={styles.textForBanner}>
            Fresh Arrivals - Clothing For Men
          </Text>

          <FlatList
            data={mainCardArrayMen}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
              <View style={{ marginBottom: 10 }}></View>
            )}
            renderItem={({ item }) => (
              <Card data={item} onAdd={this.addToCart}></Card>
            )}
          />
          <Image
            style={{ width: "auto", height: 50, resizeMode: "contain" }}
            source={{
              uri:
                "https://assets.ajio.com/medias/sys_master/images/images/hec/h1d/28296208187422/29102020-D-mhp-ajiocares-strip.jpg",
            }}
          ></Image>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { marginTop: 25, flex: 1 },
  rowContainer: {
    // flex: 0.2,
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-around",
  },
  hamburgur: { height: 25, width: 25, marginTop: 10 },
  ajioLogo: { marginLeft: 70, height: 70, width: 150, marginTop: -10 },
  notification: {
    marginRight: -20,
    marginLeft: 5,
    height: 30,
    width: 20,
  },
  cartNumber: {
    position: "absolute",
    zIndex: 3432,
    left: 38,
    marginTop:-5,
    padding: 3,
    borderRadius:100,
    fontSize: 10,
    backgroundColor: "pink",
    textAlign: "center",
  },
  cart: {
    height: 30,
    width: 30,
    marginBottom: -1,
    marginLeft:20,
  },
  search: {
    fontSize: 12,
    padding: 10,
    paddingLeft: 20,
    color: "gray",
    borderRadius: 10,
    margin: 20,
    marginTop:-10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  image1: {
    height: 200,
    width: "auto",
    margin: 0,
    marginTop: -20,
    resizeMode: "contain",
  },
  image2: {
    height: 50,
    width: "auto",
    marginTop: -50,
    resizeMode: "contain",
  },
  image3: {
    height: 50,
    width: "auto",
    marginTop: -20,
    resizeMode: "contain",
  },
  image4: {
    height: 200,
    width: "auto",
    marginTop: -45,
    resizeMode: "contain",
  },
  textForBanner: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 10,
    marginTop: -20,
    textAlign: "center",
  },
});

export default HomePage;

//  <Text style={{marginTop:20}} onPress={()=>navigation.goBack()} >Go BAck</Text>
