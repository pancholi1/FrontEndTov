import React, { useEffect, useState } from "react";
import { StyleSheet, View, Pressable, Alert, Modal, Text } from "react-native";
import Spacer from "../../components/Spacer";
import { RootStackScreenProps } from "../../types";
import { useAppDispatch, useAppSelector } from "../../navigation/redux/hooks";
import { User } from "../../navigation/redux/store/store";
import { areas } from "../../constants/infoChaside";
import { areaMMYMG } from "../../constants/infoMMYMG";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../../firebase-config";
import { UserState, setUser } from "../../navigation/redux/slices/user";
import { Loading } from "../../components/Loading";
import ContainerCard from "../../components/HomeScreen/CardTest/ContainerCard";
const API_KEY = "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";
const ResultadosScreen = ({
  navigation,
}: RootStackScreenProps<"Resultados">) => {
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useAppSelector(User);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    (async () => {
      if (
        user?.areaDos &&
        user.areaHabilidad &&
        user.info &&
        !user.finalScore
      ) {
        await processMessageToChatGPT();
      }
      setIsLoading(false);
    })();
  }, [user]);

  const saveMessageGPT = async (message: string) => {
    if (user?.key && !user.finalScore) {
      await updateDoc(doc(database, "people", user.key), {
        finalScore: message,
      });
      dispatch(setUser({ ...user, finalScore: message } as UserState));
    }
  };
  const processMessageToChatGPT = async () => {
    console.log("Esta cargando");
    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Pimero Saludame y dsp hace todo esto. 
            Mi nombre es ${user?.name} ${user?.apellido} y despues segui el texo con: Apartir de tus resultados en los test de Orientacion Vocacional te recomiendo`,
          },
          ...(user?.areaInteres && user?.areaHabilidad && user?.areaUno
            ? [
                {
                  role: "user",
                  content: `He hecho 3 tests de Orientacion Vocacional y me dio estos resultados.
                         Primer test en Intereses:${
                           areas[user?.areaInteres].msjArea
                         }  y en Habilidades :${
                    areas[user?.areaHabilidad].msjArea
                  }.
                         Segundo test en Area Ocupacional: ${
                           areaMMYMG[user?.areaUno].msjArea
                         }
                         tercer test de los 5 grandes: mi persona es en
                         APERTURA A LA EXPERIENCIA un ${user?.info[0]}%,
                          en EXTROVERSIÓN un  ${user?.info[1]}% ,
                          en AMABALIDAD ${user?.info[2]}%,
                          en NEUROTICISMO ${user?.info[3]}%,
                          en ESCRUPULOSIDAD ${user?.info[4]}%
    
                   `,
                },
              ]
            : []),
          {
            role: "user",
            content:
              "Dame consejos relacionado a mis intereses areas y pasiones,recomendame opcionesy no me recomiendes que hable con personas expertas en el campo",
          },
          {
            role: "user",
            content:
              " relacionalo con estas carreras :Arquitectura - • Artes - • Diseños - • Música y Canto - • Teatro y Danza - • Publicidad",
          },
        ],
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then(async (data) => {
        await saveMessageGPT(data.choices[0].message.content);
        console.log(data.choices[0].message.content);
      })
      .catch((error) => {
        Alert.alert("hubo un error");
      });
  };

  return (
    <View style={styles.resultados_screen_container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Debes terminar todos los Test </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Spacer height={20} />

      <Pressable onPress={() => setModalVisible(true)}>
        <View>
          {isLoading ? (
            <Loading />
          ) : (
            <ContainerCard
              image={require("../../assets/images/Results/result4.png")}
              title={"Resultado Final"}
              description={
                "Conoce cual es tu resultado final y comienza a planificar."
              }
              route={"ResultTestScreen"}
              selected={
                user?.areaDos && user.areaHabilidad && user.info ? true : false
              }
            />
          )}
        </View>
      </Pressable>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
