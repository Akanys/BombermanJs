var carteBinaire = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
                    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,0],
                    [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,0],
                    [0, 1, 3, 3, 0, 1, 0, 1, 0, 1, 2, 1, 0,0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,0],
                    [0, 1, 0, 1, 2, 1, 2, 2, 2, 1, 0, 1, 0,0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,0],
                    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,0],
                    [0, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 0,0],
                    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,0],
                    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0]];

var player = document.getElementById("player");
var x = 1;
var y = 1;
var borne_y, borne_x;
borne_y = 12; borne_x = 12;


 var grid = document.getElementById("carteSol");
 function    divMaker(x, y, borne_x, borne_y)
 {
     y = 0;
     while (y <= borne_y)
     {
         x = 0;
         while (x <= borne_x)
         {
            var classText = "";
            if(carteBinaire[x][y] == 0) {
                var classText= "bloc";
            }
            if(carteBinaire[x][y] == 2) {
                var classText= "leaf";
            }
            if(carteBinaire[x][y] == 3) {
                var classText= "pot";
            }
             grid.innerHTML = grid.innerHTML + "<div class='case "+classText+"' id='l"+y+"-c"+x+"'style='left:"+y*60+"px;top:"+x*60+"px;' data-valeur='"+carteBinaire[x][y]+"'></div>";
             x++;
         }
         y++;
     }
 }
 divMaker(x, y, borne_x, borne_y);
 x = 1;
 y = 1;

document.addEventListener("keydown", function(ev)
{
    if (ev.keyCode == 40){ // down
    y += 1;
    var id = "l"+x+"-c"+y;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;   
        if(player.style.backgroundImage != 'url("bomberpng/perso3.png")'){
            player.style.backgroundImage = 'url("bomberpng/perso3.png")';
        }
        else
        {
            player.style.backgroundImage = 'url("bomberpng/down2.png")';
        }
        if(deplacement == 0 || deplacement == 2 || deplacement == 3){
            y -= 1;
            console.log("Y a un mur");      
        }
        else
        {
            player.style.top = (parseInt(document.getElementById('player').style.top) + 60) + "px";
            console.log('je suis'+ parseInt(deplacement) + 'en html');
        }
    }
    if (ev.keyCode == 38){ // up
    y -= 1;
    var id = "l"+x+"-c"+y;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;
        if(player.style.backgroundImage != 'url("bomberpng/perso1.png")'){
            player.style.backgroundImage = 'url("bomberpng/perso1.png")';
        }
        else
        {
            player.style.backgroundImage = 'url("bomberpng/up2.png")';
        }
        if(deplacement == 0 || deplacement == 2 || deplacement == 3){
            y += 1;
            console.log("Y a un mur");
        }
        else
        {
            player.style.top = (parseInt(document.getElementById('player').style.top) - 60) + "px";
        }
    }
    if (ev.keyCode == 39){ // right
    x += 1;
    var id = "l"+x+"-c"+y;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;
        if(player.style.backgroundImage != 'url("bomberpng/perso2.png")'){
            player.style.backgroundImage = 'url("bomberpng/perso2.png")';
        }
        else
        {
            player.style.backgroundImage = 'url("bomberpng/right2.png")';
        }
        if(deplacement == 0 || deplacement == 2 || deplacement == 3){
            x -= 1;
            console.log("Y a un mur");
        }
        else
        {
            player.style.left = (parseInt(document.getElementById('player').style.left) + 60) + "px";
            console.log('je suis'+ parseInt(deplacement) + 'en html');
        }
    }
    if (ev.keyCode == 37){ // left
    x -= 1;
    var id = "l"+x+"-c"+y;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;
        if(player.style.backgroundImage != 'url("bomberpng/perso4.png")'){
            player.style.backgroundImage = 'url("bomberpng/perso4.png")';
        }
        else
        {
            player.style.backgroundImage = 'url("bomberpng/left2.png")';
        }
        if(deplacement == 0 || deplacement == 2 || deplacement == 3){
            x += 1;
            console.log("Y a un mur");
        }
        else
        {
            player.style.left = (parseInt(document.getElementById('player').style.left) - 60) + "px";
        }
    }
});