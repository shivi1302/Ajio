
import React, {Fragment} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
const Stack = createStackNavigator();
Stack.Screen
export default function () {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                    {AuthStack(Stack)}
                   {MainStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}


