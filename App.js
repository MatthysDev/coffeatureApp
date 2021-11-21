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
      <View
        style={{
          backgroundColor: "#F78965",
          height: "65%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            height: "15%",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 25,
            fontFamily: "Futura",
            padding: 10,
          }}
        >
          Nos Mixtures
        </Text>
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
            }}
          >
            <Text>Prod1</Text>
          </View>
          <View
            style={{
              width: "30%",

              backgroundColor: "#EEEEEE",
              flex: 1,
              margin: "2%",
            }}
          >
            <Text>Prod1</Text>
          </View>
          <View
            style={{
              width: "30%",

              backgroundColor: "#EEEEEE",
              flex: 1,
              margin: "2%",
            }}
          >
            <Text>Prod1</Text>
          </View>
        </View>
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
            }}
          >
            <Text>Prod1</Text>
          </View>
          <View
            style={{
              width: "30%",

              backgroundColor: "#EEEEEE",
              flex: 1,
              margin: "2%",
            }}
          >
            <Text>Prod1</Text>
          </View>
          <View
            style={{
              width: "30%",

              backgroundColor: "#EEEEEE",
              flex: 1,
              margin: "2%",
            }}
          >
            <Text>Prod1</Text>
          </View>
        </View>
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
            }}
          >
            <Text>Prod1</Text>
          </View>
          <View
            style={{
              width: "30%",

              backgroundColor: "#EEEEEE",
              flex: 1,
              margin: "2%",
            }}
          >
            <Text>Prod1</Text>
          </View>
          <View
            style={{
              width: "30%",

              backgroundColor: "#EEEEEE",
              flex: 1,
              margin: "2%",
            }}
          >
            <Text>Prod1</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#002D45",
          height: "20%",
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
          Bag{" "}
        </Text>
      </View>

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
