interface SurveyData {
    id: number;
    question: string;
    resultado: string;
    area: string;
  }

const surveyData: SurveyData[] = [
    {
        question:"¿Aceptarías trabajar escribiendo artículos en la sección económica de un diario?",
        id:1,
        resultado:"intereses",
        area:'C',
    },
    {
        question:"¿Te ofrecerías para organizar la despedida de soltero de uno de tus amigos?",
        id:2,
        resultado:"habilidades",
        area:'C',
    },
    {
        question:"¿Te gustaría dirigir un proyecto de urbanización en tu ciudad??",
        id:3,
        resultado:"intereses",
        area:'A',
    },
    {
        question:"¿Ante una frustración siempre opones un pensamiento positivo?",
        id:4,
        resultado:"habilidades",
        area:'S',
         
    },
    {
        question:"¿Te dedicarías a socorrer a personas accidentadas o atacadas por asaltantes?",
        id:5,
        resultado:"intereses",
        area:'D',
         
    },
    {
        question:"¿Cuando eras pequeño te interesaba saber cómo estaban construidos los juguetes?",
        id:6,
        resultado:"intereses",
        area:'I',
         
    },
    {
        question:"¿Te interesan más los misterios de la naturaleza que los secretos de la tecnología?",
        id:7,
        resultado:"habilidades",
        area:'E',
         
    },
    {
        question:"¿Escuchas atentamente los problemas que te plantean tus amigos?",
        id:8,
        resultado:"intereses",
        area:'S',
         
    },
    {
        question:"¿Te ofrecerías para explicar a tus compañeros un determinado tema que ellos no entendieron?",
        id:9,
        resultado:"intereses",
        area:'H',
    },
    {
        question:"¿Eres exigente y crítico con tu equipo de trabajo?",
        id:10,
        resultado:"habilidades",
        area:'I',
         
    },
    {
        question:"¿Te atrae armar rompecabezas o puzzles?",
        id:11,
        resultado:"intereses",
        area:'A',
         
    },
    {
        question:"¿Puedes establecer la diferencia conceptual entre macroeconomía y microeconomía?",
        id:12,
        resultado:"intereses",
        area:'C',
    },
    {
        question:"¿Usar uniforme te hace sentir distinto, importante?",
        id:13,
        resultado:"habilidades",
        area:'D',
         
    },
    {
        question:"¿Participarías como profesional en un espectáculo de acrobacia aérea?",
        id:14,
        resultado:"intereses",
        area:'D',
         
    },
    {
        question:"¿Organizas bien tu dinero?",
        id:15,
        resultado:"habilidades",
        area:'C',
    },
    {
        question:"¿Convences fácilmente a otras personas sobre la validez de tus argumentos?",
        id:16,
        resultado:"intereses",
        area:'S',
         
    },
    {
        question:"¿Estás informado sobre los nuevos descubrimientos que se están realizando en la teoría del Big-Bang?",
        id:17,
        resultado:"intereses",
        area:'E',
         
    },
    {
        question:"¿Ante una situación de emergencia actúas rápidamente?",
        id:18,
        resultado:"habilidades",
        area:'D',
         
    },
    {
        question:"¿Cuando tienes que resolver algún problema matemático perseveras hasta encontrar la solución?",
        id:19,
        resultado:"intereses",
        area:'I',
         
    },
    {
        question:"¿Si te convocara tu club preferido para planificar, organizar y dirigir un campo de deportes, aceptarías?",
        id:20,
        resultado:"intereses",
        area:'C',
    },
    {
        question:"¿Eres el que pone un toque de alegría en las fiestas?",
        id:21,
        resultado:"intereses",
        area:'A',
         
    },
    {
        question:"¿Crees que los detalles son tan importantes como el todo?",
        id:22,
        resultado:"habilidades",
        area:'A',
         
    },
    {
        question:"¿Te sentirías a gusto trabajando en un ámbito hospitalario?",
        id:23,
        resultado:"intereses",
        area:'S',
         
    },
    {
        question:"¿Te gustaría participar para mantener el orden ante grandes catástrofes?",
        id:24,
        resultado:"intereses",
        area:'D',
         
    },
    {
        question:" ¿Pasarías varias horas leyendo algún libro de tu interés?",
        id:25,
        resultado:"intereses",
        area:'H',
    },
    {
        question:"¿Planificas detalladamente tus trabajos antes de empezar?",
        id:26,
        resultado:"habilidades",
        area:'I',
         
    },
    // {
    //     question:"¿Entablas una relación casi personal con tu computadora?",
    //     id:27,
    //     resultado:"intereses",
    //     area:'I',
         
    // },
    // {
    //     question:"¿Disfrutas modelando con arcilla?",
    //     id:28,
    //     resultado:"intereses",
    //     area:'A',
         
    // },
    // {
    //     question:"¿Ayudas habitualmente a los no videntes a cruzar la calle?",
    //     id:29,
    //     resultado:"habilidades",
    //     area:'S',
         
    // },
    // {
    //     question:"¿Consideras importante que desde la escuela se fomente la actitud crítica?",
    //     id:30,
    //     resultado:"habilidades",
    //     area:'H',
    // },
    // {
    //     question:"¿Aceptarías que las mujeres formasen parte de las fuerzas armadas bajo las mismas normas que los hombres?",
    //     id:31,
    //     resultado:"intereses",
    //     area:'D',
         
    // },
    // {
    //     question:"¿Te gustaría estudiar las enfermedades a través del microscopio?",
    //     id:32,
    //     resultado:"intereses",
    //     area:'E',
         
    // },
    // {
    //     question:"¿Participarías en una campaña sobre la prevención del VIH?",
    //     id:33,
    //     resultado:"intereses",
    //     area:'S',
         
    // },
    // {
    //     question:"¿Te interesan los temas relacionados al pasado y a la evolución del hombre?",
    //     id:34,
    //     resultado:"intereses",
    //     area:'H',
    // },
    // {
    //     question:"¿Te incluirías en una investigación sobre los movimientos sísmicos?",
    //     id:35,
    //     resultado:"intereses",
    //     area:'E',
         
    // },
    // {
    //     question:"¿Dedicas algún día de la semana a realizar ejercicio?",
    //     id:36,
    //     resultado:"intereses",
    //     area:'A',
         
    // },
    // {
    //     question:"¿Te gusta la acción?",
    //     id:37,
    //     resultado:"intereses",
    //     area:'D',
         
    // },
    // {
    //     question:"¿Te gustaría trabajar en la NASA?",
    //     id:38,
    //     resultado:"intereses",
    //     area:'I',
         
    // },
    // {
    //     question:"¿Te gusta más el trabajo manual que el intelectual?",
    //     id:39,
    //     resultado:"habilidades",
    //     area:'A',
         
    // },
    // {
    //     question:"¿Estarías dispuesto a renunciar al ocio por tu trabajo?",
    //     id:40,
    //     resultado:"habilidades",
    //     area:'S',
         
    // },
    // {
    //     question:"¿Participarías en una investigación sobre la violencia en el fútbol?",
    //     id:41,
    //     resultado:"intereses",
    //     area:'H',
    // },
    // {
    //     question:"¿Te gustaría ser becario en un laboratorio?",
    //     id:42,
    //     resultado:"intereses",
    //     area:'E',
         
    // },
    // {
    //     question:"¿Arriesgarías tu vida para salvar la de alguien a quien no conoces?",
    //     id:43,
    //     resultado:"habilidades",
    //     area:'D',
         
    // },
    // {
    //     question:"¿Te gustaría hacer un curso de socorrismo y primeros auxilios?",
    //     id:44,
    //     resultado:"intereses",
    //     area:'S',
         
    // },
    // {
    //     question:"¿Cuando no consigues algo, ¿eres capaz de volver a empezar hasta que lo consigues?",
    //     id:45,
    //     resultado:"intereses",
    //     area:'A',
         
    // },
    // {
    //     question:"¿Te planificas bien tus horarios?",
    //     id:46,
    //     resultado:"habilidades",
    //     area:'C',
    // },
    // {
    //     question:"¿Te gustaría aprender a fabricar y reparar máquinas?",
    //     id:47,
    //     resultado:"intereses",
    //     area:'I',
         
    // },
    // {
    //     question:"¿Te importaría viajar y alejarte de tu familia por motivos de trabajo?",
    //     id:48,
    //     resultado:"intereses",
    //     area:'D',
         
    // },
    // {
    //     question:"¿Te importaría vivir y trabajar en una granja?",
    //     id:49,
    //     resultado:"intereses",
    //     area:'E',
         
    // },
    // {
    //     question:"¿Para ti es importante compartir tus ideas y que sean tenidas en cuenta?",
    //     id:50,
    //     resultado:"intereses",
    //     area:'A',
         
    // },
    // {
    //     question:"¿Te resulta fácil coordinar un grupo de trabajo?",
    //     id:51,
    //     resultado:"habilidades",
    //     area:'C',
    // },
    // {
    //     question:" ¿Te gustaría estudiar Biología?",
    //     id:52,
    //     resultado:"intereses",
    //     area:'S',
         
    // },
    // {
    //     question:"¿Te sentirías bien desempeñando un puesto de director comercial?",
    //     id:53,
    //     resultado:"intereses",
    //     area:'C',
    // },
    // {
    //     question:"¿Te gustaría participar en un proyecto de desarrollo de tu localidad?",
    //     id:54,
    //     resultado:"intereses",
    //     area:'I',
         
    // },
    // {
    //     question:" ¿Tienes interés por conocer las causas de los fenómenos, aunque no estén relacionados con tu vida?",
    //     id:55,
    //     resultado:"habilidades",
    //     area:'E',
         
    // },
    // {
    //     question:"¿Alguna vez has encontrado algún filósofo o escritor que expresara con antelación lo que tú habías pensado?",
    //     id:56,
    //     resultado:"intereses",
    //     area:'H',
    // },
    // {
    //     question:"¿Te gustaría que te regalaran un instrumento musical?",
    //     id:57,
    //     resultado:"intereses",
    //     area:'A',
         
    // },
    // {
    //     question:" ¿Aceptarías colaborar con el cumplimiento de las normas en lugares públicos?",
    //     id:58,
    //     resultado:"intereses",
    //     area:'D',
         
    // },
    // {
    //     question:"¿Crees que tus ideas son importantes y haces lo posible para ponerlas en práctica?",
    //     id:59,
    //     resultado:"habilidades",
    //     area:'I',
         
    // },
    // {
    //     question:"¿Cuándo se rompe un electrodoméstico, intentas repararlo?",
    //     id:60,
    //     resultado:"intereses",
    //     area:'I',
         
    // },
    // {
    //     question:"¿Formarías parte de un grupo ecologista?",
    //     id:61,
    //     resultado:"intereses",
    //     area:'E',
         
    // },
    // {
    //     question:"¿Te gustan las revistas científicas relacionadas con la salud?",
    //     id:62,
    //     resultado:"intereses",
    //     area:'S',
         
    // },
    // {
    //     question:"¿Te parece importante preservar las raíces culturales de tu país?",
    //     id:63,
    //     resultado:"habilidades",
    //     area:'H',
    // },
    // {
    //     question:"¿Te gustaría trabajar por una distribución más justa de la riqueza?",
    //     id:64,
    //     resultado:"intereses",
    //     area:'C',
    // },
    // {
    //     question:"¿Te gustaría realizar tareas de mantenimiento en la tripulación de un barco?",
    //     id:65,
    //     resultado:"intereses",
    //     area:'D',
         
    // },
    // {
    //     question:"¿Estás a favor de la compra de armamento en tu país?",
    //     id:66,
    //     resultado:"habilidades",
    //     area:'D',
         
    // },
    // {
    //     question:"¿La libertad y la justicia son valores fundamentales en tu vida?",
    //     id:67,
    //     resultado:"intereses",
    //     area:'H',
    // },
    // {
    //     question:"¿Te gustaría trabajar como becario en una industria de control de calidad de la alimentación?",
    //     id:68,
    //     resultado:"intereses",
    //     area:'E',
         
    // },
    // {
    //     question:"¿Consideras que la salud pública debe ser prioritaria y gratuita?",
    //     id:69,
    //     resultado:"habilidades",
    //     area:'S',
         
    // },
    // {
    //     question:"¿Te interesaría investigar sobre alguna nueva vacuna?",
    //     id:70,
    //     resultado:"intereses",
    //     area:'S',
         
    // },
    // {
    //     question:"Si tienes que trabajar en equipo ¿prefieres el rol de coordinador?",
    //     id:71,
    //     resultado:"intereses",
    //     area:'C',
    // },
    // {
    //     question:"En una discusión entre amigos ¿sueles hacer de mediador?",
    //     id:72,
    //     resultado:"habilidades",
    //     area:'H',
    // },
    // {
    //     question:"¿Estás de acuerdo con la formación de un cuerpo de soldados profesionales?",
    //     id:73,
    //     resultado:"intereses",
    //     area:'D',
         
    // },
    // {
    //     question:"¿Lucharías por una causa justa hasta las últimas consecuencias?",
    //     id:74,
    //     resultado:"intereses",
    //     area:'H',
    // },
    // {
    //     question:"¿Te gustaría investigar científicamente sobre cultivos agrícolas?",
    //     id:75,
    //     resultado:"intereses",
    //     area:'I',
         
    // },
    // {
    //     question:"¿Serías capaz de transformar una prenda pasada de moda, ante un acontecimiento imprevisto?",
    //     id:76,
    //     resultado:"habilidades",
    //     area:'A',
         
    // },
    // {
    //     question:"¿Visitarías un observatorio astronómico para conocer cómo funciona?",
    //     id:77,
    //     resultado:"intereses",
    //     area:'E',
         
    // },
    // {
    //     question:"¿Te gustaría dirigir el área de importación y exportación de una empresa?",
    //     id:78,
    //     resultado:"intereses",
    //     area:'C',
    // },
    // {
    //     question:"¿Te da vergüenza entrar en un lugar nuevo con gente desconocida?",
    //     id:79,
    //     resultado:"habilidades",
    //     area:'E',
         
    // },
    // {
    //     question:"¿Te gustaría trabajar con niños?",
    //     id:80,
    //     resultado:"intereses",
    //     area:'H',
    // },
    // {
    //     question:"¿Podrías diseñar un alfiler en una campaña contra el SIDA?",
    //     id:81,
    //     resultado:"habilidades",
    //     area:'A',
         
    // },
    // {
    //     question:"¿Podrías dirigir un grupo de teatro independiente?",
    //     id:82,
    //     resultado:"habilidades",
    //     area:'A',
         
    // },
    // {
    //     question:"¿Enviarías tu currículum a una empresa automotriz como gerente del área de producción?",
    //     id:83,
    //     resultado:"intereses",
    //     area:'I',
         
    // },
    // {
    //     question:"¿Participarías en un grupo de defensa internacional de una fuerza armada?",
    //     id:84,
    //     resultado:"intereses",
    //     area:'D',
         
    // },
    // {
    //     question:"¿Te pagarías un curso trabajando en una empresa de auditoría?",
    //     id:85,
    //     resultado:"intereses",
    //     area:'C',
    // },
    // {
    //     question:" ¿Eres de los que defiendes causas perdidas?",
    //     id:86,
    //     resultado:"habilidades",
    //     area:'H',
    // },
    // {
    //     question:"¿Participarías con tu ayuda ante una campaña epidémica?",
    //     id:87,
    //     resultado:"intereses",
    //     area:'S',
         
    // },
    // {
    //     question:"¿Sabes que es el ADN y ARN?",
    //     id:88,
    //     resultado:"intereses",
    //     area:'E',
         
    // },
    // {
    //     question:"¿Elegirías un trabajo cuya principal herramienta fuera hablar un idioma extranjero?",
    //     id:89,
    //     resultado:"intereses",
    //     area:'H',
    // },
    // {
    //     question:"¿Trabajar con objetos te resulta más gratificante qué trabajar con personas?",
    //     id:90,
    //     resultado:"habilidades",
    //     area:'I',
         
    // },
    // {
    //     question:"¿Te resultaría gratificante ser asesor contable en una empresa de reconocido prestigio?",
    //     id:91,
    //     resultado:"intereses",
    //     area:'C',
    // },
    // {
    //     question:"¿Te ofrecerías para cuidar a un enfermo?",
    //     id:92,
    //     resultado:"intereses",
    //     area:'S',
         
    // },
    // {
    //     question:"¿Te gustaría investigar sobre los agujeros negros?",
    //     id:93,
    //     resultado:"intereses",
    //     area:'E',
         
    // },
    // {
    //     question:"¿Crees que es mejor trabajar individualmente que en equipo?",
    //     id:94,
    //     resultado:"habilidades",
    //     area:'E',
         
    // },
    // {
    //     question:"Dedicarías parte de tu tiempo a trabajar en una ONG",
    //     id:95,
    //     resultado:"intereses",
    //     area:'H',
    // },
    // {
    //     question:"Cuando eliges ropa o decoras tu casa, ¿tienes en cuenta los colores, los estilos,..?",
    //     id:96,
    //     resultado:"intereses",
    //     area:'A',
         
    // },
    // {
    //     question:"¿Te gustaría dirigir una obra hidroeléctrica?",
    //     id:97,
    //     resultado:"intereses",
    //     area:'I',
         
    // },
    // {
    //     question:" ¿Sabes qué es el PBI?",
    //     id:98,
    //     resultado:"intereses",
    //     area:'C',
    // },   
  //Agrega más preguntas aquí
];

export default surveyData;