import { useEffect } from "react";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),

    "Kodchasan-Bold": require("../assets/fonts/Kodchasan-Bold.ttf"),
    "Kodchasan-ExtraLight": require("../assets/fonts/Kodchasan-ExtraLight.ttf"),
    "Kodchasan-Light": require("../assets/fonts/Kodchasan-Light.ttf"),
    "Kodchasan-Medium": require("../assets/fonts/Kodchasan-Medium.ttf"),
    "Kodchasan-Regular": require("../assets/fonts/Kodchasan-Regular.ttf"),
    "Kodchasan-SemiBold": require("../assets/fonts/Kodchasan-SemiBold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <View className="h-full flex-1">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
        className="flex-1"
      >
        <Stack>
          <Stack.Screen name="(buyer)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="profile-selector"
            options={{ headerShown: false }}
          />
        </Stack>
      </ScrollView>
    </View>
  );
}
