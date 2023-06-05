import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Alert, Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { gradients, greenChaside } from "../constants/Gradients";
import { useAppSelector } from "../navigation/redux/hooks";
import { User } from "../navigation/redux/store/store";

export default function CardResult({
  image,
  title,
  description,
  route,
  navigation,
  selected,
  disabled
}) {
  
  return (
    <CardContainer route={route} navigation={navigation} selected={selected} disabled={disabled}>
      {image && <Image style={styles.img_card} source={image} />}
      {selected ? (
        <View
          style={
            selected ? styles.container_chart_selected : styles.container_chart
          }
        >
          <View style={styles.img_space} />
          <View style={styles.text_container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      ) : (
        <LinearGradient
          colors={selected ? greenChaside : gradients.inputs}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={{ borderRadius: 15 }}
        >
          <View
            style={
              selected
                ? styles.container_chart_selected
                : styles.container_chart
            }
          >
            <View style={styles.img_space} />
            <View style={styles.text_container}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
        </LinearGradient>
      )}
    </CardContainer>
  );
}

const CardContainer = ({ route, children, navigation, selected, disabled }) => {
  const user = useAppSelector(User);
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('')

  const verificationTest = () => {
    if(disabled){
      if(!user.user?.areaInteres && !user.user?.areaUno){
        setText('Chaside y MMYMG')
        setModalVisible(true)
      }
      else if(user.user?.areaInteres && !user.user?.areaUno){
        setText('MMYMG')
        setModalVisible(true)
      } else if(!user.user?.areaInteres){
        setText('Chaside')
        setModalVisible(true)
      }
    } else {
      navigation.navigate(route)
    }
  };




  return route && navigation ? (
    <>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Debes terminar todos los Test {text}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    <Pressable
    style={
        selected
          ? styles.card_result_container_selected
          : styles.card_result_container
      }
      onPress={() => verificationTest()}
      >
      
      {children}
    </Pressable>
    </>
  ) : (
    <View
      style={
        selected
          ? styles.card_result_container_selected
          : styles.card_result_container
      }
    >
      {children}
    </View>
  );
};

CardResult.defaultProps = {
  route: null,
  navigation: null,
  containerStyles: null,
  selected: false,
  image: null,
};

const styles = StyleSheet.create({
  card_result_container: {
    alignItems: "center",
    justifyContent: "center",
  },
  card_result_container_selected: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#025558",
  },
  container_chart: {
    padding: 15,
    borderRadius: 15,
    width: 313,
    height: 115,
    borderColor: "#B39AE7",
    borderWidth: 0.6,
    flexDirection: "row",
  },
  container_chart_selected: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#102548",
    width: 313,
    height: 115,
    borderColor: "#0b7189",
    borderWidth: 0.9,

    opacity: 1.2,
    flexDirection: "row",
  },
  img_space: {
    height: 134,
    width: 107,
    marginLeft: -40,
    marginTop: -30,
  },
  img_card: {
    position: "absolute",
    zIndex: 1,
    height: 130,
    width: 107,
    left: 8,
    top: -10,
  },
  text_container: {
    width: "80%",
    paddingRight: 5,
  },
  title: {
    fontFamily: "Poppins_SemiBold",
    color: "#DED3F4",
    fontSize: 20,
    fontWeight: "bold",
  },

  description: {
    color: "#DED3F4",
    textAlign: "left",
    fontSize: 15,
    lineHeight: 17.5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
