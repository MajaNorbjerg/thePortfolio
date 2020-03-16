class SofaService {
    constructor() {
        // this.videoPath = "";
        this.arrayOfPositions = ['at-table_raw', 'crazy_raw', 'on-feet_raw', 'sleep_raw', 'with-feet_raw', 'on-stomac']
        this.i = 0;
    }

    animateLines(id) {

        let svg = document.querySelector(`#${id}`);
        // console.log(svg.children)


        for (const path of svg.children) {


            let length = path.getTotalLength();


            path.style.strokeDasharray = length + ' ' + length;
            path.style.strokeDashoffset = length;

            path.getBoundingClientRect();
            // Define our transition
            path.style.transition = path.style.WebkitTransition =
                'stroke-dashoffset 2s ease-in-out';
            // Go!
            // console.log(svg.children[16])
            if (path === svg.children[16] || path === svg.children[17]) {
                path.style.animation =
                    'animatelegs 3s linear';


            } else if (id == 'table') {
                path.style.animation =
                    'animatetable 3s linear';
            } else if (id == 'pillow') {
                path.style.animation =
                    'animatepillow 3s linear';
            } else {
                // [16][17]

                path.style.animation =
                    'animate 3s linear';
            }
            path.style.animationFillMode = 'forwards';


            path.style.strokeDashoffset = '0';
        }
    }


    changePosition() {
        let video = document.getElementById('v');
        let source = video.firstElementChild;
        video.style.animation = 'videoFadeOut 0.7s ease-out';

        video.style.animationFillMode = 'forwards';

        let src = this.arrayOfPositions[this.i];

        setTimeout(function () {
            source.setAttribute('src', `videos/${src}.webm`);
            video.load();
            video.style.animation = 'videoFadeIn 0.4s ease-in';
            video.style.animationFillMode = 'forwards'
            video.play();
        }, 1000);


        this.i++
        // console.log(this.i)
        if (this.i == this.arrayOfPositions.length) {
            this.i = 0;
        }

    }

    startFirstVideo() {
        // this.videoPath = 'videos/kunBo.webm';
        let video = document.querySelector('#v');
        let source = document.createElement('source');

        source.setAttribute('src', 'videos/on-stomac.webm');

        video.appendChild(source);
        // console.log(video);
        video.play();
    }
}

let _sofaService = new SofaService();
export default _sofaService;