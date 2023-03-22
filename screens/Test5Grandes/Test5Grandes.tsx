import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { data } from './question5Grandes';
import QuestionTest from './QuestionTest'


const Test5Grandes = () => {
    const [answers, setAnswers] = useState<boolean[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswered = (answer: boolean) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = answer;
        setAnswers(newAnswers);
        setCurrentQuestion(currentQuestion + 1);
    }
  return (
    <View style={styles.container}>
        <QuestionTest
               id={data[currentQuestion].id}
               question={data[currentQuestion].question}
               onAnswered={handleAnswered}
               />

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
})
export default Test5Grandes