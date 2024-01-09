class ListCheck extends HTMLElement {
    constructor() {
        super();
        this.check = "A";
        this.data = "Titulo";
        this.number = "1";
    }
  
    static get observedAttributes() {
      return ["check", "data", "number", "disabled"];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
        case "check":
          this.check = newValue;
          break;
        case "data":
          this.data = newValue;
          break;
        case "number":
          this.number = newValue;
          break;
        case "disabled":
          if (this.disabled == undefined) {
            this.disabled = "disabled"
          }
          break;
      }
    }

    connectedCallback() {
      this.innerHTML = `
        <li>
            <label class="chcontainer__label">
                <input class="chcontainer__label--check" id="check-${this.number}" name="checkDes-${this.number}" type="checkbox" ${this.disabled}>
                <span class="chcontainer__label--scala">${this.check}) </span>
                <p class="chcontainer__label--title">${this.data}</p>
                <span class="chcontainer__label--span"></span>
            </label>
        </li>
            `;
    }
  }
  
  window.customElements.define("list-check", ListCheck);
  