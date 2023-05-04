import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { gradients, greenChaside } from "../constants/Gradients";
import { auth } from "../firebase-config";
import { useAppDispatch } from "../navigation/redux/hooks";
import { setUser } from "../navigation/redux/slices/user";

export default function CardResult({
  image,
  title,
  description,
  route,
  navigation,
  selected,
}) {
  return (
    <CardContainer route={route} navigation={navigation} selected={selected}>
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

const CardContainer = ({ route, children, navigation, selected }) => {
  const dispatch = useAppDispatch();
  return route && navigation ? (
    <Pressable
      style={
        selected
          ? styles.card_result_container_selected
          : styles.card_result_container
      }
      onPress={() => {
        auth.signOut();
        dispatch(setUser(null));
      }}
      // onPress={() => navigation.navigate(route)}
    >
      {children}
    </Pressable>
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
    backgroundColor: "#103456",
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
