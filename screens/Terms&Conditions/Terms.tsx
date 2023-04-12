import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { gradients } from "../../constants/Gradients";
import { RootStackScreenProps, RootStackParamList } from "../../types";

const Terms = ({navigation}: RootStackScreenProps<"Terms">) => {
  return (
    <View style={styles.login_container_text}>
      <View
        style={{
          width: "90%",
          marginTop: "10%",
          marginBottom: "20%",
          borderRadius: 15,
        }}
      >
        <View style={styles.contenedor_test}>
          <LinearGradient
            colors={gradients.inputs}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={styles.contenedor_test}
          >
            <ScrollView>
              <Text style={styles.name_test}>Terminos y condiciones</Text>
              <Text style={styles.text_test}>
                {" "}
                Estos términos y condiciones establecen el acuerdo completo y
                vinculante entre usted y la página web que ofrece el Test de
                Orientación Vocacional.{" "}
              </Text>
              <Text style={styles.text_test}>
                Al utilizar los servicios y recursos ofrecidos por la Página,
                usted acepta cumplir con estos Términos. Si no está de acuerdo
                con estos Términos, por favor no utilice la Página.{" "}
              </Text>
              <Text style={styles.text_test}>
                {"1 - "}
                Propiedad intelectual La Página, incluyendo su diseño,
                contenido, gráficos, software, código fuente y otros recursos,
                son propiedad exclusiva de la empresa responsable de su creación
                y están protegidos por las leyes de propiedad intelectual. Usted
                no puede copiar, modificar, distribuir, transmitir, publicar o
                utilizar de otra manera cualquier parte de la Página sin la
                previa autorización por escrito de la empresa responsable.
              </Text>
              <Text style={styles.text_test}>
                {"2 - "}
                Uso del Test de Orientación Vocacional La Página ofrece un Test
                de Orientación Vocacional con el objetivo de ayudarle a
                encontrar una carrera o profesión que se adapte a sus
                habilidades, intereses y preferencias. Al utilizar el Test de
                Orientación Vocacional, usted acepta lo siguiente:
              </Text>
              <Text style={styles.text_test}>
                Los resultados del Test de Orientación Vocacional son únicamente
                para fines informativos y no deben ser considerados como un
                consejo profesional o una garantía de empleo. La Página no se
                hace responsable de la precisión o veracidad de los resultados
                del Test de Orientación Vocacional. Usted es el único
                responsable de cualquier decisión que tome en relación a su
                carrera o profesión basada en los resultados del Test de
                Orientación Vocacional.{" "}
              </Text>
              <Text style={styles.text_test}>
                {"3 - "}
                Limitación de responsabilidad La Página no será responsable de
                ningún daño directo, indirecto, incidental, especial o
                consecuente que resulte del uso de la Página o de cualquier
                recurso o servicio ofrecido en ella, incluyendo el Test de
                Orientación Vocacional.
              </Text>
              <Text style={styles.text_test}>
                Cambios en los Términos La Página se reserva el derecho de
                cambiar estos Términos en cualquier momento sin previo aviso. Es
                su responsabilidad revisar estos Términos regularmente para
                estar al tanto de cualquier cambio.{" "}
              </Text>
              <Text style={styles.text_test}>
                {"4 - "}
                Jurisdicción y ley aplicable Estos Términos se regirán e
                interpretarán de acuerdo con las leyes de [inserte la
                jurisdicción aplicable]. Cualquier disputa que surja en relación
                a estos Términos será resuelta por los tribunales competentes de
                [inserte la jurisdicción aplicable].
              </Text>
              <Text style={styles.text_test}>
                Al utilizar la Página y el Test de Orientación Vocacional, usted
                acepta estos Términos y se compromete a cumplir con ellos. Si
                tiene alguna pregunta o comentario sobre estos Términos, por
                favor contáctenos a través de la página de contacto de la
                Página.{" "}
              </Text>
            </ScrollView>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login_container_text: {
    flex: 1,
    backgroundColor: "#130C34",
    alignItems: "center",
  },
  contenedor_test: {
    width: "100%",
    borderRadius: 15,
  },
  name_test: {
    fontWeight: "600",
    fontSize: 20,
    color: "#DED3F4",
    padding: "4%",
    fontFamily: "Poppins_Regular",
    textAlign: "center",
    lineHeight: 30,
  },
  text_test: {
    color: "#DED3F4",
    fontFamily: "Poppins_Regular",
    fontSize: 14,
    margin: 5,
    textAlign: "center",
  },
});

export default Terms;
