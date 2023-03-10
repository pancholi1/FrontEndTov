import CardResult from "../components/CardResult";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"Resultados">) {

  return (
    <>
      <CardResult
        image={require("../assets/images/Results/result1.png")}
        title={"Test CHASIDE"}
        description={"Toma menos de 12 minutos. Responde honestamente."}
      />
      <CardResult
        image={require("../assets/images/Results/result2.png")}
        title={"Test MM & MG"}
        description={"Comprueba cuáles son las áreas ocupacionales que se ajustan a \ntu perfil."}
      />
        <CardResult
        image={require("../assets/images/Results/result4.png")}
        title={"Test Los 5 Grandes"}
        description={"Conocé más sobre tu personalidad y capacidades."}
      />
      <CardResult
        image={require("../assets/images/Results/result3.png")}
        title={"Entrevista"}
        description={"Agenda una entrevista con un profesional capacitado."}
      />
      <CardResult
        image={require("../assets/images/Results/result4.png")}
        title={"Resultado Final"}
        description={"Conoce cual es tu resultado final y comienza a planificar."}
      />
    

    </>
    
  );
}


