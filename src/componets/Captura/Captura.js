import "./Captura.css"
import { createButton, printNewPointsTemplate } from "../Button/Button";

let puntuacion = 0;
let intervalo;
let pausado = true;

export const inicializarcaptura = () => {
  puntuacion = 0;
  printNewPointsTemplate(puntuacion);
  captura();
}

const capturaTemplate = () => {
  return `
  <div id=interfaz>
  <div id=pizarra></div>
  <div id=controles>
  <div id=botones>${createButton("Play", "jugar")}${createButton("Pausa", "parar")}
  </div>
  <div cofre id=cofre></div>
  </div>
  </div>
`
}
 export const captura = () => {
  document.querySelector("#Captura").innerHTML = capturaTemplate();
   const cofre = document.createElement("img");
   cofre.className = "cofre";
   cofre.src = "./assets/captura/cofre.webp";
   const jugar = document.querySelector("#jugar");
   const parar = document.querySelector("#parar")

   jugar.addEventListener("click", () => {
     pausado = !pausado;
     iniciarJuego();
   });

   parar.addEventListener("click", () => {
     pausado = pausado;
     clearInterval(intervalo);
   });
   document.querySelector("#cofre").append(cofre);
 };

 const createGema = () => {
  const divPizarra= document.querySelector("#pizarra");
  let randomHor = Math.random() * (window.innerWidth - 100);
  let randomVer = Math.random() * (window.innerHeight - 200);

   const imgGema = document.createElement("img");
   imgGema.className = "gema";
   imgGema.style.top = `${randomVer + 150}px`;
   imgGema.style.left = `${randomHor}px`;
   imgGema.style.transform = `rotate(${Math.random() * 360}deg)`;
   imgGema.classList.add("activa");

   imgGema.addEventListener("click", (e) => recogerGema(e));

   imgGema.src = "./assets/captura/gemas.webp";

   divPizarra.append(imgGema);
 };

 const recogerGema = (e) => {
   puntuacion++;
   localStorage.setItem("puntoscaptura", puntuacion)
   const puntuacionHTML = document.querySelector("#points");
   puntuacionHTML.textContent = `Puntuación: ` + puntuacion;
   let randomVer = Math.random() * 20 + 110;
   let randomHor = Math.random() * 25 + 200;
   e.target.style.top = `${window.innerHeight - randomVer}px`;
   e.target.style.left = `${window.innerWidth - randomHor}px`;
   setTimeout(() => {
    e.target.remove()
  }, "1000");
 };

 const iniciarJuego = () => {
    intervalo = setInterval(() => {
     createGema();
   }, 1000);
  }

