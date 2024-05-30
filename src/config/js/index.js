/** ESTILOS */
import "@javascript/librerias/fontAwesome/css/fontawesome.css";
import "@javascript/librerias/fontAwesome/css/brands.css";
import "@javascript/librerias/fontAwesome/css/solid.css";
import "@javascript/librerias/fontAwesome/css/regular.css";
import "animate.css";
import "@styles/style.scss";
import "@styles/_navbar.scss";
import readXlsxFile from "read-excel-file";
//
import Quill from "quill";
import "@javascript/librerias/notas/quill.js";
import "@styles/notas/core.css";
import "@styles/notas/snow.css";
//
/** ESTANDARS */
import { router } from "@router/index.routes.js"; //*
import { navListPop } from "@javascript/funcionales/alertas.js";
import Swal from "sweetalert2";

router(window.location.hash); //*
window.addEventListener("hashchange", () => {
  router(window.location.hash);
});

// export let iDDB = new Localbase('db_telefonica')

//** LEER ARCHIVOS EXCEL */
export const leerExcel = async (archivoExcel) => {
  const content = await readXlsxFile(archivoExcel.files[0]);

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
};

// video para base de datos local
// https://www.youtube.com/watch?v=KJnupY2HPCg&t=670s&ab_channel=MakeAppswithDanny
// Libreria de base de datos local
// https://github.com/dannyconnell/localbase

//** END LEER ARCHIVOS EXCEL */

/** NAVBAR */

const navList = [
  {
    SEGMENTO: "MEDICALIZACION",
    SUBLIST: ["Guiones", "Normativa"],
  },
  {
    SEGMENTO: "OPCIONES",
    SUBLIST: ["Códigos", "Glosario"],
  },
  {
    SEGMENTO: "PREVENCION",
    SUBLIST: ["Guiones", "Normativa"],
  },
  {
    SEGMENTO: "SEGUROSVIDA",
    SUBLIST: ["Guiones"],
  },
];

const navItems = document.querySelectorAll(".route");
const secondMenu = document.querySelector("#secondMenu");

navItems.forEach((linkItem) => {
  linkItem.addEventListener("click", () => {
    const liItem = linkItem.parentNode;
    secondMenu.innerHTML = "";

    const data = navList.filter(
      (el) => el.SEGMENTO == liItem.getAttribute("name")
    );

    if (data.length) {
      data[0].SUBLIST.forEach((el) => {
        secondMenu.insertAdjacentHTML(
          "afterbegin",
          `<li><a href="#/${
            data[0].SEGMENTO + el
          }" class="route">${el}</a></li>`
        );
      });
    }

    // if (linkItem.name.includes('pop')) {
    //     const lista = linkItem.name.split('_')[1]
    //     navListPop(lista)
    // }

    navItems.forEach((ancor) => {
      ancor.parentNode.classList.remove("active");
      secondMenu.addEventListener("click", () => {
        secondMenu.innerHTML = "";
        // linkItem.parentNode.classList.remove('active')
      });
    });
    linkItem.parentNode.classList.add("active");
  });
});
/** END NAVBAR */

const btnMisNotas = document.getElementById("btnMisNotas");
const editor = document.getElementById("editor");
const fullEditor = document.getElementById("fullEditor");
const copiMisNotas = document.getElementById("copiMisNotas");

let toolbarOptions = [
  [{ size: ["small", false, "large", "huge"] }],
  ["bold", "italic", "underline"],
  ["link"],
  [{ header: 1 }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ align: [] }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ color: [] }, { background: [] }],
];

// Cuadro de texto enriquecido 'Mis notas'
let quill = new Quill("#editor", {
  modules: {
    toolbar: toolbarOptions,
  },
  theme: "snow",
});

// Mis notas se ejecuta visible entonces lo ocutalmos
fullEditor.style.display = "none";
// al cargar la pagina lee el portapapeles y traemos lo que este en el
let dataRecuperado = sessionStorage.getItem("misNotas");
let newContents = JSON.parse(dataRecuperado);
// se le asigna el valor del portapaples en el texto enriquecido
quill.setContents(newContents);

const saveSession = () => {
  let contenido = quill.getContents();

  // convierto el objeto en string para luego almacenarlo en el portapapeles
  let objString = JSON.stringify(contenido);
  sessionStorage.setItem("misNotas", objString);

  quill.deleteText(0, 10000);
  quill.setContents(contenido);
};

const toggleNotes = (e) => {
  if (e.target.className.includes("active")) {
    e.target.classList.remove("active");
    fullEditor.style.display = "none";
    saveSession();
  } else {
    e.target.classList.add("active");
    fullEditor.removeAttribute("style");
  }
};

const copiarMisNotas = () => {
  quill.setSelection(0, 10000);
  document.execCommand("copy");
};

btnMisNotas.addEventListener("click", toggleNotes);
copiMisNotas.addEventListener("click", copiarMisNotas);
window.addEventListener("beforeunload", saveSession);

// END CONSUMO API
const setConfigIndex = (props) => {
  console.log("mara");
  const { activeSQL_API } = props;

  if (activeSQL_API) {
    const sendForm = document.getElementById("sendForm");
    if (!sessionStorage.getItem("session")) {
      sendForm.parentNode.parentNode.classList.remove("hide");
    }
    sendForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const cedulaInput = document.getElementById("cedula");
      const validarCedula = (cedula) => {
        if (cedula.length < 6) {
          Swal.fire({
            icon: "error",
            title: "Por favor, ingresa al menos 5 caracteres",
            heightAuto: false,
            allowOutsideClick: true,
            allowEscapeKey: true,
          });
          return;
        } else if (cedula.length > 12) {
          Swal.fire({
            icon: "error",
            title: "Por favor, ingresa menos de 12 caracteres",
            heightAuto: false,
            allowOutsideClick: true,
            allowEscapeKey: true,
          });
          return;
        }
        let regex = /^(?!.*(\d)\1{5})\d{6,10}$/;
        let result = regex.test(cedula);
        return result;
      };

      if (!validarCedula(cedulaInput.value)) {
        Swal.fire({
          icon: "error",
          title: "Por favor, ingresa una cédula válida",
          heightAuto: false,
          allowEscapeKey: true,
        });
        return;
      }
      const data = {
        usuario: e.target.elements[0].value,
        campana: e.target.elements[1].value,
        modulo: e.target.elements[2].value,
        observaciones: e.target.elements[3].value,
      };

      e.target.parentNode.parentNode.remove();
      Swal.fire({
        icon: "info",
        title: "Enviando",
        heightAuto: false,
        didOpen: () => {
          Swal.showLoading();
        },
        allowOutsideClick: false,
        allowEscapeKey: false,
      });
      fetch(
        "http://colbogweb20:8081/Webservices_Simulador/api/main/insUpdTransaccion",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      )
        .then((response) => response.json())
        .then((result) => {
          sessionStorage.setItem("session", true);
          Swal.fire({
            heightAuto: false,
            icon: "success",
            title: "Datos Enviados correctamente.",
            allowOutsideClick: true,
          });
        })
        .catch((error) => {
          sessionStorage.setItem("session", false);
          Swal.fire({
            icon: "error",
            title: "Ocurrió un error durante el consumo del API",
            heightAuto: false,
            text: error,
            allowOutsideClick: true,
          });
        });
    });
  }
};

setConfigIndex({
  activeSQL_API: true,
});
