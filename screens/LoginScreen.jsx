import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const LoginScreen = () => {
  return (
    <SafeAreaView className="bg-white justify-center items-center flex-1">
      <Image source={require("../assets/bus (3).png")} className="h-32 w-32" />
      <Text className="text-2xl text-slate-600">Sign In</Text>

      <TextInput
        className="border border-slate-400 h-10 w-80 rounded-xl px-4 my-6"
        placeholder="email"
      />
      <TextInput
        className="border border-slate-400 h-10 w-80 rounded-xl px-4 my-6"
        placeholder="password"
      />
      <TouchableOpacity className="h-12 w-60 bg-blue-900 rounded-xl justify-center items-center mt-10">
        <Text className="text-white font-semibold text-2xl">Login</Text>
      </TouchableOpacity>

      <Text className="text-blue-500 py-12 px-9">
        Click here to speak with our Customer Service
      </Text>
    </SafeAreaView>
  );
};

export default LoginScreen;
