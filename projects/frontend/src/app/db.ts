import { TemperTypes } from './test/interfaces'

export const DB = {
  "strength": [
    {
      "a": "Animado",
      "b": "Aventurero",
      "c": "Analítico",
      "d": "Adaptable"
    },
    {
      "a": "Juguetón",
      "b": "Persuasivo",
      "c": "Persistente",
      "d": "Plácido"
    },
    {
      "a": "Sociable",
      "b": "Decidido",
      "c": "Abnegado",
      "d": "Sumiso"
    },
    {
      "a": "Convincente",
      "b": "Competitivo",
      "c": "Considerado",
      "d": "Controlado"
    },
    {
      "a": "Entusiasta",
      "b": "Inventivo",
      "c": "Respetuoso",
      "d": "Reservado"
    },
    {
      "a": "Enérgico",
      "b": "Autosuficiente",
      "c": "Sensible",
      "d": "Contento"
    },
    {
      "a": "Activista",
      "b": "Positivo",
      "c": "Planificador",
      "d": "Paciente"
    },
    {
      "a": "Espontáneo",
      "b": " Seguro",
      "c": " Puntual",
      "d": " Tímido"
    },
    {
      "a": "Optimista",
      "b": " Abierto",
      "c": " Ordenado",
      "d": " Atento"
    },
    {
      "a": "Humorístico",
      "b": " Dominante",
      "c": " Fiel",
      "d": " Amigable"
    },
    {
      "a": "Encantador",
      "b": " Osado",
      "c": " Detallista",
      "d": " Diplomático"
    },
    {
      "a": "Alegre",
      "b": " Confiado",
      "c": " Culto",
      "d": " Constante"
    },
    {
      "a": "Inspirador",
      "b": " Independiente",
      "c": " Idealista",
      "d": " Inofensivo"
    },
    {
      "a": "Cálido",
      "b": " Decisivo",
      "c": " Introspectivo",
      "d": " Humor seco"
    },
    {
      "a": "Cordial",
      "b": " Instigador",
      "c": " Músico",
      "d": " Conciliador"
    },
    {
      "a": "Conversador",
      "b": " Tenaz",
      "c": " Considerado",
      "d": " Tolerante"
    },
    {
      "a": "Vivaz",
      "b": " Líder",
      "c": " Leal",
      "d": " Escucha"
    },
    {
      "a": "Listo",
      "b": " Jefe",
      "c": " Organizado",
      "d": " Contento"
    },
    {
      "a": "Popular",
      "b": " Productivo",
      "c": " Perfeccionista",
      "d": " Permisivo"
    },
    {
      "a": "Jovial",
      "b": " Atrevido",
      "c": " Se comporta bien",
      "d": "Equilibrado"
    }
  ],
  "weakness": [
    {
      "a": "Estridente",
      "b": "Mandón",
      "c": "Desanimado",
      "d": "Soso"
    },
    {
      "a": "Indisciplinado",
      "b": "Antipático",
      "c": "Sin entusiasmo",
      "d": "Implacable"
    },
    {
      "a": "Repetidor",
      "b": "Resistente",
      "c": "Resentido",
      "d": "Reticente"
    },
    {
      "a": "Olvidadizo",
      "b": "Franco",
      "c": "Exigente",
      "d": "Temeroso"
    },
    {
      "a": "Interrumpe",
      "b": "Impaciente",
      "c": "Inseguro",
      "d": "Indeciso"
    },
    {
      "a": "Imprevisible",
      "b": "Frío",
      "c": "No comprometido",
      "d": "Impopular"
    },
    {
      "a": "Descuidado",
      "b": "Terco",
      "c": "Difícil contentar",
      "d": "Vacilante"
    },
    {
      "a": "Tolerante",
      "b": "Orgulloso",
      "c": "Pesimista",
      "d": "Insípido"
    },
    {
      "a": "Iracundo",
      "b": "Argumentador",
      "c": "Sin motivación",
      "d": "Taciturno"
    },
    {
      "a": "Ingénuo",
      "b": "Nervioso",
      "c": "Negativo",
      "d": "Desprendido"
    },
    {
      "a": "Egocéntrico",
      "b": "Adicto al trabajo",
      "c": "Distraído",
      "d": "Ansioso"
    },
    {
      "a": "Hablador",
      "b": "Indiscreto",
      "c": "Susceptible",
      "d": "Tímido"
    },
    {
      "a": "Desorganizado",
      "b": "Dominante",
      "c": "Deprimido",
      "d": "Dudoso"
    },
    {
      "a": "Inconsistente",
      "b": "Intolerante",
      "c": "Introvertido",
      "d": "Indiferente"
    },
    {
      "a": "Desordenado",
      "b": "Manipulador",
      "c": "Moroso",
      "d": "Quejumbroso"
    },
    {
      "a": "Ostentoso",
      "b": "Testarudo",
      "c": "Escéptico",
      "d": "Lento"
    },
    {
      "a": "Emocional",
      "b": "Prepotente",
      "c": "Solitario",
      "d": "Perezoso"
    },
    {
      "a": "Atolondrado",
      "b": "Malgeniado",
      "c": "Suspicaz",
      "d": "Sin ambición"
    },
    {
      "a": "Inquieto",
      "b": "Precipitado",
      "c": "Vengativo",
      "d": "Poca voluntad"
    },
    {
      "a": "Variable",
      "b": "Astuto",
      "c": "Comprometedor",
      "d": "Crítico"
    },
  ]
}

export const TEMPERS_TYPES: TemperTypes[] = [
  {
    type: 'COLERICO',
    characterist: 'EL EXTROVERTIDO EL ACTIVISTA EL OPTIMISTA',
    strength: [
      {
        title: 'LAS EMOCIONES DEL COLERICO',
        description: 'Líder nato, dinámico y activo, una necesidad compulsiva para el cambio, actúa con rapidez, quiere corregir las injusticias, impasible, no se desanima fácilmente, independiente y autosuficiente, confiado en si mismo, puede manejar cualquier proyecto.'
      },
      {
        title: 'EL COLERICO EN EL TRABAJO',
        description: 'Se propone metas, organiza bien, busca soluciones prácticas, actúa con rapidez, delega el trabajo, exige productividad, cumple lo propuesto, estimula actividad, le interesa poco la oposición.'
      },
      {
        title: 'EL COLERICO COMO PADRE',
        description: 'Ejerce liderazgo sólido, establece metas, motiva su familia a actuar, sabe la respuesta correcta, organiza el hogar.'
      },
      {
        title: 'EL COLERICO COMO AMIGO',
        description: 'Poco amigable, organiza el trabajo en grupo, dispuesto a liderar, casi siempre tiene razón, se destaca en emergencias.'
      }
    ],
    weakness: [
      {
        title: 'LAS EMOCIONES DEL COLERICO',
        description: 'Mandón, impaciente, temperamental, tenso, demaciado impetuoso, se deleita en la controversia, no se rinde a pesar de perder, inflexible, le disgustan las lágrimas y las emociones, no muestra simpatía hacia los demás.'
      },
      {
        title: 'EL COLERICO EN EL TRABAJO',
        description: 'Intolerante ante los errores, no analiza los detalles, las trivialidades le aburren, puede tomar decisiones temerarias, puede ser rudo y sin tacto, manipula las personas, el fin justifica los medios, el trabajo puede llegar a ser su Dios, demanda lealtad de parte de sus subordinados.'
      },
      {
        title: 'EL COLERICO COMO PADRE',
        description: 'Tiende a ser dominante, demasiado ocupado para dar tiempo a su familia, contesta demasiado rápido, se impacienta con los que no tienen buen desempeño, impide que los hijos se relajen, puede hacer que los hijos se depriman.'
      },
      {
        title: 'EL COLERICO COMO AMIGO',
        description: 'Tiende a usar a las personas, domina a los demás, decide por otros, sabe todo, todo lo puede hacer mejor, demasiado independiente, posesivo con los amigos y compañeros, no puede decir “lo siento” puede estar en lo correcto y ser impopular.'
      }
    ],
  },
  {
    type: 'FLEMATICO',
    characterist: 'EL INTROVERTIDO EL OBSERVADOR EL PESIMISTA',
    strength: [
      {
        title: 'LAS EMOCIONES DEL FLEMATICO',
        description: 'Personalidad tranquila, sereno, relajado, imperturbable, paciente, equilibrado, una vida consistente, callado pero de buen humor, amable y compasivo, no muestra sus emociones, contento con la vida.'
      },
      {
        title: 'EL FLEMATICO EN EL TRABAJO',
        description: 'Competente y estable, apacible y simpático, tiene capacidades administrativas, mediador, evita conflictos, trabaja bien bajo presión, busca el camino fácil.'
      },
      {
        title: 'EL FLEMATICO COMO PADRE',
        description: 'Es buen padre, dedica tiempo a sus hijos, no tiene afán, no se inquieta fácilmente.'
      },
      {
        title: 'EL FLEMATICO COMO AMIGO',
        description: 'Es de buen talante, discreto, dispuesto a escuchar, disfruta observando a la gente, tiene muchos amigos, es compasivo y comprensivo.'
      }
    ],
    weakness: [
      {
        title: 'LAS EMOCIONES DEL FLEMATICO',
        description: 'Apático, temeroso y preocupado, indeciso, evita tomar responsabilidades, voluntad de hierro, egoísta, tímido y reticente, se compromete demasiado, santurrón.'
      },
      {
        title: 'EL FLEMATICO EN EL TRABAJO',
        description: 'Sin metas, falto de auto-motivación, le es difícil mantenerse en acción, le disguta que lo acosen, perezoso y sin cuidado, desanima a otros, prefiere observar antes que actuar.'
      },
      {
        title: 'EL FLEMATICO COMO PADRE',
        description: 'Flojos en la disciplina, no organiza el hogar, toma la vida demasiado fácil.'
      },
      {
        title: 'EL FLEMATICO COMO AMIGO',
        description: 'Impide el entusiasmo, no se involucra, impacible, indiferente a los planes, juzga a los demás, sarcástico, se resiste a los cambios.'
      }
    ]
  },
  {
    type: 'MELANCOLICO',
    characterist: 'EL INTROVERTIDO EL PENSADOR EL PESIMISTA',
    strength: [
      {
        title: 'LAS EMOCIONES DEL MELANCOLICO',
        description: 'Profundo y pensador, analítico, serio, determinado, propenso a ser un genio, talentoso, creativo, filósofo, poeta, aprecia todo lo bello, sencible a otros, abnegado, meticuloso, idealista.'
      },
      {
        title: 'EL MELANCOLICO EN EL TRABAJO',
        description: 'Prefiere seguir un horario, perfeccionista, detallista, persistente, concienzudo, de hábitos ordenados, económico, anticipa problemas potenciales, descubre soluciones creativas, necesita terminar lo que empieza, le encantan las gráficas, mapas, listas, etc.'
      },
      {
        title: 'EL MELANCOLICO COMO PADRE',
        description: 'Establece normas elevadas, quiere que todo se haga correctamente, mantiene ordenada su casa, recoge el desorden de los hijos, se sacrifica por los demás, fomenta el talento y el estudio.'
      },
      {
        title: 'EL MELANCOLICO COMO AMIGO',
        description: 'Escoge sus amigos cuidadosamente, prefiere quedar entre bastidores, evita llamar la atención, fiel, leal, atento a quejas, soluciona los problemas ajenos, se interesa por los demás, se conmueve fácilmente, busca la pareja ideal.'
      }
    ],
    weakness: [
      {
        title: 'LAS EMOCIONES DEL MELANCOLICO',
        description: 'Recuerda lo negativo, amanerado, deprimido, le agrada que lo hieran, falsa humildad, vive en otro mundo, tiene mala imagen de si mismo, escucha lo que le conviene, se concentra en si mismo, tiene sentimientos de culpabilidad, sufre complejos de persecución, tiende a ser hipocondríaco.'
      },
      {
        title: 'EL MELANCOLICO EN EL TRABAJO',
        description: 'No se orienta hacia las personas, se deprime ante las imperfecciones, escoge trabajos difíciles, vacila al empezar proyectos nuevos, emplea demasiado tiempo planeando, prefiere analizar antes que trabajar, se auto-desaprueba, difícil de complacer, standares demasiado altos, siente una gran necesidad de aprobación.'
      },
      {
        title: 'EL MELANCOLICO COMO PADRE',
        description: 'Coloca metas demasiado altas, puede llegar a desanimar a los niños, puede ser meticuloso, se convierte en mártir, les echa la culpa a los niños, se amohína ante los desacuerdos.'
      },
      {
        title: 'EL MELANCOLICO COMO AMIGO',
        description: 'Vive a través de otros, socialmente inseguro, retraído y remoto, critica a otros, rechaza muestras de afecto, le disgusta la oposición, sospecha de las personas, antagonista y vengativo, no perdona, lleno de contradicciones, recibe los cumplidos con exceptisismo.'
      }
    ],
  },
  {
    type: 'SANGUINEO',
    characterist: 'EL EXTROVERTIDO EL HABLADOR EL OPTIMISTA FORTALEZAS',
    strength: [
      {
        title: 'LAS EMOCIONES DEL SANGUINEO',
        description: 'Personalidad atractiva, conversador, anecdotista, el alma de la fiesta, buen sentido del humor, ojos para los colores, toca a la gente cuando habla, entusiasta y democrático, alegre y burbujeante, curioso, buen actor, ingenuo e inocente, vive por el momento, carácter variable, en el fondo es sincero, siempre es un niño.'
      },
      {
        title: 'EL SANGUINEO EN EL TRABAJO',
        description: 'Se ofrece a trabajar, planea nuevos proyectos, creativo, tiene energía y entusiasmo, causa buena inpresión inicial, inspira a los demás, convence a otros a que trabajen.'
      },
      {
        title: 'EL SANGUINEO COMO PADRE',
        description: 'Hace que la vida en casa sea divertida, los amigos de sus hijos lo quieren, convierte los desastres en situaciones divertidas, es el director del circo.'
      },
      {
        title: 'EL SANGUINEO COMO AMIGO',
        description: 'Hace amigos con facilidad, tiene don de gente, le encantan los cumplidos, parece excitante, envidiado por los demás, no guarda rencor, se disculpa rápidamente, anima las reuniones, le gustan las actividades espontáneas.'
      }
    ],
    weakness: [
      {
        title: 'LAS EMOCIONES DEL SANGUINEO',
        description: 'Hablador compulsivo, exagerado, se entretiene en trivialidades, no puede recordar nombres, asusta a otros, demasiado feliz para otros, enérgico, jactancioso y quejumbroso, ingenuo, se deja engañar, se ríe y habla en voz alta, controlado por las circunstancias, se pone bravo fácilmente, para algunos parece insincero, nunca madura.'
      },
      {
        title: 'EL SANGUINEO EN EL TRABAJO',
        description: 'Prefiere hablar, olvida sus obligaciones, no persiste, su confianza se desvanece rápidamente, indisciplinado, sus prioridades están fuera de orden, toma decisiones llevado por sus sentimientos, se distrae fácilmente, malgasta el tiempo hablando.'
      },
      {
        title: 'EL SANGUINEO COMO PADRE',
        description: 'Mantiene el hogar en estado de frenesí, olvida las citas de los hijos, desorganizado, no escucha el asunto completo.'
      },
      {
        title: 'EL SANGUINEO COMO AMIGO',
        description: 'Odia estar a solas, necesita ser el centro de atención, quiere ser popular, busca recibir el crédito por sus acciones, domina la conversación, interrumpe y no escucha, contesta por otros, olvidadizo, siempre encuentra excusas, repite sus historias.'
      }
    ]
  }
]

export const TEMPERS_DICTIONARY = {
  [TEMPERS_TYPES[3].type]: TEMPERS_TYPES[3],
  [TEMPERS_TYPES[0].type]: TEMPERS_TYPES[0],
  [TEMPERS_TYPES[2].type]: TEMPERS_TYPES[2],
  [TEMPERS_TYPES[1].type]: TEMPERS_TYPES[1],
}

export const CONVENTION = {
  a: TEMPERS_TYPES[3].type,
  b: TEMPERS_TYPES[0].type,
  c: TEMPERS_TYPES[2].type,
  d: TEMPERS_TYPES[1].type,
} as { [key: string]: string }
