import './Header.css'
import { Cards } from '../Card/Card'
import { tresrayas } from '../Tresenraya/Tresenraya'
import { captura } from '../Captura/Captura'
import {
  printNewPointsTemplate,
  printNewPointsTemplateTresRayas
} from '../Button/Button'

export const printheader = () => {
  document.querySelector('#header').innerHTML = `<div id= gameselector>
<select name="select">
<option value="memoriagame">Memoria</option>
<option value="tresenraya">Tres en raya</option>
<option value="captura">Captura</option>
</select></div>`
  headerlistener()
}

const headerlistener = () => {
  document.querySelector('#newGame').setAttribute('class', 'memoriabtn')
  const select = document.querySelector('select')
  select.addEventListener('change', () => {
    document.querySelector('#Memoria').innerHTML = ''
    document.querySelector('#Tresenraya').innerHTML = ''
    document.querySelector('#Captura').innerHTML = ''
    if (select.value == 'memoriagame') {
      if (localStorage.getItem('puntoscartas') > 0) {
        let puntuacion = localStorage.getItem('puntoscartas')
        document.querySelector('#newandpoints').remove()
        printNewPointsTemplate(puntuacion)
      }
      Cards()
    } else if (select.value == 'captura') {
      if (localStorage.getItem('puntoscaptura') > 0) {
        let puntuacion = localStorage.getItem('puntoscaptura')
        document.querySelector('#newandpoints').remove()
        printNewPointsTemplate(puntuacion)
      }
      captura()
    } else if (select.value == 'tresenraya') {
      let contador = 0
      let puntuacion = 0
      let puntuacion2 = 0
      if (localStorage.getItem('puntoscirculo') > 0) {
        let puntuacion2 = localStorage.getItem('puntoscirculo')
        document.querySelector('#newandpoints').remove()
        printNewPointsTemplateTresRayas(puntuacion, puntuacion2)
      } else if (localStorage.getItem('puntosequis') > 0) {
        let puntuacion = localStorage.getItem('puntosequis')
        document.querySelector('#newandpoints').remove()
        printNewPointsTemplateTresRayas(puntuacion, puntuacion2)
      } else {
        let puntuacion = 0
        let puntuacion2 = 0
        document.querySelector('#newandpoints').remove()
        printNewPointsTemplateTresRayas(puntuacion, puntuacion2)
      }
      tresrayas()
    }
  })
}
