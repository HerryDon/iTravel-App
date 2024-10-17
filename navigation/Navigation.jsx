import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import SitsScreen from "../screens/SitsScreen";
import AvailableScreen from "../screens/AvailableScreen";
import PassengerCoverScreen from "../screens/PassengerCoverScreen";
import PassengerDetailScreen from "../screens/PassengerDetailScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name = "Splash" component= {SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name = "Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name = "Available" component={AvailableScreen} options={{headerShown:false}}/>
        <Stack.Screen name = "Sits" component={SitsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="PassengerCover" component={PassengerCoverScreen} options={{headerShown:false}}/>
        <Stack.Screen name = "PassengerDetail" component={PassengerDetailScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
