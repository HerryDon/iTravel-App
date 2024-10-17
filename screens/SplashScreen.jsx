import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const SplashScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-white py-14 justify-center items-center">
      <Image
        source={require("../assets/bus (3).png")}
        className="h-32 w-32 mt-10"
      />
      <Text className="text-blue-600 text-3xl font-bold px-7">iTravel</Text>
      {/* <Text
        className="text-blue-400 text-4xl font-bold"
        style={{ paddingTop: 180, justicyContent: "left" }}
      >
        We're going on a trip.
      </Text>
      <Text className="text-blue-300 text-2xl font-bold">
        Are you in?
      </Text> */}

      <View className="absolute bottom-10 mx-20">
        <TouchableOpacity
          className="bg-blue-900 h-16 w-60 rounded-xl justify-center items-center"
          onPress={() => navigation.navigate("Home")}
        >
          <Text className="text-white font-bold">Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
