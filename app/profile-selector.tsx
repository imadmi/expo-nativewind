import React from "react";
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
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

const Profile = () => {
  return (
    <>
      <StatusBar style="light" />
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

          <View className="border-white border-2 rounded-2xl mx-8 items-center py-4">
            <Link href="/signin">
              <View className="items-center ">
                <Image
                  source={require("../assets/icons/lets-icons_bag.png")}
                  className="mb-2 w-28"
                  resizeMode="contain"
                />
                <Text className="text-center text-white font-ksemibold text-3xl">
                  Acheter
                </Text>
                <Text className="text-center text-white font-kregular text-lg">
                  des articles
                </Text>
              </View>
            </Link>
          </View>
          <View className="mt-8 border-white border-2 rounded-2xl mx-8 items-center py-4">
            <Link href="/profile-selector">
              <View className="items-center ">
                <Image
                  source={require("../assets/icons/mage_shop.png")}
                  className="mb-2 w-28"
                  resizeMode="contain"
                />
                <Text className="text-center text-white font-ksemibold text-3xl">
                  Vendre
                </Text>
                <Text className="text-center text-white font-kregular text-lg">
                  des articles
                </Text>
              </View>
            </Link>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({});
