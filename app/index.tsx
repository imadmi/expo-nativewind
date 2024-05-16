import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

const index = () => {
  return (
    <>
      <StatusBar backgroundColor="#353B48" style="light" />
      <LinearGradient
        colors={["#353B48", "#273C75"]}
        className="absolute left-0 right-0 top-0 h-full"
      />
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <SafeAreaView className="relative h-full">
          <View className="h-52 justify-center items-center">
            <Text className="text-white font-kregular text-5xl">KAIN</Text>
            <Text className="text-white font-kregular text-xl">Ghir swel</Text>
          </View>
          <View className="px-10">
            <Text className="text-white font-ksemibold text-2xl">
              En tant que client
            </Text>
            <View className="flex-row  items-center mt-4 ">
              <Image
                source={require("../assets/icons/star.png")}
                className="mr-3 w-7 h-7 "
                resizeMode="contain"
              />
              <View className="pr-3 w-full  max-w-[90%]">
                <Text className="text-white font-kregular text-[16px]">
                  Demandez n’importe quel produit avec simple message Audio
                </Text>
              </View>
            </View>
            <View className="flex-row  items-center mt-4 ">
              <Image
                source={require("../assets/icons/star.png")}
                className="mr-3 w-7 h-7 "
                resizeMode="contain"
              />
              <View className="pr-3 w-full  max-w-[90%]">
                <Text className="text-white font-kregular text-[16px]">
                  Nous trouverons les meilleures offres à proximité
                </Text>
              </View>
            </View>
            <View className="flex-row items-center mt-4 ">
              <Image
                source={require("../assets/icons/star.png")}
                className="mr-3 w-7 h-7 "
                resizeMode="contain"
              />
              <View className="pr-3 w-full max-w-[90%]">
                <Text className="text-white font-kregular text-[16px]">
                  Réserver, récupérer ou faites vous livrer.
                </Text>
              </View>
            </View>
          </View>
          <View className="items-center my-10">
            <Image source={require("../assets/icons/Frame27.png")} />
          </View>
          <View className="px-10">
            <Text className="text-white font-ksemibold text-2xl">
              En tant que Vendeur
            </Text>
            <View className="flex-row  items-center mt-4 ">
              <Image
                source={require("../assets/icons/star.png")}
                className="mr-3 w-7 h-7 "
                resizeMode="contain"
              />
              <View className="pr-3 w-full  max-w-[90%]">
                <Text className="text-white font-kregular text-[16px]">
                  Augmenter votre visibilité
                </Text>
              </View>
            </View>
            <View className="flex-row items-center mt-4 ">
              <Image
                source={require("../assets/icons/star.png")}
                className="mr-3 w-7 h-7 "
                resizeMode="contain"
              />
              <View className="pr-3 w-full  max-w-[90%]">
                <Text className="text-white font-kregular text-[16px]">
                  Gagner plus de client
                </Text>
              </View>
            </View>
          </View>
          <View className="absolute bottom-14 right-0 w-full items-center justify-center">
            <Link href="/profile-selector">
              <View className=" bg-white w-[70vw] items-center justify-center rounded-full py-3">
                <Text className="text-[#273C75] font-kregular text-lg">
                  Continuer
                </Text>
              </View>
            </Link>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default index;
