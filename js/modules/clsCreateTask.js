class clsCreateTask{

    constructor(){
    //Future children
    this.row = document.createElement('div');
    this.child = document.createElement('div');
    this.text = document.createElement('div');
    this.img = document.createElement('canvas');

    //Sugar daddies
    this.firstParent = document.getElementById('todo');
    this.todo = document.getElementById('todo');
    this.doing = document.getElementById('doing');
    this.done = document.getElementById('done');
    
    //External resources
    this.inputtext = document.getElementById('newtask').value;
    this.FPS = 120;

    //Position
    this.position = 0;

    //Random Image
}
    getRandomNumber(pLimit){
        let rand = Math.random() * pLimit;
        rand = Math.floor(rand); // 99

        return rand;
    }

    mountDiv(){
        this.row.setAttribute('class', 'row taskElement');
        
        this.child.setAttribute('class', "text-center col-12 tasktodo");
        
        this.text.setAttribute('class',"col");
        this.text.setAttribute('id', 'tasktext');
        this.text.innerHTML = this.inputtext;
        

        this.img.setAttribute('id', 'tasktext');
        this.canvas = new clsAnimatePlanet(this.img,this.getRandomNumber(8), this.FPS,100,100,119);
        this.canvas.frame();

        this.child.appendChild(this.img);
        this.child.appendChild(this.text);
        this.row.appendChild(this.child);

        this.linkDiv(this.firstParent, this.row);

        //Reset of variables
        this.row = document.createElement('div');
        this.child = document.createElement('div');
        this.text = document.createElement('div');
        this.img = document.createElement('canvas');
    }

    linkDiv(pParent, pChild){
        pParent.appendChild(pChild)
    }

        //Montar y linkar al padre primero

        //Enviar a todo

        //Enviar a doing

        //Eliminar en done



}