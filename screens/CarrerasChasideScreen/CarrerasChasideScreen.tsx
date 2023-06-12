import React from "react";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { CarrerasScreen } from "../../components/CarrerasScreen";

type CarrerasScreenProps = {
  route: RouteProp<RootStackParamList, "CarrerasChasideScreen">;
};

const CarrerasChasideScreen = ({ route }: CarrerasScreenProps) => {
  const { habilidad, intereses, area } = route.params;


  const txtHabilidad = habilidad?.split("-").join("\n");
  const txtInteres = intereses?.split("-").join("\n");



  return (
    <CarrerasScreen
    argumento1={txtHabilidad}
    argumento2={txtInteres}
    area={area}
    />
  );
};


export default CarrerasChasideScreen;
