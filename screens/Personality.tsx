import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";

import { arrayForm } from "../constants/DateMock";
import { SafeAreaView } from "react-native-safe-area-context";
interface PropsQuestionsInput {
  id: number;
  answers: { id: number };
}

const Personality = () => {
  const [questionInput, setQuestionInput] = React.useState<
    PropsQuestionsInput[]
  >([]);

  const mostrarAsk = arrayForm.map((ask, i) => {
    const mostrarAnswers = ask.answers.map((answer, e) => {
      return (
        <Text key={e}>
          {e + 1}. {answer.answer}
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: questionInput.some(
                  (question) =>
                    ask.id === question.id && answer.id === question.answers.id
                )
                  ? "#6200ee"
                  : "white",
              },
            ]}
            onPress={() => {
              const newQuestion = {
                id: ask.id,
                answers: { id: answer.id },
              };
              const removeQuestionInput = questionInput.filter((question) => {
                return question.id !== newQuestion.id;
              });
              setQuestionInput([...removeQuestionInput, newQuestion]);
            }}
          ></TouchableOpacity>
        </Text>
      );
    });
    return (
      <View key={i}>
        <Text style={styles.login_title}>
          {i}. {ask.ask}
        </Text>
        {mostrarAnswers}
      </View>
    );
  });

  return (
    <View style={styles.container_answer_row}>
      <Text style={styles.login_title}>Formulario de Personalidad</Text>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>{mostrarAsk}</ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Personality;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "#f9f9f9",
  },

  container_answer_row: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  login_title: {
    marginTop: 30,

    fontWeight: "800",
    padding: 10,
    color: "#ca8941",
  },
  button: {
    padding: 15,
    margin: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#6200ee",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
