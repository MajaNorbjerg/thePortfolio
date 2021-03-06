import _bigframe from "./../components/bigFrame.js"

export default class ProjectsPage {
    constructor() {
        this.bigframe = _bigframe.htmlTemplate;
        this.projectObj;
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


    detailViewText(projectId) {

        if (projectId === 'projWA') { // Web App
            this.projectObj = {
                "about": [
                    'Are you getting tired of getting the same question from your “never have I ever” app?',
                    'Your Party Game is a Web Application with many of the known drinking games and for some of the less known party games. You can play directly in the app, but most importantly you can add your own questions or content.',
                    'Did we come up with this idea ourselves? Well, yes, we did. Did we make this as a SPA (Single Page Application) by using modules and javascript classes? Well, yes, we did. Was it fun to code this prototype? Hell yeah, and prototype v2.0 is on its way!',
                    '<a>Take a look at the source code on github</a> or just <a>create your own game</a>.'
                ],
                "semester": '3rd semester',
                "tools": ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Github', 'Gitkraken', '(brugertest)'],
                'grade': "12 | A",
                'img': "webapp"
            }
        }



        if (projectId === 'projAA') { // Anker Andersen
            this.projectObj = {
                "about": [],
                "semester": '2nd semester',
                "tools": ['HTML', 'CSS', 'JavaScript', 'Github', 'Gitkraken'],
                'grade': "12 | A",
                'img': 'webapp'
            }
        }



        if (projectId === 'projFB') { // Flixbus & handball
            this.projectObj = {
                "about": [
                    'Can we get data from an API? Well, yes, we can.',
                    'In this project we choose to combine Flixbus with handball events. We created a concept which interests both the company and the handball enthusiasts.',
                    'The idea includes handballs hanging from the ceiling and a big 2-meter-high screens on the floor encapsulating the handballs.',
                    'The user can walk into this space and interact with the handballs which creates a reaction on the screen. There´s one handball for each city, to where Flixbus can drive spectators to handball games. And the city ball is connected to the city on the screen.',
                    'If you touch the Aarhus ball, the city sign shows with the name of the city and the current temperature. This data is incorporated from a weather API. You could also show the current weather condition, by making it rain over the city-attraction if it´s currently raining, or make the sun shine, if it´s sunny. This condition should also be retrieved by an API.',
                    'This installation would make the handball spectators pumped up with happiness before the game and give them a positive view on Flixbus and a knowledge about their destinations.'


                ],
                "semester": '2nd semester',
                "tools": ['HTML', 'CSS', 'JavaScript', 'API (JSON)', 'Makey makey'],
                'grade': "",
                'img': 'flixbus'
            }

        }

        if (projectId === 'projWD') { // WebDoc
            this.projectObj = {
                "about": ['Eriksminde Efterskole is a vide boarding school with both creative, democratic subjects beside the ordinary. The school is down to earth and a place where the students feel at home. And the students know this the moment they see it. But here comes the problem… Not enough boys visit the school.',
                    'Our concept for this problem is called “Surprise yourself at Eriksminde”. This is based on the headmaster’s statement, that many of their prior students, have done something during the year, that they didn´t think they would before they started.',
                    'In a Web Documentary you can meet two current students at the school, who tell about how they have surprised themselves so far (two months in). As user you can freely choose, which story you want.',
                    'The concept is easy scalable! You can add more student stories or maybe add more content to their stories if the school wishes to do so.',
                    'The headmaster loved our pitch and specially our concept. He was interested in working with us again.'
                ],
                "semester": '1st semester',
                "tools": ['HTML', 'CSS', 'JavaScript', 'Github', 'Adobe Premiere'],
                'grade': "",
                'img': 'eriksminde'
            }

        }

        if (projectId === 'projTM') { // Thise
            this.projectObj = {
                "about": ['', ''],
                "semester": '2nd semester',
                "tools": ['HTML', 'CSS', 'Mobile first', 'responsive Web design RWD', 'mockups'],
                'grade': "12 | A",
                'img': 'thise'
            }

        }


        if (projectId === 'projPS') { // Photoshop
            this.projectObj = {
                "about": [
                    'Take photos in studio, capture compositions in the city and photoshop the pictures to be even greater. I´m proud to show the result of this little project.',
                    'Studio photos, City compositions, The photoshoped.'

                ],
                "semester": '1st semester',
                "tools": ['Camera', 'Photoshop'],
                'grade': "",
                'img': 'photos-and-ps'
            }

        }


        if (projectId === 'projMF') { // Mobile First
            this.projectObj = {
                "about": [
                    'You´re at the free museum. You don’t know where to go or what the thoughts behind the exhibition are. But the help is close by, cause on your mobile device, you have the opportunity to walk through the exhibitions ad read or listen to a story about every single piece of art.',
                    'This feature is for the mobile first concept.'
                ],
                "semester": '1st semester',
                "tools": ['HTML', 'CSS'],
                'grade': "",
                'img': 'kunsthalAarhus'
            }

        }

    }
}