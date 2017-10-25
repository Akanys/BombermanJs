if(vie <= 0)
{
var id = document.getElementById() ;
    if(document.getElementById('ennemi1').style.vie <= '0' )
    {
        setTimeout(function(){ console.log("Un mort") ;document.getElementById(id).backgroundImage = 'url("bomberpng/leaf.png")';  }, 1500);
        setTimeout(function(){ console.log("il disparait") ;document.getElementById(id).style.display = 'none' ;  }, 3000);
    }
    if(document.getElementById('ennemi2').style.vie <= '0' )
    {
        setTimeout(function(){ console.log("Un mort") ;document.getElementById(id).backgroundImage = 'url("bomberpng/leaf.png")';  }, 1500);
        setTimeout(function(){ console.log("il disparait") ;document.getElementById(id).style.display = 'none' ;  }, 3000);
    }
    if(document.getElementById('ennemi3').style.vie <= '0' )
    {
        setTimeout(function(){ console.log("Un mort") ;document.getElementById(id).backgroundImage = 'url("bomberpng/leaf.png")';  }, 1500);
        setTimeout(function(){ console.log("il disparait") ;document.getElementById(id).style.display = 'none' ;  }, 3000);
    }
    if(document.getElementById('player').style.vie <= '0' )
    {
        setTimeout(function(){ console.log("Un mort") ;document.getElementById(id).backgroundImage = 'url("bomberpng/leaf.png")';  }, 1500);
        setTimeout(function(){ console.log("il disparait") ;document.getElementById(id).style.display = 'none' ;  }, 3000);
    }

 /*   document.getElementById('ennemi2').style.display = 'none' ;
    document.getElementById('ennemi3').style.display = 'none' ;
    document.getElementById('player').style.display = 'none' ;
    */
}