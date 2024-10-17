import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const PaymentInformation = () => {
  return (
    <SafeAreaView>
      <View className="flex-row  bg-blue-900 h-39 justify-between items-center p-7">
        <Text
          className="text-white text-2xl font-bold px-4"
          id="from-locations"
        >
          NAIROBI
        </Text>
        <Image
          source={require("../assets/bus (3).png")}
          className="h-20 w-20"
        />
        <Text className="text-white text-2xl font-bold px-4" id="to-location">
          MOMBASA
        </Text>
      </View>

      <View className="">
        <Text className="text-xl px-28 py-4">Booking Summary</Text>
        <View className="border border-blue-900 mb-4 m-8 p-6 font-bold">
          <View className="flex-row px-10 gap-40">
            <Text>From:</Text>
            <Text>Nairobi</Text>
          </View>

          <View className="flex-row px-10 gap-40">
            <Text>To:</Text>
            <Text>Mombasa</Text>
          </View>

          <View className="flex-row px-10 gap-20">
            <Text>Date of Travel:</Text>
            <Text>04 JUN 2024</Text>
          </View>

          <View className="flex-row px-10 gap-20">
            <Text>Depature Time:</Text>
            <Text>11:00 AM</Text>
          </View>

          <View className="flex-row px-10 gap-20">
            <Text>Number of Tickets:</Text>
            <Text>1</Text>
          </View>

          <View className="flex-row px-10 gap-20">
            <Text>Total Amount:</Text>
            <Text>KES 1750</Text>
          </View>
        </View>

        <View className="bg-blue-800 h-12 w-90 items-center py-2">
          <Text className="text-white text-xl">Payment Method</Text>
        </View>
        <View className="items-center">
          <Image
            source={require("../assets/mpesa.png")}
            className="h-16 w-16"
          />
          <TextInput
            className="border border-slate-500 rounded-xl my-6 px-3 h-14 w-80 "
            placeholder="Enter Phone Number"
          />
        </View>
      </View>
      <TouchableOpacity className="h-16 w-32 bg-blue-900 rounded-xl left-36 justify-center items-center mt-2">
        <Text className="text-white font-bold items-center">Procced To Pay</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PaymentInformation;
