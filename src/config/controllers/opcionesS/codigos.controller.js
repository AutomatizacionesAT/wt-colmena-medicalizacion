import Hook from '@views/window/hook.html'
import Codigos from '@views/opcionesS/codigos.html'
import '@styles/view_codigos.scss'
// import { DB_Guiones_InfoYMedios } from '@javascript/API/guiones.infoymedios.js'

import { buscarElemento, copiarValor } from '@javascript/funcionales/funcionesGlobales.js'
import { BD_Codigos } from '@javascript/BD/BD_Codigos.js'
import { popOk, popCardGuionBig } from '@javascript/funcionales/alertas.js'

export default () => {
    const subdocument = document.createElement('div')
    subdocument.className = 'hook'
    subdocument.innerHTML = Hook + Codigos
    const stylesParentElemInHook = subdocument.querySelector('.containerCod')
    const codigos = subdocument.querySelector('#cardsContainer')

    /** FUNCIONES INTERNAS DEL ELEMENTO**/
    BD_Codigos.forEach(obj => {
        let componente = `
            <div class="card dato-buscado">
                <div class="additional">
                    <div class="user-card">
                        <div class="level center">
                            Código
                        </div>
                        <div class="codi center">
                            <i class="fa-solid fa-code"></i>
                        </div>
                        <div class="level center">
                            ${obj.seccion}
                        </div>
                    </div>
                    <div class="more-info">
                        <h1>${obj.cod}</h1>
                        <div class="coords">
                            <span>Observación</span> <br><br>
                            <p>${obj.observacion}</p>
                        </div>
                    </div>
                </div>
                <div class="general">
                    <h1>${obj.cod}</h1>
                    <div class="conti">
                        <div class="servicios">
                            <p><strong>Servicio</strong></p>
                            <p>${obj.servicio}</p>
                        </div>
                        <div class="prestador">
                            <p><strong>Prestador</strong></p>
                            <p>${obj.prestador}</p>
                        </div>
                    </div>
                </div>
            </div>
        `
        codigos.insertAdjacentHTML('beforeend', componente);

    })

    document.querySelector('#inputSearch').addEventListener('keyup', (e) => {
        buscarElemento(e.target.value);
    });

    subdocument.querySelectorAll('.hook__hook--btn').forEach((button) => {
        button.addEventListener('click', () => {
            switch (button.name) {
                case 'open':
                    subdocument.classList.add('active');
                    stylesParentElemInHook.classList.add('active');
                    break;
                case 'close':
                    buscarElemento('');
                    subdocument.classList.remove('active');
                    stylesParentElemInHook.classList.remove('active');
                    break;
            }
        });
    });
    return subdocument
}