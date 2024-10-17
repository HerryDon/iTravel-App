import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DatePickerInput } from "react-native-paper-dates";
import { en, registerTranslation } from "react-native-paper-dates";
registerTranslation("en", en);
import { pickDateFromCalendar } from "react-native-paper-dates";
import axios from "axios";
import { Dropdown } from "react-native-element-dropdown";
import { useId } from "react";

const HomeScreen = ({ navigation }) => {
  // Date selections
  const [inputDate, setInputDate] = React.useState(undefined);

  //city selection
  const [town, setTown] = useState([]);
  const [isFocus, setIsFocus] = useState();
  const [isFocuss, setIsFocuss] = useState(false);

  //fetch towns
  const getTown = async () => {
    try {
      const response = await axios.get(
        "https://node-api-i-travel.vercel.app/api/v1/town/fetchTown"
      );
      setTown(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTown();
  }, []);
  // const [value, setValue] = useState();
  // const [values, setValues] = useState();
  // const [isFocus, setIsFocus] = useState(false);
  // const [isFocuss, setIsFocuss] = useState(false);

  //render for leaving from
  const renderLabel = () => {
    if (town || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "dark" }]}>
          Leaving from
        </Text>
      );
    }
    return null;
  };

  //render for going to
  const renderLabels = () => {
    if (town || isFocuss) {
      return (
        <Text style={[styles.labels, isFocuss && { color: "dark" }]}>
          Going to
        </Text>
      );
    }
    return null;
  };

  return (
    <SafeAreaProvider className="mt-8">
      <View className="flex-row justify-between items-center px-10 py-18 bg-blue-900 h-40">
        <View>
          <Text className="text-white text-2xl">Welcome User</Text>
        </View>
        <View>
          <Image
            source={require("../assets/bus (6).png")}
            className="h-10 w-10 color-white"
          />
        </View>
      </View>

      <View className="py-5">
        <View className="flex-row justify-between items-center px-5 py-5">
          <Image
            source={require("../assets/bus (3).png")}
            className="h-8 w-8 mt-4"
          />

          {town.map((item) => {
            <View style={styles.container}>
              {renderLabel()}
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={setTown}
                search
                maxHeight={300}
                labelField="label"
                valueField="town"
                placeholder={!isFocus ? "Leaving from" : "..."}
                searchPlaceholder="Search..."
                value={item.town}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(e) => {
                  setTown(e.value);
                  setIsFocus(false);
                }}
              />
              ;
            </View>;
          })}
        </View>

        <View className="flex-row justify-between items-center px-5">
          <Image
            source={require("../assets/bus (3).png")}
            className="h-8 w-8 mt-5"
          />
          {town.map((item) => {
            <View style={styles.containers}>
              {renderLabels()}
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                data={item.town}
                search
                maxHeight={300}
                labelField="labels"
                valueField="town"
                placeholder={!isFocuss ? "Going to" : "..."}
                searchPlaceholder="Search..."
                town={item.town}
                onFocus={() => setIsFocuss(true)}
                onBlur={() => setIsFocuss(false)}
                onChange={(item) => {
                  setTown(item.label);
                  setIsFocus(false);
                }}
              />
            </View>;
          })}
        </View>

        <View className="flex-row justify-between items-center px-5 mt-14 items-center">
          <Image
            source={require("../assets/desk-calendar.png")}
            className="h-8 w-8"
          />

          <View className="w-72 right-20">
            <DatePickerInput
              locale="en"
              label=""
              value={inputDate}
              onChange={(d) => setInputDate(d)}
              inputMode="start"
              mode="outlined"
              className=" bg-white rounded-2xl left-11 h-14 text-sm font-bold"
            />
          </View>
        </View>
      </View>

      <View className="justify-center items-center px-5 py-16">
        <TouchableOpacity
          className="h-14 w-32 bg-blue-900 rounded-xl justify-center items-center"
          onPress={() => navigation.navigate("Available")}
        >
          <Text className="text-white font-bold">Search Buses</Text>
        </TouchableOpacity>
      </View>

      <View className="justify-center items-center top-28">
        <Image
          source={require("../assets/bus (3).png")}
          className="h-14 w-14"
        />
        <Text className="text-blue-600 text-xl font-bold">iTravel</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    marginTop: 10,
  },
  containers: {
    backgroundColor: "white",
    padding: 16,
    marginTop: 14,
  },
  dropdown: {
    height: 55,
    marginRight: 15,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 2,
    width: 95,
    paddingRight: 9,
    paddingHorizontal: 9,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    right: 200,
    top: 4,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 17,
  },
  labels: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 4,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
