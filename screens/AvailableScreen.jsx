import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const AvailableScreen = ({ route, navigation }) => {
  //const { value, values } = route.params;
  const { param1, param2 } = route.params;
  return (
    <SafeAreaView>
      <View className="flex-row  bg-blue-900 h-39 justify-between items-center p-7">
        <Text className="text-white text-xl font-bold px-4">{param1}</Text>
        <Image
          source={require("../assets/school-bus.png")}
          className="h-20 w-20"
        />
        <Text className="text-white text-xl font-bold px-4">{param2}</Text>
      </View>
      <Text className="text-black text-xl px-16 py-10" id="travel-date">
        TRAVEL DATE: 04 JUN 2024
      </Text>

      <View className="gap-5 p-1">
        <TouchableOpacity onPress={() => navigation.navigate("Sits")}>
          <View className="border border-slate-200 rounded-xl">
            <View className="flex-row h-14 p-1 justify-between items-center">
              <Text
                className="text-black font-semibold px-4"
                id="from-locations"
              >
                {param1}
              </Text>
              <Image
                source={require("../assets/bus (5).png")}
                className="h-6 w-6"
              />
              <Text className="text-black font-semibold px-4" id="to-location">
                {param2}
              </Text>
              <Text
                className="text-black font-semibold px-14"
                id="from-locations"
              >
                11 SEATS
              </Text>
            </View>
            <View className="flex-row flex-row justify-between items-center mb-4 px-1">
              <Text className="text-black px-4" id="from-locations">
                DEPATURE : 11:00 AM
              </Text>
              <Text
                className="text-black font-semibold right-14"
                id="from-locations"
              >
                KES 1750
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View className="border border-slate-200 rounded-xl">
            <View className="flex-row h-14 p-1 justify-between items-center">
              <Text
                className="text-black font-semibold px-4"
                id="from-locations"
              >
                {param1}
              </Text>
              <Image
                source={require("../assets/bus (5).png")}
                className="h-6 w-6"
              />
              <Text className="text-black font-semibold px-4" id="to-location">
                {param2}
              </Text>
              <Text
                className="text-black font-semibold px-14"
                id="from-locations"
              >
                11 SEATS
              </Text>
            </View>
            <View className="flex-row flex-row justify-between items-center mb-4 px-1">
              <Text className="text-black px-4" id="from-locations">
                DEPATURE : 11:00 AM
              </Text>
              <Text
                className="text-black font-semibold right-14"
                id="from-locations"
              >
                KES 1750
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* <View className="flex-row justify-between items-center bg-blue-900 h-20 item-bottom"></View> */}
    </SafeAreaView>
  );
};

export default AvailableScreen;
