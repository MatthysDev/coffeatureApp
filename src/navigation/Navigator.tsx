import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppRoutes } from "./AppRoutes";
import { HomeScreen } from "../screen/HomeScreen";
import { DetailProduit } from "../screen/DetailProduct";

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Co'Feature"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={AppRoutes.ACCEUIL} component={HomeScreen} />
        <Stack.Screen name={AppRoutes.DETAIL} component={DetailProduit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
