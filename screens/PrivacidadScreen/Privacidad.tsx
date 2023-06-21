import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { gradients } from '../../constants/Gradients';

const Privacidad = () => {
  return (
    <ScrollView style={{ width: "100%", backgroundColor: "#130C34",}}>
      <View style={{ width: "100%", backgroundColor: "#130C34",  alignItems:"center"}}>
        <LinearGradient
            colors={gradients.inputs}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={styles.container_view}
        >
          <Text style={styles.text_principal}>POLÍTICA DE PRIVACIDAD</Text>
          <Text style={styles.name_test}>1. INFORMACIÓN AL USUARIO</Text>
          <Text style={styles.text_test}><Text style={styles.tov_s_a}>Tov S.A., </Text> como Responsable del Tratamiento, le informa que, según lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril, (RGPD) y en la L.O. 3/2018, de 5 de diciembre, de protección de datos y garantía de los derechos digitales (LOPDGDD), trataremos su datos tal y como reflejamos en la presente Política de Privacidad. En esta Política de Privacidad describimos cómo recogemos sus datos personales y por qué los recogemos, qué hacemos con ellos, con quién los compartimos, cómo los protegemos y sus opciones en cuanto al tratamiento de sus datos personales. Esta Política se aplica al tratamiento de sus datos personales recogidos por la empresa para la prestación de sus servicios. Si acepta las medidas de esta Política, acepta que tratemos sus datos personales como se define en esta Política.</Text>
          <Text style={styles.name_test}>2. CONTACTO</Text>
          <Text style={styles.text_test}>Denominación social: <Text style={styles.tov_s_a}> Tov</Text></Text>
          <Text style={styles.text_test}>Nombre comercial:<Text style={styles.tov_s_a}> Tov</Text></Text>
          <Text style={styles.name_test}>3.PRINCIPIOS CLAVE</Text>
          <Text style={styles.text_test}>Siempre hemos estado comprometidos con prestar nuestros servicios con el más alto grado de calidad, lo que incluye tratar sus datos con seguridad y transparencia. Nuestros principios son:</Text>
          <ul style={styles.ul}>
            <li style={styles.text_test}><Text style={styles.tov_s_a}>Legalidad:</Text> Sólo recopilaremos sus Datos personales para fines específicos, explícitos y legítimos.</li>
            <li style={styles.text_test}><Text style={styles.tov_s_a}>Minimización de datos:</Text>  Limitamos la recogida de datos de carácter personal a lo que es estrictamente relevante y necesario para los fines para los que se han recopilado.</li>
            <li style={styles.text_test}><Text style={styles.tov_s_a}>Limitación de la Finalidad: </Text>Sólo recogeremos sus datos personales para los fines declarados y sólo según sus deseos</li>
            <li style={styles.text_test}><Text style={styles.tov_s_a}>Precisión:</Text> Mantendremos sus datos personales exactos y actualizados.</li>
            <li style={styles.text_test}><Text style={styles.tov_s_a}>Seguridad de los Datos: </Text>Aplicamos las medidas técnicas y organizativas adecuadas y proporcionales a los riesgos para garantizar que sus datos no sufran daños, tales como divulgación o acceso no autorizado, la destrucción accidental o ilícita o su pérdida accidental o alteración y cualquier otra forma de tratamiento ilícito.</li>
            <li style={styles.text_test}><Text style={styles.tov_s_a}>Conservación:</Text>Conservamos sus datos personales de manera legal y apropiada y sólo mientras es necesario para los fines para los que se han recopilado.</li>
            <li style={styles.text_test}><Text style={styles.tov_s_a}>Terceros:</Text> El acceso y transferencia de datos personales a terceros se llevan a cabo de acuerdo con las leyes y reglamentos aplicables y con las garantías contractuales adecuadas.</li>
            <li style={styles.text_test}><Text style={styles.tov_s_a}>Marketing Directo y cookies:</Text>Cumplimos con la legislación aplicable en materia de publicidad y cookies.</li>
          </ul>
          <Text style={styles.name_test}>4. RECOGIDA Y TRATAMIENTO DE SUS DATOS PERSONALES</Text>
          <Text style={styles.text_test}>Las tipos de datos que se pueden solicitar y tratar son:</Text>
          <li style={styles.text_test}>Datos de carácter identificativo.</li>
          <Text style={styles.text_test}>También recogemos de forma automática datos sobre su visita a nuestro sitio web según se describe en la política de cookies.</Text>
          <Text style={styles.name_test}>5. LEGITIMIDAD</Text>
          <Text style={styles.text_test}>De acuerdo con la normativa de protección de datos aplicable, sus datos personales podrán tratarse siempre que:</Text>
          <ul>
            <li style={styles.text_test}>Nos ha dado su consentimiento a los efectos del tratamiento. Por supuesto podrá retirar su consentimiento en cualquier momento.</li>
            <li style={styles.text_test}>Por requerimiento legal.</li>
            <li style={styles.text_test}>Por existir un interés legítimo que no se vea menoscabado por sus derechos de privacidad, como por ejemplo el envío de información comercial bien por suscripción a nuestra newsletter o por su condición de cliente.</li>
            <li style={styles.text_test}>Por ser necesaria para la prestación de alguno de nuestros servicios mediante relación contractual entre usted y nosotros.</li>
          </ul>
          <Text style={styles.name_test}>6. COMUNICACIÓN DE DATOS PERSONALES</Text>
          <Text style={styles.text_test}>Los datos pueden ser comunicados a empresas relacionadas con <Text style={styles.tov_s_a}>Tov S.A. </Text>para la prestación de los diversos servicios en calidad de Encargados del Tratamiento. La empresa no realizará ninguna cesión, salvo por obligación legal.</Text>
          <Text style={styles.name_test}>7. SUS DERECHOS</Text>
          <Text style={styles.text_test}>En relación con la recogida y tratamiento de sus datos personales, puede ponerse en contacto con nosotros en cualquier momento para:</Text>
          <ul style={styles.ul}>
            <li style={styles.text_test}>Acceder a sus datos personales y a cualquier otra información indicada en el Artículo 15.1 del RGPD.</li>
            <li style={styles.text_test}>Rectificar sus datos personales que sean inexactos o estén incompletos de acuerdo con el Artículo 16 del RGPD.</li>
            <li style={styles.text_test}>Suprimir sus datos personales de acuerdo con el Artículo 17 del RGPD.</li>
            <li style={styles.text_test}>Limitar el tratamiento de sus datos personales de acuerdo con el Artículo 18 del RGPD.</li>
            <li style={styles.text_test}>Solicitar la portabilidad de sus datos de acuerdo con el Artículo 20 del RGPD.</li>
            <li style={styles.text_test}>Oponerse al tratamiento de sus datos personales de acuerdo con el artículo 21 del RGPD.</li>
          </ul>
          <Text style={styles.text_test}>Si ha otorgado su consentimiento para alguna finalidad concreta, tiene derecho a retirar el consentimiento otorgado en cualquier momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada rrhh.
            Puede ejercer estos derechos enviando comunicación, motivada y acreditada, a nuestra casilla de email oficial
            También tiene derecho a presentar una reclamación ante la Autoridad de control competente (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.
            </Text>
          <Text style={styles.name_test}>8. INFORMACIÓN LEGAL</Text>
          <Text style={styles.text_test}>Los requisitos de esta Política complementan, y no reemplazan, cualquier otro requisito existente bajo la ley de protección de datos aplicable, que será la que prevalezca en cualquier caso.
            Esta Política está sujeta a revisiones periódicas y la empresa puede modificarla en cualquier momento. Cuando esto ocurra, le avisaremos de cualquier cambio y le pediremos que vuelva a leer la versión más reciente de nuestra Política y que confirme su aceptación.
            </Text>
        </LinearGradient>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center"
  },
  container_view:{
    width: "90%",
    borderRadius: 15,
    marginTop:"3%",
    marginBottom:"3%",
    alignItems:"center",
    textAlign:"center",
  },
  text_principal:{
    fontWeight: "600",
    fontSize: 20,
    color: "#DED3F4",
    fontFamily: "Poppins_Regular",
    lineHeight: 30,
    padding:"2%",
    textAlign:"center"
  },
  name_test: {
    fontWeight: "600",
    fontSize: 20,
    color: "#DED3F4",
    fontFamily: "Poppins_Regular",
    lineHeight: 30,
    padding:"2%",
    textAlign:"center"
  },
  tov_s_a: {
    fontWeight: "700",
    fontSize: 18,
    color: "#DED3F4",
    fontFamily: "Poppins_Regular",
    // lineHeight: 30,
    textAlign:"center",
  },
  text_test: {
    color: "#DED3F4",
    fontFamily: "Poppins_Regular",
    fontSize: 14,
    textAlign:"center",
    width:"100%"
  },
  li: {
    color: "#DED3F4",
    fontFamily: "Poppins_Regular",
    fontSize: 14,
    textAlign:"center",
  },
  ul:{
    textAlign:"center"
  }
});

export default Privacidad;
