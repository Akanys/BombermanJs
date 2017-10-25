var cartesol = document.getElementById('carteSol')
var player = document.getElementById('player')
var bomb = document.getElementByID('div')
bomb.style.left = player.style.left
bomb.style.top = player.style.top
carteSol.appendChild(bomb);

document.addEventListener("keydown", function(ev)
{
    if (ev.keyCode == 32){ // bomb
    	bomb.style.visibility 'visible' ;
        var id = "l"+x+"-c"+y;
    var deplacement = player.getAttribute("data-valeur") ;
    console.log('la bombe test '+ parseInt(deplacement));
    console.log(id('bomb'));
    }
});