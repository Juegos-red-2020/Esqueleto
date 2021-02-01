https://youtu.be/5EgSIlZsqcM

# GDD Marauder


TÍTULO: Marauder

ESTUDIO/DISEÑADORES: Miguel Gálvez Lucena, Diego Penedo Andrés, Karim Elein Castillo Ordinola, Jose Pablo Baño García.

GÉNERO: Plataformas

CORREOS UNIVERSITARIOS: m.galvez.2018@alumnos.urjc.es, d.penedo.2018@alumnos.urjc.es, ke.castillo.2017@alumnos.urjc.es, jp.bano.2016@alumnos.urjc.es

TRELLO: https://trello.com/invite/b/7TDbjcXg/570ec36ceab6d6e421ffdf338bea6fb6/juegos-en-redes 

PLATAFORMA:  PC

VERSIÓN: 3.0

SINOPSIS DEL JUEGO: Dos exploradores se encuentran atrapados en una nave abandonada. A medida que avanzan en su búsqueda de una salida, una serie de peligros irán surgiendo y deberán colaborar para superar los obstáculos y buscar una salida.

CATEGORÍA: Puzles, acción.

LICENCIA: Apache 2.

DINÁMICAS: Movimientos de empuje, interacción con el entorno y resolución de puzles.

PÚBLICO: Tipo de jugador casual, más dedicado a jóvenes.

# VISIÓN GENERAL DEL JUEGO

Marauder es un juego multijugador cooperativo. Dos exploradores, atrapados en el interior de una nave con elementos de futuristas. Al tratarse de un juego de puzles y acción permite al jugador experimentar diversas mecánicas en los puzles. Finalmente, el ritmo del juego sería más lento para ir pensando en los puzles cooperativos que se encuentran dispersos por la nave. El objetivo de los exploradores en encontrar la salida de la nave y salir ambos con vida

# DINÁMICA DEL JUEGO

Cámara: En tercera persona tipo plataformas.

Periféricos: Teclado

Controles: A (Izquierda), D (Derecha), S (abajo), W (salto); Para el segundo personaje, las flechas de dirección, con la misma función.

Guardar/cargar: No está implementado, dado que la breve duración del juego no lo hace especialmente necesario.

# PERSONAJES

Nombre: Deva

Descripción: Son saqueadores de tesoros interestelares, provistos de una capucha y un vestuario que a su vez hace de armadura sencilla.

Concepto: Uno de los protagonistas del juego y personaje controlado por el jugador. 

Momento: Aparición al principio del juego al ser uno de los principales.

Habilidades: Fuerza para empujar objetos pesados.

>_

Nombre: Reni

Descripción: Son saqueadores de tesoros interestelares, provistos de una capucha y un vestuario que a su vez hace de armadura sencilla.

Concepto: Uno de los protagonistas del juego y personaje controlado por el jugador. 

Momento: Aparición al principio del juego al ser uno de los principales.

Habilidades: Agilidad para saltar más alto y escala paredes.

# ARTE CONCEPTUAL

Guía de estilo:
 
![alt text](<https://github.com/Juegos-red-2020/Esqueleto/blob/main/Pantallazos-Readme/Dise%C3%B1o.png>)
![alt text](<https://github.com/Juegos-red-2020/Esqueleto/blob/main/Pantallazos-Readme/Principio.jpg>)

![alt text](<https://github.com/Juegos-red-2020/Esqueleto/blob/main/Pantallazos-Readme/map_Grande.png>)



# CAMBIOS RESPECTO AL PROTOTIPO

El cambio más notable del concepto inicial es la ausencia de Pturm, la criatura que perseguía a los personajes principales. En su lugar, el peligro en esta versión viene de los pozos y los láseres, obstáculos del escenario en los que si uno de los personajes cae, pierde una vida.

La idea original de Pturm como una criatura inteligente era demasiado ambiciosa, así que se decidió dejarlo en un contador; cuando terminase el tiempo Pturm aparecería y sería game over. Sin embargo, consideramos que los obstáculos eran suficiente peligro para que el juego presentase un reto más allá de los puzles y el contador sería algo redundante, por lo que no ha sido implementado.

Otros cambios menores incluyen pantalla de créditos y la eliminación de una sala de espera, ya que el juego no tarda tanto en cargar como para que sea necesaria.

# DIAGRAMA DE FLUJO DE PANTALLAS

![alt text](<https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/Diagrama_2.jpg>)


# PANTALLAS
>Login:

![alt text](<https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/NuevaPantallaInicio.PNG>)

>Información de conexión:

![alt text](<https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/PantallaInfo.PNG>)

>Menú:

![alt text](<https://github.com/Juegos-red-2020/Esqueleto/blob/main/Pantallazos-Readme/Menu.PNG>)

En el menú principal podemos seleccionar a qué pantalla ir. Jugar nos lleva a la pantalla de selección de personaje. En tutorial nos lleva al nivel tutorial, un nivel más sencillo con instrucciones para que los jugadores aprendan las mecánicas. Créditos lleva a la pantalla de créditos y salir cierra el juego.

>Créditos:

![alt text](<https://github.com/Juegos-red-2020/Esqueleto/blob/main/Pantallazos-Readme/Inicio.png>)

En esta pantalla podemos ver a las personas que han trabajado en el juego. Aparece al terminar el nivel principal, aunque también se puede acceder a ella desde el menú.

>Selección de personaje:

![alt text](<https://github.com/Juegos-red-2020/Esqueleto/blob/main/Pantallazos-Readme/SelecPer.png>)

Al colocar el cursor sobre un personaje, informa al jugador de sus habilidades y controles. Una vez seleccionado, lleva al jugador al nivel principal.

>Nivel:

![alt text](<https://github.com/Juegos-red-2020/Esqueleto/blob/main/Pantallazos-Readme/Gamplay.png>)

Tanto en el nivel principal como en el tutorial se puede ver a ambos personajes en el escenario correspondiente. En la esquina superior izquierda se pueden ver las vidas que les quedan antes del game over. Ambos niveles se explicarán en detalle en el apartado niveles.

>Game Over:

![alt text](<https://github.com/Juegos-red-2020/Esqueleto/blob/main/Pantallazos-Readme/GameOver.PNG>)

Pantalla que aparece cuando el personaje se quedan sin vidas (tienen 7 entre los dos personajes en el juego, 3 en el tutorial). Permite volver al menú o reintentar el nivel.




# Niveles

>Glosario:

Deva: Personaje con la habilidad de empujar cajas.

Reni: Personaje con más velocidad y capaz de saltar distancias más largas que Deva.

C: Caja empujable.

S: Espacio que Reni es capaz de cruzar de un salto, pero Deva se caería.

B: Botón, se activa cuando tiene un gran peso encima. En el nivel tutorial lo puede pisar Reni al saltar desde tanta longitud directamente al botón. En el  nivel principal, los botones solo son activables si Deva empuja una caja encima. Al activarse, normalmente crean o destruyen plataformas.

Pa: Palanca. Función similar a el boton, solo que se activa al contacto de Deva o Reni.

Pl: Plataforma que se crea o destruye al activa un botón o una palanca.

L: Rayo láser que impide el paso. Si lo toca el jugador, pierde una vida y regresa al inicio.

Le: Láser esquivable. Láseres que se mueven de manera intermitente por los que el jugador puede pasar, siempre y cuando lo haga de manera ágil para no tocarlos.

Cg: Caja generador. Funciona como una caja normal pero en realidad es el generador de electricidad de la nave. Al moverlo a su botón, desconecta la corriente eléctrica y todos los láseres desaparecen.

Escaleras: Se puede subir y bajar por ellas.

>_

NIVEL TUTORIAL:

![alt text](<https://github.com/Juegos-red-2020/Esqueleto/blob/main/Pantallazos-Readme/mapaNotas2.png>)

Los personajes comienzan a la izquierda del nivel. Reni es capaz de saltar S1 y al caer, activa el botón B1. B1 genera la caja C1. Más adelante se encuentra la palanca P1, que al activarla genera una plataforma que cubre el hueco en S1, por la que Deva puede pasar.

Reni es capaz de saltar de nuevo S2 sin problemas. Para poder realizar el salto, Deva debe empujar la caja C1 hasta el borde de S2 y que caiga abajo. Subiéndose a la caja, la distancia a saltar es menor y la puede cruzar. Así, ambos son capaces de cruzar todos los huecos y llegar a la salida sin problemas.

>_

NIVEL PRINCIPAL:

![alt text](<https://github.com/Juegos-red-2020/Esqueleto/blob/main/Pantallazos-Readme/mapaNotas.png>)

Aparecen de nuevo en la esquina superior izquierda. Reni salta S1 y S1. Baja por las escaleras al piso de abajo y activa P1, que crea Pl1 y permite que tanto Deva como la caja C2 pasen por ese hueco. Reni vuelve a subir arriba y activa P2, que crea una plataforma en S2. Ahora Deva puede subir al piso de arriba por las escaleras y empujar la caja C1 al botón B1. B1 activa Pl2, lo que permite que empuje la caja C2 hasta ahí y la deje caer encima del botón B2. Esto activa B2 y crea la plataforma Pl3, lo que les permite continuar al resto del nivel.

A partir de aquí, no es difícil llegar a la salida. Sin embargo, no es posible utilizarla a no ser que se hayan presionado los botones B3 y B4. Para ello utilizaremos las cajas B3 y B4. Pero estas cajas son inaccesibles, ya sea porque Deva no puede llegar adonde están o porque las bloquean varios láser L. Después de explorar un rato, el jugador que lleve a Reni se percatará de que puede realizar el salto S3, que le llevará a la palanca P3.

Al activar P3 podrá cruzar por la plataforma Pl5, que le lleva a la sección izquierda del mapa. En esta sección se encuentra el generador Cg, con el que podrían desactivar todos los láser. Sin embargo, se necesita a Deva para moverlo. Reni debe bajar hasta encontrar la palanca P4, que activa la plataforma Pl6. Aunque probablemente le cueste llegar, y deba esquivar diversos láseres Le, es posible que Deva llegue al otro lado de Pl6.

Una vez esté Deva en Pl6 puede subir cuidadosamente hasta arriba, donde se encuentra Cg. Utiliza Cg para activar el botón B5 y al realizar esta acción, de manera simultánea activa la plataforma Pl4 y desactiva todos los láseres. Pasando por Pl4 puede llegar a la caja C3 y empujarla hasta abajo, para que pulse el botón B3 o B4. Al haber desactivado los láseres, también se hace accesible en la sección de la derecha la caja C4. Se empuja C4 al botón restante y eso por fin activaría la salida.




# Referencias


Items

https://www.artstation.com/artwork/RYJONX



Caja(Modificado)

https://www.artstation.com/artwork/1nOAxX



Tiles Entorno(Modificado)

https://www.artstation.com/artwork/baDzPv



Escalera(Modificado)

https://imgur.com/r/PixelArt/yALAtR8



Palanca

https://runwthewolves.tumblr.com/post/168756860046/tiny-pixel-lever-for-my-game-the-wishgranter


Personaje (asset modificado)

https://www.artstation.com/artwork/L29awv


# LICENCIAS MUSICA

![alt text](<https://github.com/Juegos-red-2020/Esqueleto/blob/main/Pantallazos-Readme/license_certificate_6GYFMNZVPH%20(1).txt>)

![alt text](<https://github.com/Juegos-red-2020/Esqueleto/blob/main/Pantallazos-Readme/license_certificate_92PDVKGTNL%20(2).txt>)

![alt text](<https://github.com/Juegos-red-2020/Esqueleto/blob/main/Pantallazos-Readme/license_certificate_BA9P75WLFJ.txtt>)

![alt text](<https://github.com/Juegos-red-2020/Esqueleto/blob/main/Pantallazos-Readme/license_certificate_DWE46FXV5H%20(1).txt>)

# API REST
>Diagrama:

![alt text](<https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/Untitled%20Diagram.png>)

>Instrucciones

1.    Instalar la extensión Web Server for Chrome

![alt text](<https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/P_1_Web_Server.PNG>)


2.    Establecer la ruta del Index.html del juego

![alt text](<https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/P_2_Web_Server.PNG>)

3.    Ingresar a la Web Server URL que está establecida

![alt text](<https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/P_3_Web_Server.PNG>)

4.    Se abrirá el juego en el explorador de Chrome

![alt text](<https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/P_4_Juego_modi.PNG>)

5.    Instalar la version de SpringToolsSuite para tu SO 

![alt text](<https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/P_5_Juego.PNG>)

6.    Abrir proyecto en STS .

![alt text](<https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/P_6_Juego.PNG>)

7.    Ejecutar como aplicación Java, lo que creará el servidor .

![alt text](<https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/P_8_Juego.PNG>)

8.    Abrir Juego.

![alt text](<https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/P_9_Login.PNG>)

![alt text](<https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/P_10_Login.PNG>)


# Protocolo Websockets

>Diagrama de clases

![alt text](https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/Diagrama%20Clases%20Fase%204.png)

A continuación se muetra un ejemplo de clase genérica. Esta clase crea una sesión y contiene métodos capaces de recibir un mensaje y enviar mensajes recibidos a todo el mundo que no tenga la misma sesión.

![alt text](https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/Clase%20Gen%C3%A9rica.png)


Esta estructura se aplica a una diversidad de clases:

![alt text](https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/ClasesServidor.png)

ExactDevaPosXHandler: Maneja la posición X del personaje llamado Deva.

ExactDevaPosYHandler: Maneja la posición Y del personaje llamado Deva.

ExactReniPosXHandler: Maneja la posición X del personaje llamado Reni.

ExactReniPosYHandler: Maneja la posición Y del personaje llamado Reni.

Player y  PlayerController son clases del API.

PlayerOnlineHandler: Envía un mensaje al entrar en la pantalla de selección de personaje, no se puede empezar a jugar hasta que no haya 2 jugadores.

PlayerSelectHandler: Envía un mensaje al seleccionar uno de los personaje. Informa del personaje seleccionado para que el otro cliente elija al personaje no seleccionado.

PositionHandler: Envía los movimientos que ha realizado el personaje.

chatHandler: Maneja el chat.


Estas clases se han implementado en el cliente mediante los siguientes websockets

![alt text](https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/WebsocketsCliente.png)

Position implementa positionHandler, player PlayerSelectHandler y online playerOnlineHandler.


Dentro del cliente, se han utilizado los sigientes métodos que hacen uso del servidor:


![alt text](https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/JugadorConectado.png)

Jugador conectado: Comunica si hay otra persona conectada en la selección de personaje.

![alt text](https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/Conectado%20Jugador.png)

ConectadoJugador: Permite que comience la escena cuando estén ambos jugadores conectados.


![alt text](https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/DevaSeleccionado.png)

![alt text](https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/ReniSeleccionado.png)

Estas funciones asignan el personaje que el jugador ha seleccionado.

![alt text](https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/MensajePersonajeRecibido.png)

MensajePersonajeRecibido: Comprueba el mensaje recibido que indica el personaje que ha seleccionado el otro jugador y asigna el personaje contrario.

![alt text](https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/MovimientoEnviado.png)

MovimientoEnviado: Envía la acción que ha sido realizada

![alt text](https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/MovimientoRecibido2.png)

MovimientoRecibido: Guarda el movimiento en un mensaje

![alt text](https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/MovimientoRecibidoEjecutado2.png)

MovimientoRecibidoEjecutado: Comprueba el contenido en el mensaje y realiza la acción indicada.

![alt text](https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/PosicionEnviada.png)

PosicionEnviada: Envía la posición mientras el personaje se encuentre parado

![alt text](https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/Posici%C3%B3nRecibida.png)

PosicionRecibida: Recibe el mensaje con la posición del personaje parado

![alt text](https://github.com/Juegos-red-2020/Marauder_02/blob/main/Pantallazos-Readme/Posici%C3%B3nRecibidaEjecutada.png)

PosicionRecibidaEjecutada: Si recibe que el personaje está parado, lo coloca en la posición recibida
