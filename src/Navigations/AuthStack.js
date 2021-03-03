import React, { Fragment } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Login,Signup } from "../Screens";
import navigationString from "../constants/navigationString";



function AuthStack(Stack) {

    return (
        <Fragment>
            <Stack.Screen
                component={Login}
                options={{
                    headerShown: false
                }}
                name={navigationString.Login}

            />
            <Stack.Screen
                component={Signup}
                options={{
                    headerShown: false
                }}
                name={navigationString.Signup}

            />
             
        </Fragment>
    )


}


export default AuthStack;