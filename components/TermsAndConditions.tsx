import React from "react";
import { Text, View, StyleSheet } from "react-native";

const TermsAndConditions = () => {
  return (
    <View style={styles.login_containerhelp}>
      <Text style={styles.login_parrafohelp}>
        By continuing you agree to the
      </Text>
      <Text style={styles.login_parrafohelp_finish}>terms and Conditions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  login_containerhelp: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  login_parrafohelp: {
    color: "#5f52ab",
    marginTop: 8,
    margin: 5,
  },
  login_parrafohelp_finish: {
    color: "#06D6DD",
    marginTop: 8,
  },
});

export default TermsAndConditions;
