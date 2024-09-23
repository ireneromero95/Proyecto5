import "./Header.css";
import { Cards } from "../Card/Card";
import { tresrayas } from "../Tresenraya/Tresenraya";
import { captura } from "../Captura/Captura";
import { printNewPointsTemplate } from "../Button/Button";

export const printheader = () => {
document.querySelector("#header").innerHTML = `<div id= gameselector>
<select name="select">
<option value="memoriagame">Memoria</option>
<option value="tresenraya">Tres en raya</option>
<option value="captura">Captura</option>
</select></div>`
headerlistener();
}

const headerlistener = () =>{
  document.querySelector("#newGame").setAttribute("class", "memoriabtn")
  const select = document.querySelector("select");
  select.addEventListener("change", () => {
    document.querySelector("#Memoria").innerHTML = ""
    document.querySelector("#Tresenraya").innerHTML = ""
    document.querySelector("#Captura").innerHTML = ""
    if (select.value == "memoriagame"){
      if ((localStorage.getItem("puntoscartas") > 0)){
      let puntuacion = localStorage.getItem("puntoscartas")
      document.querySelector("#newandpoints").remove();
      printNewPointsTemplate(puntuacion);}
      Cards();
    }
    else if (select.value == "captura"){
 
      if ((localStorage.getItem("puntoscaptura") > 0)){
        let puntuacion = localStorage.getItem("puntoscaptura")
        document.querySelector("#newandpoints").remove();
        printNewPointsTemplate(puntuacion);
      }
      captura();
    }
    else if (select.value == "tresenraya"){
      tresrayas();
      let puntuacion = 0;
      document.querySelector("#newandpoints").remove();
      printNewPointsTemplate(puntuacion);
    }
  })
}




