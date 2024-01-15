import Hook from '@views/window/hook.html'
import Codigos from '@views/opcionesS/glosario.html'
import '@styles/view_glosario.scss'
import Swal from 'sweetalert2'

import { buscarElemento, copiarValor } from '@javascript/funcionales/funcionesGlobales.js'
import { BD_Gestion } from '@javascript/BD/BD_Gestion.js'

export default () => {
    const subdocument = document.createElement('div')
    subdocument.className = 'hook'
    subdocument.innerHTML = Hook + Codigos
    const stylesParentElemInHook = subdocument.querySelector('.containerCod')
    const codigos = subdocument.querySelector('#cardsContainer')

    /** FUNCIONES INTERNAS DEL ELEMENTO**/
    BD_Gestion.forEach(obj => {
        let componente = `
            <div class="cardGlo dato-buscado">
                <div class="additional">
                    <div class="user-card">
                        <div class="level center">
                            Término
                        </div>
                        <div class="codi center">
                            <i class="fa-solid fa-book-atlas"></i>
                        </div>
                        <div class="level center abreteSesamo">
                            Ampliar
                        </div>
                    </div>
                    <div class="more-info">
                        <h1>${obj.termino}</h1>
                        <div class="coords">
                            <span>Legislación</span> <br><br>
                            <p>${obj.legislacion}</p>
                        </div>
                    </div>
                </div>
                <div class="general">
                    <h1>${obj.termino}</h1>
                    <div class="conti">
                        <div class="servicios">
                            <p><strong>Definición</strong></p>
                            <p>${obj.definicion}</p>
                        </div>
                    </div>
                </div>
            </div>
        `
        codigos.insertAdjacentHTML('beforeend', componente);

        const abreteSesamoList = codigos.querySelectorAll('.abreteSesamo');

        abreteSesamoList.forEach((abreteSesamo, index) => {
            // Obtiene el objeto correspondiente al índice actual
            const obj = BD_Gestion[index];

            abreteSesamo.addEventListener('click', () => {
                Swal.fire({
                    width: '50%',
                    title: `${obj.termino}`,
                    confirmButtonText: 'Cerrar',
                    html: `${obj.definicion}`,
                    icon: "info"
                });
            });
        });
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