import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import surveyData from "./questions";
import { RootStackScreenProps } from "../../types";
import { LinearGradient } from "expo-linear-gradient";
import { QuestionComponent } from "../../components/Chaside";
import { areas } from "../../constants/infoChaside";
import { useAppSelector } from "../../navigation/redux/hooks";
import { User } from "../../navigation/redux/store/store";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../../firebase-config";
import { DescriptionTests } from "../../components/DescriptionTests";
import { description, title } from "../../constants/DescriptionChaside";
import { useDispatch } from "react-redux";
import { setUser, UserState } from "../../navigation/redux/slices/user";

interface PropsAreas {
  msjArea: string;
  textCarrera: string;
  area: string;
}

const TestChaside = ({ navigation }: RootStackScreenProps<"TestChaside">) => {
  const dispatch = useDispatch();
  const { user } = useAppSelector(User);
  const [habilidad, setHabilidad] = useState<PropsAreas>();
  const [interes, setInteres] = useState<PropsAreas>();
  const [flagDescription, setFlagDescription] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [sumaAreasIntereses, setSumaAreasIntereses] = useState({
    C: 0,
    H: 0,
    A: 0,
    S: 0,
    I: 0,
    D: 0,
    E: 0,
  });
  const [sumaAreasHabilidades, setSumaAreasHabilidades] = useState({
    C: 0,
    H: 0,
    A: 0,
    S: 0,
    I: 0,
    D: 0,
    E: 0,
  });

  const handleAnswered = async (answer: boolean) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
    if(currentQuestion < 97){
       setCurrentQuestion(currentQuestion + 1);
     }

    if (answer === true) {
      const currentArea = surveyData[currentQuestion].area;
      const currentResult = surveyData[currentQuestion].resultado;

      if (currentResult === "intereses") {
        const updateCount = {
          ...sumaAreasIntereses,
          [currentArea]: sumaAreasIntereses[currentArea] + 1,
        };
        setSumaAreasIntereses(updateCount);
      }
      if (currentResult === "habilidades") {
        const updateCount = {
          ...sumaAreasHabilidades, //aca me estoy haciendo una copia de todo el objeto
          [currentArea]: sumaAreasHabilidades[currentArea] + 1,
          //aca estoy entrando a una propiedad(que me llega mediante currentArea), quedaria sumaAreasHabilidades[currentArea] , seria igual a C = sumaAreasHabilidades.C + 1 pq currentArea es C
        };
        setSumaAreasHabilidades(updateCount);
      }
    }
  };
  function obtenerPropiedadMayor(objeto: object) {
    let propiedadMayor = "";
    let mayorNumero = -Infinity;
    for (let propiedad in objeto) {
      if (objeto[propiedad] > mayorNumero) {
        mayorNumero = objeto[propiedad];
        propiedadMayor = propiedad;
      }
    }
    return { propiedad: propiedadMayor };
  }
  const carrerasPosibles = (
    areaHabilidad: string,
    areaInteres: string,
    area: string
  ) => {
    navigation.navigate("CarrerasChasideScreen", {
      habilidad: areaHabilidad,
      intereses: areaInteres,
      area,
    });
  };

  useEffect(() => {
    if (user?.areaHabilidad) {
      const AreaHabilidad = areas[user.areaHabilidad];
      setHabilidad(AreaHabilidad);
    }
    if (user?.areaInteres) {
      const AreaHabilidad = areas[user.areaInteres];
      setInteres(AreaHabilidad);
    }
  }, [user]);
  
  useEffect(() => {
    if (currentQuestion >= surveyData.length - 1) {
      const { propiedad: propiedadMayorIntereses } =
        obtenerPropiedadMayor(sumaAreasIntereses);
      const { propiedad: propiedadMayorHabilidades } =
        obtenerPropiedadMayor(sumaAreasHabilidades);

      const info = async () => {
        if (user?.key) {
          await updateDoc(doc(database, "people", user?.key), {
            areaInteres: propiedadMayorIntereses,
            areaHabilidad: propiedadMayorHabilidades,
          });
          setHabilidad(areas[propiedadMayorHabilidades]);
          setInteres(areas[propiedadMayorIntereses]);
        }
      };
      info();
      dispatch(setUser({ ...user, areaInteres: propiedadMayorIntereses,areaHabilidad: propiedadMayorHabilidades } as UserState));
    }
  }, [surveyData, currentQuestion]);
  

  return habilidad && interes ? (
    <ScrollView style={{ width: "100%", backgroundColor: "#130C34" }}>
      <View style={styles.container}>
        <View style={styles.container_test}>
          <Text style={styles.title}>INTERESES</Text>
          <Text style={styles.thankYou}>RESPUESTA DEL GRUPO</Text>
          <Text style={styles.thankYou}>({interes?.msjArea})</Text>
          <Text style={styles.thankYou2}>{interes?.textCarrera}</Text>
          <Pressable
            style={styles.button}
            onPress={() =>
              carrerasPosibles(interes?.area, habilidad.area, "interes")
            }
          >
            <LinearGradient
              colors={["#0995a6", "#197189", "#112044"]}
              style={{
                borderRadius: 15,
                width: "100%",
                height: 45,
                alignItems: "center",
                justifyContent: "center",
                margin: "4%",
              }}
            >
              <Text style={styles.text_button}>CARRERAS POSIBLES</Text>
            </LinearGradient>
          </Pressable>
        </View>

        <View style={styles.container_test}>
          <Text style={styles.title}>HABILIDADES</Text>
          <Text style={styles.thankYou}>RESPUESTA DEL GRUPO</Text>
          <Text style={styles.thankYou}>({habilidad.msjArea})</Text>
          <Text style={styles.thankYou2}>{habilidad.textCarrera}</Text>
          <Pressable
            style={styles.button}
            onPress={() =>
              carrerasPosibles("asdas", habilidad.area, "habilidad")
            }
          >
            <LinearGradient
              colors={["#0995a6", "#197189", "#112044"]}
              style={{
                borderRadius: 15,
                width: "100%",
                height: 45,
                alignItems: "center",
                justifyContent: "center",
                margin: "4%",
              }}
            >
              <Text style={styles.text_button}>CARRERAS POSIBLES</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  ) : flagDescription ? (
    <View style={styles.container}>
      <QuestionComponent
        id={surveyData[currentQuestion].id}
        question={surveyData[currentQuestion].question}
        resultado={surveyData[currentQuestion].resultado}
        onAnswered={handleAnswered}
      />
    </View>
  ) : (
    <DescriptionTests
      title={title}
      description={description}
      setFlag={setFlagDescription}
    />
  );
};

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
  thankYou: {
    color: "#06D6DD",
    fontWeight: "700",
    fontSize: 15,
    width: "85%",
    alignItems: "center",
    fontFamily: "Poppins_Regular",
    textAlign: "center",
  },
  thankYou2: {
    color: "#DED3F4",
    fontWeight: "700",
    fontSize: 14,
    width: "85%",
    alignItems: "center",
    fontFamily: "Poppins_Regular",
    margin: "4%",
    textAlign: "center",
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

export default TestChaside;
