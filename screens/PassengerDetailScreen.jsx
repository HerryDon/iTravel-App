import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

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
        <View className="border border-blue-900 m-2 rounded-xl p-2">
          <View className="flex-row gap-16 py-3">
            <TextInput
              className="border border-slate-400 rounded-xl my-6 px-3 h-10 w-40 font-bold "
              placeholder="First Name"
            />
            <TextInput
              className="border border-slate-400 rounded-xl my-6 px-3 h-10 w-40 font-bold"
              placeholder="Last Name"
            />
          </View>

          <View className="flex-row gap-16">
            <TextInput
              className="border border-slate-400 rounded-xl my-6 px-3 h-10 w-40 font-bold "
              placeholder="ID Number"
            />
            <TextInput
              className="border border-slate-400 rounded-xl my-6 px-3 h-10 w-40 font-bold"
              placeholder="Mobile e.g 0712345678"
            />
          </View>

          <View className="flex-row gap-16 py-3">
            <TextInput
              className="border border-slate-400 rounded-xl my-6 px-3 h-10 w-40 font-bold "
              placeholder="Nationality"
            />
            <TextInput
              className="border border-slate-400 rounded-xl my-6 px-3 h-10 w-40 font-bold "
              placeholder="ID proof"
            />
          </View>

          <View className="flex-row gap-16 py-3">
            <TextInput
              className="border border-slate-400 rounded-xl my-6 px-3 h-10 w-40 font-bold "
              placeholder="Gender"
            />
          </View>
        </View>
      </View>

      <TouchableOpacity className="bg-blue-900 p-4 mt-56 items-center">
        <Text className="text-2xl text-white">Proceed to Pay</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PassengerCoverScreen;
