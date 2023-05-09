import React from "react";
import { Login } from "../screens/login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Splash } from "../screens/splash";
import { Home } from "../screens/home";

const AdminStack = createNativeStackNavigator();

export const StackNavigation = (props: any) => {
  return (
    <AdminStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"Splash"}
    >
      <AdminStack.Screen name="Splash" component={Splash} />
      <AdminStack.Screen name="Login" component={Login} />
      <AdminStack.Screen name="Home" component={Home} />
    </AdminStack.Navigator>
  );
};
