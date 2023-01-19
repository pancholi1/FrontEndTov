import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React from "react";
import { Field, Formik } from "formik";

const arrayForm = [
  {
    ask: " ¿ Primera Pregunta?",
    id: 2,
    answers: [
      {
        answer: "Primera Respuesta",
        id: 2,
      },
      {
        answer: "Segunda Respuesta",
        id: 3,
      },
      {
        answer: "Tercera Respuesta",
        id: 4,
      },
    ],
  },
  {
    ask: " ¿ Segunda Pregunta?",
    id: 2,
    answers: [
      {
        answer: "Primera Respuesta",
        id: 5,
      },
      {
        answer: "Segunda Respuesta",
        id: 6,
      },
      {
        answer: "Tercera Respuesta",
        id: 7,
      },
    ],
  },
];
const Personality = () => {
  const mostrarAsk = arrayForm.map((ask, i) => {
    const mostrarAnswers = ask.answers.map((answer, e) => {
      return (
        <Text key={e}>
          {e}. {answer.answer}
          <Field
            type="radio"
            name={`answer_${i}`}
            value={`value${answer.id}`}
          />
        </Text>
      );
    });
    return (
      <View key={i}>
        <Text style={styles.login_title}>
          {i}. {ask.ask}asdsa
        </Text>
      </View>
    );
  });

  return (
    <View style={styles.container_answer_row}>
      <Text style={styles.login_title}>asdsa</Text>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {mostrarAsk}

            <Button onPress={() => handleSubmit()} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Personality;

const styles = StyleSheet.create({
  container_answer_row: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  login_title: {
    marginTop: 30,

    fontWeight: "800",
    fontSize: 38,
    color: "#ca8941",
  },
});
