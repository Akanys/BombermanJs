var ennemis = document.getElementById('ennemi1').style ;
var xvs = 11;
var yvs = 1;

setInterval(versus, 700) 

function versus()
{
    var aleatoire = Math.floor(Math.random()*4);
    console.log(aleatoire);

    if (aleatoire == 0){ // down
        yvs += 1;
    var id = "l"+xvs+"-c"+yvs;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;
    ennemi1.style.backgroundImage = 'url("bomberpng/versus3.png")';
        if(deplacement == 0){
            yvs -= 1;
        }
        else
        {
            ennemi1.style.top = (parseInt(document.getElementById('ennemi1').style.top) + 60) + "px";
        }
    }
    if (aleatoire == 1){ // up
        yvs -= 1;
    var id = "l"+xvs+"-c"+yvs;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;
    ennemi1.style.backgroundImage = 'url("bomberpng/versus1.png")';
        if(deplacement == 0){
            yvs += 1;

        }
        else
        {
            ennemi1.style.top = (parseInt(document.getElementById('ennemi1').style.top) - 60) + "px";
        }
    }
    if (aleatoire == 2){ // right
        xvs += 1;
    var id = "l"+xvs+"-c"+yvs;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;
    ennemi1.style.backgroundImage = 'url("bomberpng/versus2.png")';
        if(deplacement == 0){
            xvs -= 1;

        }
        else
        {
            ennemi1.style.left = (parseInt(document.getElementById('ennemi1').style.left) + 60) + "px";
        }
    }
    if (aleatoire == 3){ // left
        xvs -= 1;
    var id = "l"+xvs+"-c"+yvs;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;
    ennemi1.style.backgroundImage = 'url("bomberpng/versus4.png")';
        if(deplacement == 0){
            xvs += 1;
        }
        else
        {
            ennemi1.style.left = (parseInt(document.getElementById('ennemi1').style.left) - 60) + "px";
        }
    }
};