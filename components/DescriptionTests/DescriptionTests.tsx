import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { gradients } from "../../constants/Gradients";

interface Props {
  title: string;
  description: string;
  setFlag: (e: boolean) => void;
}

const DescriptionTests = (props: Props) => {
  const { setFlag, description, title } = props;

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "90%", marginTop: "10%" }}>
        <View style={styles.contenedor_test}>
          <LinearGradient
            colors={gradients.inputs}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={styles.contenedor_test}
          >
            <Text style={styles.name_test}>{title}</Text>
            <Text style={styles.text_test}>{description}</Text>
          </LinearGradient>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => {
            setFlag(true);
          }}
        >
          <LinearGradient
            colors={["#0995a6", "#197189", "#112044"]}
            style={{
              borderRadius: 15,
              width: "90%",
              height: 45,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.text_button}>COMENZAR TEST</Text>
          </LinearGradient>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default DescriptionTests;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#130C34",
  },
  contenedor_test: {
    width: "100%",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 15,
  },
  button: {
    marginTop: 35,
    width: "90%",
    alignItems: "center",
    borderRadius: 15,
    marginLeft: "5%",
  },
  text_button: {
    fontSize: 18,
    color: "#DED3F4",
    fontFamily: "Poppins_ExtraBold",
  },
  name_test: {
    fontWeight: "700",
    fontSize: 20,
    color: "#DED3F4",
    padding: "4%",
    fontFamily: "Poppins_ExtraBold",
  },
  text_test: {
    width: "85%",
    alignItems: "center",
    paddingBottom: "5%",
    color: "#DED3F4",
    fontFamily: "Poppins_ExtraBold",
    textAlign: "center",
    fontSize: 14,
  },
});
