import _bigFrame from "./../components/bigFrame.js"
class FrameService {
    constructor() {

    }
    sameHightAsWidth() {
        let frames = document.getElementsByClassName('frames');
        // console.log(frames)
        for (const frame of frames) {
            // console.log(frame.offsetWidth, frame.offsetHeight)
            let width = frame.offsetWidth;
            // console.log(width)
            frame.style.height = `${width}px`;
        }

        _bigFrame.calcBigFrame()


    }
}
let _frameService = new FrameService();
export default _frameService;