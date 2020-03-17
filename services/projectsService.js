import ProjectsPage from "./../pages/projectsPage.js";
let projectsPage = new ProjectsPage();
class ProjectsService {
    constructor() {
        projectsPage.projectObj;
        this.aboutText;
        this.toolsList;
        this.grade;
    }

    highlightProject(anElement) {
        let img = anElement.getElementsByTagName('IMG')[0];
        img.style.animation = 'scaleproject .3s linear';
        img.style.animationFillMode = 'forwards';

        let textBox = anElement.getElementsByTagName('DIV')[0];
        textBox.style.visibility = 'visible';
        let text = textBox.getElementsByTagName('P')[0];
        text.style.visibility = 'visible';


    }


    noHighlightProject(anElement) {
        let img = anElement.getElementsByTagName('IMG')[0];
        img.style.animation = 'ondoscaleproject .3s linear';
        img.style.animationFillMode = 'forwards';


        let textBox = anElement.getElementsByTagName('DIV')[0];
        textBox.style.visibility = 'hidden';

        let text = textBox.getElementsByTagName('P')[0];
        text.style.visibility = 'hidden';
    }

    showModal(project, projectId) {
        this.aboutText = "";
        this.toolsList = "";
        let theModal = document.getElementsByClassName('modal')[0];

        let title = project.getElementsByTagName('div')[0].getElementsByTagName('p')[0].innerHTML;

        projectsPage.detailViewText(projectId);

        for (const about of projectsPage.projectObj.about) {
            this.aboutText += `<p>${about}</p>`
        }
        for (const tool of projectsPage.projectObj.tools) {
            this.toolsList += `<li>${tool}</li>`;
        }

        let grade = "";

        if (projectsPage.projectObj.grade !== "") {
            grade = `<p><b>Grade:</b> ${projectsPage.projectObj.grade}</p>`;
        }


        theModal.innerHTML = /*html*/ `
        <div>
                   <p class="exit" onclick="noMoreModal()">X</p>
                  
        
                  
                   <article class="infoText">
                   <section>
                   <h2>${title}</h2>
                   ${this.aboutText}
         <p><b>Semester:</b> ${projectsPage.projectObj.semester}</p>  
         </section>
   
         <section>
         <p><b>Tools:</b></p>
         <ul>${this.toolsList}</ul>    
         ${grade}
         </section>
      
         </article>


        <article  class="infoImg">
         <img src="images/project_${projectsPage.projectObj.img}.png">
         </article>
         </div>
        `

        theModal.style.display = 'block';
    }







    noMoreModal() {
        document.getElementsByClassName('modal')[0].style.display = 'none';
        this.projectObj = {};
    }
}
let _projectsService = new ProjectsService();
export default _projectsService;