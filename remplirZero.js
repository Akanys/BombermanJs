
    carteBinaire.filter( document.getElementsByClassName('sol').getAttribute("data-valeur") == "0", function(block){
        
        block.style.backgroundColor = 'red';
      });
/*function colorZ(vide)
{
var vide = documentByNameClasse('sol').getAttribute("data-valeur");
var changeVide = documentByNameClasse('sol').style.backgroundColor   // OR TEST ByID
    while(i <= 121)
    {
        i++ ;
        if(vide != 1) 
        {
            changeVide = 'red' ;
        } 
        else
        console.log('vide') ;
    }
}*/