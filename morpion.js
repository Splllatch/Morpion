let jeuActif = true
let joueurActif = "X"
let etatJeu = ["","","","","","","","",""]
const morpion = document.getElementById("morpion")
const statut = document.getElementById("statut")

const gagne = () => `le joueur ${joueurActif} a gagne`
const egalite = () => 'egalite'
const tourJoueur = () => `C'est au tour du joueur ${joueurActif}`



 

const conditionsVictoire = [ 
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];



document.querySelectorAll(".case").forEach(cell => cell.addEventListener("click", gestionClicCase  ))
document.querySelector("#recommencer").addEventListener("click", recommencer  )

function gestionClicCase() {
  const indexCase = parseInt(this.dataset.index)

  if (etatJeu[indexCase] != "" || !jeuActif){
    return
  }

  etatJeu[indexCase] = joueurActif
  this.innerHTML = joueurActif
  
  

  verifGagne()

  }


  function verifGagne(){
    let tourGagant = false

    for(let conditionVictoire of conditionsVictoire){
      let val1 = etatJeu[conditionVictoire[0]]
      let val2 = etatJeu[conditionVictoire[1]]
      let val3 = etatJeu[conditionVictoire[2]]
      if (val1 == "" || val2 == "" || val3 == ""  ){
        
        continue
      }
      if (val1 == val2 && val2 == val3) {
        tourGagant = true 
        break
      }
    }

    if(tourGagant){
      statut.innerHTML = gagne()
      jeuActif = false
      return
    }

    if(!etatJeu.includes("")){
      statut.innerHTML = egalite()
      jeuActif = false
      return
    }

    joueurActif = joueurActif == "X" ? "O" : "X"
    statut.innerHTML = tourJoueur()
  }

function recommencer() {
  joueurActif = "X"
  jeuActif = true
  etatJeu = ["","","","","","","","",""]
  document.querySelectorAll(".case").forEach(cell => cell.innerHTML = "")
}
