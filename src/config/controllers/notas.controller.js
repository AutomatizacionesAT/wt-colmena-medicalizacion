import nt_Principal from '@views/notas/notas_principal.html'
import '@styles/view_notas.scss'

export default ()=> {
    let subdocument = document.createElement('div')
    subdocument.innerHTML = nt_Principal

    const button = subdocument.querySelectorAll('button')

    button.forEach(btn => {
        btn.addEventListener('click', ()=>{
            button.forEach(boton=>{
                boton.classList.remove('active')
            })
            btn.classList.add('active')
        })
    })

    return subdocument
}