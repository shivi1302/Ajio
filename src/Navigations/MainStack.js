import React, { Fragment } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import navigationString from "../constants/navigationString";
import BottomTabNavigator from "./TabRoutes";

import { Account, Cart, DetailPage, Homepage, WishList } from "../Screens";

function MainStack(Stack) {

    return (
        <Fragment>
            <Stack.Screen
                component={BottomTabNavigator}
                options={{
                    headerShown: false
                }}
                name={navigationString.HomePage}

            />
            <Stack.Screen
                component={DetailPage}
                options={{
                    headerShown: false
                }}
                name={navigationString.DetailPage}

            />
            <Stack.Screen
                component={Cart}
                options={{
                    headerShown: false
                }}
                name={navigationString.Cart}

            />
            <Stack.Screen
                component={Account}
                options={{
                    headerShown: false
                }}
                name={navigationString.Account}

            />
            <Stack.Screen
                component={WishList}
                options={{
                    headerShown: false
                }}
                name={navigationString.WishList}

            />
            
             
        </Fragment>
    )


}


export default MainStack;