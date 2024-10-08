import {
  printNewPointsTemplate,
  printNewPointsTemplateTresRayas
} from '../Button/Button'
import './Tresenraya.css'

let contador = 0
let puntuacion = 0
let puntuacion2 = 0

//He creado la funcion comprobar
const comprobar = () => {
  const equis = 'url(../../assets/tresenrayas/equis.png)'
  const circulo = 'url(../../assets/tresenrayas/circulo.png)'
  //Aquí hay muchísimo texto intenté hacer un bucle pero no se me ocurría
  //cómo hacer para casilla[i]

  const casilla1 = document.getElementById('1')
  const casilla2 = document.getElementById('2')
  const casilla3 = document.getElementById('3')
  const casilla4 = document.getElementById('4')
  const casilla5 = document.getElementById('5')
  const casilla6 = document.getElementById('6')
  const casilla7 = document.getElementById('7')
  const casilla8 = document.getElementById('8')
  const casilla9 = document.getElementById('9')
  const casilla10 = document.getElementById('10')

  if (
    (casilla1.className === casilla2.className &&
      casilla2.className === casilla3.className &&
      casilla1.className === 'equis') ||
    (casilla1.className === casilla4.className &&
      casilla7.className === casilla4.className &&
      casilla1.className === 'equis') ||
    (casilla6.className === casilla3.className &&
      casilla6.className === casilla9.className &&
      casilla3.className === 'equis') ||
    (casilla4.className === casilla5.className &&
      casilla5.className === casilla6.className &&
      casilla4.className === 'equis') ||
    (casilla7.className === casilla8.className &&
      casilla9.className === casilla7.className &&
      casilla7.className === 'equis') ||
    (casilla2.className === casilla5.className &&
      casilla8.className === casilla2.className &&
      casilla2.className === 'equis') ||
    (casilla1.className === casilla5.className &&
      casilla1.className === casilla9.className &&
      casilla1.className === 'equis')
  ) {
    console.log('punto para equis')
    puntuacion++
    localStorage.setItem('puntosequis', puntuacion)
    setTimeout(() => {
      document.querySelector('#tablero').remove()
    }, '1000')
    setTimeout(() => {
      document.querySelector('#newandpoints').remove()
      printNewPointsTemplateTresRayas(puntuacion, puntuacion2)
      tresrayas()
    }, '1001')
  }
  if (
    (casilla1.className === casilla2.className &&
      casilla2.className === casilla3.className &&
      casilla1.className === 'circulo') ||
    (casilla1.className === casilla4.className &&
      casilla7.className === casilla4.className &&
      casilla1.className === 'circulo') ||
    (casilla6.className === casilla3.className &&
      casilla6.className === casilla9.className &&
      casilla3.className === 'circulo') ||
    (casilla4.className === casilla5.className &&
      casilla5.className === casilla6.className &&
      casilla4.className === 'circulo') ||
    (casilla2.className === casilla5.className &&
      casilla8.className === casilla2.className &&
      casilla2.className === 'circulo') ||
    (casilla7.className === casilla8.className &&
      casilla9.className === casilla7.className &&
      casilla7.className === 'circulo') ||
    (casilla1.className === casilla5.className &&
      casilla1.className === casilla9.className &&
      casilla1.className === 'circulo')
  ) {
    console.log('punto para circulo')
    puntuacion2++
    localStorage.setItem('puntoscirculo', puntuacion2)
    setTimeout(() => {
      document.querySelector('#tablero').remove()
    }, '1000')
    setTimeout(() => {
      document.querySelector('#newandpoints').remove()
      printNewPointsTemplateTresRayas(puntuacion, puntuacion2)
      tresrayas()
    }, '1001')
  }
}

//Genera el marcador pero aún no recoge la puntuación

const hacerequis = (casilla, id) => {
  if (casilla.style.backgroundImage === '') {
    if (contador % 2 == 0) {
      contador++
      casilla.style.backgroundImage = 'url(../../assets/tresenrayas/equis.png)'
      casilla.parentNode.setAttribute('class', 'equis')
    } else {
      casilla.style.backgroundImage =
        'url(../../assets/tresenrayas/circulo.png)'
      contador++
      casilla.parentNode.setAttribute('class', 'circulo')
    }
  } else {
    console.log('Mal, elige una casilla vacía')
  }
}

export const inicializarrayas = () => {
  let contador = 0
  let puntuacion = 0
  let puntuacion2 = 0
  printNewPointsTemplateTresRayas(puntuacion, puntuacion2)
  tresrayas()
}

export const tresrayas = () => {
  const casillaTemplate = () => {
    return `<div class="casilla"></div>`
  }
  const tablero = document.createElement('div')
  tablero.setAttribute('id', 'tablero')
  document.querySelector('#Tresenraya').append(tablero)

  for (let i = 0; i < 9; i++) {
    const casillaDiv = document.createElement('div')
    casillaDiv.setAttribute('id', i + 1)
    casillaDiv.innerHTML = casillaTemplate()
    document.querySelector('#tablero').append(casillaDiv)
    casillaDiv.addEventListener('click', () => {
      hacerequis(casillaDiv.firstChild, casillaDiv.id)
      comprobar()
    })
  }
}
