import React from "react";
import { Text, Pressable, View } from "react-native";
import { useModal } from "../hooks/useModal";
import { StyleSheet } from "react-native";

export const Modal = (props: Props) => {
  const { modalVisible, toggleModal } = useModal();

  return (
    <Modal
      style={{ alignItems: "center", justifyContent: "center" }}
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleModal}
    >
      <View style={styles.modal}>
        <Text>Hello World!</Text>
        <Pressable style={styles.modalButton} onPress={toggleModal}>
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
});
