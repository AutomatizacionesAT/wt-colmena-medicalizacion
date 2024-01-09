import Chat from '@views/guiones/chat.html'
import '@styles/view_guiones.scss'
import {DB_Guiones_Chat} from '@javascript/API/guiones.chat.js'

import  {buscarElemento, copiarValor} from '@javascript/funcionales/funcionesGlobales.js'
import  {popOk, popCardGuionBig} from '@javascript/funcionales/alertas.js'

export default () => {
    const subdocument = document.createElement('div')
    subdocument.innerHTML = Chat


    /** FUNCIONES INTERNAS DEL ELEMENTO**/
        //asigna titulo de pagina

        // carga las cards
    const cardsContainer = subdocument.querySelector('#cardsContainer')

    DB_Guiones_Chat.forEach(element => {
        let cardHTML = `
            <div class="guiones-chat dato-buscado">
                <div class="headerr">
                    <p>${element.ESCENARIO}</p>
                </div>
                <div class="info">
                    <p class="title">${element.MOMENTO}</p>
                    <p class="guion">${element.GUIONES}</p>
                </div>
                <div class="footer">
                    <button type="button" class="action card-show">Ver</button>
                    <button type="button" class="action card-copy">Copiar</button>
                </div>
            </div>
        `;
        cardsContainer.innerHTML += cardHTML
    });

        // buscador de cards
    // document.querySelector('#searcher').addEventListener('keyup', (e)=> {
    //     buscarElemento(e.target.value)
    // })

    subdocument.querySelectorAll('.card-copy').forEach(el=> {
        el.addEventListener('click', ()=>{
            copiarValor(el.parentNode.parentNode.children[1].children[1].innerText)
            popOk('Guión copiado correctamente')
        })
    })

    subdocument.querySelectorAll('.card-show').forEach(el=> {
        el.addEventListener('click', ()=>{
            let cardHtml = el.parentNode.parentNode.cloneNode(true)
            popCardGuionBig(cardHtml)
        })
    })

    /** **/
    return subdocument
}