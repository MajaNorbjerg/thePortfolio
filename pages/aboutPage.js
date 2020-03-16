import _bigframe from "./../components/bigFrame.js"
export default class AboutPage {
    constructor() {
        this.bigframe = _bigframe.htmlTemplate;
        this.template();

    }

    template() {
        document.querySelector('#app').innerHTML += /*html*/ `
          <section id="about" class="page">
          <div class="relativeContainer bigFrame">${this.bigframe}</div>
          
     <article class="pageFrame">
     <h2>About Me</h2>
    
     </article>

          </section>
        `;

    }
}