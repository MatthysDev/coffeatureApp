import { useState } from "react";

export const useModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return { modalVisible, setModalVisible, toggleModal };
};
