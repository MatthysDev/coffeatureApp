import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Product } from "../components/product";

export const DetailProduit = () => {
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
            padding: 35,
            margin: 30,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Co'Feature
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#F78965",
          height: "85%",
          width: "100%",

          alignItems: "center",
        }}
      >
        <View style={{ margin: 25 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            Nom du produit
          </Text>
        </View>
        <View
          style={{
            height: "50%",
            width: "90%",
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
            <View style={styles.buttonStyle}>
              <Image
                source={require("../../assets/img/shiba.png")}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: "90%",
                  height: "90%",
                  resizeMode: "cover",
                }}
              />
            </View>
          </View>
        </View>
      </View>
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
