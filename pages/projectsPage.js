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
     <div id="projWA" class="projects relativeContainer" onmouseover="highlightProject(this)" onmouseout="noHighlightProject(this)" onclick="showModal(this, this.id)"><div><p>WebApp - Your Game</p></div><img src="images/project_webapp.png"></div>
     <div id="projAA" class="projects relativeContainer" onmouseover="highlightProject(this)" onmouseout="noHighlightProject(this)" onclick="showModal(this, this.id)"><div><p>Anker Andersen A/S</p></div><img src="images/test-webApp4.png"></div>
     <div id="projFB" class="projects relativeContainer" onmouseover="highlightProject(this)" onmouseout="noHighlightProject(this)" onclick="showModal(this, this.id)"><div><p>Flixbus - animation</p></div><p></p><img src="images/project_flixbus.png"></div>
     <div id="projWD" class="projects relativeContainer" onmouseover="highlightProject(this)" onmouseout="noHighlightProject(this)" onclick="showModal(this, this.id)"><div><p>Webdoc for Eriksminde Efterskole</p></div><img src="images/project_eriksminde.png"></div>
     <div id="projTM" class="projects relativeContainer" onmouseover="highlightProject(this)" onmouseout="noHighlightProject(this)" onclick="showModal(this, this.id)"><div><p>Thise</p></div><p></p><img src="images/project_thise.png"></div>
     <div id="projPS" class="projects relativeContainer" onmouseover="highlightProject(this)" onmouseout="noHighlightProject(this)" onclick="showModal(this, this.id)"><div><p>Play in Photoshop</p></div><p></p><img src="images/project_photos-and-ps.png"></div>
     <div id="projMF" class="projects relativeContainer" onmouseover="highlightProject(this)" onmouseout="noHighlightProject(this)" onclick="showModal(this, this.id)"><div><p>Mobile First - Kunsthal Aarhus</p></div><p></p><img src="images/project_kunsthalAarhus.png"></div>


    
     </section>

    
     </article>

           </section>

          <section class="modal">
          <div>
          <p class="exit" onclick="noMoreModal()">X</p>
          

          
          <article>
          <h2>Headline</h2> 
          
          <p>Are you getting tired of getting the same question from your “never have I ever” app?</p>
          <p>Your Party Game is a Web Application with many of the known drinking games and for some of the less known party games. You can play directly in the app, but most importantly you can add your own questions or content.</p>
<p>Did we come up with this idea ourselves? Well, yes, we did. Did we make this as a SPA (Single Page Application) by using modules and javascript classes? Well, yes, we did. Was it fun to code this prototype? Hell yeah, and prototype v2.0 is on its way!</p>
<p>Take a look at the source code on github or just create your own game.</p> 
<p><b>Semester:</b> 3rd semester</p>   
<p><b>Tools:</b> HTML, CSS, JavaScript, Firebase, Github, Gitkraken, (brugertest)</p>    </article>
<article>
<img src="images/project_webapp.png">
</article>
</div>
          </section>

        `;

    }
}