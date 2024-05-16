import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
const { width: WIDTH, height: HIGHT } = Dimensions.get("window");
import { useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// console.log(WIDTH, HIGHT);
var x = 0;
console.log(x, " Refreshing ...");

const Signin = () => {
  const snapPoints = useMemo(() => ["55%", "10%", "93%"], []);

  return (
    <GestureHandlerRootView>
      <View className="relative">
        <StatusBar backgroundColor="#353B48" style="light" />
        <LinearGradient
          colors={["#353B48", "#273C75"]}
          className="absolute left-0 right-0 top-0 h-full"
        />
        <View className="absolute left-0 right-0 top-0 h-full">
          <Image
            source={require("../../assets/icons/map.png")}
            className="w-full"
          />
          <Image
            source={require("../../assets/icons/map.png")}
            className="w-full scale-y-[-1]"
          />
        </View>
        <ScrollView
          contentContainerStyle={{
            height: "100%",
          }}
        >
          <SafeAreaView className="relative h-full">
            <View className="h-52 justify-center items-center">
              <Text className="text-white font-kregular text-5xl">KAIN</Text>
              <Text className="text-white font-kregular text-base absolute top-52">
                Recherche de disponibilité en cours
              </Text>
            </View>

            <BottomSheet snapPoints={snapPoints} >
              <View className="bg-white items-center">
                <View>
                  <Text className="text-[#273C75] font-kregular text-base mt-10">
                    Vous pourrez demander à
                  </Text>
                </View>

                <View>
                  <Text className="text-[#273C75] font-ksemibold text-6xl mt-8">
                    24,718
                  </Text>
                </View>

                <View>
                  <Text className="text-[#273C75] font-kregular text-xl mt-0">
                    Magazins
                  </Text>
                </View>

                <View>
                  <Text className="text-black font-kregular text-base mt-6 text-center">
                    Entrez votre numéro de téléphone pour continuer
                  </Text>
                </View>

                <View></View>

                <View className="w-full items-center justify-center mt-20">
                  <Link href="/profile-selector">
                    <View className=" bg-[#273C75] w-[70vw] items-center justify-center rounded-full py-3">
                      <Text className="text-white font-kregular text-lg">
                        Continuer
                      </Text>
                    </View>
                  </Link>
                </View>
              </View>
            </BottomSheet>
          </SafeAreaView>
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: "600",
    padding: 20,
  },
});
