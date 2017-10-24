var cartesol = document.getElementById('carteSol');
var player = document.getElementById('player');
var bomb = document.getElementById('bombe');
bomb.style.left = player.style.left ;
bomb.style.top = player.style.top ;
document.addEventListener("keydown", function(ev)
{
   if (ev.keyCode == 32){
   console.log("Attention y a une bombe");
    bombe.style.visibility = 'visible';
    cartesol.appendChild(bomb);
}
});