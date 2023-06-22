import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PropsCard } from "./ContainerCard";

export default function CardWithTest({
  image,
  title,
  description,
  route,
}: PropsCard) {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(route)}
      style={styles.card_result_container_selected}
    >
      <Image style={styles.img_card} source={image} />
      <View style={styles.container_chart_selected}>
        <View style={styles.img_space} />
        <View style={styles.text_container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card_result_container_selected: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#025558",
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
});
