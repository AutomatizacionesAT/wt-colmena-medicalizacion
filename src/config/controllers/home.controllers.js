import Home from '@views/home.html'

export default () => {
    const subdocument = document.createElement('div')
    subdocument.className = 'hook'
    subdocument.innerHTML = Home

    /** FUNCIONES INTERNAS DEL ELEMENTO**/

    /** **/

    return subdocument
}