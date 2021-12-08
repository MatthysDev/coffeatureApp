import React from "react";
import { View } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

export const Product = (imgUrl) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          alert("you clicked me");
        }}
      >
        <View>
          <Image
            source={require({ imgUrl })}
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
    </>
  );
};
