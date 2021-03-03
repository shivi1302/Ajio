import React from 'react';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HomePage from '../Screens/HomePage/HomePage';

import navigationString from '../constants/navigationString';
import { Account, Cart, WishList } from '../Screens';


const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNavigator() {
    return (

<Tab.Navigator 
      initialRouteName={navigationString.HomePage}
        activeColor='black'
      barStyle={{
          backgroundColor:'white'
      }}
    >
      <Tab.Screen
        name={navigationString.HomePage}
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color="black" size={25} />
          ),
        }}
      />
     
      <Tab.Screen
        name={navigationString.Account}
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name= "person-outline" color="black" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={navigationString.WishList}
        component={WishList}
        options={{
          tabBarLabel: 'WishList',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color="black" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={navigationString.Cart}
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" color="black" size={25} />
            
          ),
        }}
      />
    </Tab.Navigator>




);
}