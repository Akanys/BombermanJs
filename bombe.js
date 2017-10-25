var cartesol = document.getElementById('carteSol');
var player = document.getElementById('player');
document.addEventListener("keydown", function(ev)
{
    if (ev.keyCode == 32)
    { // Création de la bombe a l'endroit du player
    	var bomb = document.createElement('div');
		bomb.style.left = player.style.left ;
		bomb.style.top = player.style.top;
		bomb.className ="bombe";
        carteSol.appendChild(bomb);
        bomb.style.backgroundSize = 'cover';
        bomb.style.backgroundImage = "url('bomberpng/bomb1.png')" ;
        // Clignote pour explosé
        setTimeout(function(){ console.log('devien rouge');bomb.style.backgroundImage = "url('bomberpng/bomb2.png')" ;  }, 1250);
        setTimeout(function(){ console.log('devien Bleu');bomb.style.backgroundImage = "url('bomberpng/bomb1.png')" ;  }, 2000);
        setTimeout(function(){ console.log('devien rouge');bomb.style.backgroundImage = "url('bomberpng/bomb2.png')" ;  }, 2500);
        setTimeout(function(){ console.log('devien bleu');bomb.style.backgroundImage = "url('bomberpng/bomb1.png')" ;  }, 2750);
        setTimeout(function(){ console.log('devien rouge');bomb.style.backgroundImage = "url('bomberpng/bomb2.png')" ;  }, 3000);
        setTimeout(function(){ console.log('devien BLEU');bomb.style.backgroundImage = "url('bomberpng/bomb1.png')" ;  }, 3250);
        setTimeout(function(){ console.log('devien rouge');bomb.style.backgroundImage = "url('bomberpng/bomb2.png')" ;  }, 3500);
        setTimeout(function(){
            console.log("la bombe éxplose");
            bomb.style.display = "none" ;
            // Creation des explodes 
            // Je crées les déplacements possible des explosions
            var explode = document.createElement('div');
            explode.style.left = bomb.style.left ;
            explode.style.top = bomb.style.top;
            explode.className ="explode";
            explode.style.backgroundImage = "url('bomberpng/explosion.png')" ;
            explode.style.backgroundSize = 'cover';
            carteSol.appendChild(explode);

            explode = document.createElement('div');
            explode.style.left = bomb.style.left ;
            explode.style.top = bomb.style.top;
            explode.className ="explode";
            explode.style.backgroundImage = "url('bomberpng/explosion.png')" ;
            explode.style.backgroundSize = 'cover';
            explode.style.top = (parseInt(explode.style.top) + 60) +"px";
            /*if(explode.style.getAttribute('data-valeur') == 0)
            {
                explode.style.visibility = "hidden" ;
            }
            if(explode.style.getAttribute('data-valeur') == 1);
            {
                explode.style.visibility = "hidden" ;
            }
            if(explode.style.getAttribute('data-valeur') == 2);
            {
                explode.style.visibility = "hidden" ;
            }
            if(explode.style.getAttribute('data-valeur') == 3);
            {
                explode.style.visibility = "hidden" ;
            }*/
            carteSol.appendChild(explode);

            explode = document.createElement('div');
            explode.style.left = bomb.style.left ;
            explode.style.top = bomb.style.top;
            explode.className ="explode";
            explode.style.backgroundImage = "url('bomberpng/explosion.png')" ;
            explode.style.backgroundSize = 'cover';
            explode.style.top = (parseInt(explode.style.top) - 60) +"px";
            carteSol.appendChild(explode);

            explode = document.createElement('div');
            explode.style.left = bomb.style.left ;
            explode.style.top = bomb.style.top;
            explode.className ="explode";
            explode.style.backgroundImage = "url('bomberpng/explosion.png')" ;
            explode.style.backgroundSize = 'cover';
            explode.style.top = (parseInt(explode.style.left) - 60) +"px";
            carteSol.appendChild(explode);

            explode = document.createElement('div');
            explode.style.left = bomb.style.left ;
            explode.style.top = bomb.style.top;
            explode.className ="explode";
            explode.style.backgroundImage = "url('bomberpng/explosion.png')" ;
            explode.style.backgroundSize = 'cover';
            explode.style.left = (parseInt(explode.style.left) + 60) +"px";
            carteSol.appendChild(explode);
            console.log("l'explosion est créer");

        }, 4500);
        setTimeout(function(){ console.log('les explosions disparait');
        var elements = document.getElementsByClassName('explode');
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            carteSol.removeChild(element);
        };}, 4800);        
    {
        if(document.getElementById().getAttribute("data-valeur") == "2" ) // leaf
        {
            explose.style.left = document.getElementById(id).style.left ;
            explose.style.top = player.style.top;
            display
        }
        if(document.getElementById(id).getAttribute("data-valeur") == "3" ) // pot
        {
            bomb.style.left = player.style.left ;
            bomb.style.top = player.style.top;
        }
        if(document.getElementById(id).getAttribute("data-vie") >= "1" ) // vie personnage et ennemie
        {
            bomb.style.left = player.style.left ;
            bomb.style.top = player.style.top;
        }
    }

    }
});