import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Survey from './QuestionComponent';
import surveyData from './questions'
import { RootStackScreenProps } from "../../types";


const SurveyScreen = ({ navigation }: RootStackScreenProps<"SurveyScreen">) => {
    const [answers, setAnswers] = useState<boolean[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [sumaAreasIntereses, setSumaAreasIntereses] = useState({//VER SI ME CONVIENE HACER UN ARRAY DE OBJ PARA DESP RECORRERLO
        C:0,
        H:0,
        A:0,
        S:0,
        I:0,
        D:0,
        E:0
    })
    const [sumaAreasHabilidades, setSumaAreasHabilidades] = useState({//VER SI ME CONVIENE HACER UN ARRAY DE OBJ PARA DESP RECORRERLO
        C:0,
        H:0,
        A:0,
        S:0,
        I:0,
        D:0,
        E:0
    })


  const handleAnswered = (answer: boolean) => {

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
    setCurrentQuestion(currentQuestion + 1);

    if(answer === true){
        if(surveyData[currentQuestion].area === 'C'){
            if(surveyData[currentQuestion].resultado === 'intereses'){
                setSumaAreasIntereses({...sumaAreasIntereses, C: sumaAreasIntereses.C + 1})
            }
            if(surveyData[currentQuestion].resultado === 'habilidades'){
                setSumaAreasHabilidades({...sumaAreasHabilidades, C:sumaAreasHabilidades.C +1})
            }
        }
        if(surveyData[currentQuestion].area === 'H'){
            if(surveyData[currentQuestion].resultado === 'intereses'){
                setSumaAreasIntereses({...sumaAreasIntereses, H: sumaAreasIntereses.H + 1})
            }
            if(surveyData[currentQuestion].resultado === 'habilidades'){
                setSumaAreasHabilidades({...sumaAreasHabilidades, H:sumaAreasHabilidades.H +1})
            }
        }
        if(surveyData[currentQuestion].area === 'A'){
            if(surveyData[currentQuestion].resultado === 'intereses'){
                setSumaAreasIntereses({...sumaAreasIntereses, A: sumaAreasIntereses.A + 1})
            }
            if(surveyData[currentQuestion].resultado === 'habilidades'){
                setSumaAreasHabilidades({...sumaAreasHabilidades, A:sumaAreasHabilidades.A +1})
            }
        }
        if(surveyData[currentQuestion].area === 'S'){
            if(surveyData[currentQuestion].resultado === 'intereses'){
                setSumaAreasIntereses({...sumaAreasIntereses, S: sumaAreasIntereses.S + 1})
            }
            if(surveyData[currentQuestion].resultado === 'habilidades'){
                setSumaAreasHabilidades({...sumaAreasHabilidades, S:sumaAreasHabilidades.S +1})
            }
        }
        if(surveyData[currentQuestion].area === 'I'){
            if(surveyData[currentQuestion].resultado === 'intereses'){
                setSumaAreasIntereses({...sumaAreasIntereses, I: sumaAreasIntereses.I + 1})
            }
            if(surveyData[currentQuestion].resultado === 'habilidades'){
                setSumaAreasHabilidades({...sumaAreasHabilidades, I:sumaAreasHabilidades.I +1})
            }
        }
        if(surveyData[currentQuestion].area === 'D'){
            if(surveyData[currentQuestion].resultado === 'intereses'){
                setSumaAreasIntereses({...sumaAreasIntereses, D: sumaAreasIntereses.D + 1})
            }
            if(surveyData[currentQuestion].resultado === 'habilidades'){
                setSumaAreasHabilidades({...sumaAreasHabilidades, D:sumaAreasHabilidades.D +1})
            }
        }
        if(surveyData[currentQuestion].area === 'E'){
            if(surveyData[currentQuestion].resultado === 'intereses'){
                setSumaAreasIntereses({...sumaAreasIntereses, E: sumaAreasIntereses.E + 1})
            }
            if(surveyData[currentQuestion].resultado === 'habilidades'){
                setSumaAreasHabilidades({...sumaAreasHabilidades, E:sumaAreasHabilidades.E +1})
            }
        }
    }
  };

  let propiedadMayorIntereses = "";
  let mayorNumeroIntereses = -Infinity;

  let propiedadMayorHabilidades = "";
  let mayorNumeroHabilidades = -Infinity;

  let msjInteres
  let textCarreraInteres
  
  for (let propiedad in sumaAreasIntereses) {
      // Compara el valor actual con el valor mayor registrado hasta el momento
      if (sumaAreasIntereses[propiedad] > mayorNumeroIntereses) {
          mayorNumeroIntereses = sumaAreasIntereses[propiedad];
          propiedadMayorIntereses = propiedad;
        }
    }
    
    if(propiedadMayorIntereses === 'C'){
        msjInteres = 'Ciencias Exactas, Administrativas y Contables'
        textCarreraInteres ='Carreras que involucran la organización, supervisión, orden, análisis y síntesis, colaboración y cálculo. Contás con aptitudes como la persuasión, objetividad, practicidad, tolerancia, responsabilidad y ambición.'
    }else if(propiedadMayorIntereses === 'H'){
        msjInteres = 'Humanística y Ciencias Sociales'
        textCarreraInteres ='Carreras que involucran la precisión verbal, organización, relación de hechos, lingüística, orden y justicia. Contás con aptitudes como la responsabilidad, justicia, conciliación, persuasión, sagacidad e imaginación.'
    }else if(propiedadMayorIntereses === 'A'){
        msjInteres='Artísticas'
        textCarreraInteres ='Carreras que involucran lo estético, armónico, manual, visual y auditivo. Contás con aptitudes como la sensibilidad, imaginación, creatividad, detalle, innovación e intuición.'
    } else if(propiedadMayorIntereses === 'S'){
        msjInteres='Ciencias de la Salud y Medicina'
        textCarreraInteres ='Carreras que involucran la asistencia, investigación, precisión, percepción, análisis y ayuda. Contás con aptitudes como el altruismo, solidaridad, paciencia, comprensión, respeto y persuasión.'
    }else if(propiedadMayorIntereses === 'I'){
        msjInteres='Ingenierías y Computación'
        textCarreraInteres ='Carreras que involucran el cálculo, la ciencia, lo manual, exactitud y planificación. Contás con aptitudes como la precisión, practicidad, crítica, análisis y rigidez.'
    }else if(propiedadMayorIntereses === 'D'){
        msjInteres='Defensa y Seguridad'
        textCarreraInteres ='Carreras que involucran la justicia, equidad, colaboración, espíritu de equipo y liderazgo. Contás con aptitudes como la búsqueda de riesgos, solidaridad, valentía, agresividad y persuasión.'
    }else if(propiedadMayorIntereses === 'E'){
        msjInteres='Ciencias Agrarias y Naturales'
        textCarreraInteres ='Carreras que involucran la clasificación, numeración, análisis y síntesis, organización, orden e investigación. Contás con aptitudes como método, análisis, observación, introversión, paciencia y seguridad.'
    }

    let msjHabilidad
    let textCarreraHabilidad
    
    for (let propiedad in sumaAreasHabilidades) {
        // Compara el valor actual con el valor mayor registrado hasta el momento
        if (sumaAreasHabilidades[propiedad] > mayorNumeroHabilidades) {
            mayorNumeroHabilidades = sumaAreasHabilidades[propiedad];
            propiedadMayorHabilidades = propiedad;
        }
      }
       if(propiedadMayorHabilidades === 'C'){
        msjHabilidad = 'Ciencias Exactas, Administrativas y Contables'
        textCarreraHabilidad='Carreras que involucran la organización, supervisión, orden, análisis y síntesis, colaboración y cálculo. Contás con aptitudes como la persuasión, objetividad, practicidad, tolerancia, responsabilidad y ambición.'
      }else if(propiedadMayorHabilidades === 'H'){
        msjHabilidad = 'Humanística y Ciencias Sociales'
        textCarreraHabilidad='Carreras que involucran la precisión verbal, organización, relación de hechos, lingüística, orden y justicia. Contás con aptitudes como la responsabilidad, justicia, conciliación, persuasión, sagacidad e imaginación.'
      }else if(propiedadMayorHabilidades === 'A'){
        msjHabilidad = 'Artísticas'
        textCarreraHabilidad='Carreras que involucran lo estético, armónico, manual, visual y auditivo. Contás con aptitudes como la sensibilidad, imaginación, creatividad, detalle, innovación e intuición.'
      }else if(propiedadMayorHabilidades === 'S'){
        msjHabilidad = 'Ciencias de la Salud y Medicina'
        textCarreraHabilidad='Carreras que involucran la asistencia, investigación, precisión, percepción, análisis y ayuda. Contás con aptitudes como el altruismo, solidaridad, paciencia, comprensión, respeto y persuasión.'
      }else if(propiedadMayorHabilidades === 'I'){
        msjHabilidad = 'Ingenierías y Computación'
        textCarreraHabilidad='Carreras que involucran el cálculo, la ciencia, lo manual, exactitud y planificación. Contás con aptitudes como la precisión, practicidad, crítica, análisis y rigidez.'
      }else if(propiedadMayorHabilidades === 'D'){
        msjHabilidad = 'Defensa y Seguridad'
        textCarreraHabilidad='Carreras que involucran la justicia, equidad, colaboración, espíritu de equipo y liderazgo. Contás con aptitudes como la búsqueda de riesgos, solidaridad, valentía, agresividad y persuasión.'
      }else if(propiedadMayorHabilidades === 'E'){
        msjHabilidad = 'Ciencias Agrarias y Naturales'
        textCarreraHabilidad='Carreras que involucran la clasificación, numeración, análisis y síntesis, organización, orden e investigación. Contás con aptitudes como método, análisis, observación, introversión, paciencia y seguridad.'
      }

      

      const carrerasPosibles = (propiedadMayorHabilidades:string, propiedadMayorIntereses:string, area:string) => {
        console.log(propiedadMayorHabilidades, propiedadMayorIntereses);
        navigation.navigate('CarrerasScreen', {
          habilidad:propiedadMayorHabilidades,
          intereses: propiedadMayorIntereses,
          area
        })
      }


  if (currentQuestion >= surveyData.length) {
    // La encuesta ha terminado, muestra un mensaje de gracias
    return (
      <ScrollView style={{ width: "100%", backgroundColor: "#130C34" }}>
        <View style={styles.container}>
            <View style={styles.container_test}>
                <Text style={styles.title}>Intereses</Text>
                <Text style={styles.thankYou}>Su area con mayor votos por interes es {msjInteres}</Text>
                <Text style={styles.thankYou}>{textCarreraInteres}</Text>
                <Pressable style={styles.button} onPress={() => carrerasPosibles(propiedadMayorHabilidades, propiedadMayorIntereses, 'interes')}>
                    <Text style={styles.text_button}>CARRERAS POSIBLES</Text>
                </Pressable>
            </View>
            <View style={styles.container_test}>
                <Text style={styles.title}>HABILIDADES</Text>
                <Text style={styles.thankYou}>Su area con mayor votos por habilidad es: {msjHabilidad}</Text>
                <Text style={styles.thankYou}>{textCarreraHabilidad}</Text>
                <Pressable style={styles.button} onPress={() => carrerasPosibles(propiedadMayorHabilidades, propiedadMayorIntereses, 'habilidad')}>
                    <Text style={styles.text_button}>CARRERAS POSIBLES</Text>
                </Pressable>
            </View>
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      <Survey
        id={surveyData[currentQuestion].id} 
        //obj[numero(posicion del array) que le llega x estado].id = surveyData[0].id = 1
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
    alignItems: 'center',
    width:'100%',
    backgroundColor: '#130C34',
  },
  container_test:{
    marginTop:"8%",
    borderRadius:15,
    width:"90%",
    alignItems:"center",
    textAlign:"center",
    backgroundColor:"rgb(40, 32, 86)",
},
  thankYou: {
    color:"rgba(222, 211, 244, 1)",
    fontWeight:"600",
    fontSize:14,
    width:"85%",
    alignItems: 'center',
    margin:"3%",
    fontFamily:'Poppins_Regular'
  },
  title:{
    color:"rgba(222, 211, 244, 1)",
    fontWeight:"600",
    fontSize:17,
    width:"85%",
    alignItems: 'center',
    marginTop:'5%',
    marginBottom:'2%',
    fontFamily:'Poppins_Regular'
  },
  button:{
    //marginTop: 35,
    width: "80%",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "rgba(6, 214, 221, 0.72) 0%, rgba(6, 214, 221, 0.08) ",
    padding:"3%",
    marginBottom:"3%"
  },
  text_button:{
    fontSize: 18,
    color:"#DED3F4",
    fontFamily:'Poppins_ExtraBold'
  }
});

export default SurveyScreen;
