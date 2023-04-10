import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { RootStackScreenProps,   } from "../types";

const TermsAndConditions = ({ navigation }: RootStackScreenProps<"Terms">) => {
  return (
    <View style={styles.login_containerhelp}>
      <Text style={styles.login_parrafohelp}>
        By continuing you agree to the
      </Text>
      <Pressable
          onPress={() => navigation.navigate("Terms")}
        >
      <Text style={styles.login_parrafohelp_finish}>terms and Conditions</Text>

        </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  login_containerhelp: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  login_parrafohelp: {
    color: "#5f52ab",
    marginTop: 45,
    margin: 5,
    fontFamily: "Poppins_Regular",
    fontSize: 12,
    lineHeight: 18,
  },
  login_parrafohelp_finish: {
    color: "#06D6DD",
    marginTop: 45,
    fontFamily: "Poppins_Regular",
    fontSize: 12,
    lineHeight: 18,
  },
});

export default TermsAndConditions;
