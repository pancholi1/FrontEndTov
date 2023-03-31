import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { LinearGradient } from "expo-linear-gradient";
import { gradients } from "../../constants/Gradients";

type CarrerasScreenProps = {
  route: RouteProp<RootStackParamList, "CarrerasChasideScreen">;
};

const CarrerasChasideScreen = ({ route }: CarrerasScreenProps) => {
  let msjHabilidad: string = "";
  let msjInteres: string = "";

  const { habilidad, intereses, area } = route.params;

  if (habilidad === "C") {
    msjHabilidad =
      " • Administración - • Bancos y Seguros - • Comercio Exterior - • Contaduría - • Economía - • Marketing - • Recursos Humanos - • Relaciones Públicas";
  }
  if (habilidad === "H") {
    msjHabilidad =
      " • Abogacía y Escribanía - • Antropología y Arqueología - • Bibliotecología y Museología - • Deporte y Actividad Física - • Educacionales y Pedagógicas - • Filosofía y Teología - • Historia - • Idiomas - • Letras - • Periodismo y Locución Radio, Cine y TV - • Sociología y Ciencias Políticas - • Gastronomía, Hotelería y Turismo";
  }
  if (habilidad === "A") {
    msjHabilidad =
      " • Arquitectura - • Artes - • Diseños - • Música y Canto - • Teatro y Danza - • Publicidad";
  }
  if (habilidad === "S") {
    msjHabilidad =
      " • Enfermería y Técnicas de la Salud - • Farmacia y Bioquímica - • Fonoaudiología - • Kinesiología y Terapia Física - • Medicina - • Nutrición - • Odontología - • Psicología - • Servicio Social";
  }
  if (habilidad === "I") {
    msjHabilidad =
      " • Informática - • Electricidad y Electrónica - • Bioingeniería - • Ingeniería Civil y Construcciones - • Industrias - • Mecánica - • Geociencias y Petróleo - • Naval y Pesca - • Textil - • Telecomunicaciones - • Transporte y Logística";
  }
  if (habilidad === "D") {
    msjHabilidad =
      " • Seguridad y Fuerzas Armadas - • Aeronavegación - • Criminalística";
  }
  if (habilidad === "E") {
    msjHabilidad =
      " • Matemática y Estadística - • Química Física y Astronomía - • Ecología y Seguridad Industrial - • Agronomía y Veterinaria - • Alimentos - • Biología y Genética";
  }

  if (intereses === "C") {
    msjInteres =
      " • Administración - • Bancos y Seguros - • Comercio Exterior - • Contaduría - • Economía - • Marketing - • Recursos Humanos - • Relaciones Públicas";
  }
  if (intereses === "H") {
    msjInteres =
      " • Abogacía y Escribanía - • Antropología y Arqueología - • Bibliotecología y Museología - • Deporte y Actividad Física - • Educacionales y Pedagógicas - • Filosofía y Teología - • Historia - • Idiomas - • Letras - • Periodismo y Locución Radio, Cine y TV - • Sociología y Ciencias Políticas - • Gastronomía, Hotelería y Turismo";
  }
  if (intereses === "A") {
    msjInteres =
      " • Arquitectura - • Artes - • Diseños - • Música y Canto - • Teatro y Danza - • Publicidad";
  }
  if (intereses === "S") {
    msjInteres =
      " • Enfermería y Técnicas de la Salud - • Farmacia y Bioquímica - • Fonoaudiología - • Kinesiología y Terapia Física - • Medicina - • Nutrición - • Odontología - • Psicología - • Servicio Social";
  }
  if (intereses === "I") {
    msjInteres =
      " • Informática - • Electricidad y Electrónica - • Bioingeniería - • Ingeniería Civil y Construcciones - • Industrias - • Mecánica - • Geociencias y Petróleo - • Naval y Pesca - • Textil - • Telecomunicaciones - • Transporte y Logística";
  }
  if (intereses === "D") {
    msjInteres =
      " • Seguridad y Fuerzas Armadas - • Aeronavegación - • Criminalística";
  }
  if (intereses === "E") {
    msjInteres =
      " • Matemática y Estadística - • Química Física y Astronomía - • Ecología y Seguridad Industrial - • Agronomía y Veterinaria - • Alimentos - • Biología y Genética";
  }

  const txtHabilidad = msjHabilidad?.split("-").join("\n");
  const txtInteres = msjInteres?.split("-").join("\n");

  return (
    <View style={styles.container}>
      <View style={styles.container_area}>
        <LinearGradient
          colors={gradients.inputs}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.container_area}
        >
          <Text style={styles.text}>AREA O GRUPO</Text>
          <Text style={styles.text2}>
            Listado de posibles carreras dentro de ese area.{" "}
          </Text>
          {area === "habilidad" ? (
            <Text style={styles.text2}>{txtHabilidad}</Text>
          ) : (
            <Text style={styles.text2}>{txtInteres}</Text>
          )}
        </LinearGradient>
      </View>
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
  container_area: {
    marginTop: "4%",
    borderRadius: 15,
    width: "95%",
    alignItems: "center",
    //height:'95%'
  },
  text: {
    color: "#DED3F4",
    fontWeight: "600",
    fontSize: 20,
    width: "85%",
    alignItems: "center",
    textAlign: "center",
    marginTop: "5%",
    marginBottom: "2%",
    fontFamily: "Poppins_ExtraBold",
  },
  text2: {
    color: "#DED3F4",
    fontWeight: "600",
    fontSize: 16,
    width: "90%",
    alignItems: "center",
    marginTop: "5%",
    marginBottom: "2%",
    fontFamily: "Poppins_Regular",
  },
});

export default CarrerasChasideScreen;
