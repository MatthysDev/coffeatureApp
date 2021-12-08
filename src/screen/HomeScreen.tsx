import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import "react-native-gesture-handler";

export const HomeScreen = () => {
  const navigation = useNavigation();
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
                  source={require("../../assets/img/cafe.png")}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "80%",
                    height: "80%",
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
                  source={require("../../assets/img/milkycoffee.png")}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "80%",
                    height: "80%",
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
                  source={require("../../assets/img/coffee.png")}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "80%",
                    height: "80%",
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
                  source={require("../../assets/img/astro.png")}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "80%",
                    height: "80%",

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
                  source={require("../../assets/img/death.png")}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "80%",
                    height: "80%",
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
                  source={require("../../assets/img/polar.png")}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "80%",
                    height: "80%",
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
                  source={require("../../assets/img/hibou.png")}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "80%",
                    height: "80%",
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
                  source={require("../../assets/img/monkey.png")}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "80%",
                    height: "80%",

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
                  source={require("../../assets/img/shiba.png")}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "80%",
                    height: "80%",
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
            fontSize: 35,
            padding: 35,
            margin: 30,
            color: "white",
          }}
        >
          Bag
        </Text>
      </View>

      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F78965",
    alignItems: "center",
  },
  productView: {
    height: "95%",
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
