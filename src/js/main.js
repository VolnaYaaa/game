const emojis = [
  "👄",
  "🧚‍♀️",
  "💩",
  "🐢",
  "🤡",
  "👁️",
  "🐤",
  "🙊",
  "🌽",
  "🌵",
  "🌻",
  "🐝",
  "👄",
  "🧚‍♀️",
  "💩",
  "🐢",
  "🤡",
  "👁️",
  "🐤",
  "🙊",
  "🌽",
  "🌵",
  "🌻",
  "🐝",
];

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
    const card = document.createElement("div"); 
    card.classList.add("card");

    card.addEventListener("click", () => {
       card.dataset.emoji = emoji;
    });

    board.appendChild(card);
});


/**
 * retourner les cartes
 * - la carte de base ne doit pas afficher l'emoji
 * - quand on click sur la carte l'emoji doit s'afficher
 * 
 */

