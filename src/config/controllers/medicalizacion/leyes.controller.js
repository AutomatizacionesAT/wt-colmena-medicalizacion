
import Leyes from '@views/leyes/medicalizacion.html'
import '@styles/view_leyes.scss'
import {DB_leyes_medicalizacion} from '@javascript/API/leyes.medicalizacion.js'
import Swal from 'sweetalert2'


export default () => {
    const subdocument = document.createElement('div')
    subdocument.innerHTML = Leyes

    const cardsContainer = subdocument.querySelector('#cardsContainer')


    const popNormativa = (html, id) => {
      console.log(id)
      const longDesc = DB_leyes_medicalizacion.filter(obj=> obj.ID == id)
      console.log(longDesc)
      html.querySelector('.guion').textContent = longDesc[0].DESCRIPCION
      Swal.fire({
        icon: "question",
        width: '80%',
        html: html,
        customClass: {
          htmlContainer: 'myswal-html'
        }
      });
    }

    DB_leyes_medicalizacion.forEach(element => {
          let cardHTML = `
          <div class="guiones dato-buscado">
              <div class="headerr">
                  <p>${element.NORMA}</p>
              </div>
              <div class="info">
                  <p class="title">${element.NOMBRE}</p>
                  <p class="guion">${element.RESUMEN}</p>
              </div>
              <div class="footer">
                  <button type="button" class="action card-show" name="${element.ID}">Ver</button>
                  <button type="button" class="action card-copy" name="${element.ID}">Copiar</button>
              </div>
          </div>
      `;
      cardsContainer.innerHTML += cardHTML
    });

    subdocument.querySelectorAll('.card-show').forEach(el=> {
      el.addEventListener('click', ()=>{
          let cardHtml = el.parentNode.parentNode.cloneNode(true)
          popNormativa(cardHtml, el.getAttribute('name'))
      })
  })

    return subdocument
}