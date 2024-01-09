class InputCheck extends HTMLElement {
    constructor() {
        super();
        this.data = "data=Titulo";
        this.nombre = "1";
        this.currency = "";
    }
  
    static get observedAttributes() {
      return ["data", "nombre", 'currency', 'need'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
        case "data":
          this.data = newValue;
          break;
        case "nombre":
          this.nombre = newValue;
          break;
        case "currency":
            this.currency = newValue;
        break;
        case "need":
          if (this.need == undefined) {
            this.need = "need"
          }
        break;
      }
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div class="chcontainer__boxdata">
            <label for="${this.nombre}">${this.data}</label>
            <input class="chcontainer__boxdata--inputex ${this.need}" name="${this.nombre}" type="text" id="${this.nombre}" autocomplete="off" data-name="${this.currency}">
        </div>
    `;
    }
}
  
window.customElements.define("input-check", InputCheck);