import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { gradients } from "../constants/Gradients";

export default function CardResult({ image, title, description }) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={gradients.inputs} style={{ borderRadius: 15 }}>
        <View style={styles.container_chart}>
          <View style={styles.container_image}>
            {image && <Image style={styles.img_card} source={image} />}
          </View>
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
    opacity: 2,
    flexDirection: "row",

  },
  img_card: {
    height: 134,
    width: 107,
    marginLeft: -40,
    marginTop: -30,
    

  },
  container_image: {
 
  },
  title: {
    color: "#DED3F4",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 20,
    marginBottom: 3,
  },
  description: {
    color: "#DED3F4",
    width: "57%",
    textAlign: "left",
    fontSize: 14,
    fontWeight: "bold",
  },
});
