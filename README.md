# Trivia-Laboratoria
Proyecto Trivia Laboratoria

# Hito 1

1. Se realizo la elaboración del prototipo
![bosquejo-Hiito-1](./img/hito1.png)

2. Para hacer la selección de preguntas, decidimimos utilizar la etiqueta `<form>` ya que es un elemento HTML que se utiliza para crear un formulario en una página web. El formulario puede contener uno o más elementos de entrada de formulario, como campos de texto, botones de opción, casillas de verificación, menús desplegables, botones de radio y botones de envío.

3. Dentro de la etiqueta `<form>` para agrupar estas dos preguntas que se van ha realizar se utilizo la etiqueta `<section>` que ya que es un elemento HTML que se utiliza para agrupar contenido relacionado en una página web. Se utiliza comúnmente para dividir una página en secciones temáticas y para facilitar la organización y el mantenimiento del código HTML.

4. 
- La etiqueta `<label>` en HTML se utiliza para asociar una etiqueta de texto con un control de formulario, como un campo de entrada de texto, un botón de opción, una casilla de verificación o un menú desplegable. El atributo for del elemento `<label>` se utiliza para especificar el id del control de formulario con el que está asociado.

- La etiqueta `<input>` en HTML se utiliza para crear campos de entrada de datos interactivos en un formulario. Los tipos de campos de entrada que se pueden crear con la etiqueta `<input>` incluyen texto, contraseña, correo electrónico, número, fecha, hora, archivo, botones de opción, casillas de verificación y muchos más. El atributo type se utiliza para especificar el tipo de campo de entrada que se creará.

5. Agregamos la etiqueta `<button>` que se utiliza para crear un botón interactivo en una página web, agregando el atributo "onclick" para ejecutar una función JavaScript cuando se hace clic en el botón.

6. 
- Dentro de la etiqueta `<script>` se realizó una función de JavaScript que toma dos elementos de entrada (input) de un formulario HTML con nombres "answer" y "answer2" respectivamente, y verifica si se ha seleccionado una opción para cada uno de ellos. Si el usuario no ha seleccionado una opción para uno o ambos, la función muestra un mensaje de alerta indicando que el usuario olvidó seleccionar una respuesta. Si el usuario ha seleccionado una respuesta para ambos, la función muestra un mensaje de alerta que indica qué opción seleccionó el usuario para cada uno.

- La función utiliza el método querySelector para obtener los elementos de entrada seleccionados por el usuario, utilizando la sintaxis input[name = "nombre_del_input"]:checked. Esto selecciona el elemento de entrada con el atributo name especificado y comprueba si está marcado como "checked" (seleccionado). Si el elemento no está seleccionado, el valor de la variable será undefined.

- La función luego utiliza una declaración if...else para verificar si alguna de las variables es undefined. Si lo son, la función establece un mensaje de alerta que indica que el usuario olvidó seleccionar una respuesta. Si ambos tienen valores definidos, la función establece un mensaje de alerta que indica qué opción seleccionó el usuario para cada una de las preguntas.

Por último, la función muestra el mensaje de alerta utilizando el método alert.

### Hito 1 Soporte Link

[etiqueta input con sus respectivos types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)

[pregunta sobre radio button seleccionado en stackoverflow](https://stackoverflow.com/questions/15839169/how-to-get-the-value-of-a-selected-radio-button)

[porque utilizamos querySelector](https://stackoverflow.com/questions/15839169/how-to-get-the-value-of-a-selected-radio-button)

[documentación querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

[ejemplos y explicaciones de query selector](https://www.javascripttutorial.net/javascript-dom/javascript-queryselector/)

# HITO 2

1. Se realizo la elaboración del prototipo
![bosquejo hito-2](./img/hito2.png)

2. Se modificaron algunos comportamientos en base al Hito 1 para lograr crear una nueva página de HTML, solicitandole al usurio un nombre, utilizando así la etiqueta `input` -`type= text`.

3. Luego de ingresar el nombre del usuario este debe aparecer en la segunda vista `Bienvenido [userName]`, para realizar este procedimieto se utilizó `localStorage` que es una funcionalidad de los navegadores, que sirve como una especia de base de datos que nos permite guardar en forma de key, value "llave y valor" datos que necesitemos para nuestra aplicacion.

4. El botón comenzar se modifico con addEventListener que es un método de JavaScript que se utiliza para registrar un evento en un elemento HTML y asociar una función que se ejecutará cuando el evento ocurra en ese elemento.

5. En la segunda vista nos encontramos con las preguntas la cual cada una tiene tres opciones que el usurio deberá seleccionar.

6. El código utiliza la función document.querySelector para obtener el valor seleccionado de tres preguntas diferentes en el formulario y almacenarlas en variables.

7. Luego, crea tres elementos de párrafo (p1, p2, p3) con la función document.createElement. Estos elementos de párrafo se utilizarán más adelante para mostrar los resultados de las respuestas.

8. Utiliza una serie de declaraciones if para verificar si las respuestas a las tres preguntas son correctas o incorrectas. Si una respuesta es correcta, se asigna un mensaje de texto apropiado al elemento de párrafo correspondiente. Si una respuesta es incorrecta, se asigna un mensaje de texto diferente al elemento de párrafo correspondiente.

9. Finalmente, utiliza la función appendChild para agregar los elementos de párrafo al elemento con el id results. Este elemento es donde se mostrarán los mensajes de texto sobre las respuestas correctas e incorrectas.

En resumen, este código toma las respuestas seleccionadas por el usuario en un formulario, verifica si son correctas o incorrectas, y luego muestra mensajes de texto correspondientes para cada respuesta en la página web.
### Hito 2 Soporte Link

[button y sus elementos](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)

[pasando data a otro HTML](https://stackoverflow.com/questions/14693758/passing-form-data-to-another-html-page)

[explicación del appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)

[creando un nuevo elemento en HTML](https://www.w3schools.com/js/js_htmldom_nodes.asp#:~:text=To%20add%20text%20to%20the,is%20a%20new%20paragraph.%22)%3B)

# HITO 3

1. Se realizo la elaboración del prototipo
![bosquejo hito-2](./img/hito3.png)

2. Se agregó otra vista de HTML donde aparecen las dos tipos de preguntas, para ser seleccionadas por el usuario. 

# HITO 4.

1. Para agregar el temporizador a las pegruntas, se realizó el siguiente procedimiento:
* Se agregó un div en el HTML (questions.html-questions2.html) que se posicionará por encima de div "questions" para mantener la estructura del documento y evitar problemas de visualización.
* Dentro del div del temporizador, se agrega un elemento `<span>` para poder actualizar dinámicamente el contenido del temporizador usando JavaScript. Este span actúa como un marcador de posición en el HTML para mostrar el tiempo restante del temporizador.
* Luego se procede a utilizar la función setInterval, esta nos permite ejecutar una función repetidamente, comenzando después del intervalo de tiempo, luego repitiéndose continuamente cada intervalo.
* La función isAnswerSelected() se utiliza para verificar si el jugador ha seleccionado alguna respuesta en cada una de las preguntas de la trivia. Retorna el resultado de la verificación como un valor booleano (true o false). Dentro de la función isAnswerSelected(), se utiliza querySelector() para obtener el elemento HTML que representa la opción seleccionada de cada pregunta. Si al menos una opción ha sido seleccionada para cualquiera de las tres preguntas, se retornará true, lo que indica que se ha seleccionado una respuesta. Si ninguna opción ha sido seleccionada en ninguna de las preguntas, se retornará false, indicando que no se ha seleccionado ninguna respuesta. La función isAnswerSelected() es utilizada en el código para realizar algunas verificaciones, como en el caso de mostrar una alerta si el tiempo se agota y no se ha seleccionado ninguna respuesta. También se puede utilizar para validar si el jugador ha respondido todas las preguntas antes de mostrar los resultados finales. En resumen, la función isAnswerSelected() es necesaria para verificar si se han seleccionado respuestas en el juego de trivia y realizar acciones en consecuencia, como mostrar mensajes o realizar validaciones.



