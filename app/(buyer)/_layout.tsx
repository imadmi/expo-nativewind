import { SplashScreen, Stack } from "expo-router";
import { SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

export default function RootLayout() {
  return (
    <View className="h-full flex-1">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
        className="flex-1"
      >
        <Stack>
          <Stack.Screen name="signin" options={{ headerShown: false }} />
          {/* <Stack.Screen name="profile-selector" options={{ headerShown: false }} /> */}
        </Stack>
      </ScrollView>
    </View>
  );
}
