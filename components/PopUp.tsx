import React from "react";
import {
  Alert,
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from "react-native";

const PopUp = ({ modalVisible, setModalVisible, mesagge }) => {
  return (
    <View style={styles.popUpContainer}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
        style={styles.modalContainer}
      >
        <View style={styles.popUpContent}>
          <View>
            <Text style={styles.popUpText}>{mesagge}</Text>

            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.popUpButton}>Aceptar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PopUp;

const styles = StyleSheet.create({
  popUpContainer: {},
  modalContainer: {},
  popUpContent: {},
  popUpText: {},
  popUpButton: {},
});
