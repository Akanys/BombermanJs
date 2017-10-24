var carteBinaire = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
var player = document.getElementById("player");
var x = 2;
var y = 3;
var borne_y, borne_x;
borne_y = 12; borne_x = 12;
document.addEventListener("keydown", function(ev)
{
    if (ev.keyCode == 40){ // down
    y += 1;
    var id = "l"+x+"-c"+y;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;
        if(deplacement == 0){
            y -= 1;
            console.log("Y a un mur");
        }
        else
        {
            player.style.top = (parseInt(document.getElementById('player').style.top) + 60) + "px";
            console.log('je suis'+ parseInt(deplacement) + 'en html');
            console.log("je suis dans la case " + y + "," + x + ".");
        }
    }
    if (ev.keyCode == 38){ // up
    y -= 1;
    var id = "l"+x+"-c"+y;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;
        if(deplacement == 0){
            y += 1;
            console.log("Y a un mur");
        }
        else
        {
            player.style.top = (parseInt(document.getElementById('player').style.top) - 60) + "px";
            console.log('je suis'+ parseInt(deplacement) + 'en html');
            console.log("je suis dans la case " + y + "," + x + ".");
        }
    }
    if (ev.keyCode == 39){ // right
    x += 1;
    var id = "l"+x+"-c"+y;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;
        if(deplacement == 0){
            x -= 1;
            console.log("Y a un mur");
        }
        else
        {
            player.style.left = (parseInt(document.getElementById('player').style.left) + 60) + "px";
            console.log('je suis'+ parseInt(deplacement) + 'en html');
            console.log("je suis dans la case " + y + "," + x + ".");
        }
    }
    if (ev.keyCode == 37){ // left
    x -= 1;
    var id = "l"+x+"-c"+y;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;
        if(deplacement == 0){
            x += 1;
            console.log("Y a un mur");
        }
        else
        {
            player.style.left = (parseInt(document.getElementById('player').style.left) - 60) + "px";
            console.log('je suis'+ parseInt(deplacement) + 'en html');
            console.log("je suis dans la case " + y + "," + x + ".");
        }
    }
});