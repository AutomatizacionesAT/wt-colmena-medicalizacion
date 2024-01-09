import '@javascript/componentes/NavBar.js'
import '@javascript/componentes/InputList.js'
import '@javascript/componentes/InputText.js'
import '@javascript/componentes/inputRadio.js'
import '@javascript/componentes/ListCheck.js'
import '@styles/view_checklist.scss'

import Hook from '@views/window/hook.html'
import Checklist_a from '@views/checklist/checklist_a.html'
import Checklist_b from '@views/checklist/checklist_b.html'
import Checklist_c from '@views/checklist/checklist_c.html'

import { popShowImageCheks, popShowCheckNota } from '@javascript/funcionales/alertas.js'

export default () => {
  const subdocument = document.createElement('div')
  subdocument.className = 'hook' //Puedes agregar otra clase sin eliminar esta 'hook'
  let hash = window.location.hash
  const checkListActive = (ruta) => {
    switch (ruta) {
      case '#/checklist_a':{
        return Checklist_a
      }
      case '#/checklist_b':{
        return Checklist_b
      }
      case '#/checklist_c':{
        return Checklist_c
      }
    }
  }

  subdocument.innerHTML += Hook + checkListActive(hash)

    /** FUNCIONES INTERNAS DEL ELEMENTO**/
    const formChecks = subdocument.querySelector('#formChecks')
    const formDescripciones = subdocument.querySelector('#formDesc')
    const btnResetForm = subdocument.querySelector('#resetAllForm')
    const btnGetNota = subdocument.querySelector('#btnData')
    let imagenesTag = subdocument.querySelectorAll('.chcontainer__content--i')
    
    const hookWindow = subdocument.querySelectorAll('.hook__hook--btn')
    hookWindow.forEach((button) => {
        button.addEventListener('click', ()=>{
            let containerAmpliar = subdocument.querySelector('.chcontainer')
            switch (button.name) {
                case 'open': 
                    subdocument.classList.add('active')
                    containerAmpliar.classList.add('active')
                    break
                case 'close': {
                    subdocument.classList.remove('active')
                    containerAmpliar.classList.remove('active')
                    break;
                }
            }
        })
    })
    
    let Nota = []
            // reiniciar formulario
    btnResetForm.addEventListener("click", () => {
      formChecks.reset();
      for (let i = 0; i < 30; i++) {
        let boxDescripcion = subdocument.querySelector("#checkDes-" + i);
        let boxCheck = subdocument.querySelector("#check-" + i);

        if (boxDescripcion) {
          if (i == 1) {
            boxCheck.disabled = false
            boxDescripcion.classList.remove("hide");
          } else {
            boxCheck.disabled = true
            boxDescripcion.classList.add("hide");
          }
        }
      }
    });
            // al checkear paso muestra la siguiente descipcion
    formChecks.addEventListener('click', e => {
      let check = e.target ? e.target : e;
      if (check.tagName === "INPUT") {
        for (let i = 0; i < formChecks.elements.length; i++) {
          const checkBox = formChecks.elements[i];
          if (check === checkBox) {
            let nextCheckBox = formChecks.elements[i + 1];
            let backCheckBox = formChecks.elements[i - 1];
            nextCheckBox.disabled = nextCheckBox.hasAttribute("disabled")
              ? false
              : true;
            backCheckBox
              ? (backCheckBox.disabled = backCheckBox.hasAttribute("disabled")
                  ? false
                  : true)
              : "";
          }
        }
        let numDesc = Number(check.name.split("-")[1]);
        let nameDesc = check.name.split("-")[0] + "-";
    
        let descripciones = document.querySelectorAll(".chcontainer__content");

        // mostrar descripcion al checkear paso
        for (let i = 0; i < descripciones.length; i++) {
          const element = descripciones[i];
          let activeDescription = element.id == nameDesc + numDesc;
          let nextDescription = descripciones[i + 1];
          if (activeDescription) {
            element.classList.toggle("hide");
            nextDescription.classList.toggle("hide");
          }
        }
      }
    })
            // accion radio/lista
    formDescripciones.addEventListener('change', e => {
      if (e.target.type == 'radio') {
        let nombrePadre = e.target.dataset.padre
        let contenedorPadre = subdocument.querySelector(`[name="${nombrePadre}"]`)
        
        for (let i = 1; i < contenedorPadre.children.length; i++) {
          if (contenedorPadre.children[i].attributes.name.value == e.target.value) {
            contenedorPadre.children[i].classList.toggle('hide')
          } else {
            contenedorPadre.children[i].classList.add('hide')
          }
        }
      } else if (e.target.type === 'select-one') {
        let valorDeSeleccion = e.target.value
        let infoShow = subdocument.querySelector(`[name="${valorDeSeleccion}"]`)
        let listContainer = subdocument.querySelector(`[name="${e.target.dataset.padre}"]`)
      
        for (let i = 1; i < listContainer.children.length; i++) {
          if (listContainer.children[i].attributes.name.value == valorDeSeleccion) {
            infoShow.classList.toggle('hide')
          } else {
            listContainer.children[i].classList.add('hide')
          }
        }

      }
    })
          // next check desde descripcion
    formDescripciones.addEventListener('click', e => {
      // nextCheckDescription(e)
      if (e.target.className == 'chcontainer__content--link2') {
        let checkShow = document.querySelector(`#${e.target.name}`)
        for (let i = 0; i < formChecks.elements.length; i++) {
          let check = formChecks.elements[i];
          let checkBack = formChecks.elements[i-1];
    
          if (check != checkShow) {
            check.disabled = true
            check.checked = true
          } else {
            checkBack.disabled = false
            check.disabled = false
            check.checked = false
    
            const DescToShow = document.querySelector('#'+check.name)
            let descripciones = document.querySelectorAll(".chcontainer__content")
            for (let ii = 0; ii < descripciones.length; ii++) {
              const descripcion = descripciones[ii];
              descripcion.classList.add('hide')
              if (descripcion == DescToShow) {
                descripcion.classList.remove('hide')
              }
            }
            return 
          }
    
        }        
      }
    })
          // abrir <i> _imagenes
    imagenesTag.forEach(tagI => {
      tagI.addEventListener('click', ()=>{
        popShowImageCheks()
      })
    })
        // almacenar datos para nota yla muestra segun sea necesarios
    btnGetNota.addEventListener('click', ()=> {
      Nota = []
      let inputsData = formDescripciones.elements
      for (let i = 0; i < inputsData.length; i++) {
        const inputData = inputsData[i];
        if (inputData.type != 'button' && inputData.value != '') {
          let respuesta={}
          switch (inputData.type) {
            case 'select-one':
                respuesta = {}
                respuesta = {
                  titulo: inputData.previousElementSibling.textContent,
                  respuesta: inputData.value
                }
                inputData.value.includes('Selecciona') ? '' : Nota.push(respuesta)
              break;
            case 'radio':
              respuesta = {}
              respuesta = {
                titulo: inputData.parentNode.previousElementSibling.textContent,
                respuesta: inputData.value
              }
              inputData.checked ? Nota.push(respuesta) : ''
              break
            case 'text':
              respuesta = {}
              respuesta = {
                titulo: inputData.previousElementSibling.textContent,
                respuesta: inputData.value
              }
              inputData.value ? Nota.push(respuesta) : ''
              break
          }
        }
      }


        /** FUNCIONADILIDAD DE LA NOTA DEPENDIENDO LA NECESIDAD DE LA CAMPAÑA */
        let notaString = Nota.map(data =>{
          let result = `${data.titulo}: ${data.respuesta}\n`
          return result
        })
        popShowCheckNota(notaString)
        /** */
    })
    
    /** **/
    
    return subdocument

}