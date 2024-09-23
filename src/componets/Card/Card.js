import "./Card.css"
import { printNewPointsTemplate } from "../Button/Button";

const arrayCartas = [
  {
    id: 1,
    color: "red",
  },
  {
    id: 2,
    color: "orange",
  },
  {
    id: 3,
    color: "blue",
  },
  {
    id: 4,
    color: "pink",
  },
  {
    id: 5,
    color: "black",
  },
  {
    id: 6,
    color: "red",
  },
  {
    id: 7,
    color: "orange",
  },
  {
    id: 8,
    color: "blue",
  },
  {
    id: 9,
    color: "pink",
  },
  {
    id: 10,
    color: "black",
  },
];
 
let contador = 0
export let carta1;
export let carta2;
let puntuacion = 0;

 if (localStorage.getItem("puntoscartas") >0){
   puntuacion = localStorage.getItem("puntoscartas");
 }

export const inicializar = () => {
  contador = 0;
  puntuacion = 0;
  printNewPointsTemplate(puntuacion);
  Cards();
}

const cardTemplate = () =>{ 
return `<div class="carta"></div>`
}

const resetearCarta = (cartareseteo) => {
  cartareseteo.nodoHTML.style.backgroundColor = "#007396";
  cartareseteo.nodoHTML.style.backgroundImage = "url(https://www.transparenttextures.com/patterns/dark-geometric.png)";
}

const puntuacionHTML = document.querySelector("#points");
printNewPointsTemplate(puntuacion);


const comprobar = (carta1, carta2) => {
  const puntuacionHTML = document.querySelector("#points");
  if (carta1.color == carta2.color){
    puntuacion++
    localStorage.setItem("puntoscartas", puntuacion)
    contador = 0;
  }
  else {
    setTimeout(() => {
    resetearCarta(carta1)
    resetearCarta(carta2)
    contador = 0;
    }, 500);
  }
   puntuacionHTML.textContent = `Puntuación: ` + puntuacion;
}


const seleccionar = (carta, color, id) =>{
  if (contador < 2){
    carta.style.backgroundColor = color;
    carta.style.backgroundImage = "none"
    contador++;
  }
  if (contador === 1) {
    carta1 = {
      nodoHTML: carta,
      color: color,
      id: id,
    }
    console.log(carta1);
  }
  if (contador === 2){
    carta2 = {
      nodoHTML: carta,
      color: color,
      id: id,
    }

    if (carta1.id == carta2.id){
      contador = 1
    }
    else {
    console.log(carta2);
    comprobar(carta1, carta2);
    }
  }
}

export const Cards = (number = 10) => {
  arrayCartas.sort(() => Math.random() - Math.random());
  const totalCards = number
  const cards = [];
  const cartas = document.createElement("div");
  cartas.setAttribute("id", "cartas")
  document.querySelector("#Memoria").append(cartas);

  for (let i = 0; i < totalCards; i++){
    const cardDiv = document.createElement("div")
    cardDiv.innerHTML = cardTemplate();
    cards.push(cardDiv);
    const card = cards[i]
    card.color = arrayCartas[i].color
    card.id = arrayCartas[i].id
    cardDiv.addEventListener("click", () => seleccionar(cardDiv.firstChild, card.color, card.id));
    cartas.append(card);
  }
}
