/** ESTILOS */
import '@javascript/librerias/fontAwesome/css/fontawesome.css'
import '@javascript/librerias/fontAwesome/css/brands.css'
import '@javascript/librerias/fontAwesome/css/solid.css'
import '@javascript/librerias/fontAwesome/css/regular.css'
import 'animate.css';
import '@styles/style.scss'
import '@styles/_navbar.scss'
import readXlsxFile from 'read-excel-file'

/** ESTANDARS */
import {router} from '@router/index.routes.js' //*
import {navListPop} from '@javascript/funcionales/alertas.js'

router(window.location.hash) //*
window.addEventListener('hashchange', ()=> {
    router(window.location.hash)
})

// export let iDDB = new Localbase('db_telefonica')

//** LEER ARCHIVOS EXCEL */
export const leerExcel = async (archivoExcel) => {
    const content = await readXlsxFile(archivoExcel.files[0])

    const [headerRow, ...dataRows] = content;
    const columnTitles = headerRow.map((title) => title.trim());

    const arrObjetos = dataRows.map((row) => {
        const objeto = {};
        row.forEach((value, index) => {
          const title = columnTitles[index];
          objeto[title] = value;
        });
        return objeto;
      });
}

// video para base de datos local
    // https://www.youtube.com/watch?v=KJnupY2HPCg&t=670s&ab_channel=MakeAppswithDanny
// Libreria de base de datos local
    // https://github.com/dannyconnell/localbase

//** END LEER ARCHIVOS EXCEL */

/** NAVBAR */

const navList = [
    {
        SEGMENTO: "MEDICALIZACION",
        SUBLIST: ["Guiones", "Normativa"]
    },
    {
        SEGMENTO: "INFORMACIONYMEDIOS",
        SUBLIST: ["Guiones", "Normativa"]
    },
    {
        SEGMENTO: "PREVENCION",
        SUBLIST: ["Guiones", "Normativa"]
    },
    {
        SEGMENTO: "SEGUROSVIDA",
        SUBLIST: ["Guiones"]
    }
]

const navItems = document.querySelectorAll('.route')
const secondMenu = document.querySelector('#secondMenu')

navItems.forEach((linkItem) => {

    linkItem.addEventListener("click", () => {

        const liItem = linkItem.parentNode
        secondMenu.innerHTML = ''

        const data = navList.filter(el=> el.SEGMENTO == liItem.getAttribute('name'))

            if (data.length) {
                data[0].SUBLIST.forEach(el=>{
                    secondMenu.insertAdjacentHTML('afterbegin', `<li><a href="#/${data[0].SEGMENTO+el}" class="route">${el}</a></li>`)
                })
            }

        // if (linkItem.name.includes('pop')) {
        //     const lista = linkItem.name.split('_')[1]
        //     navListPop(lista)
        // }


        navItems.forEach((ancor) => {ancor.parentNode.classList.remove('active')})
        linkItem.parentNode.classList.add('active')

    })
})
/** END NAVBAR */


