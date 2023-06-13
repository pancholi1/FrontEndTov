import React, { useEffect, useState } from "react";
import { StyleSheet, View, Pressable, Alert, Modal, Text } from "react-native";
import CardResult from "../../components/CardResult";
import Spacer from "../../components/Spacer";
import { RootStackScreenProps } from "../../types";
import { useAppSelector } from "../../navigation/redux/hooks";
import { User } from "../../navigation/redux/store/store";
import { areas } from "../../constants/infoChaside";
import { areaMMYMG } from "../../constants/infoMMYMG";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../../firebase-config";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
const API_KEY = "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";
const ResultadosScreen = ({
  navigation,
}: RootStackScreenProps<"Resultados">) => {
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
  }, []);

  const saveMessageGPT = async (message: string) => {
    if (user?.key && !user.finalScore) {
      // await updateDoc(doc(database, "people", user.key), {
      //   finalScore: message,
      // });
    }
  };
  const processMessageToChatGPT = async () => {
    console.log("hgolas");
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
          // {
          //   role: "user",
          //   content: `He hecho 3 tests de Orientacion Vocacional y me dio estos resultados.
          //            Primer test en Intereses:${
          //              areas[user?.areaInteres!]
          //            }  y en Habilidades :${areas[user?.areaHabilidad!]}.
          //            Segundo test en Area Ocupacional: ${
          //              areaMMYMG[user?.areaUno!]
          //            }
          //            tercer test de los 5 grandes: mi persona es en
          //            APERTURA A LA EXPERIENCIA un ${user?.info[0]}%,
          //             en EXTROVERSIÓN un  ${user?.info[1]}% ,
          //             en AMABALIDAD ${user?.info[2]}%,
          //             en NEUROTICISMO ${user?.info[3]}%,
          //             en ESCRUPULOSIDAD ${user?.info[4]}%

          //      `,
          // },
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
      .then((data) => {
        saveMessageGPT(data.choices[0].message.content);
        console.log(data.choices[0].message.content);
      })
      .catch((error) => {
        Alert.alert("hubo un error");
      });
  };

  const Loading = () => {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
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
          {user?.areaDos && user.areaHabilidad && user.info ? (
            <View>
              {isLoading ? (
                <Loading />
              ) : (
                <CardResult
                  disabled={false}
                  image={require("../../assets/images/Results/result4.png")}
                  title={"Resultado Final"}
                  description={
                    "Conoce cual es tu resultado final y comienza a planificar."
                  }
                  selected={true}
                  route={"ResultTestScreen"}
                  navigation={navigation}
                />
              )}
            </View>
          ) : (
            <CardResult
              disabled={false}
              image={require("../../assets/images/Results/result4.png")}
              title={"Resultado Final"}
              description={
                "Conoce cual es tu resultado final y comienza a planificar."
              }
              route={""}
              navigation={navigation}
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
