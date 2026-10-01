const emojis = [
  "●●", 
  "●●",
  "●",  
  "●",
  "◎●",
  "◎●",
  "••", 
  "••",
  "•", 
  "•",
  "■", 
  "■",
  "◼︎",
  "◼︎",
  "▪︎", 
  "▪︎",
];
let firstChoice = null;
let secondChoice = null;
let cardsLeftToMatch = emojis.length / 2;

const info = document.querySelector('#info');
let infoScore = document.createElement('div');
infoScore.className = "infoScore";


const scoreKeep = document.createElement('div');
scoreKeep.className = "scoreKeep";

const keepTitre = document.createElement('h2');
keepTitre.innerText = "Encore";
const countKeep = document.createElement('span');
let pairsFound = 0;
countKeep.innerText = pairsFound;

scoreKeep.appendChild(keepTitre);
scoreKeep.appendChild(countKeep);
infoScore.appendChild(scoreKeep);

const scoreLose = document.createElement('div');
scoreLose.className = "scoreLose";

const loseTitre = document.createElement('h2');
loseTitre.innerText = "ooooppsi";
const countLose = document.createElement('span');
let pairsLose = 0;
countLose.innerText = pairsLose;

scoreLose.appendChild(loseTitre);
scoreLose.appendChild(countLose);



infoScore.appendChild(scoreLose);


info.appendChild(infoScore);





const board = document.querySelector("#board");

//const shuffle = (array) => méme chose 
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}


shuffleArray(emojis).forEach ((emoji) => { 
    const cardElement = document.createElement("div"); 
    cardElement.classList.add("card", "hidden");
    cardElement.dataset.emoji = emoji;
    console.log(emoji);


    window.addEventListener("load", () => {
        cardElement.classList.remove('hidden');
        setTimeout(() => {
          cardElement.classList.add('hidden');
        }, 4000);
    });
    
    cardElement.addEventListener("click", () => {
    // on ignore les cartes déjà ouvertes (choisie ou déjà trouvée)
    if (!cardElement.classList.contains('hidden')) {
      return;
    }
    if(firstChoice === null) {
      cardElement.classList.remove('hidden');
      firstChoice = cardElement;
    } else if (secondChoice === null) {
      cardElement.classList.remove('hidden');
      secondChoice = cardElement;
    
    if (firstChoice.dataset.emoji === secondChoice.dataset.emoji) {
      firstChoice = null;
      secondChoice = null;
      cardsLeftToMatch = cardsLeftToMatch -1;
      pairsFound = pairsFound + 1;
      scoreLose.innerText = pairsFound;
      if ( cardsLeftToMatch === 0) { setTimeout (() => {
        window.alert("Vous avez gagné !");
      }, 1000);
      }
        }
    else {
      setTimeout (() => {
        firstChoice.classList.add('hidden');
        secondChoice.classList.add('hidden');
        firstChoice = null;
        secondChoice = null;
      }, 1000); 
    }

    } else { 
      //on laisse vide
      console.log("on laisse vide");
    }
    
  });
    board.appendChild(cardElement);
});




/**
 * retourner les cartes
 * - la carte de base ne doit pas afficher l'emoji
 * - quand on click sur la carte l'emoji doit s'afficher
 * 
 */

