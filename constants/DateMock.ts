interface PropsQuestions {
  ask: string;
  id: number;
  answers: {
    answer: string;
    id: number;
  }[];
}

export const arrayForm: PropsQuestions[] = [
  {
    ask: " ¿ Primera Pregunta?",
    id: 1,
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
  {
    ask: " ¿ Tercera Pregunta?",
    id: 3,
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
  {
    ask: " ¿ Cuarta Pregunta?",
    id: 4,
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
  {
    ask: " ¿ Quinta Pregunta?",
    id: 5,
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
