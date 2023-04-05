import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RootStackScreenProps } from '../../types';
import ComponentQuestion from '../../components/MMYMG/ComponentQuestion';
import { questions2 } from './question';

import { LinearGradient } from "expo-linear-gradient";
import { gradients, gradientsButton } from "../../constants/Gradients";




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

        const currentArea = questions2[currentQuestion].area;


        if(answer === true){
            
            // if(questions2[currentQuestion].area === 'Ciencias Sociales y Humanística'){
            //     setCountQuestion({...countQuestion, CSH:countQuestion.CSH + 1})
            // }
            // if(questions2[currentQuestion].area === 'Económica, Administrativa y Financiera'){
            //     setCountQuestion({...countQuestion, EAF:countQuestion.EAF + 1})
            // }
            // if(questions2[currentQuestion].area === 'Ciencia y Tecnología'){
            //     setCountQuestion({...countQuestion, CT:countQuestion.CT + 1})
            // }
            // if(questions2[currentQuestion].area === 'Arte y Creatividad'){
            //     setCountQuestion({...countQuestion, AC:countQuestion.AC + 1})
            // }
            // if(questions2[currentQuestion].area === 'Ciencias Ecológicas, Biológicas y de la Salud'){
            //     setCountQuestion({...countQuestion, CB:countQuestion.CB + 1})
            // }
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
        carrerasArea1 =' • Psicología, • Trabajo Social, • Idiomas, • Educación Internacional, • Historia y Geografía, • Periodismo, • Periodismo Digital, • Derecho, • Ciencias Políticas, • Sociología, • Antropología, • Arqueología, • Gestión Social y Desarrollo, • Consejería Familiar, • Comunicación y Publicidad, • Administración Educativa, • Educación Especial, • Psicopedagogía, • Estimulación Temprana, • Traducción Simultánea, • Lingüística, • Educación de Párvulos, • Bibliotecología, • Museología, • Relaciones Internacionales y Diplomacia, • Comunicación Social con énfasis en márquetin y gestión de empresas, • Redacción Creativa y Publicitaria, • Relaciones públicas y comunicación organizacional, • Hotelería y turismo, • Teología, • Institución sacerdotal.'
    }
    if(area1 === 'EAF'){
        msjArea1 = 'Económica, Administrativa y Financiera',
        carrerasArea1=' • Administración de empresas, • Contabilidad, • Auditoría, • Ventas, • Márquetin estratégico, • Gestión y negocios internacionales, • Gestión empresarial, • Gestión financiera, • Ingeniería comercial, • Comercio exterior, • Banca y finanzas, • Gestión de recursos humanos,• Comunicaciones integradas en márquetin, • Administración de empresas ecoturísticas y de hospitalidad, • Ciencias económicas y financieras, • Administración y ciencias políticas, • Ciencias empresariales, • Comercio electrónico, • Emprendimiento, • Gestión de organismos públicos (municipios, ministerios, etc.), • Gestión de centros educativos.'
    }
    if(area1 === 'CT'){
        msjArea1 = 'Ciencia y Tecnología',
        carrerasArea1= ' • Ingeniería en sistemas computacionales, • Geología, • Ingeniería civil, • Arquitectura, • Electrónica, • Telemática, • Telecomunicaciones, • Ingeniería mecatrónica (robótica), • Imagen y sonido, • Minas, • Petróleo y metalurgia, • Ingeniería mecánica, • Ingeniería industrial, • Física, • Matemáticas aplicadas, • Ingeniería en estadística, • Ingeniería automotriz, • Biotecnología ambiental, • Ingeniería geográfica, • Carreras militares (marina, aviación, ejército), • Ingeniería en costas y obras portuarias, • Estadística informática, • Programación y desarrollo de sistemas, • Tecnología en informática educativa, • Astronomía, • Ingeniería en ciencias geográficas y desarrollo sustentable.'
    }
    if(area1 === 'AC'){
        msjArea1 = 'Arte y Creatividad',
        carrerasArea1=' • Diseño gráfico, diseño y decoración de interiores, • Diseño de jardines, • Diseño de modas, • Diseño de joyas, • Artes plásticas (pintura, escultura, danza, teatro, artesanía, cerámica), • Dibujo publicitario, • Eestauración y museología, • Modelaje, • Fotografía, • Gestión gráfica y publicitaria, • Locución y publicidad, • Actuación, • Camarografía, • Arte industrial, • Producción audiovisual y multimedia, • Comunicación y producción en radio y televisión, • Diseño del paisaje, cine y video, • Comunicación escénica para televisión, • Música.'
    }
    if(area1 === 'CB'){
        msjArea1 = 'Ciencias Ecológicas, Biológicas y de la Salud',
        carrerasArea1=' • Biología, bioquímica, • Farmacia, • Biología marina, • Bioanálisis, • Biotecnología, • Ciencias ambientales, • Zootecnia, • Veterinaria, • Nutrición y estética, • Cosmetología, • Dietética y estética, • Medicina, • Obstetricia, • Urgencias médicas, • Odontología, • Enfermería, • Tecnología, • Eceanografía y ciencias ambientales, • Agronomía, • Horticultura y fruticultura, • Ingeniería de alimentos, • Gastronomía, • Cultura física, • Deportes y rehabilitación, • Gestión ambiental, • Ingeniería ambiental, • Optometría, • Homeopatía, • Reflexología.'
    }
 
    let msjArea2 
    let carrerasArea2

    if(area2 === 'CSH'){
        msjArea2 = 'Ciencias Sociales y Humanística',
        carrerasArea2=' • Psicología, • Trabajo Social, • Idiomas, • Educación Internacional, • Historia y Geografía, • Periodismo, • Periodismo Digital, • Derecho, • Ciencias Políticas, • Sociología, • Antropología, • Arqueología, • Gestión Social y Desarrollo, • Consejería Familiar, • Comunicación y Publicidad, • Administración Educativa, • Educación Especial, • Psicopedagogía, • Estimulación Temprana, • Traducción Simultánea, • Lingüística, • Educación de Párvulos, • Bibliotecología, • Museología, • Relaciones Internacionales y Diplomacia, • Comunicación Social con énfasis en márquetin y gestión de empresas, • Redacción Creativa y Publicitaria, • Relaciones públicas y comunicación organizacional, • Hotelería y turismo, • Teología, • Institución sacerdotal.'
    }
    if(area2 === 'EAF'){
        msjArea2 = 'Económica, Administrativa y Financiera',
        carrerasArea2=' • Administración de empresas, • Contabilidad, • Auditoría, • Ventas, • Márquetin estratégico, • Gestión y negocios internacionales, • Gestión empresarial, • Gestión financiera, • Ingeniería comercial, • Comercio exterior, • Banca y finanzas, • Gestión de recursos humanos,• Comunicaciones integradas en márquetin, • Administración de empresas ecoturísticas y de hospitalidad, • Ciencias económicas y financieras, • Administración y ciencias políticas, • Ciencias empresariales, • Comercio electrónico, • Emprendimiento, • Gestión de organismos públicos (municipios, ministerios, etc.), • Gestión de centros educativos.'
    }
    if(area2 === 'CT'){
        msjArea2 = 'Ciencia y Tecnología',
        carrerasArea2=' • Ingeniería en sistemas computacionales, • Geología, • Ingeniería civil, • Arquitectura, • Electrónica, • Telemática, • Telecomunicaciones, • Ingeniería mecatrónica (robótica), • Imagen y sonido, • Minas, • Petróleo y metalurgia, • Ingeniería mecánica, • Ingeniería industrial, • Física, • Matemáticas aplicadas, • Ingeniería en estadística, • Ingeniería automotriz, • Biotecnología ambiental, • Ingeniería geográfica, • Carreras militares (marina, aviación, ejército), • Ingeniería en costas y obras portuarias, • Estadística informática, • Programación y desarrollo de sistemas, • Tecnología en informática educativa, • Astronomía, • Ingeniería en ciencias geográficas y desarrollo sustentable.'
    }
    if(area2 === 'AC'){
        msjArea2 = 'Arte y Creatividad',
        carrerasArea2=' • Diseño gráfico, • Diseño y decoración de interiores, • Diseño de jardines, • Diseño de modas, • Diseño de joyas, • Artes plásticas (pintura, escultura, danza, teatro, artesanía, cerámica), • Dibujo publicitario, • Eestauración y museología, • Modelaje, • Fotografía, • Gestión gráfica y publicitaria, • Locución y publicidad, • Actuación, • Camarografía, • Arte industrial, • Producción audiovisual y multimedia, • Comunicación y producción en radio y televisión, • Diseño del paisaje, cine y video, • Comunicación escénica para televisión, • Música.'
    }
    if(area2 === 'CB'){
        msjArea2 = 'Ciencias Ecológicas, Biológicas y de la Salud',
        carrerasArea2=' • Biología, • Bioquímica, • Farmacia, • Biología marina, • Bioanálisis, • Biotecnología, • Ciencias ambientales, • Zootecnia, • Veterinaria, • Nutrición y estética, • Cosmetología, • Dietética y estética, • Medicina, • Obstetricia, • Urgencias médicas, • Odontología, • Enfermería, • Tecnología, • Eceanografía y ciencias ambientales, • Agronomía, • Horticultura y fruticultura, • Ingeniería de alimentos, • Gastronomía, • Cultura física, • Deportes y rehabilitación, • Gestión ambiental, • Ingeniería ambiental, • Optometría, • Homeopatía, • Reflexología.'
    }

    const carrerasPosibles= (areaUno: string, areaDos: string, prop:string) => {
        navigation.navigate('CarrerasMMYMGScreen',{
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
                        <Text style={styles.thankYou}>RESPUESTA DEL GRUPO</Text>
                        <Text style={styles.thankYou}>({msjArea1})</Text>
                        <Pressable style={styles.button} onPress={() => carrerasPosibles(area1, area2,'areaUno')}>
                            <LinearGradient
                            colors={gradientsButton.inputs}
                            start={{ x: 1, y: 1 }}
                            end={{ x: 0, y: 0 }}
                            style={{
                                borderRadius: 15,
                                width: "100%",
                                height: 45,
                                alignItems: "center",
                                justifyContent: "center",
                                margin:'6%'
                            }}
                            >
                                <Text style={styles.text_button} >CARRERAS POSIBLES</Text>
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
                                        <Text style={styles.thankYou}>RESPUESTA DEL GRUPO </Text>
                                        <Text style={styles.thankYou}>({msjArea2}) </Text>
                                        <Text style={styles.thankYou}></Text>
                                        <Pressable style={styles.button} onPress={() => carrerasPosibles(area1, area2, 'areaDos')}>
                                            <LinearGradient
                                            colors={gradientsButton.inputs}
                                            start={{ x: 1, y: 1 }}
                                            end={{ x: 0, y: 0 }}
                                            style={{
                                                borderRadius: 15,
                                                width: "100%",
                                                height: 45,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                margin:'6%'
                                            }}
                                            >
                                                <Text style={styles.text_button} >CARRERAS POSIBLES</Text>
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
        color:"#06D6DD",
        fontWeight:"600",
        fontSize:15,
        width:"85%",
        alignItems: 'center',
        fontFamily:'Poppins_Regular'
      },
      title:{
        color:"#DED3F4",
        fontWeight:"600",
        fontSize:20,
        width:"85%",
        alignItems: 'center',
        marginTop:'5%',
        marginBottom:'5%',
        fontFamily:'Poppins_ExtraBold'
      },
      button:{
        width: "80%",
        alignItems: "center",
        borderRadius: 15,
        margin:'1%',
        marginBottom:"5%"
      },
      text_button:{
        fontSize: 18,
        color:"#DED3F4",
        fontFamily:'Poppins_ExtraBold'
      }
})

export default TestMMYMG