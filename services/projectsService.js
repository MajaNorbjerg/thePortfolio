class ProjectsService {
    constructor(){

    }

    highlightProject(anElement){
       let img = anElement.getElementsByTagName('IMG')[0];
        img.style.animation = 'scaleproject .3s linear';
        img.style.animationFillMode = 'forwards';

        let textBox = anElement.getElementsByTagName('DIV')[0];
        textBox.style.visibility = 'visible';
        let text = textBox.getElementsByTagName('P')[0];
        text.style.visibility = 'visible';
     

    }


    noHighlightProject(anElement){
        let img = anElement.getElementsByTagName('IMG')[0];
        img.style.animation = 'ondoscaleproject .3s linear';
        img.style.animationFillMode = 'forwards';
       

        let textBox = anElement.getElementsByTagName('DIV')[0];
        textBox.style.visibility = 'hidden';

        let text = textBox.getElementsByTagName('P')[0];
        text.style.visibility = 'hidden';
    }

    showModal(projectId){
        document.getElementsByClassName('modal')[0].style.display = 'block';
    }

    noMoreModal(){
        document.getElementsByClassName('modal')[0].style.display = 'none';
    }
}
let _projectsService = new ProjectsService();
export default _projectsService;