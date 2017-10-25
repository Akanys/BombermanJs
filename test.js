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
        bomb.style.backgroundSize = 'cover';
        bomb.style.backgroundImage = "url('bomberpng/bomb1.png')" ;
        setTimeout(function(){ console.log('devien rouge');bomb.style.backgroundImage = "url('bomberpng/bomb2.png')" ;  }, 1250);
        setTimeout(function(){ console.log('devien rouge');bomb.style.backgroundImage = "url('bomberpng/bomb1.png')" ;  }, 2000);
        setTimeout(function(){ console.log('devien rouge');bomb.style.backgroundImage = "url('bomberpng/bomb2.png')" ;  }, 2500);
        setTimeout(function(){ console.log('devien rouge');bomb.style.backgroundImage = "url('bomberpng/bomb1.png')" ;  }, 2750);
        setTimeout(function(){ console.log('devien rouge');bomb.style.backgroundImage = "url('bomberpng/bomb2.png')" ;  }, 3000);
        setTimeout(function(){ console.log('devien rouge');bomb.style.backgroundImage = "url('bomberpng/bomb1.png')" ;  }, 3250);
        setTimeout(function(){ console.log('devien rouge');bomb.style.backgroundImage = "url('bomberpng/bomb2.png')" ;  }, 3500);
        setTimeout(function(){ console.log("Eploze");bomb.style.display = "none";  }, 3750);

        }
});

