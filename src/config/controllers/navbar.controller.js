import Navbar from '@views/navbar.html' // CAMBIAR POR LA VISTA QUE VAYAN  A CREAR

export default () => {
//     const header = document.createElement('header') 
//     header.className = 'header animate__animated' 
const header = document.querySelector('#header')
    header.insertAdjacentElement('afterbegin', Navbar) 
      console.log('hola')

    /** FUNCIONES INTERNAS DEL ELEMENTO**/
    
    /** **/
    return header
}