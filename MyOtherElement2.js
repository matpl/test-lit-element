import {LitElement, html} from '@polymer/lit-element';

class MyOtherElement2 extends LitElement {
    
    static get properties() {
      return {
        mood: {type: String}
      };
    }
  
    constructor() {
      super();
      this.mood = 'happy';
    }
  
    _render({mood}) {
        console.log('render other 2')
      return html`<style> .mood { color: green; } </style>
        Web Components are <span class="mood">${mood}</span>!`;
    }
  
  }
  
  customElements.define('my-other-element-2', MyOtherElement2);