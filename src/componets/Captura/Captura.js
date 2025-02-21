import './Captura.css';
import { createButton, printNewPointsTemplate } from '../Button/Button';

let puntuacion = 0;
let intervalo;
let pausado = true;
let juegoTerminado = false;

export const inicializarcaptura = () => {
  puntuacion = 0;
  juegoTerminado = false;
  printNewPointsTemplate(puntuacion);
  captura();
};

const capturaTemplate = () => {
  return `
  <div id=interfaz>
  <div id=pizarra></div>
  <div id=controles>
  <div id=botones>${createButton('Play', 'jugar')}${createButton(
    'Pausa',
    'parar'
  )}
  </div>
  <div cofre id=cofre></div>
  </div>
  </div>
`;
};
export const captura = () => {
  document.querySelector('#Captura').innerHTML = capturaTemplate();
  const cofre = document.createElement('img');
  cofre.className = 'cofre';
  cofre.src = './assets/captura/cofre.webp';
  const jugar = document.querySelector('#jugar');
  const parar = document.querySelector('#parar');

  jugar.addEventListener('click', () => {
    pausado = !pausado;
    iniciarJuego();
  });

  parar.addEventListener('click', () => {
    pausado = pausado;
    clearInterval(intervalo);
  });
  document.querySelector('#cofre').append(cofre);
};

const createGema = () => {
  const divPizarra = document.querySelector('#pizarra');
  //Añadiendo para controlar zona
  const rectPizarra = divPizarra.getBoundingClientRect();

  const margen = 20; // Ajusta según necesites

  let randomHor =
    Math.random() * (rectPizarra.width - 100 - margen * 2) + margen;
  let randomVer =
    Math.random() * (rectPizarra.height - 100 - margen * 2) + margen;

  // let randomHor = Math.random() * (window.innerWidth - 100);
  // let randomVer = Math.random() * (window.innerHeight - 200);

  const imgGema = document.createElement('img');
  imgGema.className = 'gema';
  // imgGema.style.top = `${randomVer + 150}px`;
  // imgGema.style.left = `${randomHor}px`;
  imgGema.style.top = `${rectPizarra.top + randomVer}px`;
  imgGema.style.left = `${rectPizarra.left + randomHor}px`;
  imgGema.style.transform = `rotate(${Math.random() * 360}deg)`;
  imgGema.classList.add('activa');

  imgGema.addEventListener('click', (e) => recogerGema(e));

  imgGema.src = './assets/captura/gemas.webp';

  divPizarra.append(imgGema);
};

const recogerGema = (e) => {
  console.log(juegoTerminado);
  if (juegoTerminado) return;
  puntuacion++;
  localStorage.setItem('puntoscaptura', puntuacion);
  const puntuacionHTML = document.querySelector('#points');
  puntuacionHTML.textContent = `Puntuación: ` + puntuacion;

  /// No funciona

  if (puntuacion >= 5) {
    juegoTerminado = true;
  }

  if (juegoTerminado == true) {
    mostrarVictoria(); // Mostrar mensaje de victoria
    clearInterval(intervalo); // Detener el intervalo de las gemas
    intervalo = null;
  }

  const cofre = document.querySelector(`#cofre`);
  const posicionCofre = cofre.getBoundingClientRect();
  console.log(posicionCofre);
  e.target.style.top = `${posicionCofre.top}px`;
  e.target.style.left = `${posicionCofre.left}px`;

  setTimeout(() => {
    e.target.remove();
  }, '300');
};

const iniciarJuego = () => {
  if (juegoTerminado) {
    return;
  }
  intervalo = setInterval(() => {
    createGema();
  }, 700);
};

const mostrarVictoria = () => {
  const victoriaMensaje = document.createElement('div');
  victoriaMensaje.id = 'victoriaMensaje';
  victoriaMensaje.textContent = '¡Victoria! Has alcanzado 5 puntos';

  document.querySelector('#pizarra').appendChild(victoriaMensaje);
};
