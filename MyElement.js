import {LitElement, html} from '@polymer/lit-element';
import {unsafeHTML} from 'lit-html/lib/unsafe-html';
import '@polymer/paper-button/paper-button'

class MyElement extends LitElement {
    
    static get properties() {
      return {
        mood: {type: String},
        mood2: {type: String}
      };
    }
  
    constructor() {
      super();
      this.mood = 'happyWAWA';
    }
  
    _render() {
        console.log('render');
      return html`<style> .mood { color: green; } </style>
        Web Components are <span class="mood">${this.mood}</span><my-other-element-2 mood="${this.mood2}"></my-other-element-2>${unsafeHTML(this.innerHTML)}!`;
    }
  
  }
  
  customElements.define('my-element', MyElement);