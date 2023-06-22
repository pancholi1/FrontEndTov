import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { gradients } from "../../../constants/Gradients";
import { useAppSelector } from "../../../navigation/redux/hooks";
import { User } from "../../../navigation/redux/store/store";
import { useNavigation } from "@react-navigation/native";
import { ModalHome } from "../ModalHome";
import { PropsCard } from "./ContainerCard";

export default function CardWithOutTest({
  image,
  title,
  description,
  route,
}: PropsCard) {
  const navigation = useNavigation();
  const { user } = useAppSelector(User);
  const [modalVisibleWith, setModalVisibleWith] = useState(false);
  const [nextRoute, setNextRoute] = useState<
    "TestMMYMG" | "Test5Grandes" | "TestChaside"
  >("Test5Grandes");

  const verificationTest = () => {
    if (route === "TestMMYMG") {
      if (user?.areaInteres) {
        navigation.navigate(route);
      } else {
        setNextRoute("TestChaside");
        setModalVisibleWith(true);
      }
      return;
    }

    if (route === "Test5Grandes") {
      if (user?.areaUno && user?.areaInteres) {
        navigation.navigate(route);
      } else {
        if (!user?.areaInteres) {
          setNextRoute("TestChaside");
        } else {
          setNextRoute("TestMMYMG");
        }
        setModalVisibleWith(true);
      }
    }
  };

  return (
    <Pressable
      style={styles.card_result_container}
      onPress={() => verificationTest()}
    >
      <ModalHome
        nextRoute={nextRoute}
        modalVisible={modalVisibleWith}
        setModalVisible={setModalVisibleWith}
      ></ModalHome>
      <Image style={styles.img_card} source={image} />
      <LinearGradient
        colors={gradients.inputs}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={{ borderRadius: 15 }}
      >
        <View style={styles.container_chart}>
          <View style={styles.img_space} />
          <View style={styles.text_container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card_result_container: {
    alignItems: "center",
    justifyContent: "center",
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
});
