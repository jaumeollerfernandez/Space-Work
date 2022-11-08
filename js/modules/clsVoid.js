class clsVoid{
    constructor(){
        this.parent = document.getElementById('void');
        this.canvas = document.getElementById('voidZone')
        this.img = new clsAnimatePlanet(this.canvas, '9', 60, 200, 200,49);
        this.img.frame();
    }
}