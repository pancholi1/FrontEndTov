import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

interface Props {
  terminosNav: () => void;
}
const TermsAndConditions = (props: Props) => {
  const {terminosNav} = props
  return (
    <View style={styles.login_containerhelp}>
      <Text style={styles.login_parrafohelp}>
        By continuing you agree to the
      <Pressable
          onPress={() => terminosNav()}
        >
      <Text style={styles.login_parrafohelp_finish}> terms and Conditions</Text>

        </Pressable>
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  login_containerhelp: {
    flexDirection: "row",
    justifyContent: "center",
  },
  login_parrafohelp: {
    color: "#5f52ab",
    marginTop: '3%',
    fontFamily: "Poppins_Regular",
    fontSize: 12,
    lineHeight: 18,
  },
  login_parrafohelp_finish: {
    color: "#06D6DD",
    marginTop:'3%',
    fontFamily: "Poppins_Regular",
    fontSize: 12,
    lineHeight: 18,
  },
});

export default TermsAndConditions;
