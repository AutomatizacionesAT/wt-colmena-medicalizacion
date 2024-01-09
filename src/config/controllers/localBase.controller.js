import Excel from '@views/documentacion/testExcel.html'

export default () => {
    const subdocument = document.createElement('div')
    subdocument.className = 'hook'
    subdocument.innerHTML = Excel

    /** FUNCIONES INTERNAS DEL ELEMENTO**/
    // const dataExcel = subdocument.querySelector('#inputFile')

    // const cargarBase = async () => {
    //     const content = await readXlsxFile(dataExcel.files[0])
    //     console.log(content)
    //     const [headerRow, ...dataRows] = content;
    //     const columnTitles = headerRow.map((title) => title.trim());
    
    //     const arrObjetos = dataRows.map((row) => {
    //         const objeto = {};
    //         row.forEach((value, index) => {
    //           const title = columnTitles[index];
    //           objeto[title] = value;
    //         });
    //         return objeto;
    //     });


    //     let iDDB = new Localbase('db')

    //     arrObjetos.forEach(fila=>{

    //         iDDB.collection('tablatest').add({
    //             AREA: fila.AREA,
    //             CODIGO: fila.CODIGO,
    //             DATOS: fila.DATOS,
    //             DEFINICION: fila.DEFINICION,
    //             ESCALAMIENTO: fila.ESCALAMIENTO,
    //             ESCENARIO_2: fila.ESCENARIO_2,
    //             ESCENARIO_3: fila.ESCENARIO_3,
    //             ESCENARIO_4: fila.ESCENARIO_4,
    //             ESCENARIO_5: fila.ESCENARIO_5,
    //             EXCEPCION: fila.EXCEPCION,
    //             NOTAS: fila.NOTAS,
    //             PLANTILLA: fila.PLANTILLA,
    //             T_ACTUAL: fila.T_ACTUAL,
    //           })
    //     })


    //     // return arrObjetos;
    // }
    // dataExcel.addEventListener('change', cargarBase)
    /** **/

    return subdocument
}