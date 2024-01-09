import notFound from '@views/notFound.html'

export default () => {
    const elemento = document.createElement('div')
    // elemento.className = 'nombre-clase' //Agrega una clase al contenedor del componente
    elemento.innerHTML = notFound

    /** FUNCIONES INTERNAS DEL ELEMENTO**/
    
    /** **/
    return elemento
}