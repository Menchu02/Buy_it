/**
 * It uses fetch to import an HTML component into the page it is called
 * 
 * How to use:
 *  We need to create a container element in the page where we want to insert the component.
 *  To call this funtcion we need to give it as parameters: 
 *    1. Path of the file with the HTML code to insert.
 *    2. A string with a CSS selector pointing to the container element where we want to insert our component (ej. #contenedor, .contenedor,main,...)
 *
 * @param {string} path Path of the file with the HTML code to insert
 * @param {string} destinationSelector CSS selector used to select in which HTML element we want to insert the contents of the given file path
 */
async function loadComponentHtml(path, destinationSelector) {

  await fetch(path)
    .then((html) => { return html.text(); })
    .then((content) => { document.querySelector(destinationSelector).innerHTML = content; });
}