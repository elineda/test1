var vie = 10;
var reponse;
function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Utilisation
//La variable contient un nombre aléatoire compris entre 1 et 10
var entier = entierAleatoire(1, 1000);
alert(entier);

while (vie>0) {
    reponse = prompt("test");
    reponse = parseInt(reponse);

    if (reponse>1000 || reponse<0) {
      alert("Vie cotorep")
      vie++;
    }

    else {
    if (reponse==entier) {
      alert("juste");
      break;
    }

    else if (reponse<entier) {
      alert("plus il te reste " + vie + " vie");
    }

    else {
      alert("moins il te reste " + vie + "vie");
    }
}
    vie--;
}

if (vie==0) {
  alert("rapé");
}
