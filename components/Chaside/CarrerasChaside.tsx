import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { gradients } from "../../constants/Gradients";

const CarrerasChaside = () => {
  useEffect(() => {});

  return (
    <></>
    // <ScrollView style={{ width: "100%", backgroundColor: "#130C34" }}>
    //   <View style={styles.container}>
    //     <LinearGradient
    //       colors={gradients.inputs}
    //       start={{ x: 1, y: 1 }}
    //       end={{ x: 0, y: 0 }}
    //       style={{
    //         marginTop: "8%",
    //         borderRadius: 15,
    //         width: "90%",
    //         alignItems: "center",
    //       }}
    //     >
    //       <View style={styles.container_test}>
    //         <Text style={styles.title}>INTERESES</Text>
    //         <Text style={styles.thankYou}>RESPUESTA DEL GRUPO</Text>
    //         <Text style={styles.thankYou}>({msjInteres})</Text>
    //         <Text style={styles.thankYou2}>{textCarreraInteres}</Text>
    //         <Pressable
    //           style={styles.button}
    //           onPress={() =>
    //             carrerasPosibles(areaInteres, areaHabilidad, "interes")
    //           }
    //         >
    //           <LinearGradient
    //             colors={["#0995a6", "#197189", "#112044"]}
    //             style={{
    //               borderRadius: 15,
    //               width: "100%",
    //               height: 45,
    //               alignItems: "center",
    //               justifyContent: "center",
    //               margin: "4%",
    //             }}
    //           >
    //             <Text style={styles.text_button}>CARRERAS POSIBLES</Text>
    //           </LinearGradient>
    //         </Pressable>
    //       </View>
    //     </LinearGradient>
    //     <LinearGradient
    //       colors={gradients.inputs}
    //       start={{ x: 1, y: 1 }}
    //       end={{ x: 0, y: 0 }}
    //       style={{
    //         marginTop: "8%",
    //         borderRadius: 15,
    //         width: "90%",
    //         alignItems: "center",
    //       }}
    //     >
    //       <View style={styles.container_test}>
    //         <Text style={styles.title}>HABILIDADES</Text>
    //         <Text style={styles.thankYou}>RESPUESTA DEL GRUPO</Text>
    //         <Text style={styles.thankYou}>({msjHabilidad})</Text>
    //         <Text style={styles.thankYou2}>{textCarreraHabilidad}</Text>
    //         <Pressable
    //           style={styles.button}
    //           onPress={() =>
    //             carrerasPosibles(areaInteres, areaHabilidad, "habilidad")
    //           }
    //         >
    //           <LinearGradient
    //             colors={["#0995a6", "#197189", "#112044"]}
    //             style={{
    //               borderRadius: 15,
    //               width: "100%",
    //               height: 45,
    //               alignItems: "center",
    //               justifyContent: "center",
    //               margin: "4%",
    //             }}
    //           >
    //             <Text style={styles.text_button}>CARRERAS POSIBLES</Text>
    //           </LinearGradient>
    //         </Pressable>
    //       </View>
    //     </LinearGradient>
    //   </View>
    // </ScrollView>
  );
};

export default CarrerasChaside;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#130C34",
  },
  container_test: {
    marginTop: "4%",
    borderRadius: 15,
    width: "90%",
    alignItems: "center",
    textAlign: "center",
  },
  thankYou: {
    color: "#06D6DD",
    fontWeight: "600",
    fontSize: 15,
    width: "85%",
    alignItems: "center",
    fontFamily: "Poppins_Regular",
    textAlign: "center",
  },
  thankYou2: {
    color: "#DED3F4",
    fontWeight: "600",
    fontSize: 14,
    width: "85%",
    alignItems: "center",
    fontFamily: "Poppins_Regular",
    margin: "8%",
    textAlign: "center",
  },
  title: {
    color: "#DED3F4",
    fontWeight: "600",
    fontSize: 20,
    width: "85%",
    alignItems: "center",
    marginTop: "3%",
    marginBottom: "2%",
    fontFamily: "Poppins_ExtraBold",
    textAlign: "center",
  },
  button: {
    width: "80%",
    alignItems: "center",
    borderRadius: 15,
    margin: "1%",
    marginBottom: "5%",
  },
  text_button: {
    fontSize: 18,
    color: "#DED3F4",
    fontFamily: "Poppins_ExtraBold",
  },
});
