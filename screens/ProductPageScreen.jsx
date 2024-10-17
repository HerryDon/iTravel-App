import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductsScreen = () => {
  const [products, setProducts] = useState([]);

  //fetch products
  const getProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      console.log("products collected successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text>Products</Text>
      <ScrollView vertical={true}>
        <View className="w-full px-5 flex-row justify-between items-center space-y-3 flex-wrap mt-5">
          {products.map((item) => {
            return (
              <TouchableOpacity className="h-60 w-[45%] bg-slate-200 rounded-xl">
                <Image
                  source={{
                    uri: item.image,
                  }}
                  className="w-full h-40 border border-slate-500 bg-gray-300 rounded-xl object-fit overflow-hidden"
                />
                <View className="w-full px-3">
                  <Text className="text-xl">{item.title}</Text>
                  <Text className="text-normal">Kshs.{item.price}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({});
