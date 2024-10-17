import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import Home3Screen from "./screens/Home3Screen";
import Home4Screen from "./screens/Home4Screen";
import AvailableScreen from "./screens/AvailableScreen";
import SitsScreen from "./screens/SitsScreen";
import PassengerCoverScreen from "./screens/PassengerCoverScreen";
import PassengerDetailScreen from "./screens/PassengerDetailScreen";
import Navigation from "./navigation/Navigation";
import MapScreen from "./screens/MapScreen";
import ProductPageScreen from "./screens/ProductPageScreen";

export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
