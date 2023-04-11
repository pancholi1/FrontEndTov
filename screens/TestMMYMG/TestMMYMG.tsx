import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RootStackScreenProps } from '../../types';
import ComponentQuestion from '../../components/MMYMG/ComponentQuestion';
import { questions2 } from './question';

import { LinearGradient } from "expo-linear-gradient";
import { gradients, gradientsButton } from "../../constants/Gradients";
import { carrerasAreaAC, carrerasAreaCB, carrerasAreaCSH, carrerasAreaCT, carrerasAreaEAF, msjAreaAC, msjAreaCB, msjAreaCSH, msjAreaCT, msjAreaEAF } from '../../constants/infoMMYMG';




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

        const areas = questions2[currentQuestion].areas //aca tengo el area de cada pregunta
        if(answer === true){
            const updateCount= {
                    ...countQuestion,
                    [areas]: countQuestion[areas] + 1,
            }
                setCountQuestion(updateCount)
        }
    }

    const sortedArr = Object.entries(countQuestion).sort((a, b) => b[1] - a[1]);
    const resultObj = Object.fromEntries(sortedArr.slice(0, 2));
    
    const area1 = Object.keys(resultObj)[0];
    const area2 = Object.keys(resultObj)[1];

    const areaInfo = {
        CSH: {msjArea: msjAreaCSH,carrerasArea: carrerasAreaCSH},
        EAF: {msjArea: msjAreaEAF,carrerasArea:carrerasAreaEAF},
        CT: {msjArea: msjAreaCT,carrerasArea: carrerasAreaCT},
        AC: {msjArea: msjAreaAC,carrerasArea: carrerasAreaAC},
        CB: {msjArea: msjAreaCB,carrerasArea: carrerasAreaCB}
    };
      
      function getAreaInfo(area: string) {
        return areaInfo[area];
      }
      
      const { msjArea: msjArea1, carrerasArea: carrerasArea1 } = getAreaInfo(area1);
      const { msjArea: msjArea2, carrerasArea: carrerasArea2 } = getAreaInfo(area2);
      
    
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