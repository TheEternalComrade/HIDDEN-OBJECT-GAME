let object = document.getElementById("object")/*Stores html elements
in javascript as variables based on their id attribute*/
let winMessage = document.getElementById("win")
let restart = document.getElementById("restart")


object.addEventListener("click", win)/*When the html element with
the id of object is clicked, the "win()" function is run*/

function win(){
    object.setAttribute("class", "hidden")/*Hides the html element
    with the id of object*/
    winMessage.setAttribute("class", "")/*Removes the hidden class
    from the h1 with the id of win,making it visible */
}



