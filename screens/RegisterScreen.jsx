import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  DatePickerIOS,
} from "react-native";
import React from "react";

const RegisterScreen = () => {
  return (
    <SafeAreaView className="bg-white justify-center items-center flex-1">
      <Image source={require("../assets/bus (3).png")} className="h-32 w-32" />
      <Text className="text-2xl text-blue-600 ">Register</Text>

      <TextInput
        className="border border-slate-400 rounded-xl my-6 px-3 h-10 w-80 "
        placeholder="User Name"
      />

      <TextInput
        className="border border-slate-400 rounded-xl my-6 px-3 h-10 w-80 "
        placeholder="Email"
      />

      <TextInput
        className="border border-slate-500 rounded-xl my-6 px-3 h-10 w-80 "
        placeholder="Password"
      />
      <TouchableOpacity className="h-16 w-60 mt-10 bg-blue-900 rounded-xl justify-center items-center">
        <Text className="text-white font-semibold text-2xl ">Register</Text>
      </TouchableOpacity>

      {/* <View>
        <DatePickerIOS date={chosenDate} onDateChange={setChosenDate} />
      </View> */}
    </SafeAreaView>
  );
};

export default RegisterScreen;
