const saludos = () => {};

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.tipo = "text";
    this.texto = "(ASIGNA VALIDACION)";
  }

  static get observedAttributes() {
    return ["imagen", "texto"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "imagen":
        this.imagen = newValue;
      case "tipo":
        this.tipo = newValue;
        break;
    }
  }
  connectedCallback() {
    this.innerHTML = `
        <header class="header">
        <figure class="header__logobx">
            <img src="#" alt="logo">
        </figure>
        <nav class="nav">
            <ul class="nav-content">
                <li class="nav-list">
                    <a href="#/" class="link-item active">
                        <i class="fa-solid fa-house link-icon"></i>
                        <span class="link-text">Home</span>
                    </a>
                </li>

                <li class="nav-list">

                    <a href="#" class="link-item">
                        <i class="fa-solid fa-align-left link-icon"></i>
                        <span class="link-text">Gestor De Notas</span>
                    </a>
                    <div class="link-sublinks">
                        <a href="#" class="link-sublinks__link link-sublinks__link--links-a">Operaciones</a>
                        <a href="#" class="link-sublinks__link link-sublinks__link--links-b">Fibra E&N</a>
                    </div>
                </li>
                <li class="nav-list">
                    <a href="#/localbase" class="link-item">
                        <i class="fa-solid fa-newspaper link-icon"></i>
                        <span class="link-text">Documentación</span>
                    </a>
                </li>
                <li class="nav-list">
                    <a href="#" class="link-item">
                        <i class="fa-solid fa-globe link-icon"></i>
                        <span class="link-text">Aplicativos WEB</span>
                    </a>
                </li>
                <li class="nav-list">
                    <button type="button" class="link-item" name="pop_checklist" id="testBoton">
                        <i class="fa-solid fa-list-check link-icon"></i>
                        <span class="link-text">Check List</span>
                    </button>
                </li>

                <span class="indicator"></span>
            </ul>
        </nav>
        <div class="header__versionbx">
            <span>V. 1.0.0</span>
        </div>
    </header>
          `;
  }
}

window.customElements.define("nav-bar", NavBar);
