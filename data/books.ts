export type Product = {
    id: string;
    name: string;
    description: string;
    image: string;
    download: string;
}

const imgRoute = "/books/img";
const epubRoute = "/books/epub";

export const products: Product[] = [
  {
    id: "tu-y-otros-desastres-naturales",
    name: "Tú y otros desastres naturales",
    description: `
    Harper ha planificado hasta el último detalle de su futuro. 
    Pronto acabará sus estudios y logrará el trabajo por el que tanto se ha esforzado. 
    Tendrá la vida que desea. Sin embargo, una triste pérdida hará que su plan perfecto, 
    aquello que creía querer más que nada, se transforme de nuevo en confusión, dudas e inseguridades. 
    Porque los secretos no pueden guardarse para siempre. Porque hay caminos destinados a cruzarse. 
    Porque una sola decisión puede cambiarlo todo y nada da más miedo que arriesgarse por tus sueños. 
    Porque la vida no se trata de sobrevivir a la tormenta, sino de aprender a bailar bajo ella.
    `,
    image: `${imgRoute}/tu_y_otros_desastres_naturales_img.jpg`,
    download: `${epubRoute}/tu_y_otros_desastres_naturales_libro.epub`,
  },
  {
    id: "la-fragilidad-de-un-corazon-bajo-la-lluvia",
    name: "La fragilidad de un corazón bajo la lluvia",
    description: `
    ¿Y si tuvieras que perderlo todo para darte cuenta de que no tenías nada? 
    ¿Si la única forma de recuperar tu vida es dejar que esta se derrumbe? 
    ¿Qué ocurre cuando lo único que te queda es un corazón roto y un futuro incierto? 
    Darcy abandonó Tofino un día de diciembre, con el corazón repleto de sueños rotos y promesas sin cumplir. 
    Desde entonces, no ha hecho otra cosa que huir de los recuerdos y sus heridas. 
    Ahora, sus pasos la han llevado de vuelta al principio. A un lugar donde el amor y la culpa colisionan. 
    Donde la lluvia cuenta historias y esconde secretos. Porque hay instantes que marcan toda una vida. 
    Porque a veces volver para decir «adiós» es lo único que puede salvarnos.
    `,
    image: `${imgRoute}/la_fragilidad_de_un_corazon_bajo_la_lluvia_img.jpg`,
    download: `${epubRoute}/la_fragilidad_de_un_corazon_bajo_la_lluvia_libro.epub`,
  },
  {
    id: "el-mapa-de-los-anhelos",
    name: "El mapa de los anhelos",
    description: `
    ¿Y si te diesen un mapa para descubrir quién eres? ¿Seguirías la ruta marcada hasta el final?
    Imagina que estás destinada a salvar a tu hermana, pero al final ella muere y la razón de tu existencia se desvanece. 
    Eso es lo que le ocurre a Grace Peterson, la chica que siempre se ha sentido invisible, 
    la que nunca ha salido de Nebraska, la que colecciona palabras y ve pasar los días refugiada en la monotonía. 
    Hasta que llega a sus manos el juego de El mapa de los anhelos y, siguiendo las instrucciones, 
    lo primero que debe hacer es encontrar a alguien llamado Will Tucker, 
    del que nunca ha oído hablar y que está a punto de embarcarse con ella en un viaje directo al corazón, 
    lleno de vulnerabilidades y sueños olvidados, anhelos y afectos inesperados. 
    Pero ¿es posible avanzar cuando los secretos comienzan a pesar demasiado? ¿Quién es quién en esta historia?
    `,
    image: `${imgRoute}/el_mapa_de_los_anhelos_img.jpg`,
    download: `${epubRoute}/el_mapa_de_los_anhelos_libro.epub`,
  },
  {
    id: "donde-todo-brilla",
    name: "Donde todo brilla",
    description: `
    ¿Y si lo único que necesitamos para ser felices es descubrir el brillo de las cosas intangibles?
    Nicki Aldrich y River Jackson han sido inseparables desde que llegaron al mundo con cuarenta y siete minutos de diferencia. 
    Ella lo hizo envuelta en polvo de hadas. Él como si fuese un meteoro en llamas. 
    El pequeño pueblo costero donde crecieron se convirtió en el escenario de sus paseos en bicicleta, 
    las tardes en la casa del árbol y los primeros amores, secretos y dudas. Sin embargo, con el paso de los años, 
    River sueña con escapar de aquel rincón perdido donde todo gira alrededor de la tradicional pesca de langosta y 
    Nicki anhela encontrar su lugar en el mundo. Pero ¿qué ocurre cuando nada sale como lo habían planeado? 
    ¿Es posible elegir dos caminos distintos y, pese a todo, encontrarse en el final del trayecto? 
    Para lograrlo, River y Nicki tendrán que bucear en las profundidades del corazón, 
    rescatar pedazos de lo que fueron y entender aquello que rompieron. 
    Y quizá así, uniendo y encajando cada fragmento, logren descubrir quiénes son ahora y recordar el brillo de las cosas intangibles.
    `,
    image: `${imgRoute}/donde_todo_brilla_img.jpg`,
    download: `${epubRoute}/donde_todo_brilla_libro.epub`,
  },
  {
    id: "el-amor-que-dejamos-atras",
    name: "El amor que dejamos atrás",
    description: `
    Vuelve a creer en el amor. 
    Georgia, 
    Tras perderlo todo en un doloroso divorcio, decide regresar al lugar donde creció, 
    la casa de su bisabuela Scarlett Stanton, una famosa escritora que murió dejando una novela inconclusa. 
    Noah Harrison, es el atractivo y arrogante autor de bestsellers que la editorial designó para terminar el manuscrito. 
    Aunque a ella no le entusiasma la idea, ahora él y Georgia están obligados a trabajar juntos para encontrar el mejor final de la obra. 
    Noah, 
    Está en la cúspide de su carrera: es guapo, ambicioso y tiene numerosos contratos para libros y películas. 
    Siempre admiró a Scarlett y, cuando surge la oportunidad de concluir lo que él piensa podría ser el libro del siglo, 
    no lo duda ni un segundo. Sin embargo, lidiar con Georgia, la hermosa, testaruda y cínica bisnieta de su novelista favorita, 
    le complicará las cosas más de lo que pensaba. 
    Un romance que crecerá con cada página. 
    Conforme leen las palabras de Scarlett, descubren por qué la talentosa escritora nunca terminó el libro: 
    está basado en la trágica historia de amor que vivió con un piloto de la Segunda Guerra Mundial. 
    Georgia sabe que el amor nunca funciona, y aunque la química y la conexión entre ella y Noah es innegable, 
    está más decidida que nunca a no cometer los mismos errores  del pasado, incluso si eso significa destruir la carrera de Noah.
    `,
    image: `${imgRoute}/el_amor_que_dejamos_atras_img.jpg`,
    download: `${epubRoute}/el_amor_que_dejamos_atras_libro.epub`,
  },
  {
    id: "llamame-cuando-no-te-encuentres",
    name: "Llámame cuando no te encuentres",
    description: `
    Había una vez una rosa que decidió quitarme el corazón. 
    No es verdad, yo se lo di desde el primer segundo en que la vi, pero déjala que piense que me lo robó. 
    Un libro que solo se le dedica a esa persona que, estás seguro vas a amar toda la vida, sí, incluso cuando digas que ya la olvidaste.
    `,
    image: `${imgRoute}/llamame_cuando_no_te_encuentres_img.jpg`,
    download: `${epubRoute}/llamame_cuando_no_te_encuentres_libro.epub`,
  },
  {
    id: "todos-los-lugares-que-mantuvimos-en-secreto",
    name: "Todos los lugares que mantuvimos en secreto",
    description: `
    Nunca pospongas las cosas importantes de la vida. 
    «Me aprendí el nombre completo de Maeve, su canción favorita y todas las cosas que la hacían reír mucho 
    antes de aprender a contar hasta diez.» 
    Maeve no sabe mucho sobre sí misma. Solo que no deja de pensar en si su madre cumplió todos sus sueños antes de morir, 
    que la relación con su novio va cada vez peor y que está cansada de que todos sus días sean iguales. 
    Cuando, por un impulso, acaba comprando un billete solo de ida a la otra parte del mundo 
    para volver al pueblo en el que vivió cuando era niña, lo que menos esperaba era reencontrarse allí 
    con el que fue su mejor amigo de la infancia. 
    Connor siempre supo que tarde o temprano Maeve regresaría. Lo que nunca pensó es que fuera a ser así. 
    Tan caótica. Tan perdida. Como si aún estuviera por definir. 
    Si el miedo de ambos es desperdiciar sus vidas sin haber hecho nada que merezca la pena, 
    ¿qué mejor que escribir una lista con todo lo que quieren hacer antes de morir y cumplirla juntos? 
    La nueva novela de Inma Rubiales: el nuevo fenómeno de romance juvenil. 
    La autora de Hasta que nos quedemos sin estrellas y El arte de ser nosotros, 
    que ha llevado al límite de sus emociones a miles de lectoras. 
    `,
    image: `${imgRoute}/todos_los_lugares_que_mantuvimos_en_secreto_img.jpg`,
    download: `${epubRoute}/todos_los_lugares_que_mantuvimos_en_secreto_libro.epub`,
  },
  {
    id: "lo-que-la-nieve-susurra-al-caer",
    name: "Lo que la nieve susurra al caer",
    description: `
    ¿Y si para seguir adelante tuvieras que retroceder al punto donde todo comenzó? 
    Para Hunter, la música es mucho más que un conjunto de notas dando forma a una melodía. 
    Las canciones que compone son un refugio. Acordes que hablan de sueños y miedos. De ganas y carencias. 
    Compases que iluminan las sombras del frío y solitario mundo en el que ha crecido. 
    Musas que han transformado su pasado en un presente brillante. 
    Sin embargo, esa inspiración enmudece cuando encuentra una carta manuscrita en su buzón, 
    que lo obliga a cuestionarse todo lo que sabe sobre sí mismo. 
    La vida de Willow se ha convertido en una caja de momentos desordenados y sueños frustrados. 
    Siente que ha perdido su lugar en el mundo y ya no recuerda a esa persona que siempre quiso ser. 
    Mientras la nieve cae silenciosa, Hunter y Willow descubrirán que el destino no siempre tiene la última palabra y que los momentos, 
    buenos o malos, nos van convirtiendo en todo lo que somos.
    `,
    image: `${imgRoute}/lo_que_la_nieve_susurra_al_caer_img.jpg`,
    download: `${epubRoute}/lo_que_la_nieve_susurra_al_caer_libro.epub`,
  },
];