class inputRadio extends HTMLElement {
    constructor() {
        super();
        this.data = "";
        this.nombre = "1";
    }
  
    static get observedAttributes() {
      return ["data", "nombre", "need", "namepadre"];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
        case "data":
          this.data = newValue;
          break;
        case "nombre":
          this.nombre = newValue;
          break;
        case "namepadre":
        this.namepadre = newValue;
          break;
        case "need":
          if (this.need == undefined) {
            this.need = "needr"
          }
        break;
      }
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div class="chcontainer__boxdata">
            <span>${this.data}</span>
            <div class="inputs-radio">
                <label for="${this.nombre}-si">SI</label>
                <input type="radio" name="${this.nombre}" data-padre="${this.namepadre}" id="${this.nombre}-si" value="SI" class="${this.need}">
                <label for="${this.nombre}-no">NO</label>
                <input type="radio" name="${this.nombre}" data-padre="${this.namepadre}" id="${this.nombre}-no" value="NO" class="${this.need}">
            </div>
        </div>
            `;
    }
}
  
window.customElements.define("input-radio", inputRadio);