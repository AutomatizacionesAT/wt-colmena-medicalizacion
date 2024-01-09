import Hook from '@views/window/hook.html'
import Guiones from '@views/guiones/medicalizacion.html'
import '@styles/view_guiones.scss'
import {DB_Guiones_Medicalizacion} from '@javascript/API/guiones.medicalizacion.js'

import  {buscarElemento, copiarValor} from '@javascript/funcionales/funcionesGlobales.js'
import  {popOk, popCardGuionBig} from '@javascript/funcionales/alertas.js'

export default () => {
    const subdocument = document.createElement('div')
    subdocument.className = 'hook'
    subdocument.innerHTML = Hook + Guiones
    const stylesParentElemInHook = subdocument.querySelector('.container')

    /** FUNCIONES INTERNAS DEL ELEMENTO**/
        //asigna titulo de pagina

        // carga las cards
    const cardsContainer = subdocument.querySelector('#cardsContainer')


    DB_Guiones_Medicalizacion.forEach(element => {
        let cardHTML = `
            <div class="guiones dato-buscado">
                <div class="headerr">
                    <p>${element.TITULO}</p>
                </div>
                <div class="info">
                    <p class="title">${element.TITULO}</p>
                    <p class="guion">${element.GUION}</p>
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

    subdocument.querySelectorAll('.hook__hook--btn').forEach((button) => {
        button.addEventListener('click', ()=>{
            switch (button.name) {
                case 'open': 
                    subdocument.classList.add('active')
                    stylesParentElemInHook.classList.add('active')

                    document.querySelector('#searcherGuion').addEventListener('keyup', (e)=> {
                        buscarElemento(e.target.value)
                    })

                    break
                case 'close': {
                    buscarElemento('')
                    subdocument.classList.remove('active')
                    stylesParentElemInHook.classList.remove('active')

                    break;
                }
            }
        })
    })
    return subdocument
}