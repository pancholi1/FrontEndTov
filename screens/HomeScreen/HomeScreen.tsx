import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import { RootStackScreenProps } from "../../types";
import Spacer from "../../components/Spacer";
import { useAppSelector } from "../../navigation/redux/hooks";
import { User } from "../../navigation/redux/store/store";
import ContainerCard from "../../components/HomeScreen/CardTest/ContainerCard";

const HomeScreen = ({ navigation }: RootStackScreenProps<"HomeScreen">) => {
  const { user } = useAppSelector(User);
  const [contProgress, setcontProgress] = useState(0);

  console.log(user);
  useEffect(() => {
    setcontProgress(0);
    let contador = 0;
    if (user?.info) {
      contador = contador + 1;
    }
    if (user?.areaDos) {
      contador = contador + 1;
    }
    if (user?.areaHabilidad) {
      contador = contador + 1;
    }
    setcontProgress(contador / 3);
  }, [user]);

  return (
    <ScrollView style={{ width: "100%", backgroundColor: "#130C34" }}>
      <View style={styles.container}>
        <View style={styles.header_container}>
          <Text style={styles.title_hello}>Hola</Text>

          <Text style={styles.name}>{user?.name + " " + user?.apellido}</Text>

          <LinearGradient
            colors={["#524c77", "#3d3758", "#1e173e"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container_progreso}
          >
            <Text style={styles.title_progreso}>Progreso</Text>
            <Text style={styles.text_progreso}>
              Realiza el 100% de los test para obtener el resultado final
            </Text>
            <Text style={styles.title_progreso}>
              {Math.floor(contProgress * 100)}%
            </Text>
            <ProgressBar progress={contProgress} color={"#06D6DD"} />
          </LinearGradient>

          <Text style={styles.text_test}>¡COMENCEMOS!</Text>
        </View>
        <Spacer height={10} />

        <ContainerCard
          image={require("../../assets/images/HomeScreen/testPersonalidad.png")}
          title={"Test CHASIDE"}
          description={"Toma menos de 12 minutos. Responde honestamente."}
          route={"TestChaside"}
          selected={user?.areaHabilidad ? true : false}
        ></ContainerCard>
        <Spacer height={20} />

        <ContainerCard
          image={require("../../assets/images/HomeScreen/testPsicotécnico.png")}
          title={"Test MM & MG"}
          description={
            "Comprueba cuáles son las áreas ocupacionales que se ajustan a tu perfil."
          }
          route={"TestMMYMG"}
          selected={user?.areaDos ? true : false}
        ></ContainerCard>
        <Spacer height={20} />

        <ContainerCard
          image={require("../../assets/images/HomeScreen/test5grandes.png")}
          title={"Test de los 5 Grandes"}
          description={"Conocé más sobre tu personalidad y capacidades."}
          route={"Test5Grandes"}
          selected={user?.info ? true : false}
        ></ContainerCard>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header_container: {
    paddingLeft: "8%",
    paddingRight: "8%",
  },
  title_hello: {
    fontFamily: "Poppins_ExtraBold",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 45,
    lineHeight: 68,
    color: "#DED3F4",
  },
  name: {
    marginBottom: 10,
    fontFamily: "Poppins_ExtraBold",
    fontWeight: "600",
    fontSize: 30,
    color: "#00BBC2",
  },
  container_progreso: {
    borderRadius: 15,
    paddingTop: 6,
    paddingRight: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    marginTop: 5,
    borderColor: "#524c77",
    borderWidth: 1,
  },
  container_card_chaside: {
    marginBottom: 15,
    borderColor: "#025558",
    borderWidth: 1,
    borderEndWidth: 4,
    padding: 15,
    borderRadius: 15,
    width: 345,
    height: 115,
    flexDirection: "row",
  },
  title_progreso: {
    fontFamily: "Poppins_SemiBold",
    fontStyle: "normal",
    lineHeight: 38,
    color: "#DED3F4",
    fontWeight: "700",
    fontSize: 20,
  },
  text_progreso: {
    fontFamily: "Poppins_Regular",
    fontStyle: "normal",
    fontWeight: "600",
    color: "#DED3F4",
    fontSize: 14,
    marginBottom: 3,
  },
  text_test: {
    color: "#00BBC2",
    marginLeft: 5,
    margin: 8,
    fontWeight: "700",
    fontSize: 20,
    fontFamily: "Poppins_SemiBold",
  },
  test_chaside: {
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    fontWeight: "500",
  },
  contenedor_text: {
    flexDirection: "column",
    width: "100%",
  },
  container_styles: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#130C34",
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
    height: 134,
    width: 107,
    left: 25,
    top: -3,
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
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    padding: "3%",
  },
});
