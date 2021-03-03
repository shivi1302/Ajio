import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./src/Navigations/Routes";
import 'react-native-gesture-handler';

export default function App() {
  return (
    <Routes/>
  );
}

