class InputList extends HTMLElement {
    constructor() {
        super();
        this.data = "data=Titulo";
        this.number = "1";
    }
  
    static get observedAttributes() {
      return ["data", "number", 'need', 'op', 'namepadre', 'nombre'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
        case "data":
          this.data = newValue;
          break;
        case "number":
          this.number = newValue;
          break;
        case 'op':
          this.op = newValue
          break;
        case 'namepadre':
          this.namepadre = newValue;
          break;
        case 'nombre':
          this.nombre = newValue;
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
            <label for="box${this.number}">${this.data}</label>
            <select 
              class="chcontainer__boxdata--inpuselect ${this.need}" 
              data-padre="${this.namepadre}" 
              id="box${this.number}"
              name="${this.nombre}"
            </select>
        </div>
    `;
    let arrOptions = this.op.split(' - ')
    let select = document.getElementById('box' + this.number)
    for (let i = 0; i < arrOptions.length; i++) {
      select.innerHTML += `<option value='${arrOptions[i]}'>${arrOptions[i]}</option>`
    }
    }
}
  
window.customElements.define("input-list", InputList);