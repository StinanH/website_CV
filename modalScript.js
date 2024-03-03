
/*variable for storing keys pressed */
let keysPressed;
var modal = document.getElementById("myModal");

/*adding keys pressed and checking if last 4 makes up "1337"*/
window.addEventListener('keyup', (e)=> {
    keysPressed += e.key;
    keysPressed = keysPressed.slice(-4);
    if(keysPressed == "1337") {
        alert("woopwoop");
        modal.style.display = "block";
    }
})

var closeModal = document.getElementsByClassName('close');

closeModal.onclick = function() {
    modal.style.display = "none";
}

modal.onclick =function(){
    modal.style.display = "none";
}