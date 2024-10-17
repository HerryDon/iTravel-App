import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const PassengerCoverScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View className="bg-blue-900">
        <View className="flex-row h-25 justify-between items-center p-9">
          <Text
            className="text-white text-2xl font-bold px-4"
            id="from-locations"
          >
            NAIROBI
          </Text>
          <Image
            source={require("../assets/bus (3).png")}
            className="h-12 w-12"
          />
          <Text className="text-white text-2xl font-bold px-4" id="to-location">
            MOMBASA
          </Text>
        </View>

        <View className="justify-center items-center gap-3 mb-4 text-white">
          <Text className="text-white text-xl">TRAVEL DATE: 04 JUN 2024</Text>
          <Text className="text-white text-xl">DEPATURE : 11:00 AM</Text>
        </View>
      </View>

      <View className="">
        <Text className="font-bold text-xl py-4 ml-3">Passenger Details;</Text>
        <TouchableOpacity
          className="py-6 border border-blue-900 w-90 rounded-xl m-3"
          onPress={() => navigation.navigate("PassengerDetail")}
        >
          <View className="flex-row items-center ml-5">
            <Text>1. 11D</Text>
            <View className="flex-row  items-center gap-3 left-36">
              <Image
                source={require("../assets/user.png")}
                className="h-8 w-8"
              />
              <Text>Fill Passenger Details</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PassengerCoverScreen;
