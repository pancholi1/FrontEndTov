import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppSelector } from "../../navigation/redux/hooks";
import { User } from "../../navigation/redux/store/store";

const ResultTests = () => {
  const { user } = useAppSelector(User);

  return (
    <ScrollView style={{ width: "100%", backgroundColor: "#130C34" }}>
      <View style={styles.container}>
        <View style={styles.container_test}>
          <Text style={styles.title}>Resultado final</Text>

          <Text style={styles.fontText}>{user?.finalScore}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ResultTests;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#130C34",
  },
  container_test: {
    borderRadius: 15,
    backgroundColor: "#102548",
    borderColor: "#0b7189",
    borderWidth: 0.9,
    opacity: 1.2,
    width: "85%",
    padding: 8,
    margin: 12,
    textAlign: "center",
    alignItems: "center",
  },
  title: {
    color: "#DED3F4",
    fontWeight: "700",
    fontSize: 20,
    width: "85%",
    alignItems: "center",
    marginTop: "3%",
    fontFamily: "Poppins_ExtraBold",
    textAlign: "center",
  },
  fontText: {
    color: "#DED3F4",
    fontWeight: "700",
    fontSize: 14,
    width: "85%",
    alignItems: "center",
    fontFamily: "Poppins_Regular",
    margin: "4%",
    textAlign: "center",
  },
});
