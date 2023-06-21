import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { gradients } from "../../constants/Gradients";



const Terminos = () => {
  
  return (
    <ScrollView style={{ width: "100%", backgroundColor: "#130C34",}}>

    <View style={styles.login_container_text}>
      <View
        style={{
          width: "90%",
          marginTop: "5%",
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
       
              <Text style={styles.name_test}>Propietario de la página web, la oferta y el enlace de los Términos y Condiciones</Text>
              <Text  style={styles.text_test}>Esta app es propiedad y está operado por <Text style={styles.tov_s_a}>TOV S.A.</Text> Estos Términos establecen los términos y condiciones bajo los cuales puedes usar nuestra app y servicios ofrecidos por nosotros. Esta app ofrece a los visitantes contenido de test para el apoyo en la elecciòn vocacional. Al acceder o usar la app de nuestro servicio, usted aprueba que haya leído, entendido y aceptado estar sujeto a estos Términos:</Text>
              <Text style={styles.name_test}>¿Quién puede usar tu app; ¿Cuáles son los requisitos para tener una cuenta?</Text>
              <Text style={styles.text_test}>Para usar nuestra app y / o recibir nuestros servicios, debes tener al menos 6 años de edad, y poseer la autoridad legal, el derecho y la libertad para participar en estos Términos como un acuerdo vinculante. No tienes permitido utilizar esta app y / o recibir servicios si hacerlo está prohibido en tu país o en virtud de cualquier ley o regulación aplicable a tu caso.</Text>
              <Text style={styles.name_test}>Términos comerciales ofrecidos a los clientes</Text>
              <Text style={styles.text_test}>Al adquirir una licencia, aceptas que: (i) eres responsable de leer el listado completo del servicio antes de comprometerte a adquirirla: (ii) celebras un contrato legalmente vinculante para adquirir un servicio cuando te comprometes y completas el proceso de onboarding.</Text>
              <Text style={styles.name_test}>Condiciones particulares de contratación y uso de Tov</Text>
              <Text style={styles.text_test}>Mediante el siguiente acuerdo <Text style={styles.tov_s_a}>TOV S.A.</Text> pone a disposición de las escuelas y personas el sistema de test vocacionales, con una licencia de prueba y restricciones de libre acceso GRATUITO o una licencia PAGA para mayor alcance del servicio.</Text>
              <Text style={styles.text_test}>Son de aplicación las presentes Condiciones generales y mediante el mismo el usuario accede y/o está de acuerdo con las siguientes cláusulas o requisitos particulares de dicha licencia de prueba:</Text>
              <Text style={styles.name_test}>Términos comerciales ofrecidos a los clientes</Text>
              <Text style={styles.text_test}>Servicio disponible segùn el plan seleccionado.</Text>
              <Text style={styles.text_test}>Aceptación de recibir correos electrónicos, elementos publicitarios en entrada y pie de nuestra plataforma para la obtención de un correcto feedback de uso de la plataforma.</Text>
              <Text style={styles.text_test}>Estas limitaciones tienen como objetivo la correcta evaluación de la plataforma por nuestros clientes.</Text>
              <Text style={styles.text_test}>Estas condiciones podrán verse alteradas en cualquier momento que pueda poner en riesgo la integridad y objetivos de dicha licencia de prueba de la plataforma.</Text>
              <Text style={styles.name_test}>Retención del derecho a cambiar de oferta</Text>
              <Text style={styles.text_test}>Podemos, sin aviso previo, cambiar los servicios; dejar de proporcionar los servicios o cualquier característica de los servicios que ofrecemos; o crear límites para los servicios. Podemos suspender de manera permanente o temporal el acceso a los servicios sin previo aviso ni responsabilidad por cualquier motivo, o sin ningún motivo.</Text>
              <Text style={styles.name_test}>Garantías y responsabilidad por servicios y productos</Text>
              <Text style={styles.text_test}>Cuando recibimos un reclamo de garantía válido de un servicio que vendemos, repararemos el defecto relevante. Si no podemos reparar o reemplazar el servicio dentro de un tiempo razonable, el cliente tendrá derecho a un reembolso.</Text>
              <Text style={styles.name_test}>Posesión de propiedad intelectual, derechos de autor y logos.</Text>
              <Text style={styles.text_test}>El Servicio y todos los materiales incluidos o transferidos, incluyendo, sin limitación, software, imágenes, texto, gráficos, logotipos, patentes, marcas registradas, marcas de servicio, derechos de autor, fotografías, audio, videos, música y todos los Derechos de Propiedad Intelectual relacionados con ellos, son la propiedad exclusiva de <Text style={styles.tov_s_a}>TOV S.A.</Text> salvo que se indique explícitamente en este documento, no se considerará que nada en estos Términos crea una licencia en o bajo ninguno de dichos Derechos de Propiedad Intelectual, y tú aceptas no vender, licenciar, alquilar, modificar, distribuir, copiar, reproducir, transmitir, exhibir públicamente, realizar públicamente, publicar, adaptar, editar o crear trabajos derivados de los mismos.</Text>
              <Text style={styles.name_test}>Derecho a suspender o cancelar la cuenta de usuario</Text>
              <Text style={styles.text_test}>Podemos terminar o suspender de manera permanente o temporal tu acceso al servicio sin previo aviso y responsabilidad por cualquier razón, incluso si nuestra sola determinación tu violas alguna disposición de estos Términos o cualquier ley o regulación aplicable. Puedes descontinuar el uso y solicitar cancelar tu cuenta y / o cualquier servicio en cualquier momento. Sin perjuicio de lo contrario en lo que antecede, con respecto a las suscripciones renovadas automáticamente a los servicios pagados, dichas suscripciones se suspenderán sólo al vencimiento del período correspondiente por el que ya has realizado el pago.</Text>
              <Text style={styles.name_test}>Indemnización</Text>
              <Text style={styles.text_test}>Usted acuerda indemnizar y eximir de responsabilidad a <Text style={styles.tov_s_a}>TOV S.A.</Text> de cualquier demanda, pérdida, responsabilidad, reclamación o gasto (incluidos los honorarios de abogados) que terceros realicen en tu contra como consecuencia de, o derivado de, o en relación con tu uso de la página web o cualquiera de los servicios ofrecidos en la página web</Text>
              <Text style={styles.name_test}>Limitación de responsabilidad</Text>
              <Text style={styles.text_test}>En la máxima medida permitida por la ley aplicable, en ningún caso <Text style={styles.tov_s_a}>TOV S.A.</Text> será responsable por daños indirectos, punitivos, incidentales, especiales, consecuentes o ejemplares, incluidos, entre otros, daños por pérdida de beneficios, buena voluntad, uso, datos. u otras pérdidas intangibles, que surjan de o estén relacionadas con el uso o la imposibilidad de utilizar el servicio.</Text>
              <Text style={styles.text_test}>En la máxima medida permitida por la ley aplicable, <Text style={styles.tov_s_a}>TOV S.A.</Text> no asume responsabilidad alguna por (i) errores, errores o inexactitudes de contenido; (ii) lesiones personales o daños a la propiedad, de cualquier naturaleza que sean, como resultado de tu acceso o uso de nuestro servicio; y (iii) cualquier acceso no autorizado o uso de nuestros servidores seguros y / o toda la información personal almacenada en los mismos.</Text>
              <Text style={styles.name_test}>Derecho a cambiar y modificar los Términos</Text>
              <Text style={styles.text_test}>Nos reservamos el derecho de modificar estos términos de vez en cuando a nuestra entera discreción. Por lo tanto, debes revisar estas páginas periódicamente. Cuando cambiemos los Términos de una manera material, te notificaremos que se han realizado cambios importantes en los Términos. El uso continuado de la página web o nuestro servicio después de dicho cambio constituye tu aceptación de los nuevos Términos. Si no aceptas alguno de estos términos o cualquier versión futura de los Términos, no uses o accedas (o continúes accediendo) a la página web o al servicio.</Text>
              <Text style={styles.name_test}>Emails de promociones y contenido</Text>
              <Text style={styles.text_test}>Acepta recibir nuestros mensajes y materiales de promoción, por correo postal, correo electrónico o cualquier otro formulario de contacto que nos proporciones (incluido tu número de teléfono para llamadas o mensajes de texto). Si no deseas recibir dichos materiales o avisos de promociones, simplemente avísanos en cualquier momento.</Text>
              <Text style={styles.name_test}>Preferencia de ley y resolución de disputas</Text>
              <Text style={styles.text_test}>Estos Términos, los derechos y recursos provistos aquí, y todos y cada uno de los reclamos y disputas relacionados con este y / o los servicios, se regirán, interpretarán y aplicarán en todos los aspectos única y exclusivamente de conformidad con las leyes sustantivas internas de España, sin respeto a sus principios de conflicto de leyes. Todos los reclamos y disputas se presentarán y usted acepta que sean decididos exclusivamente por un tribunal de jurisdicción competente ubicada en Madrid. La aplicación de la Convención de Contratos de las Naciones Unidas para la Venta Internacional de Bienes queda expresamente excluida.</Text>
              <Text style={styles.name_test}>Atención al cliente e información de contacto</Text>
              <Text style={styles.text_test}>Ofrecemos ayuda y soporte a todos nuestros Clientes. Si tienes alguna pregunta, comentario, consejos, por favor, escríbenos. Encontrarás nuestra dirección en nuestra Política de Privacidad.</Text>
              <Text style={styles.name_test}>Comunidad Tov: Foros Públicos</Text>
              <Text style={styles.text_test}>Nuestra plataforma ofrece blogs, comunidades y foros de asistencia técnica accesibles públicamente. Tenga en cuenta que cualquier Información Personal que usted proporcione en cualquiera de dichas áreas la pueden leer, recopilar y utilizar otras personas que tengan acceso a ella. Para solicitar la supresión de su Información Personal de nuestros blogs, comunidades o foros, no dude en ponerse en contacto con nosotros en nuestra casilla de email oficial. En algunos casos, es posible que no podamos suprimir su Información Personal de esas áreas. Por ejemplo, si utiliza una aplicación de un tercero para publicar un comentario (p. ej., la aplicación de plugin social de Facebook) mientras está conectado a su perfil relacionado con dicho tercero, debe iniciar sesión en dicha aplicación o ponerse en contacto con su proveedor si desea suprimir Información Personal que haya publicado en esa plataforma.</Text>
              <Text style={styles.text_test}>En cualquier caso, le recomendamos no publicar ninguna Información Personal (por ningún medio) que no desee dar a conocer.</Text>
              <Text style={styles.text_test}>Hemos establecido medidas de seguridad adecuadas para proteger su Información Personal. Usted entiende y reconoce que, incluso después de que usted o nosotros hayamos procedido a su eliminación, copias de su Información Personal pueden permanecer visibles en páginas en caché y archivadas. Para mayor claridad, le recomendamos no subir ni publicar ninguna información que no desee hacer pública.</Text>
              <Text style={styles.text_test}>Evite publicar alguna información personal en alguna de las áreas públicas de nuestros Servicios o en su propio sitio web si no desea que esté disponible públicamente.</Text>

          </LinearGradient>
        </View>
      </View>
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  login_container_text: {
    flex: 1,
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
  tov_s_a: {
    fontWeight: "700",
    fontSize: 18,
    color: "#DED3F4",
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

export default Terminos;