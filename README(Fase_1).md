# GDD Marauder

TÍTULO: Marauder

ESTUDIO/DISEÑADORES: Miguel Gálvez Lucena, Diego Penedo Andrés, Karim Elein Castillo Ordinola, Jose Pablo Baño García.

GÉNERO: Plataformas

CORREOS UNIVERSITARIOS:
m.galvez.2018@alumnos.urjc.es, 
d.penedo.2018@alumnos.urjc.es,
ke.castillo.2017@alumnos.urjc.es,
jp.bano.2016@alumnos.urjc.es

TRELLO: 
https://trello.com/invite/b/7TDbjcXg/570ec36ceab6d6e421ffdf338bea6fb6/juegos-en-redes 

PLATAFORMA:  PC

VERSIÓN: 1.0

SINOPSIS DEL JUEGO: Dos exploradores se encuentran atrapados en una nave abandonada. A medida que avanzan en su búsqueda de una salida, una serie de peligros irán surgiendo y deberán colaborar para superar los obstáculos y buscar una salida.

CATEGORÍA: Puzles, acción.

LICENCIA: Apache 2.

DINÁMICAS: Movimientos de empuje, interacción con el entorno y resolución de puzles.

PÚBLICO: Tipo de jugador casual, más dedicado a jóvenes.

# VISIÓN GENERAL DEL JUEGO

Marauder es un juego multijugador cooperativo. Dos exploradores, atrapados en el interior de una nave con elementos de futuristas. Al tratarse de un juego de puzles y acción permite al jugador experimentar diversas mecánicas en los puzles. Finalmente, el ritmo del juego sería más lento para ir pensando en los puzles cooperativos que se encuentran dispersos por la nave. El objetivo de los exploradores en encontrar la salida de la nave y salir ambos con vida

# DINÁMICA DEL JUEGO

Cámara: En tercera persona tipo plataformas.

Para manejar el juego, se utilizará de periférico el teclado, empleando las teclas WASD para controlar a Reni (siendo W el salto, A el movimiento hacia la izquierda, S el botón para interactuar con ciertos objetos y D el movimiento hacia la izquierda), y las flechas direccionales para controlar a Deva (← para el movimiento a la izquierda, → para el movimiento hacia la derecha, ↑ para saltar y ↓ para interactuar). Se ha pensado en utilizar un sistema para guardar y cargar partidas, pero dada la breve duración del juego al final se ha terminado descartando.

# MECÁNICAS DEL JUEGO

Un nivel del juego consiste en un escenario grande en 2D lleno de obstáculos que los personajes deben superar. En el punto de salida se encuentran los dos personajes, Deva y Reni, cada uno controlado por uno de los jugadores. La cámara sólo muestra una zona limitada del escenario y avanza con el personaje. Los obstáculos consisten mayormente en objetos o espacios que no permiten avanzar y objetos o espacios peligrosos que al tocarlos quitan una vida a los personajes. El objetivo de los personajes es llegar a una puerta al final del nivel. Sin embargo, esto no es posible con solo un personaje.

Deva tiene la habilidad de empujar cajas y Reni de saltar distancias mayores a las que puede Deva, además de ser más ágil en general. Normalmente los puzles consisten en que Reni, con su agilidad llega a un lugar donde Deva no puede y lo explora, hasta que se encuentre con un punto donde no puede avanzar más. A continuación busca una manera de que Reni tenga acceso a ese lugar y entonces Reni probablemente pueda abrir el paso empujando una caja. Una caja empujada puede permitir un mejor sitio desde el que saltar para llegar a un sitio donde antes era imposible llegar o se puede utilizar su peso para activar un botón.

 Los elementos interactuables, además de las cajas, son los botones y las palancas. Los botones se pueden activar con un objeto pesado y las palancas las puede activar cualquiera de los dos personajes. Al ser activados, pueden crear plataformas, abrir puertas, desactivar obstáculos… Los posibles obstáculos del escenario pueden ser puertas que no dejan pasar, agujeros donde los jugadores pueden caer al vacío, rayos que hacen daño al jugador y no le permiten atravesarlos y rayos intermitentes, que solo se pueden atravesar en momentos determinados y requieren algo de agilidad y coordinación. Otros elementos en el escenario incluyen las escaleras, que permiten a los personajes subir y bajar a pisos que no se pueden acceder de otra manera. También hay monedas, escondidas en lugares difíciles de alcanzar y que otorgan puntuación extra. No tienen ninguna función mecánica de por sí más allá de dar logros y fomentar la exploración.

# PERSONAJES

>DEVA

Nombre: Deva Falkis

Descripción: Es un saqueador de tesoros interestelares, provistos de una capucha y un vestuario que a su vez hace de armadura sencilla.

Concepto: Uno de los protagonistas del juego y personaje controlado por el jugador. 

Momento: Aparición al principio del juego al ser uno de los principales.

Habilidades: Fuerza para empujar objetos pesados.

>RENI

Nombre: Reni Roland

Descripción: Es un saqueador de tesoros interestelares, provistos de una capucha y un vestuario que a su vez hace de armadura sencilla.

Concepto: Uno de los protagonistas del juego y personaje controlado por el jugador. 

Momento: Aparición al principio del juego al ser uno de los principales.

Habilidades: Agilidad para saltar más alto y escala paredes.

# ENEMIGO

>Pturm

Nombre: Pturm

Descripción: Monstruo que habita en la nave abandonada. Acecha entre las sombras a sus víctimas para cazarlas cuando están desprevenidos, persiguiéndolas durante su aventura. Siendo una criatura amorfa deforme es capaz de moldearse a placer para pasar por los pequeños conductos de la nave y llegar a rincones menos accesibles.

Concepto: Único monstruo que aparece en el interior de la nave.

Momento: Sus apariciones son intermitentes en los niveles, mientras más niveles avanzas la probabilidad de encontrarlo es mayor. En concreto aparece a partir del segundo nivel.

Habilidades: Capacidad de cambiar de forma a placer para moverse libremente por la nave y aparecer en los lugares menos esperados.

# MÚSICA

La música en la pantalla de inicio sería algo etéreo, para crear un ambiente de misterio y un ambiente desconocido, con algunos instrumentos electrónicos para indicar que se encuentra en un mundo Sci-Fi. La música en el mismo nivel sería algo más ambiental; pocos instrumentos y ninguna melodía que distraiga. Para dar credibilidad al ambiente, de vez en cuando suenan golpes metálicos, como si hubiera trozos inestables de la nave que se están cayendo con el paso del tiempo, y ligeras brisas de viento que consiguen pasar entre los escombros. Los pasos y movimientos de los personajes suenan como calzado pesado pisando en metal, y empujar cajas como un objeto pesado arrastrándose en una superficie de metal oxidada. Los rayos y elementos Sci-Fi que aún funcionan utilizan sonidos Sci-Fi más genéricos, aunque con interrupciones y pequeñas explosiones que denoten que están desgastados.

# ARTE CONCEPTUAL E INSPIRACIÓN
>Arte Conceptual:

![Fremen](<https://github.com/Juegos-red-2020/Esqueleto/blob/main/Pantallazos-Readme/Dise%C3%B1o.png>)
![Entorno](<https://github.com/Juegos-red-2020/Esqueleto/blob/main/Pantallazos-Readme/Principio.jpg>)

>Inspiración:

En lo relativo a la inspiración para la creación de la idea del videojuego se encuentran varios elementos. En cuanto al apartado artístico o ambientación de este, Marauder está influenciado, principalmente, por obras como Dune y Prometheus: mundos futuros con tecnología avanzada pero mezclado con una arquitectura, entorno y estilo visual más antiguo, dando así la sensación de mundo por descubrir, o de estar en un mundo extraño para los jugadores. Por otro lado, el gameplay está basado en juegos como Braid, Fireboy and Watergirl o Alien Isolation, dando lugar a un juego de plataformas cooperativo de puzles, pero con la amenaza e intranquilidad que supone el enemigo al acecho (Alien Isolation), con lo que se introduce el tiempo como factor clave y otro obstáculo que superar.

![Inspiración-Alien](https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/Insp-Alien.jpg)

![Inspiración-Prometheus](https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/Insp-Prome.jpg)

![Isnpiración-Braid](https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/Insp-Braid.jpg)
![Inspiración-Personajes](https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/Insp-Personaje.jpg)

# COLORES
>Colores Entorno

![Colores-Entornos](https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/Colores.png)

Para el entorno, los colores que se van a emplear van a ser de tonos oscuros fríos en su gran mayoría para dar esa sensación de abandonado y soledad en las escenas. El primer color visto desde la izquierda se va a utilizar para los botones del menú cuando no están seleccionados, una vez se pasa por el botón este cambiará de color al amarillo que se ve en la imagen para denotar por donde está el cursor. Los demás colores serán empleados completamente a los niveles para representar la nave abandonada como pueden ser para las tuberías o plataformas.

>Colores Personajes

![Colores-Personajes](https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/Colores-Personajes.png)


Los colores para los personajes son muy similares uno con otros, pero con una pequeña distinción entre ellos para que al jugador le sea más sencillo poder identificar quien es el personaje a quien controla. Los colores están pensados con tonos oscuros al igual que el entorno para no desentonar un poco con el ambiente dado, aparte son exploradores por lo que sus colores no pueden ser demasiado llamativos.

>Colores Enemigo

![Colores-Enemigo](https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/Colores-Enemigo.png)

Para el enemigo, el color carne podría producir cierta aversión debido a la sensación de que es una masa de carne deforme, así que los colores son de tonos oscuros, pero cálidos a diferencia que los personajes, esto ayuda a que sea fácilmente identificable en los mapas sin desentonar demasiado con el ambiente ya establecido.

# DIAGRAMA DE FLUJO DE PANTALLAS

![Diagrama de Flujos](<https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/diagrama_flujo_marauder_V1.png>)


# PROTOTIPO DE PANTALLAS

>Menú:

![Menú-Principal](<https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/Boceto_Menu_principal.png>)

En el menú principal se puede seleccionar a qué pantalla ir. Jugar lleva a la pantalla de selección de personaje. En tutorial lleva al nivel tutorial, un nivel más sencillo con instrucciones para que los jugadores aprendan las mecánicas. Créditos lleva a la pantalla de créditos y salir cierra el juego.

>Créditos:

![Créditos](<https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/Boceto_Creditos.png>)

En esta pantalla se puede ver al equipo que ha trabajado en el juego. Aparece al terminar el juego, aunque también se puede acceder a ella desde el menú.

>Selección de personaje:

![Selección-Personajes](<https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/Boceto_Seleccion_personajes.png>)

En selección de personaje aparecen los 2 personajes que están disponibles para escoger. Al colocar el cursor sobre un personaje, se informa al jugador de sus habilidades y controles. Una vez seleccionado, el jugador es llevado al nivel principal.

>Interfaz:

![Interfaz](<https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/Boceto_Interfaz.png>)

Tanto en el nivel principal como en el tutorial se puede ver a ambos personajes en el escenario correspondiente. En la esquina inferior izquierda se pueden ver el personaje que se ha elegido y las vidas que le quedan antes del game over, también hay un pequeño temporizador el cual avisa de cuánto falta para que comience a aparecer Pturm. Como adicional, habría una pequeña pantalla en la parte superior derecha en la cual se puede ver a el otro jugador para saber en qué parte del mapa se encuentra constantemente.

>Game Over:

![Game-Over](<https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/Boceto_Game_Over.png>)

Pantalla que aparece cuando el personaje se queda sin vidas (tienen 3 entre los dos personajes). Permite volver al menú o reintentar el nivel.


