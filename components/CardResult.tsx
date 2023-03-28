import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { gradients } from "../constants/Gradients";

export default function CardResult({ image, title, description }) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={gradients.inputs}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
      style={{ borderRadius: 15 }}>
        <View style={styles.container_chart}>
          {image && <Image style={styles.img_card} source={image} />}
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#130C34",
  },
  container_chart: {
    padding: 15,
    borderRadius: 15,
    width: 313,
    height: 101,
    borderColor: "#B39AE7",
    borderWidth: 2,
    flexDirection: "row",
  },
  img_card: {
    height: 134,
    width: 107,
    marginLeft: -40,
    marginTop: -30,
  },

  title: {
    fontFamily: "Poppins_SemiBold",
    color: "#DED3F4",
    fontSize: 20,
    fontWeight: "bold",

  },

  description: {
    color: "#DED3F4",
    width: "57%",
    textAlign: "left",
    fontSize: 15,
    lineHeight: 17.5,

  },
});
