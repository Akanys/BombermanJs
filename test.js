var cartesol = document.getElementById('carteSol');
var player = document.getElementById('player');
document.addEventListener("keydown", function(ev)
{
    if (ev.keyCode == 32){
    	var bomb = document.createElement('div');
		bomb.style.left = player.style.left ;
		bomb.style.top = player.style.top;
		bomb.className ="bombe";
		carteSol.appendChild(bomb);
		bombe.style.backgroundImage = 'url("bomberpng/bomb1.png")';
		console.log("Attention y a une bombe");
  
	}
});

