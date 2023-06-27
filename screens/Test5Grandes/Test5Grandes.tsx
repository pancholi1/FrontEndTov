import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { QuestionTest } from "../../components/5Grandes";
import { database } from "../../firebase-config";
import { useAppDispatch, useAppSelector } from "../../navigation/redux/hooks";
import { User } from "../../navigation/redux/store/store";
import { data } from "./question5Grandes";
import { DescriptionTests } from "../../components/DescriptionTests";
import { description, title } from "../../constants/Description5Grandes";
import { setUser, UserState } from "../../navigation/redux/slices/user";

const Test5Grandes = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(User);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [count, setCount] = useState<object>({});
  const [flagDescription, setFlagDescription] = useState(false);

  const handleAnswered = (contador: object) => {
    if (currentQuestion < 49) {
      setCurrentQuestion(currentQuestion + 1);
      setCount(contador);
    }
  };

  useEffect(() => {
    if (currentQuestion >= data.length - 1) {
      const suma = Object.values(count).reduce(
        (total, valor) => total + valor,
        0
      );
      const percentages = Object.fromEntries(
        Object.entries(count).map(([key, value]) => [
          key,
          ((value / suma) * 100).toFixed(2),
        ])
      );
      const porcentajes = Object.entries(percentages).map(([, value]) => value);
      const info = async () => {
        if (user?.key) {
          await updateDoc(doc(database, "people", user.key), {
            info: porcentajes,
          });
        }
      };
      info();
      dispatch(setUser({ ...user, info: porcentajes } as UserState));
    }
  }, [currentQuestion, data]);

  return user?.info ? (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container_general}>
          <Text style={styles.title}>APERTURA A LA EXPERIENCIA</Text>
          <Text style={styles.porcentaje}>{user?.info[0] + "%"}</Text>
          <Text style={styles.text}>
            Buscar nuevas experiencias y habilidades intelectuales, interesarse
            por distintos temas, apreciar el arte y ser sensibles a la belleza.
            Son originales e imaginativos, curiosos por el medio externo e
            interno, interesados por ideas nuevas y valores no convencionales.
          </Text>
        </View>

        <View style={styles.container_general}>
          <Text style={styles.title}>EXTROVERSIÓN</Text>
          <Text style={styles.porcentaje}>{user?.info[1] + "%"}</Text>
          <Text style={styles.text}>
            Pronunciado compromiso o unión con el mundo externo, ser muy
            sociables, asertivas, habladoras y necesitan constante estimulación
            (sensaciones nuevas).
          </Text>
        </View>

        <View style={styles.container_general}>
          <Text style={styles.title}>AMABILIDAD</Text>
          <Text style={styles.porcentaje}>{user?.info[2] + "%"}</Text>
          <Text style={styles.text}>
            Ser cordiales, amables, cooperativas, compasivas, altruistas,
            consideradas, confiadas y solidarias.
          </Text>
        </View>

        <View style={styles.container_general}>
          <Text style={styles.title}>Neuroticismo</Text>
          <Text style={styles.porcentaje}>{user?.info[3] + "%"}</Text>
          <Text style={styles.text}>
            Inestabilidad emocional, ansiedad, preocupación, baja autoestima,
            baja tolerancia al estrés, poca sociabilidad.
          </Text>
        </View>

        <View style={styles.container_general}>
          <Text style={styles.title}>ESCRUPULOSIDAD</Text>
          <Text style={styles.porcentaje}>{user?.info[4] + "%"}</Text>
          <Text style={styles.text}>
            Autocontrol, tanto en sus impulsos como también en la planificación,
            organización y ejecución de tareas. Está asociada además con la
            responsabilidad, confiabilidad, puntualidad, honestidad y
            escrupulosidad.
          </Text>
        </View>
      </View>
    </ScrollView>
  ) : flagDescription ? (
    <View style={styles.container}>
      <QuestionTest
        id={data[currentQuestion].id}
        question={data[currentQuestion].question}
        onAnswered={handleAnswered}
        dimension={data[currentQuestion].dimension}
        dimensiones={data[currentQuestion].dimensiones}
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
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#130C34",
  },
  container_general: {
    borderRadius: 15,
    backgroundColor: "#102548",
    borderColor: "#0b7189",
    borderWidth: 0.9,
    opacity: 1.2,
    width: "90%",
    padding: 10,
    margin: 12,
    textAlign: "center",
  },
  title: {
    color: "#DED3F4",
    fontFamily: "Poppins_Regular",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700",
  },
  porcentaje: {
    color: "#06D6DD",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Poppins_Regular",
    textAlign: "center",
    marginTop: 4,
    marginBottom: 6,
  },
  text: {
    color: "#DED3F4",
    fontFamily: "Poppins_Regular",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
  },
});
export default Test5Grandes;
