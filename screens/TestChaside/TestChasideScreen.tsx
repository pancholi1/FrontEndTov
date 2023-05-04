import React, { useEffect, useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import surveyData from "./questions";
import { RootStackScreenProps } from "../../types";

import { LinearGradient } from "expo-linear-gradient";
import { gradients, gradientsButton } from "../../constants/Gradients";
import { QuestionComponent } from "../../components/Chaside";

import {
  msjAreaC,
  msjAreaH,
  msjAreaA,
  msjAreaS,
  msjAreaI,
  msjAreaD,
  msjAreaE,
  textCarreraC,
  textCarreraH,
  textCarreraA,
  textCarreraS,
  textCarreraI,
  textCarreraD,
  textCarreraE,
  areaC,
  areaH,
  areaA,
  areaS,
  areaI,
  areaD,
  areaE,
} from "../../constants/infoChaside";

import { useAppDispatch, useAppSelector } from "../../navigation/redux/hooks";
import { User } from "../../navigation/redux/store/store";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { database, auth, app } from "../../firebase-config";
import CarrerasChaside from "../../components/Chaside/CarrerasChaside";
import { setUser } from "../../navigation/redux/slices/user";

interface PropsAreas {
  msjArea: string;
  textCarrera: string;
  area: string;
}

const TestChaside = ({ navigation }: RootStackScreenProps<"TestChaside">) => {
  const user = useAppSelector(User);
  const dispatch = useAppDispatch();

  const [name, setName] = useState<any>({});
  const [habilidad, setHabilidad] = useState<PropsAreas>();
  const [interes, setInteres] = useState<PropsAreas>();

  useEffect(() => {
    console.log(user.user);
    if (user?.user?.data?.areaHabilidad) {
      const AreaHabilidad = areas[user.user.data.areaHabilidad];
      setHabilidad(AreaHabilidad);
    }
    if (user?.user?.data?.areaInteres) {
      const AreaHabilidad = areas[user.user.data.areaInteres];
      setInteres(AreaHabilidad);
    }
  }, [user.user]);

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
    setCurrentQuestion(currentQuestion + 1);

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

  const areas = {
    C: { msjArea: msjAreaC, textCarrera: textCarreraC, area: areaC },
    H: { msjArea: msjAreaH, textCarrera: textCarreraH, area: areaH },
    A: { msjArea: msjAreaA, textCarrera: textCarreraA, area: areaA },
    S: { msjArea: msjAreaS, textCarrera: textCarreraS, area: areaS },
    I: { msjArea: msjAreaI, textCarrera: textCarreraI, area: areaI },
    D: { msjArea: msjAreaD, textCarrera: textCarreraD, area: areaD },
    E: { msjArea: msjAreaE, textCarrera: textCarreraE, area: areaE },
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

  if (currentQuestion >= surveyData.length) {
    const { propiedad: propiedadMayorIntereses } =
      obtenerPropiedadMayor(sumaAreasIntereses);
    const { propiedad: propiedadMayorHabilidades } =
      obtenerPropiedadMayor(sumaAreasHabilidades);

    const info = async () => {
      if (user) {
        const q = query(
          collection(database, "people"),
          where("email", "==", user.user.email)
        );

        const qGet = await getDocs(q);
        if (!qGet.empty) {
          const docs = qGet.docs[0];
          const docId = docs.id;
          await updateDoc(doc(database, "people", docId), {
            areaInteres: propiedadMayorIntereses,
            areaHabilidad: propiedadMayorHabilidades,
          });

          dispatch(
            setUser({
              ...user,
              areaInteres: propiedadMayorIntereses,
              areaHabilidad: propiedadMayorHabilidades,
            })
          );
          setHabilidad(areas[propiedadMayorHabilidades]);
          setInteres(areas[propiedadMayorIntereses]);
        }
      }
    };
    info();
  }

  return user?.user?.data?.areaHabilidad && habilidad && interes ? (
    <ScrollView style={{ width: "100%", backgroundColor: "#130C34" }}>
      <View style={styles.container}>
        <LinearGradient
          colors={gradients.inputs}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={{
            marginTop: "8%",
            borderRadius: 15,
            width: "90%",
            alignItems: "center",
          }}
        >
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
        </LinearGradient>
        <LinearGradient
          colors={gradients.inputs}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={{
            marginTop: "8%",
            borderRadius: 15,
            width: "90%",
            alignItems: "center",
          }}
        >
          <View style={styles.container_test}>
            <Text style={styles.title}>HABILIDADESHIJO de puta</Text>
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
        </LinearGradient>
      </View>
    </ScrollView>
  ) : (
    <View style={styles.container}>
      <QuestionComponent
        id={surveyData[currentQuestion].id}
        question={surveyData[currentQuestion].question}
        resultado={surveyData[currentQuestion].resultado}
        onAnswered={handleAnswered}
      />
    </View>
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

export default TestChaside;
