var ennemis = document.getElementById('ennemi1').style ;
var xvs = 11;
var yvs = 1;

setInterval(versus, 700) 

function versus()
{
    var aleatoire = Math.floor(Math.random()*4);
    if (aleatoire == 0){ // down
        yvs += 1;
    var id = "l"+xvs+"-c"+yvs;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;
    if(ennemi1.style.backgroundImage != 'url("bomberpng/versus3.png")'){
        ennemi1.style.backgroundImage = 'url("bomberpng/versus3.png")';
    }
    else
    {
        ennemi1.style.backgroundImage = 'url("bomberpng/versus3-2.png")';
    }
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
    if(ennemi1.style.backgroundImage != 'url("bomberpng/versus1.png")'){
        ennemi1.style.backgroundImage = 'url("bomberpng/versus1.png")';
    }
    else
    {
        ennemi1.style.backgroundImage = 'url("bomberpng/versus1-2.png")';
    }
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
    if(ennemi1.style.backgroundImage != 'url("bomberpng/versus2.png")'){
        ennemi1.style.backgroundImage = 'url("bomberpng/versus2.png")';
    }
    else
    {
        ennemi1.style.backgroundImage = 'url("bomberpng/versus2-2.png")';
    }
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
    if(ennemi1.style.backgroundImage != 'url("bomberpng/versus4.png")'){
        ennemi1.style.backgroundImage = 'url("bomberpng/versus4.png")';
    }
    else
    {
        ennemi1.style.backgroundImage = 'url("bomberpng/versus4-2.png")';
    }
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
    if (aleatoire == 0){ // down
        yvs1 += 1;
    var id = "l"+xvs1+"-c"+yvs1;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;
    if(ennemi2.style.backgroundImage != 'url("bomberpng/versus7.png")'){
        ennemi2.style.backgroundImage = 'url("bomberpng/versus7.png")';
    }
    else
    {
        ennemi2.style.backgroundImage = 'url("bomberpng/versus7-2.png")';
    }
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
    if(ennemi2.style.backgroundImage != 'url("bomberpng/versus5.png")'){
        ennemi2.style.backgroundImage = 'url("bomberpng/versus5.png")';
    }
    else
    {
        ennemi2.style.backgroundImage = 'url("bomberpng/versus5-2.png")';
    }
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
    if(ennemi2.style.backgroundImage != 'url("bomberpng/versus6.png")'){
        ennemi2.style.backgroundImage = 'url("bomberpng/versus6.png")';
    }
    else
    {
        ennemi2.style.backgroundImage = 'url("bomberpng/versus6-2.png")';
    }
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
    if(ennemi2.style.backgroundImage != 'url("bomberpng/versus8.png")'){
        ennemi2.style.backgroundImage = 'url("bomberpng/versus8.png")';
    }
    else
    {
        ennemi2.style.backgroundImage = 'url("bomberpng/versus8-2.png")';
    }
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
    if (aleatoire == 0){ // down
        yvs2 += 1;
    var id = "l"+xvs2+"-c"+yvs2;
    var deplacement = document.getElementById(id).getAttribute("data-valeur") ;
    if(ennemi3.style.backgroundImage != 'url("bomberpng/versus11.png")'){
        ennemi3.style.backgroundImage = 'url("bomberpng/versus11.png")';
    }
    else
    {
        ennemi3.style.backgroundImage = 'url("bomberpng/versus11-2.png")';
    }
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
    if(ennemi3.style.backgroundImage != 'url("bomberpng/versus9.png")'){
        ennemi3.style.backgroundImage = 'url("bomberpng/versus9.png")';
    }
    else
    {
        ennemi3.style.backgroundImage = 'url("bomberpng/versus9-2.png")';
    }
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
    if(ennemi3.style.backgroundImage != 'url("bomberpng/versus10.png")'){
        ennemi3.style.backgroundImage = 'url("bomberpng/versus10.png")';
    }
    else
    {
        ennemi3.style.backgroundImage = 'url("bomberpng/versus10-2.png")';
    }
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
    if(ennemi3.style.backgroundImage != 'url("bomberpng/versus12.png")'){
        ennemi3.style.backgroundImage = 'url("bomberpng/versus12.png")';
    }
    else
    {
        ennemi3.style.backgroundImage = 'url("bomberpng/versus12-2.png")';
    }
        if(deplacement == 0){
            xvs2 += 1;
        }
        else
        {
            ennemi3.style.left = (parseInt(document.getElementById('ennemi3').style.left) - 60) + "px";
        }
    }
};