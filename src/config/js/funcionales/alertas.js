import Swal from 'sweetalert2'

import navListCheckList from '@views/alerts/navListCheckList.html'
import popShowImgCheck from '@views/alerts/popShowImgCheck.html'

// LAS FUNCIONES QUE EJECUTAN LA ALERTA DEBEN INICIAR CON "pop" seguido del
// nombre de la alerte en camelCase "popAlertaNota"


export const popError = (error) => {
  Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo va mal!',
      footer: `<a href="">${error ? error : 'Error'}</a>`,
      heightAuto: false,
    })
}

export const navListPop = (listOpen) => {
  
  const lists = {
    "checklist" : true,
    "notas": true,
    "calculadoras": true
  }
  if (lists[listOpen]) {
    Swal.fire({
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#ef3829',
      title: listOpen.toUpperCase(),
      html: navListCheckList,
      heightAuto: false,
    })
    let btnsLista = Swal.getHtmlContainer().querySelectorAll('a')
    btnsLista.forEach(element => {
      element.addEventListener('click',()=>{Swal.close()})
    });
  }
}

export const popShowImageCheks = () => {
  Swal.fire({
    html : popShowImgCheck,
    width: '80%',
    confirmButtonText: 'Cerrar',
    heightAuto: false,
  })
}

export const popShowCheckNota = (nota) => {
  console.log(nota)
  Swal.fire({
    icon: 'success',
    width: 600,
    title: "Nota",
    input: 'textarea',
    inputValue: `${nota}`,
    heightAuto: false,
  })
}

export const popCardGuionBig = (html) => {

  let textGuion = html.children[1].children[1].innerText
  html.classList.add('pop')
  Swal.fire({
    icon: 'success',
    title: 'Guión',
    html: html,
    width: 900,
    showConfirmButton: true,
    confirmButtonText: 'Copiar Guión'
  }).then(res=>{
    if (res.isConfirmed) {
      navigator.clipboard.writeText(textGuion)
      .then(() => {
        popOk('Guión Copiado Correctamente')
      })
      .catch(err => {
          popNoCopy(err)
      })
    }
  })
}

export const popOk = (message) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: message
  })
}