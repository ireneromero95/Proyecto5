import { printNewPointsTemplate } from "../Button/Button"
import "./Tresenraya.css"

let contador = 0

const hacerequis = (casilla, id) =>{
  console.log(casilla.style.backgroundImage)
  if (casilla.style.backgroundImage === "") {
    if (contador%2 == 0){
      contador++
      casilla.style.backgroundImage = "url(../../assets/tresenrayas/equis.png)"
      console.log(casilla, id);}
    else {
      casilla.style.backgroundImage = "url(../../assets/tresenrayas/circulo.png)"
      contador++
      }}
  else{
     console.log("mal");
  }}

  export const inicializarrayas = () => {
    let contador = 0;
    let puntuacion = 0;
    document.querySelector("#newandpoints").remove();
    printNewPointsTemplate(puntuacion);
    tresrayas();
  }

export const tresrayas = () => {
  const casillaTemplate = () =>{ 
    return `<div class="casilla"></div>`
    }
    const tablero = document.createElement("div")
    tablero.setAttribute("id", "tablero")
    document.querySelector("#Tresenraya").append(tablero);
    
  for (let i = 0; i < 9; i++){
    const casillaDiv = document.createElement("div")
    casillaDiv.setAttribute("id", i + 1);
    casillaDiv.innerHTML = casillaTemplate();
    document.querySelector("#tablero").append(casillaDiv);
    casillaDiv.addEventListener("click", () => {
      hacerequis(casillaDiv.firstChild, casillaDiv.id);
    });
  }
}

