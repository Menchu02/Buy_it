/**
 * Usa fetch para importar un componente de html en la página donde es llamada
 * 
 * Modo de uso:
 *  En la pagina donde queremos cargar el componente debemos crear un contenedor donde insertarlo.
 *  Al llamar esta funcion necesitamos pasarle, 
 *    1. la ruta donde esta el archivo con el componente
 *    2. selector css del contenedor donde insertaremos el componente (ej. #contenedor, .contenedor,main,...)
 *
 * @param {string} ruta la ruta donde encontrar el componente a importar usando fetch
 * @param {string} selectorDestino selector CSS para seleccionar el elemento html de la página donde añadir el contenido del 
 *            componente recibido como un hijo.
 */
async function cargarComponenteHtml(ruta, selectorDestino) {

  await fetch(ruta)
    .then((html) => { return html.text(); })
    .then((content) => { document.querySelector(selectorDestino).innerHTML = content; });
}