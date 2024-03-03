
/*changes backgroundcolor depending on the color it is */
function colorWhite(){
    var bcolor = document.body.style.backgroundColor

    if (bcolor == "white") {
        document.getElementById('copyright-button').style.backgroundColor="rgb(100, 100, 100)";
        document.getElementById('copyright-button').style.color="white";
        document.body.style.backgroundColor="black";
    }

    else {
        document.getElementById('copyright-button').style.backgroundColor="rgb(100, 100, 100)";
        document.getElementById('copyright-button').style.color="white";
        document.body.style.backgroundColor="white";
    }
}

