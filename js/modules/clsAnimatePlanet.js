/**
 * Generates a random image with canvas, that will be appended into the task
 */
class clsAnimatePlanet{
    constructor(idCanvas, pNumberPlanet, pFPS, pFramewidth, pFrameheight, pTotalFrames){
        this.canvas = idCanvas;
        this.context = this.canvas.getContext('2d');
        this.width = this.canvas.width = pFramewidth;
        this.height = this.canvas.height = pFrameheight;
        this.framewidth = pFramewidth;
        this.frameheight = pFrameheight;
        this.xPos = 0;
        this.yPos = 0;
        this.scale = 1;
        this.fps = pFPS;
        this.secondsToUpdate = 1 * this.fps;
        this.totalFrames = pTotalFrames ||60;
        this.frameIndex = 0
        this.count = 0;
        this.spriteSheet = new Image();
        this.spriteSheet.src = `/assets/img/${pNumberPlanet}.png`;
    }

    animate(){
        this.context.drawImage(
           this.spriteSheet,
           this.frameIndex * this.framewidth,
           0,
           this.framewidth,
           this.frameheight,
           this.xPos,
           this.yPos,
           this.framewidth * this.scale,
           this.frameheight * this.scale
        );

        this.count++;
        //Speed
        if(this.count > 6){
            this.frameIndex++;
            this.count=0
        }
        if(this.frameIndex > this.totalFrames){
            this.frameIndex = 0;
        }
    }

    frame(){
        this.context.clearRect(0,0,this.framewidth,this.frameheight);
        this.animate();
        window.requestAnimationFrame(this.frame.bind(this));
    }
}