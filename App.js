import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#002D45",
          height: "15%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Rockwell",
            fontSize: 35,
            padding: 35,
            margin: 30,
          }}
        >
          {" "}
          Co'Feature{" "}
        </Text>
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F78965",
    alignItems: "center",
  },
});
