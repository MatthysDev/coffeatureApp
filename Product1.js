import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Product } from "./components/product";

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
            color: "white",
          }}
        >
          {" "}
          Co'Feature{" "}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#F78965",
          height: "65%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: "25%",
            width: "100%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "30%",
              backgroundColor: "#EEEEEE",
              flex: 1,
              margin: "2%",
              borderWidth: 3,
              borderRadius: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.36,
              shadowRadius: 6.68,

              elevation: 11,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                alert("you clicked me");
              }}
            >
              <View style={styles.buttonStyle}>
                <Image
                  source={require("./assets/cafe.png")}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 120,
                    height: 120,
                    resizeMode: "cover",
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F78965",
    alignItems: "center",
  },
  productView: {
    width: "30%",
    backgroundColor: "#EEEEEE",
    flex: 1,
    margin: "2%",
    borderWidth: 3,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  buttonStyle: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
