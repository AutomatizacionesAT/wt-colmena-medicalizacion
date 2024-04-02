import Codigos from "@views/opcionesS/corrector.html";
import Quill from "quill";
import "@javascript/librerias/notas/quill.js";
import Hook from "@views/window/hook.html";
import "@styles/_corrector.scss";
import "@styles/notas/core.css";
import "@styles/notas/snow.css";

import {
  buscarElemento,
  copiarValor,
} from "@javascript/funcionales/funcionesGlobales.js";

export default () => {
  const subdocument = document.createElement("div");
  subdocument.className = "hook";
  subdocument.innerHTML = Hook + Codigos;
  const stylesParentElemInHook = subdocument.querySelector(".containerCod");

  /** FUNCIONES INTERNAS DEL ELEMENTO**/

  //
  subdocument.querySelectorAll(".hook__hook--btn").forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.name) {
        case "open":
          subdocument.classList.add("active");
          stylesParentElemInHook.classList.add("active");
          break;
        case "close":
          buscarElemento("");
          subdocument.classList.remove("active");
          stylesParentElemInHook.classList.remove("active");
          break;
      }
    });
  });

  // FUNCIONES
  // Seleccion de opciones de la barra de herramientas
  let toolbarOptions = [
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline"],
    ["link"],
    [{ header: 1 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ color: [] }, { background: [] }],
    ["image", "video"],
  ];

  const stops = subdocument.querySelector("#stops");
  const copiar = subdocument.querySelector("#copiar");
  const editorElement = subdocument.querySelector(".quill-editor");
  console.log(copiar);
  if (editorElement) {
    let quill = new Quill(editorElement, {
      modules: {
        toolbar: toolbarOptions,
      },
      theme: "snow",
    });

    quill.root.dataset.placeholder = "Redacta aquí tu texto...";

    const recognition = new webkitSpeechRecognition();

    recognition.lang = "es-ES";

    recognition.continuous = true;
    let isRecognitionRunning = false;

    recognition.onresult = (event) => {
      const result = event.results[event.resultIndex][0].transcript;
      quill.clipboard.dangerouslyPasteHTML(quill.getLength(), result);
    };

    recognition.onstart = () => {
      isRecognitionRunning = true;
      stops.innerHTML =
        '<i class="fa-solid fa-microphone red"></i> --- Detener Reconocimiento de Voz --- <i class="fa-solid fa-microphone red"></i>';
    };

    recognition.onend = () => {
      isRecognitionRunning = false;
      stops.innerHTML =
        '<i class="fa-solid fa-microphone"></i> --- Activar Reconocimiento de Voz --- <i class="fa-solid fa-microphone"></i>';
    };

    const toggleRecognition = () => {
      if (isRecognitionRunning) {
        recognition.stop();
      } else {
        recognition.start();
      }
    };

    stops.addEventListener("click", () => {
      toggleRecognition();
    });

    const copiarContenidoEditor = () => {
      const contenido = quill.getText();
      copiarValor(contenido);
    };

    copiar.addEventListener("click", () => {
      copiarContenidoEditor();
    });
  }
  return subdocument;
};
