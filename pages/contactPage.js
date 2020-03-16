import _bigframe from "./../components/bigFrame.js"

export default class ContactPage {
    constructor() {
        this.bigframe = _bigframe.htmlTemplate;
        this.template();

    }

    template() {
        document.querySelector('#app').innerHTML += /*html*/ `
          <section id="contact" class="page">
          <div class="relativeContainer bigFrame">${this.bigframe}</div>
          
     <article class="pageFrame">
     <h2>Contact Me</h2>
    
     </article>

          </section>
        `;

    }




}