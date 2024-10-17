import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

function changeImage() {
  let availableSeat = document.getElementById("clickseat");
  if (availableSeat.src.match("../assets/avalableseat")) {
    availableSeat.src = "../assets/selectedseat";
  } else {
    availableSeat.src = "../assets/availableseat";
  }
}

const SitsScreen = ({ navigation }) => {
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

      <View className="flex-row py-5 justify-evenly">
        <Image
          source={require("../assets/availableseat.png")}
          className="h-6 w-6"
        />
        <Text className="py-2">Availabe seats</Text>

        <Image
          source={require("../assets/bookedseat.png")}
          className="h-6 w-6"
        />
        <Text className="py-2">Booked seats</Text>

        <Image
          source={require("../assets/selectedseat.png")}
          className="h-6 w-6"
        />
        <Text className="py-2">Selected seats</Text>
      </View>

      {/* Sits arrangement */}

      <View className="border border-slate-200 rounded-xl m-5">
        <Image
          source={require("../assets/steering-wheel.png")}
          className="h-6 w-6 left-72"
          //placeHolder  = "4"
        />

        <View className="py-7 gap-3">
          <View className="px-6 flex-row justify-between">
            <View className="flex-row gap-2">
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={"changeImage()"}
              />
              <Text className="py-2">1A</Text>
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={changeImage}
              />
              <Text className="py-2">1B</Text>
            </View>

            <View className="flex-row gap-2 left-1">
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={changeImage}
              />
              <Text className="py-2">1C</Text>
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={changeImage}
              />
              <Text className="py-2">1D</Text>
            </View>
          </View>

          <View className="px-6 flex-row justify-between">
            <View className="flex-row gap-2">
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={"changeImage()"}
              />
              <Text className="py-2">2A</Text>
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={changeImage}
              />
              <Text className="py-2">2B</Text>
            </View>

            <View className="flex-row gap-2 left-1">
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={changeImage}
              />
              <Text className="py-2">2C</Text>
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={changeImage}
              />
              <Text className="py-2">2D</Text>
            </View>
          </View>

          <View className="px-6 flex-row justify-between">
            <View className="flex-row gap-2">
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={"changeImage()"}
              />
              <Text>3A</Text>
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={changeImage}
              />
              <Text className="py-2">3B</Text>
            </View>

            <View className="flex-row gap-2 left-1">
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={changeImage}
              />
              <Text className="py-2">3C</Text>
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={changeImage}
              />
              <Text className="py-2">3D</Text>
            </View>
          </View>

          <View className="px-6 flex-row justify-between">
            <View className="flex-row gap-2">
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={"changeImage()"}
              />
              <Text className="py-2">4A</Text>
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={changeImage}
              />
              <Text className="py-2">4B</Text>
            </View>

            <View className="flex-row gap-2 left-1">
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={changeImage}
              />
              <Text className="py-2">4C</Text>
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={changeImage}
              />
              <Text className="py-2">4D</Text>
            </View>
          </View>

          <View className="px-6 flex-row justify-between">
            <View className="flex-row gap-2">
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={"changeImage()"}
              />
              <Text className="py-2">5A</Text>
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={changeImage}
              />
              <Text className="py-2">5B</Text>
            </View>

            <View className="flex-row gap-2 left-1">
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={changeImage}
              />
              <Text className="py-2">5C</Text>
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={changeImage}
              />
              <Text className="py-2">5D</Text>
            </View>
          </View>

          <View className="px-6 flex-row justify-between">
            <View className="flex-row gap-2">
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={"changeImage()"}
              />
              <Text className="py-2">6A</Text>
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={changeImage}
              />
              <Text className="py-2">6B</Text>
            </View>
            <Image
              source={require("../assets/availableseat.png")}
              className="h-9 w-9"
              id="clickseat"
              onPress={changeImage}
            />
            <Text className="py-2">6C</Text>
            <View className="flex-row gap-2 left-1">
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={changeImage}
              />
              <Text className="py-2">6D</Text>
              <Image
                source={require("../assets/availableseat.png")}
                className="h-9 w-9"
                id="clickseat"
                onPress={changeImage}
              />
              <Text className="py-2">6E</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="flex-row px-16">
        <Text className="text-xl font-bold py-2 text-blue-600">Seats:</Text>
        <Text className="text-xl font-bold py-2 left-36 text-blue-600">
          Amount: 0
        </Text>
      </View>

      <View className="flex-row px-16 py-5">
        <Text className="font-bold py-5">Boarding point: </Text>
        <View className="left-20 border border-blue-600 rounded-xl ">
          <Text className="p-4  font-semibold">NAIROBI</Text>
        </View>
      </View>

      <TouchableOpacity
        className="bg-blue-900 items-center h-16 w-90 top-6 rounded-2xl"
        onPress={() => navigation.navigate("PassengerCover")}
      >
        <Text className="text-white font-semibold text-xl py-4">
          Fill Passenger Details
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SitsScreen;
