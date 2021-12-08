import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import "react-native-gesture-handler";
import { useModal } from "../hooks/useModal";
import { Modal } from "react-native";
export const HomeScreen = () => {
  const navigation = useNavigation();
  const { modalVisible, toggleModal } = useModal();
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "#002D45",
            height: "15%",
            width: "100%",
            alignItems: "center",
            marginTop: 0,
            paddingTop: 0,
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
            {" "}
            Co'Feature{" "}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#F78965",
            height: "60%",
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
              <TouchableOpacity onPress={() => toggleModal()}>
                <View style={styles.buttonStyle}>
                  <Image
                    source={require("../../assets/img/cafe.png")}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      width: "95%",
                      height: "95%",
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
                      width: "95%",
                      height: "95%",
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
                      width: "95%",
                      height: "95%",
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
                      width: "95%",
                      height: "95%",

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
                      width: "95%",
                      height: "95%",
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
                      width: "95%",
                      height: "95%",
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
                      width: "95%",
                      height: "95%",
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
                      width: "95%",
                      height: "95%",

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
                      width: "95%",
                      height: "95%",
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
            height: "25%",
            width: "100%",
            flex: 1,

            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#002D45",
              height: "90%",
              width: "90%",
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
        </View>

        <StatusBar />
      </View>
      <Modal
        style={{ alignItems: "center", justifyContent: "center" }}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modal}>
          <Text>Hello World!</Text>
          <Pressable style={styles.modalButton} onPress={() => toggleModal()}>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Hide Modal
            </Text>
          </Pressable>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    top: "25%",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    height: "48%",
    marginHorizontal: "2%",
    width: "96%",
    borderWidth: 5,
    borderRadius: 30,
  },
  modalButton: {
    backgroundColor: "#002D45",
    borderRadius: 20,
    borderWidth: 3,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#F78965",
    alignItems: "center",
  },
  productView: {
    height: "90%",
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
function setModalVisible(arg0: boolean): void {
  throw new Error("Function not implemented.");
}
