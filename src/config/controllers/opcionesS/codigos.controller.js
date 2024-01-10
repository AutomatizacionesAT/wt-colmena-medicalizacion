import Hook from '@views/window/hook.html'
import Codigos from '@views/opcionesS/codigos.html'
import '@styles/view_codigos.scss'
// import { DB_Guiones_InfoYMedios } from '@javascript/API/guiones.infoymedios.js'

import { buscarElemento, copiarValor } from '@javascript/funcionales/funcionesGlobales.js'
import { popOk, popCardGuionBig } from '@javascript/funcionales/alertas.js'

export default () => {
    const subdocument = document.createElement('div')
    subdocument.className = 'hook'
    subdocument.innerHTML = Hook + Codigos
    const stylesParentElemInHook = subdocument.querySelector('.containerCod')

    /** FUNCIONES INTERNAS DEL ELEMENTO**/
   

    /** **/

    subdocument.querySelectorAll('.hook__hook--btn').forEach((button) => {
        button.addEventListener('click', () => {
            switch (button.name) {
                case 'open':
                    subdocument.classList.add('active')
                    stylesParentElemInHook.classList.add('active')

                    // document.querySelector('#searcherGuion').addEventListener('keyup', (e) => {
                    //     buscarElemento(e.target.value)
                    // })

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