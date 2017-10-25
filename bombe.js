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
            // Creation des explodes 
            var explode = document.createElement('div');
            explode.style.left = bomb.style.left ;
            explode.style.top = bomb.style.top;
            explode.className ="explode";
            carteSol.appendChild(explode);
            explode.style.backgroundImage = "url('bomberpng/explosion.png')" ;
            explode.style.backgroundSize = 'cover';
            console.log("l'explosion est créer")
            // Je créer les deplacements possible des explosions
            var haut = ;
            var gauche = ;
            var bas = ;
            var droit = ;
            if(haut == deplacement == 0)
            if(haut == deplacement == 1)
            if(haut == deplacement == 2)
            if(haut == deplacement == 3)
            if(gauche == deplacement == 0)
            if(gauche == deplacement == 1)
            if(gauche == deplacement == 2)
            if(gauche == deplacement == 3)
            if(bas == deplacement == 0)
            if(bas == deplacement == 1)
            if(bas == deplacement == 2)
            if(bas == deplacement == 3)
            if(droit == deplacement == 0)
            if(droit == deplacement == 1)
            if(droit == deplacement == 2)
            if(droit == deplacement == 3)
            attribute2 = document.getElementsByClassName("leaf");
            attribute3 = document.getElementsByClassName("pot");
            console.log(attribute2);
            var regarde = [player, ennemi1, ennemi2, ennemi3];

            for (var i = 0; i < attribute2.length; i++) 
            {
                regarde.push(attribute2[i]);
            }
            for (var i = 0; i < attribute3.length; i++) 
            {
                regarde.push(attribute3[i]);
            }
            console.log(regarde);
            var id = "l"+x+"-c"+y;
            var deplacementImg = document.getElementById(id).getAttribute("data-valeur") ;   
            if(deplacementImg == 0)
            {
            console.log("Pff");  
                
            }
            if(deplacementImg == 2)
            {
            
            console.log('leaf disparais');
            }
        
       /* {
            bomb.style.top = (parseInt(document.getElementById('player').style.top) + 60) + "px";
            bomb.style.top = (parseInt(document.getElementById('player').style.top) - 60) + "px";
            bomb.style.left = (parseInt(document.getElementById('player').style.top) - 60) + "px";
            bomb.style.left = (parseInt(document.getElementById('player').style.top) + 60) + "px";
            console.log('je suis'+ parseInt(deplacementImg) + 'en html');
            }
            if(top.getAttribute('data-valeur') == 2 )
            {
                console.log(top.getAttribute);
            }*/
        }, 4500);
        setTimeout(function(){ console.log('les explosions disparait');explode.style.display = "none" ;}, 4800);        
//    if( bomb.style.left == regarde.style.left || bomb.style.top == regarde.style.top)
   /* {
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
    }*/

    }
});