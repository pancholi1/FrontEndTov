import { LinearGradient } from 'expo-linear-gradient';
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { QuestionTest } from '../../components/5Grandes';
import { gradients } from '../../constants/Gradients';
import { database } from '../../firebase-config';
import { useAppDispatch, useAppSelector } from '../../navigation/redux/hooks';
import { setUser } from '../../navigation/redux/slices/user';
import { User } from '../../navigation/redux/store/store';
import { data } from './question5Grandes';

interface PropPorcentajes{
  info: string[];
}

const Test5Grandes = () => {
  
  const user = useAppSelector(User);
  const dispatch = useAppDispatch();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [count, setCount] = useState<object>({})

  const [informacion, setInformacion] = useState<PropPorcentajes>()

  useEffect(() => {
    if(user.user.data.info){
      setInformacion(user.user.data.info)
    }
  },[user.user])


    const handleAnswered = (contador: object) => {
        setCurrentQuestion(currentQuestion + 1);
        setCount(contador)
    };

    if(currentQuestion >= data.length){
      console.log('informacion', informacion);

      const suma = Object.values(count).reduce((total, valor) => total + valor, 0);
      const percentages = Object.fromEntries(
        Object.entries(count).map(([key, value]) => [
          key,
          ((value / suma) * 100).toFixed(2),]));
      const porcentajes = Object.entries(percentages).map(([key, value]) => (
        value
        // <Text  style={styles.porcentaje} key={key}>
        //   {value}%
        // </Text>
        ))
        console.log('porcentajes', porcentajes);

        const info = async () => {
          if(user){
            const q = query(
              collection(database, "people"),
               where("email", "==", user.user.data.email)
               );
              const qGet = await getDocs(q);

           if (!qGet.empty) {
                const docs = qGet.docs[0];
                 const docId = docs.id;
                 console.log('docid', docId);
                 await updateDoc(doc(database, "people", docId), {
                   info: porcentajes
                 }) 
                dispatch(
                  setUser({
                    ...user,
                    info: porcentajes
                  })
                );
                //setInformacion(porcentajes)
              }
            };
          }
          info();

      };

        return user.user.data.info && informacion ? (
             <ScrollView style={{ width: '100%', backgroundColor:"#130C34" }}>
             <View >
             <LinearGradient
             colors={gradients.inputs}
             start={{ x: 2, y: 2 }}
             end={{ x: 0, y: 0 }}
             style={styles.container_general}
             >
               <Text style={styles.title}>APERTURA A LA EXPERIENCIA</Text>
               <Text style={styles.porcentaje}>{informacion[0] + '%'}</Text>
               <Text style={styles.text}> Buscar nuevas experiencias y habilidades intelectuales, interesarse por distintos temas, apreciar el arte y ser sensibles a la belleza. Son originales e imaginativos, curiosos por el medio externo e interno, interesados por ideas nuevas y valores no convencionales.
               </Text>
               </LinearGradient>
             </View>
   
             <View > 
             <LinearGradient
             colors={gradients.inputs}
             start={{ x: 2, y: 2 }}
             end={{ x: 0, y: 0 }}
             style={styles.container_general}
           >
               <Text style={styles.title}>EXTROVERSIÓN</Text>
               <Text style={styles.porcentaje}>{informacion[1] + '%'}</Text>
               <Text style={styles.text}>Pronunciado compromiso o unión con el mundo externo, ser muy sociables, asertivas, habladoras y necesitan constante estimulación (sensaciones nuevas).</Text>
               </LinearGradient>
             </View>
   
             <View >
             <LinearGradient
             colors={gradients.inputs}
             start={{ x: 2, y: 2 }}
             end={{ x: 0, y: 0 }}
             style={styles.container_general}
           >
               <Text style={styles.title}>AMABILIDAD</Text>
               <Text style={styles.porcentaje}>{informacion[2] + '%'}</Text>
               <Text style={styles.text}>Ser cordiales, amables, cooperativas, compasivas, altruistas, consideradas, confiadas y solidarias.</Text>
               </LinearGradient>
             </View>
   
             <View >
             <LinearGradient
             colors={gradients.inputs}
             start={{ x: 2, y: 2 }}
             end={{ x: 0, y: 0 }}
             style={styles.container_general}
           >
               <Text style={styles.title}>Neuroticismo</Text>
               <Text style={styles.porcentaje}>{informacion[3] + '%'}</Text>
               <Text style={styles.text}>Inestabilidad emocional, ansiedad, preocupación, baja autoestima, baja tolerancia al estrés, poca sociabilidad.</Text>
               </LinearGradient>
             </View>
   
             <View >
             <LinearGradient
             colors={gradients.inputs}
             start={{ x: 2, y: 2 }}
             end={{ x: 0, y: 0 }}
             style={styles.container_general}
           >
               <Text style={styles.title}>ESCRUPULOSIDAD</Text>
               <Text style={styles.porcentaje}>{informacion[4] + '%'}</Text>
               <Text style={styles.text}>Autocontrol, tanto en sus impulsos como también en la planificación, organización y ejecución de tareas. Está asociada además con la responsabilidad, confiabilidad, puntualidad, honestidad y escrupulosidad.</Text>
               </LinearGradient>
             </View>
           </ScrollView>
        ) : (
             <View style={styles.container}>
              <QuestionTest
                id={data[currentQuestion].id}
               question={data[currentQuestion].question}
               onAnswered={handleAnswered}
               dimension={data[currentQuestion].dimension}
               dimensiones={data[currentQuestion].dimensiones}
               />
              </View>
              );
        
      //  return(
      //    <ScrollView style={{ width: '100%', backgroundColor:"#130C34" }}>
      //      <View >
      //      <LinearGradient
      //      colors={gradients.inputs}
      //      start={{ x: 2, y: 2 }}
      //      end={{ x: 0, y: 0 }}
      //      style={styles.container_general}
      //      >
      //        <Text style={styles.title}>APERTURA A LA EXPERIENCIA</Text>
      //        <Text style={styles.porcentaje}>{percentages.A + '%'}</Text>
      //        <Text style={styles.text}> Buscar nuevas experiencias y habilidades intelectuales, interesarse por distintos temas, apreciar el arte y ser sensibles a la belleza. Son originales e imaginativos, curiosos por el medio externo e interno, interesados por ideas nuevas y valores no convencionales.
      //        </Text>
      //        </LinearGradient>
      //      </View>
 
      //      <View > 
      //      <LinearGradient
      //      colors={gradients.inputs}
      //      start={{ x: 2, y: 2 }}
      //      end={{ x: 0, y: 0 }}
      //      style={styles.container_general}
      //    >
      //        <Text style={styles.title}>EXTROVERSIÓN</Text>
      //        <Text style={styles.porcentaje}>{percentages.C + '%'}</Text>
      //        <Text style={styles.text}>Pronunciado compromiso o unión con el mundo externo, ser muy sociables, asertivas, habladoras y necesitan constante estimulación (sensaciones nuevas).</Text>
      //        </LinearGradient>
      //      </View>
 
      //      <View >
      //      <LinearGradient
      //      colors={gradients.inputs}
      //      start={{ x: 2, y: 2 }}
      //      end={{ x: 0, y: 0 }}
      //      style={styles.container_general}
      //    >
      //        <Text style={styles.title}>AMABILIDAD</Text>
      //        <Text style={styles.porcentaje}>{percentages.E + '%'}</Text>
      //        <Text style={styles.text}>Ser cordiales, amables, cooperativas, compasivas, altruistas, consideradas, confiadas y solidarias.</Text>
      //        </LinearGradient>
      //      </View>
 
      //      <View >
      //      <LinearGradient
      //      colors={gradients.inputs}
      //      start={{ x: 2, y: 2 }}
      //      end={{ x: 0, y: 0 }}
      //      style={styles.container_general}
      //    >
      //        <Text style={styles.title}>Neuroticismo</Text>
      //        <Text style={styles.porcentaje}>{percentages.N + '%'}</Text>
      //        <Text style={styles.text}>Inestabilidad emocional, ansiedad, preocupación, baja autoestima, baja tolerancia al estrés, poca sociabilidad.</Text>
      //        </LinearGradient>
      //      </View>
 
      //      <View >
      //      <LinearGradient
      //      colors={gradients.inputs}
      //      start={{ x: 2, y: 2 }}
      //      end={{ x: 0, y: 0 }}
      //      style={styles.container_general}
      //    >
      //        <Text style={styles.title}>ESCRUPULOSIDAD</Text>
      //        <Text style={styles.porcentaje}>{percentages.O + '%'}</Text>
      //        <Text style={styles.text}>Autocontrol, tanto en sus impulsos como también en la planificación, organización y ejecución de tareas. Está asociada además con la responsabilidad, confiabilidad, puntualidad, honestidad y escrupulosidad.</Text>
      //        </LinearGradient>
      //      </View>
      //    </ScrollView>
      //  )
     
  // return (
  //   <View style={styles.container}>
  //       <QuestionTest
  //              id={data[currentQuestion].id}
  //              question={data[currentQuestion].question}
  //              onAnswered={handleAnswered}
  //              dimension={data[currentQuestion].dimension}
  //              dimensiones={data[currentQuestion].dimensiones}
  //              />

  //   </View>
  // )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width:'100%',
        backgroundColor: '#130C34',
      },
      container_general:{
        width:'90%',
        padding:'8%',
        backgroundColor:"rgb(40, 32, 86)",
        borderRadius:15,
        margin:'5%',
        textAlign:'center',
      },
      title:{
        color:'#DED3F4',
        fontFamily:"Poppins_Regular",
        fontSize:20,
        textAlign:'center',
      },
      porcentaje:{
        color:'#06D6DD',
        fontSize:20,
        fontFamily:"Poppins_Regular",
        textAlign:'center',
      },
      text:{
        color:'#DED3F4',
        fontFamily:"Poppins_Regular",
        fontSize:14,
        textAlign:"center",
      },
})
export default Test5Grandes