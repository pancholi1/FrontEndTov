import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../navigation/redux/hooks";
import { User } from "../../navigation/redux/store/store";
import { areas } from "../../constants/infoChaside";
import { areaMMYMG } from "../../constants/infoMMYMG";

const API_KEY = "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";

const ResultTests = () => {
  const { user } = useAppSelector(User);
  const [messages, setMessages] = useState({
    message: `Hola Pancho,Esta cargando...`,
  });

  useEffect(() => {
    processMessageToChatGPT();
  }, []);
  const processMessageToChatGPT = async () => {
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
          {
            role: "user",
            content: `He hecho 3 tests de Orientacion Vocacional y me dio estos resultados.
                     Primer test en Intereses:${
                       areas[user?.areaInteres!]
                     }  y en Habilidades :${areas[user?.areaHabilidad!]}.
                     Segundo test en Area Ocupacional: ${
                       areaMMYMG[user?.areaUno!]
                     }
                     tercer test de los 5 grandes: mi persona es en 
                     APERTURA A LA EXPERIENCIA un ${user?.info[0]}%,
                      en EXTROVERSIÓN un  ${user?.info[1]}% ,
                      en AMABALIDAD ${user?.info[2]}%,
                      en NEUROTICISMO ${user?.info[3]}%,
                      en ESCRUPULOSIDAD ${user?.info[4]}%
                     
               `,
          },
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
        setMessages({
          message: data.choices[0].message.content,
        });
      })
      .catch((error) => {
        setMessages({
          message: "Tenemos un error, por favor reintentá más tarde.",
        });
      });
  };

  return (
    <ScrollView style={{ width: "100%", backgroundColor: "#130C34" }}>
      <View style={styles.container}>
        <View style={styles.container_test}>
          <Text style={styles.title}>Resultado final</Text>

          <Text style={styles.fontText}>{messages.message}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ResultTests;

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
  fontText: {
    color: "#DED3F4",
    fontWeight: "700",
    fontSize: 14,
    width: "85%",
    alignItems: "center",
    fontFamily: "Poppins_Regular",
    margin: "4%",
    textAlign: "center",
  },
});
