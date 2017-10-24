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

var ennemis1 = document.getElementById('ennemi2').style ;
var xvs1 = 1;
var yvs1 = 11;

setInterval(versus2, 700) 

function versus2()
{
    var aleatoire = Math.floor(Math.random()*4);
    console.log(aleatoire);

    if (aleatoire == 0){ // down
        yvs1 += 1;
    var id = "l"+xvs1+"-c"+yvs1;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;
    ennemi2.style.backgroundImage = 'url("bomberpng/versus7.png")';
        if(deplacement == 0){
            yvs1 -= 1;
        }
        else
        {
            ennemi2.style.top = (parseInt(document.getElementById('ennemi2').style.top) + 60) + "px";
        }
    }
    if (aleatoire == 1){ // up
        yvs1 -= 1;
    var id = "l"+xvs1+"-c"+yvs1;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;
    ennemi2.style.backgroundImage = 'url("bomberpng/versus5.png")';
        if(deplacement == 0){
            yvs1 += 1;

        }
        else
        {
            ennemi2.style.top = (parseInt(document.getElementById('ennemi2').style.top) - 60) + "px";
        }
    }
    if (aleatoire == 2){ // right
        xvs1 += 1;
    var id = "l"+xvs1+"-c"+yvs1;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;
    ennemi2.style.backgroundImage = 'url("bomberpng/versus6.png")';
        if(deplacement == 0){
            xvs1 -= 1;

        }
        else
        {
            ennemi2.style.left = (parseInt(document.getElementById('ennemi2').style.left) + 60) + "px";
        }
    }
    if (aleatoire == 3){ // left
        xvs1 -= 1;
    var id = "l"+xvs1+"-c"+yvs1;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;
    ennemi2.style.backgroundImage = 'url("bomberpng/versus8.png")';
        if(deplacement == 0){
            xvs1 += 1;
        }
        else
        {
            ennemi2.style.left = (parseInt(document.getElementById('ennemi2').style.left) - 60) + "px";
        }
    }
};

var ennemis2 = document.getElementById('ennemi3').style ;
var xvs2 = 11;
var yvs2 = 11;

setInterval(versus3, 700) 

function versus3()
{
    var aleatoire = Math.floor(Math.random()*4);
    console.log(aleatoire);

    if (aleatoire == 0){ // down
        yvs2 += 1;
    var id = "l"+xvs2+"-c"+yvs2;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;
    ennemi3.style.backgroundImage = 'url("bomberpng/versus11.png")';
        if(deplacement == 0){
            yvs2 -= 1;
        }
        else
        {
            ennemi3.style.top = (parseInt(document.getElementById('ennemi3').style.top) + 60) + "px";
        }
    }
    if (aleatoire == 1){ // up
        yvs2 -= 1;
    var id = "l"+xvs2+"-c"+yvs2;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;
    ennemi3.style.backgroundImage = 'url("bomberpng/versus9.png")';
        if(deplacement == 0){
            yvs2 += 1;

        }
        else
        {
            ennemi3.style.top = (parseInt(document.getElementById('ennemi3').style.top) - 60) + "px";
        }
    }
    if (aleatoire == 2){ // right
        xvs2 += 1;
    var id = "l"+xvs2+"-c"+yvs2;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;
    ennemi3.style.backgroundImage = 'url("bomberpng/versus10.png")';
        if(deplacement == 0){
            xvs2 -= 1;

        }
        else
        {
            ennemi3.style.left = (parseInt(document.getElementById('ennemi3').style.left) + 60) + "px";
        }
    }
    if (aleatoire == 3){ // left
        xvs2 -= 1;
    var id = "l"+xvs2+"-c"+yvs2;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;
    ennemi3.style.backgroundImage = 'url("bomberpng/versus12.png")';
        if(deplacement == 0){
            xvs2 += 1;
        }
        else
        {
            ennemi3.style.left = (parseInt(document.getElementById('ennemi3').style.left) - 60) + "px";
        }
    }
};