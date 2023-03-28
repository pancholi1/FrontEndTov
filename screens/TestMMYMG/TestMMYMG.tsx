import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RootStackScreenProps } from '../../types';
import ComponentQuestion from './ComponentQuestion';
import { questions2 } from './question';

import { LinearGradient } from "expo-linear-gradient";
import { gradients } from "../../constants/Gradients";




const TestMMYMG = ({navigation}: RootStackScreenProps<"TestMMYMG">) => {
    const [answers, setAnswers] = useState<boolean[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [countQuestion, setCountQuestion] = useState({
        CSH:0,
        EAF:0,
        CT:0,
        AC:0,
        CB:0,
    })


    const handleAnswered = (answer: boolean) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = answer;
        setAnswers(newAnswers);
        setCurrentQuestion(currentQuestion + 1);

        if(answer === true){
            if(questions2[currentQuestion].area === 'Ciencias Sociales y Humanística'){
                setCountQuestion({...countQuestion, CSH:countQuestion.CSH + 1})
            }
            if(questions2[currentQuestion].area === 'Económica, Administrativa y Financiera'){
                setCountQuestion({...countQuestion, EAF:countQuestion.EAF + 1})
            }
            if(questions2[currentQuestion].area === 'Ciencia y Tecnología'){
                setCountQuestion({...countQuestion, CT:countQuestion.CT + 1})
            }
            if(questions2[currentQuestion].area === 'Arte y Creatividad'){
                setCountQuestion({...countQuestion, AC:countQuestion.AC + 1})
            }
            if(questions2[currentQuestion].area === 'Ciencias Ecológicas, Biológicas y de la Salud'){
                setCountQuestion({...countQuestion, CB:countQuestion.CB + 1})
            }
        }
        
    }

    const sortedArr = Object.entries(countQuestion).sort((a, b) => b[1] - a[1]);
    const resultObj = Object.fromEntries(sortedArr.slice(0, 2));
    

    let area1 = Object.keys(resultObj)[0]
    let area2 = Object.keys(resultObj)[1]

    let msjArea1 
    let carrerasArea1

    if(area1 === 'CSH'){
        msjArea1 = 'Ciencias Sociales y Humanística',
        carrerasArea1 ='Psicología, trabajo social, idiomas, educación internacional, historia y geografía, periodismo, periodismo digital, derecho, ciencias políticas, sociología, antropología, arqueología, gestión social y desarrollo, consejería familiar, comunicación y publicidad, administración educativa, educación especial, psicopedagogía, estimulación temprana, traducción simultánea, lingüística, educación de párvulos, bibliotecología, museología, relaciones internacionales y diplomacia, comunicación social con énfasis en márquetin y gestión de empresas, redacción creativa y publicitaria, relaciones públicas y comunicación organizacional, hotelería y turismo, teología, institución sacerdotal.'
    }
    if(area1 === 'EAF'){
        msjArea1 = 'Económica, Administrativa y Financiera',
        carrerasArea1='Administración de empresas, contabilidad, auditoría, ventas, márquetin estratégico, gestión y negocios internacionales, gestión empresarial, gestión financiera, ingeniería comercial, comercio exterior, banca y finanzas, gestión de recursos humanos, comunicaciones integradas en márquetin, administración de empresas ecoturísticas y de hospitalidad, ciencias económicas y financieras, administración y ciencias políticas, ciencias empresariales, comercio electrónico, emprendimiento, gestión de organismos públicos (municipios, ministerios, etc.), gestión de centros educativos.'
    }
    if(area1 === 'CT'){
        msjArea1 = 'Ciencia y Tecnología',
        carrerasArea1= 'Ingeniería en sistemas computacionales, geología, ingeniería civil, arquitectura, electrónica, telemática, telecomunicaciones, ingeniería mecatrónica (robótica), imagen y sonido, minas, petróleo y metalurgia, ingeniería mecánica, ingeniería industrial, física, matemáticas aplicadas, ingeniería en estadística, ingeniería automotriz, biotecnología ambiental, ingeniería geográfica, carreras militares (marina, aviación, ejército), ingeniería en costas y obras portuarias, estadística informática, programación y desarrollo de sistemas, tecnología en informática educativa, astronomía, ingeniería en ciencias geográficas y desarrollo sustentable.'
    }
    if(area1 === 'AC'){
        msjArea1 = 'Arte y Creatividad',
        carrerasArea1='Diseño gráfico, diseño y decoración de interiores, diseño de jardines, diseño de modas, diseño de joyas, artes plásticas (pintura, escultura, danza, teatro, artesanía, cerámica), dibujo publicitario, restauración y museología, modelaje, fotografía, gestión gráfica y publicitaria, locución y publicidad, actuación, camarografía, arte industrial, producción audiovisual y multimedia, comunicación y producción en radio y televisión, diseño del paisaje, cine y video, comunicación escénica para televisión, música.'
    }
    if(area1 === 'CB'){
        msjArea1 = 'Ciencias Ecológicas, Biológicas y de la Salud',
        carrerasArea1='Biología, bioquímica, farmacia, biología marina, bioanálisis, biotecnología, ciencias ambientales, zootecnia, veterinaria, nutrición y estética, cosmetología, dietética y estética, medicina, obstetricia, urgencias médicas, odontología, enfermería, tecnología, oceanografía y ciencias ambientales, agronomía, horticultura y fruticultura, ingeniería de alimentos, gastronomía, cultura física, deportes y rehabilitación, gestión ambiental, ingeniería ambiental, optometría, homeopatía, reflexología.'
    }
 
    let msjArea2 
    let carrerasArea2

    if(area2 === 'CSH'){
        msjArea2 = 'Ciencias Sociales y Humanística',
        carrerasArea2='Psicología, trabajo social, idiomas, educación internacional, historia y geografía, periodismo, periodismo digital, derecho, ciencias políticas, sociología, antropología, arqueología, gestión social y desarrollo, consejería familiar, comunicación y publicidad, administración educativa, educación especial, psicopedagogía, estimulación temprana, traducción simultánea, lingüística, educación de párvulos, bibliotecología, museología, relaciones internacionales y diplomacia, comunicación social con énfasis en márquetin y gestión de empresas, redacción creativa y publicitaria, relaciones públicas y comunicación organizacional, hotelería y turismo, teología, institución sacerdotal.'
    }
    if(area2 === 'EAF'){
        msjArea2 = 'Económica, Administrativa y Financiera',
        carrerasArea2='Administración de empresas, contabilidad, auditoría, ventas, márquetin estratégico, gestión y negocios internacionales, gestión empresarial, gestión financiera, ingeniería comercial, comercio exterior, banca y finanzas, gestión de recursos humanos, comunicaciones integradas en márquetin, administración de empresas ecoturísticas y de hospitalidad, ciencias económicas y financieras, administración y ciencias políticas, ciencias empresariales, comercio electrónico, emprendimiento, gestión de organismos públicos (municipios, ministerios, etc.), gestión de centros educativos.'
    }
    if(area2 === 'CT'){
        msjArea2 = 'Ciencia y Tecnología',
        carrerasArea2='Ingeniería en sistemas computacionales, geología, ingeniería civil, arquitectura, electrónica, telemática, telecomunicaciones, ingeniería mecatrónica (robótica), imagen y sonido, minas, petróleo y metalurgia, ingeniería mecánica, ingeniería industrial, física, matemáticas aplicadas, ingeniería en estadística, ingeniería automotriz, biotecnología ambiental, ingeniería geográfica, carreras militares (marina, aviación, ejército), ingeniería en costas y obras portuarias, estadística informática, programación y desarrollo de sistemas, tecnología en informática educativa, astronomía, ingeniería en ciencias geográficas y desarrollo sustentable.'
    }
    if(area2 === 'AC'){
        msjArea2 = 'Arte y Creatividad',
        carrerasArea2='Diseño gráfico, diseño y decoración de interiores, diseño de jardines, diseño de modas, diseño de joyas, artes plásticas (pintura, escultura, danza, teatro, artesanía, cerámica), dibujo publicitario, restauración y museología, modelaje, fotografía, gestión gráfica y publicitaria, locución y publicidad, actuación, camarografía, arte industrial, producción audiovisual y multimedia, comunicación y producción en radio y televisión, diseño del paisaje, cine y video, comunicación escénica para televisión, música.'
    }
    if(area2 === 'CB'){
        msjArea2 = 'Ciencias Ecológicas, Biológicas y de la Salud',
        carrerasArea2='Biología, bioquímica, farmacia, biología marina, bioanálisis, biotecnología, ciencias ambientales, zootecnia, veterinaria, nutrición y estética, cosmetología, dietética y estética, medicina, obstetricia, urgencias médicas, odontología, enfermería, tecnología, oceanografía y ciencias ambientales, agronomía, horticultura y fruticultura, ingeniería de alimentos, gastronomía, cultura física, deportes y rehabilitación, gestión ambiental, ingeniería ambiental, optometría, homeopatía, reflexología.'
    }

    const carrerasPosibles= (areaUno: string, areaDos: string, prop:string) => {
        navigation.navigate('CarrerasTest2',{
            areaUno: carrerasArea1,
            areaDos: carrerasArea2,
            prop
        })
    }

    if(currentQuestion >= questions2.length){

        return(
            <ScrollView style={{ width: "100%", backgroundColor: "#130C34" }}>
            <View style={styles.container}>
                <View style={styles.container_test}>
                <LinearGradient
                    colors={gradients.inputs}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    style={styles.container_test}
                    >
                    <Text style={styles.title}>1ER ÁREA OCUPACIONAL:</Text>
                    <Text style={styles.thankYou}>{msjArea1}</Text>
                    <Pressable style={styles.button} >
                    <LinearGradient
                    colors={gradients.inputs}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    style={{
                      borderRadius: 15,
                      width: "100%",
                      height: 54,
                      alignItems: "center",
                      justifyContent: "center",
                      borderColor: "#7B68A9",
                      borderWidth: 1,
                    }}
                  >
                        <Text style={styles.text_button} onPress={() => carrerasPosibles(area1, area2,'areaUno')}>CARRERAS POSIBLES</Text>
                        </LinearGradient>
                    </Pressable>
                    </LinearGradient>
                </View>
                <View style={styles.container_test}>
                <LinearGradient
                    colors={gradients.inputs}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    style={styles.container_test}
                    >
                    <Text style={styles.title}>2DA ÁREA OCUPACIONAL:</Text>
                    <Text style={styles.thankYou}>{msjArea2} </Text>
                    <Text style={styles.thankYou}></Text>
                    <Pressable style={styles.button} >
                    <LinearGradient
                    colors={gradients.inputs}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    style={{
                      borderRadius: 15,
                      width: "100%",
                      height: 54,
                      alignItems: "center",
                      justifyContent: "center",
                      borderColor: "#7B68A9",
                      borderWidth: 1,
                    }}
                  >
                        <Text style={styles.text_button} onPress={() => carrerasPosibles(area1, area2, 'areaDos')}>CARRERAS POSIBLES</Text>
                        </LinearGradient>
                    </Pressable>
                    </LinearGradient>
                </View>
            </View>
          </ScrollView>
        )
    }

  return (
        <View style={styles.container}>
            <ComponentQuestion
            id={questions2[currentQuestion].id}
            question={questions2[currentQuestion].question}
            onAnswered={handleAnswered}/>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width:'100%',
        backgroundColor: '#130C34',
      },
      container_test:{
        marginTop:"4%",
        borderRadius:15,
        width:"90%",
        alignItems:"center",
        textAlign:"center",
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
        width: "80%",
        alignItems: "center",
        borderRadius: 15,
        marginBottom:"3%"
      },
      text_button:{
        fontSize: 18,
        color:"#DED3F4",
        fontFamily:'Poppins_ExtraBold'
      }
})

export default TestMMYMG