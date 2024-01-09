import Hook from '@views/window/hook.html' // *
import notFound from '@views/notFound.html' // CAMBIAR POR LA VISTA QUE VAYAN  A CREAR

export default () => {
    const subdocument = document.createElement('div') // *
    subdocument.className = 'hook' // * Puedes agregar otra clase sin eliminar esta 'hook'
    subdocument.innerHTML = Hook + notFound // *
    const stylesParentElemInHook = subdocument.querySelector('.chcontainer') // * nombre del elmento padre de la vista


    /** FUNCIONES INTERNAS DEL ELEMENTO**/
    
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