import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Product } from "./components/product";
import { Linking } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#002D45",
          height: "10%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Rockwell",
            fontSize: 35,
            padding: 25,
            margin: 0,
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
          <View style={styles.productView}>
            <TouchableOpacity onPress={() => navigation.navigate("Produit")}>
              <View style={styles.buttonStyle}>
                <Image
                  source={require("./assets/cafe.png")}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 110,
                    height: 110,
                    resizeMode: "cover",
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.productView}>
            <TouchableOpacity onPress={() => navigation.navigate("Produit")}>
              <View style={styles.buttonStyle}>
                <Image
                  source={require("./assets/milkycoffee.png")}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 110,
                    height: 110,
                    resizeMode: "cover",
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.productView}>
            <TouchableOpacity onPress={() => navigation.navigate("Produit")}>
              <View style={styles.buttonStyle}>
                <Image
                  source={require("./assets/coffee.png")}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 110,
                    height: 110,
                    resizeMode: "cover",
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: "25%",
            width: "100%",
            flexDirection: "row",
          }}
        >
          <View style={styles.productView}>
            <TouchableOpacity onPress={() => navigation.navigate("Produit")}>
              <View style={styles.buttonStyle}>
                <Image
                  source={require("./assets/astro.png")}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 110,
                    height: 110,

                    resizeMode: "cover",
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.productView}>
            <TouchableOpacity onPress={() => navigation.navigate("Produit")}>
              <View style={styles.buttonStyle}>
                <Image
                  source={require("./assets/death.png")}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 110,
                    height: 110,
                    resizeMode: "cover",
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.productView}>
            <TouchableOpacity onPress={() => navigation.navigate("Produit")}>
              <View style={styles.buttonStyle}>
                <Image
                  source={require("./assets/polar.png")}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 110,
                    height: 110,
                    resizeMode: "cover",
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: "25%",
            width: "100%",
            flexDirection: "row",
          }}
        >
          <View style={styles.productView}>
            <TouchableOpacity onPress={() => navigation.navigate("Produit")}>
              <View style={styles.buttonStyle}>
                <Image
                  source={require("./assets/hibou.png")}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 110,
                    height: 110,
                    resizeMode: "cover",
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.productView}>
            <TouchableOpacity onPress={() => navigation.navigate("Produit")}>
              <View style={styles.buttonStyle}>
                <Image
                  source={require("./assets/monkey.png")}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 110,
                    height: 110,

                    resizeMode: "cover",
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.productView}>
            <TouchableOpacity onPress={() => navigation.navigate("Produit")}>
              <View style={styles.buttonStyle}>
                <Image
                  source={require("./assets/shiba.png")}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 110,
                    height: 110,
                    resizeMode: "cover",
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#002D45",
          height: "22%",
          width: "95%",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
          borderWidth: 3,
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
          Bag{" "}
        </Text>
      </View>

      <StatusBar style="" />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#002D45",
          height: "10%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Rockwell",
            fontSize: 35,
            padding: 25,
            margin: 0,
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
          Fiche produit
        </Text>
        <View
          style={{
            height: 350,
            width: 350,
            backgroundColor: "#FFFFFF",
            borderRadius: 20,
            borderWidth: 3,
          }}
        >
          <Image
            source={require("./assets/shiba.png")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 350,
              height: 350,
              resizeMode: "cover",
            }}
          />
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Co'Feature">
        <Stack.Screen name="Co'Feature" component={HomeScreen} />
        <Stack.Screen name="Produit" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F78965",
    alignItems: "center",
  },
  productView: {
    height: 110,
    backgroundColor: "#FFFFFF",
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
