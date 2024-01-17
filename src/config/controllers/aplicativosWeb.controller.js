import Hook from '@views/window/hook.html' // *
import AplicativosWeb from '@views/aplicativosWeb.html' // CAMBIAR POR LA VISTA QUE VAYAN  A CREAR
import  {buscarElemento} from '@javascript/funcionales/funcionesGlobales.js'

export default () => {
    const subdocument = document.createElement('div') // *
    subdocument.className = 'hook' // * Puedes agregar otra clase sin eliminar esta 'hook'
    subdocument.innerHTML = Hook + AplicativosWeb // *
    const stylesParentElemInHook = subdocument.querySelector('.aplicativos') // * nombre del elmento padre de la vista


    /** FUNCIONES INTERNAS DEL ELEMENTO**/
    document.querySelector('#inputSearch').addEventListener('keyup', (e) => {
        buscarElemento(e.target.value);
    });


    /** **/

    // * funcion para ampliar hook
    subdocument.querySelectorAll('.hook__hook--btn').forEach((button) => {
        button.addEventListener('click', ()=>{
            switch (button.name) {
                case 'open': 
                    subdocument.classList.add('active')
                    stylesParentElemInHook.classList.add('active')
                    break
                case 'close': {
                    subdocument.classList.remove('active')
                    stylesParentElemInHook.classList.remove('active')
                    break;
                }
            }
        })
    })
    return subdocument
}