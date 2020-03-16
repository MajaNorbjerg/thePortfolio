import _bigframe from "./../components/bigFrame.js"

export default class ProjectsPage {
    constructor() {
        this.bigframe = _bigframe.htmlTemplate;
        this.template();

    }

    template() {
        document.querySelector('#app').innerHTML += /*html*/ `
          <section id="projects" class="page">
          <div class="relativeContainer bigFrame">${this.bigframe}</div>
          
     <article class="pageFrame">
     <h2>My Projects</h2>
     <section class="gridcontainer">
     <div class="projects relativeContainer" onmouseover="highlightProject(this)" onmouseout="noHighlightProject(this)"><div><p>WebApp - Your Game</p></div><img src="images/project_webapp.png"></div>
     <div class="projects relativeContainer" onmouseover="highlightProject(this)" onmouseout="noHighlightProject(this)"><div><p>Anker Andersen A/S</p></div><img src="images/test-webApp4.png"></div>
     <div class="projects relativeContainer" onmouseover="highlightProject(this)" onmouseout="noHighlightProject(this)"><div><p>Webdoc for Eriksminde Efterskole</p></div><img src="images/project_eriksminde.png"></div>
     <div class="projects relativeContainer" onmouseover="highlightProject(this)" onmouseout="noHighlightProject(this)"><div><p>Play in Photoshop</p></div><p></p><img src="images/project_photos-and-ps.png"></div>
     <div class="projects relativeContainer" onmouseover="highlightProject(this)" onmouseout="noHighlightProject(this)"><div><p>Mobile First - Kunsthal Aarhus</p></div><p></p><img src="images/project_kunsthalAarhus.png"></div>
     <div class="projects relativeContainer" onmouseover="highlightProject(this)" onmouseout="noHighlightProject(this)"><div><p>Flixbus - animation</p></div><p></p><img src="images/project_flixbus.png"></div>
     <div class="projects relativeContainer" onmouseover="highlightProject(this)" onmouseout="noHighlightProject(this)"><div><p>Thise</p></div><p></p><img src="images/project_thise.png"></div>


    
     </section>

    
     </article>

          </section>
        `;

    }
}