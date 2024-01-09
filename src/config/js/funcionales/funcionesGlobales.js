// Hace que el valor del parametro sea igual con o sin tildes "Razon" === "Razón" : true
export const normalize = (string) => {
    let texto = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    return texto
}

// Auto completa los compos de texto de un formulario
export const autoFillForm = (formulario) => {
    let elementos = formulario.elements
    const datosAutocompletar = {
        text: 'Texto de ejemplo',
        number: 123,
        date: '2023-07-04',
        time: '12:34'
      };
    for (let i = 0; i < elementos.length; i++) {
        const tagElement = elementos[i];
        if (tagElement.tagName === 'INPUT' || tagElement.tagName === 'TEXTAREA') {
            switch (tagElement.type) {
                case 'text':
                  if (tagElement.type in datosAutocompletar) {
                    tagElement.value = datosAutocompletar[tagElement.type];
                  }
                  break;
                case 'number':
                  if (tagElement.type in datosAutocompletar) {
                    tagElement.value = datosAutocompletar[tagElement.type];
                  }
                  break;
                case 'date':
                  if (tagElement.type in datosAutocompletar) {
                    tagElement.value = datosAutocompletar[tagElement.type];
                  }
                  break;
                case 'time':
                  if (tagElement.type in datosAutocompletar) {
                    tagElement.value = datosAutocompletar[tagElement.type];
                  }
                  break;
                case 'list':
                    if (tagElement.type in datosAutocompletar) {
                        tagElement.value = datosAutocompletar[tagElement.type];
                      }                 
                  break;
              }
        }
    }
}

// Copia en el porta papeles el valor introducido
export const copiarValor = (valor) => {
    navigator.clipboard.writeText(valor)
    .then(() => {})
    .catch(err => {
        popNoCopy(err)
    })
}

export const buscarElemento = (valorBuscar) => {
  let valorBuscado = valorBuscar.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let elmsBuscados = document.getElementsByClassName('dato-buscado')
  for (let i = 0; i < elmsBuscados.length; i++) {
    let titulo = elmsBuscados[i].innerText.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    titulo.indexOf(valorBuscado) > -1 ? 
      elmsBuscados[i].classList.remove("hide") : 
      elmsBuscados[i].classList.add("hide")
  }
}