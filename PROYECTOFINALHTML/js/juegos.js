const juegos = [
  {
    id: 1,
    nombre: "Resident Evil Requiem",
    imagen: "SECCION TERROR/residentevilrequiem.webp",
    categoria: "Survival Horror games",
    descripcion: "Resident Evil: Requiem (conocido también como Resident Evil 9) es una entrega de la saga de Capcom que sigue la historia de Grace Ashcroft, una analista del FBI, y al veterano agente Leon S. Kennedy mientras investigan un nuevo brote viral conectado con los secretos de la destruida Raccoon City. La trama equilibra el terror de supervivencia clásico con la acción de conspiraciones biológicas globales.",
    fotos: [
      "IMAGENES/residentevilrequiem.jpg",
      "SECCION TERROR/residentevilrequiem.webp"
    ]
  },
  {
    id: 2,
    nombre: "Alan Wake 2",
    imagen: "SECCION TERROR/alan_wake_2__2012_-5830942.webp",
    categoria: "Survival Horror games",
    descripcion: "Saga de terror psicológico en la que el escritor Alan Wake intenta escapar de una realidad oscura mientras la agente Saga Anderson investiga una serie de crímenes."
  },
  {
    id: 3,
    nombre: "Alien isolation",
    imagen: "SECCION TERROR/Alien_isolation_arte.webp",
    categoria: "Survival Horror games",
    descripcion: "Amanda Ripley explora una estación espacial perseguida por un xenomorfo, usando sigilo e ingenio para sobrevivir."
  },
  {
    id: 4,
    nombre: "Amnesia Bunker",
    imagen: "SECCION TERROR/amnesia.webp",
    categoria: "Survival Horror games",
    descripcion: "Un soldado atrapado en un búnker durante la Primera Guerra Mundial busca recursos y una salida mientras una criatura lo acecha."
  },
  {
    id: 5,
    nombre: "Resident Evil 4",
    imagen: "SECCION TERROR/resident_evil_4_remake-5789986.webp",
    categoria: "Survival Horror games",
    descripcion: "Leon S. Kennedy viaja a una zona rural para rescatar a la hija del presidente y descubre una amenaza biológica."
  },
  {
    id: 6,
    nombre: "Resident Evil 7 Biohazzar",
    imagen: "SECCION TERROR/resident_evil_7-5898772.jpg",
    categoria: "Survival Horror games",
    descripcion: "Ethan Winters busca a su esposa desaparecida en una finca aislada donde una familia esconde un peligroso secreto."
  },
  {
    id: 7,
    nombre: "Until Dawn",
    imagen: "SECCION TERROR/until_dawn__2024_-5893373.jpg",
    categoria: "Survival Horror games",
    descripcion: "Un grupo de amigos se reúne en una montaña y debe enfrentar una noche de terror en la que sus decisiones cambian la historia."
  },
  {
    id: 8,
    nombre: "Silent Hill 2",
    imagen: "SECCION TERROR/silentHill2.jfif",
    categoria: "Survival Horror games",
    descripcion: "James Sunderland llega al inquietante pueblo de Silent Hill tras recibir una carta de su esposa, a quien creía muerta."
  },
  {
    id: 9,
    nombre: "The Last of Us part 2",
    imagen: "SECCION TERROR/thelastofus.webp",
    categoria: "Survival Horror games",
    descripcion: "Ellie atraviesa un mundo devastado mientras busca justicia y lidia con las consecuencias de la violencia."
  },
  {
    id: 10,
    nombre: "Outlast",
    imagen: "SECCION TERROR/outlast.jfif",
    categoria: "Survival Horror games",
    descripcion: "Un periodista queda atrapado en un hospital psiquiátrico abandonado y debe escapar usando una cámara de visión nocturna."
  }
];

const descripcionesJuegos = {
  "WorldBox": "Un simulador tipo sandbox en el que creás mundos, moldeás el terreno y observás cómo evolucionan sus habitantes.",
  "Schedule": "Un simulador de gestión en el que organizás tareas, recursos y actividades para hacer crecer tu negocio.",
  "Thief Simulator": "Explorá barrios, planeá robos y conseguí herramientas mientras intentás evitar que te descubran.",
  "GOAT Simulator": "Un juego de mundo abierto de humor absurdo donde controlás una cabra y provocás caos por la ciudad.",
  "Crime Scene Cleaner": "Limpiá escenas del crimen, retirando pruebas y dejando cada lugar en orden antes de que regresen las autoridades.",
  "Waterpark Simulator": "Construí y administrá un parque acuático, atendiendo a los visitantes y manteniendo las atracciones.",
  "Supermarket Simulator": "Gestioná un supermercado: abastecé las estanterías, atendé la caja y hacé crecer el negocio.",
  "Tcg card shop": "Administrá una tienda de cartas coleccionables, organizá productos y atendé a los clientes.",
  "Retro Rewind": "Gestioná un videoclub retro, alquilá películas y mejorá el local para atraer más clientes.",
  "Woman Simulator": "Un simulador cotidiano centrado en actividades y tareas de la vida diaria.",
  "Alpha Protocol": "Un juego de rol y espionaje en el que el agente Michael Thorton toma decisiones que cambian sus misiones y alianzas.",
  "Baldur's Gate 3": "Un juego de rol basado en Dungeons & Dragons: reuní un grupo, explorá los Reinos Olvidados y decidí cómo afrontar cada aventura.",
  "Disco Elysium": "Interpretá a un detective con amnesia, investigá un asesinato y definí su personalidad mediante diálogos y decisiones.",
  "Dragon Quest 3": "Un clásico juego de rol japonés en el que formás un grupo de aventureros para enfrentar al señor de los demonios.",
  "Expedition 33": "Liderá una expedición en un mundo de fantasía para detener a la misteriosa Artífice y cambiar el destino de la humanidad.",
  "Final Fantasy 6": "Un grupo de rebeldes se enfrenta a un imperio en una aventura de rol con personajes y destinos entrelazados.",
  "Palworld": "Explorá un mundo abierto, capturá criaturas llamadas Pals y usalas para combatir, construir y sobrevivir.",
  "Persona 5": "Un estudiante y sus compañeros llevan una vida escolar mientras se convierten en ladrones fantasma que cambian corazones corruptos.",
  "The Backworld": "Explorá entornos extraños y resolvé desafíos mientras intentás encontrar una salida de un mundo inquietante.",
  "The Witcher": "Acompañá al brujo Geralt de Rivia en una aventura de fantasía, contratos de monstruos y decisiones difíciles.",
  "007 First Light": "Viví una historia de origen de James Bond y acompañalo en sus primeras misiones como agente del MI6.",
  "Grand Theft Auto VI": "Explorá Leonida y Vice City en una aventura de mundo abierto protagonizada por Lucia y Jason.",
  "Grand Theft Auto V": "Recorré Los Santos y seguí las historias de Michael, Franklin y Trevor en un mundo abierto lleno de misiones.",
  "It Takes Two": "Dos jugadores cooperan como una pareja convertida en muñecos y superan desafíos en una aventura diseñada para jugarse en equipo.",
  "Pragmata": "Acompañá a Hugh y a la androide Diana en una aventura de ciencia ficción ambientada en una estación lunar.",
  "Red Dead Redemption 2": "Arthur Morgan y la banda de Van der Linde intentan sobrevivir mientras el Viejo Oeste cambia a su alrededor.",
  "Spider-Man": "Balanceate por Nueva York como Spider-Man, detené amenazas y protegé a sus habitantes.",
  "Star Wars Zero Company": "Comandá una unidad de élite en una historia de estrategia ambientada durante las Guerras Clon.",
  "Tomb Raider": "Acompañá a Lara Croft en expediciones llenas de exploración, acertijos y desafíos de supervivencia.",
  "Uncharted 4": "Nathan Drake vuelve a la aventura para buscar un tesoro pirata junto a su hermano Sam.",
  "Beyond: Two Souls": "Viví la historia de Jodie Holmes y su vínculo con una entidad sobrenatural a través de distintos momentos de su vida.",
  "Bloodborne": "Explorá la ciudad de Yharnam, enfrentá criaturas y descubrí sus secretos en una aventura de acción y terror.",
  "Cyberpunk 2077": "En Night City, V busca una forma de sobrevivir con un implante que contiene la conciencia de Johnny Silverhand.",
  "Detroit: Become Human": "Seguí a varios androides en una ciudad futurista y decidí cómo sus acciones cambiarán el rumbo de la historia.",
  "Dispatch": "Coordiná un equipo de héroes y tomá decisiones que influyen en las misiones y relaciones de sus integrantes.",
  "Life is Strange": "Max descubre que puede rebobinar el tiempo y debe decidir cómo sus acciones afectan a sus amigos y a Arcadia Bay.",
  "NieR: Automata": "En una guerra entre máquinas y androides, 2B, 9S y A2 exploran preguntas sobre la identidad y la humanidad.",
  "Ghost of Tsushima": "Jin Sakai lucha por proteger Tsushima durante la invasión mongola y debe decidir qué clase de guerrero será.",
  "The Walking Dead": "En un mundo tomado por muertos vivientes, las decisiones de Lee y Clementine afectan sus vínculos y su supervivencia.",
  "The Legend of Zelda": "Explorá un reino de fantasía, resolvé acertijos y acompañá a Link en una aventura para salvar Hyrule."
};

const calificacionesIMDb = {
  "Resident Evil Requiem": 9.2,
  "Alan Wake 2": 9.1,
  "Alien isolation": 8.6,
  "Amnesia Bunker": 7.2,
  "Resident Evil 4": 9.2,
  "Resident Evil 7 Biohazzar": 8.6,
  "Until Dawn": 8.1,
  "Silent Hill 2": 9.1,
  "The Last of Us part 2": 8.8,
  "Outlast": 8.2,
  "WorldBox": 7.5,
  "Schedule": 7.7,
  "Thief Simulator": 5.7,
  "GOAT Simulator": 5.8,
  "Crime Scene Cleaner": 7.5,
  "Waterpark Simulator": 7.5,
  "Supermarket Simulator": 7.0,
  "Tcg card shop": 7.2,
  "Alpha Protocol": 7.2,
  "Baldur's Gate 3": 9.6,
  "Disco Elysium": 9.0,
  "Dragon Quest 3": 7.8,
  "Expedition 33": 9.5,
  "Final Fantasy 6": 9.1,
  "Palworld": 6.8,
  "Persona 5": 9.2,
  "The Witcher": 8.4,
  "007 First Light": 8.6,
  "Grand Theft Auto V": 9.4,
  "It Takes Two": 9.0,
  "Pragmata": 8.3,
  "Red Dead Redemption 2": 9.8,
  "Spider-Man": 9.1,
  "Star Wars Zero Company": 8.4,
  "Tomb Raider": 8.6,
  "Uncharted 4": 9.4,
  "Beyond: Two Souls": 8.3,
  "Bloodborne": 9.2,
  "Cyberpunk 2077": 8.7,
  "Detroit: Become Human": 9.1,
  "Dispatch": 9.2,
  "Life is Strange": 8.8,
  "NieR: Automata": 8.8,
  "Ghost of Tsushima": 9.2,
  "The Walking Dead": 9.2,
  "The Legend of Zelda": 8.5
};

function formatearCalificacionIMDb(nombre) {
  const puntuacion = calificacionesIMDb[nombre];

  if (typeof puntuacion !== "number") {
    return "IMDb: Sin puntuación";
  }

  return "IMDb: " + puntuacion.toFixed(1).replace(".", ",") + "/10";
}