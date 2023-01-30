import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import PlanesCard from "../components/PlanesCard";

const PlanesScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <PlanesCard
          headerText={"Contra todo riesgo"}
          pricePerMonth={"$9.488"}
          totalPrice={"$1.596.000"}
        />
        <PlanesCard
          headerText={"Seguro de terceros"}
          pricePerMonth={"$15.000"}
          totalPrice={"$1.200.500"}
        />
      </View>
    </ScrollView>
  );
};

export default PlanesScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "gray",
  },
});
