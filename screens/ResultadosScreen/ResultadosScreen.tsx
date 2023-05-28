import React from "react";
import { StyleSheet, View } from "react-native";
import CardResult from "../../components/CardResult";
import Spacer from "../../components/Spacer";
import { RootStackScreenProps } from "../../types";

const ResultadosScreen = ({
  navigation,
}: RootStackScreenProps<"Resultados">) => {
  return (
    <View style={styles.resultados_screen_container}>
      <Spacer height={20} />
      {/* <CardResult
        image={require("../../assets/images/Results/result1.png")}
        title={"Test CHASIDE"}
        description={"Toma menos de 12 minutos. Responde honestamente."}
      />
      <Spacer height={20} />
      <CardResult
        image={require("../../assets/images/Results/result2.png")}
        title={"Test MM & MG"}
        description={
          "Comprueba cuáles son las áreas ocupacionales que se ajustan a tu perfil."
        }
      />
      <Spacer height={20} />
      <CardResult
        image={require("../../assets/images/Results/result4.png")}
        title={"Test Los 5 Grandes"}
        description={"Conocé más sobre tu personalidad y capacidades."}
      />
      <Spacer height={20} /> */}
      {/* <CardResult
        image={require("../../assets/images/Results/result3.png")}
        title={"Entrevista"}
        description={"Agenda una entrevista con un profesional capacitado."}
      /> */}
      <CardResult
        image={require("../../assets/images/Results/result4.png")}
        title={"Resultado Final"}
        description={
          "Conoce cual es tu resultado final y comienza a planificar."
        }
      />
      <Spacer height={20} />
    </View>
  );
};

export default ResultadosScreen;

const styles = StyleSheet.create({
  resultados_screen_container: {
    flex: 1,
    backgroundColor: "#130C34",
  },
});
