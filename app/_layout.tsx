// rnfes
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
const RootLayout = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Slot />
      {/* Slot is a placeholder for the current screen, renders the child component of the current route */}
    </SafeAreaView>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
