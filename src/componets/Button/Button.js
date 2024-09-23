import "./Button.css"
import { Cards } from "../Card/Card"
import { inicializar } from "../Card/Card"
import { inicializarrayas } from "../Tresenraya/Tresenraya"
import { inicializarcaptura } from "../Captura/Captura"

export const createButton = (texto, id) => {
 return `<button id=${id}>${texto}</button>`
}

//Boton de nuevo juego
const cambiarclase = () => {
  document.querySelector("#newGame").setAttribute("class", "memoriabtn")
  const select = document.querySelector("select");
  document.querySelector("#Memoria").innerHTML = "";
  document.querySelector("#Tresenraya").innerHTML = "";
  document.querySelector("#Captura").innerHTML = "";
  if (select.value == "memoriagame"){
    document.querySelector("#newGame").setAttribute("class", "memoriabtn")
    document.querySelector("#newandpoints").remove();
    inicializar();
  }
  else if (select.value == "captura"){
    document.querySelector("#newGame").setAttribute("class", "capturabtn")
    document.querySelector("#newandpoints").remove();
    inicializarcaptura();
  }
  else if (select.value == "tresenraya"){
    document.querySelector("#newGame").setAttribute("class", "tresrayasbtn")
    inicializarrayas();
  }
}

export const printNewPointsTemplate = (puntuacion) => {
  document.querySelector("#app").innerHTML = `<div id= newandpoints>${createButton("Nuevo Juego", "newGame")}
  <h3 id=points>Puntuación: ${puntuacion}</div>` + document.querySelector("#app").innerHTML;
  document.querySelector("#newGame").addEventListener ("click", () => {
  cambiarclase();
    })
  }


