class clsTask{

    constructor(pTask, pExisted, pPosition){
    /**
     * Future variables that will be children
     */
    this.row = document.createElement('div');
    this.child = document.createElement('div');
    this.text = document.createElement('div');
    this.img = document.createElement('canvas');

    /**
     * Future variables that will be parents
     */
    this.firstParent = document.getElementById('todo');
    this.todo = document.getElementById('todo');
    this.doing = document.getElementById('doing');
    this.done = document.getElementById('done');
    
    /**
     * External Resources
     */
    this.inputtext = document.getElementById('newtask');
    this.form= document.getElementById('task-form-input');
    this.FPS = 120;

    /**
     * Variables that has different information
     */
    this.chosenNumber = this.getRandomNumber(8);
    this.jsonPlanet = [];

    /**
     * Variables that you need for those task that existed.
     */
    this.old_inputtext = pTask || 'No he pillado el texto';
    this.old_existed = pExisted || false;
    this.old_position = document.getElementById(pPosition) || document.getElementById('todo');
}

    /**
     * 
     * @param {number} pLimit 
     * @returns Random number with the limit established.
     */
    getRandomNumber(pLimit){
        let rand = Math.random() * pLimit;
        rand = Math.floor(rand); // 99

        return rand;
    }

    /**
     * Append and mount elements into the 'To Do' Task.
     */
    mountDiv(){

       
                this.row.setAttribute('class', 'row taskElement');
                
                this.child.setAttribute('class', "text-center col-12 tasktodo");
                
                this.text.setAttribute('class',"col");
                this.text.setAttribute('id', 'tasktext');

                if(this.old_existed == false){
                    this.text.innerHTML = this.inputtext.value;
                }else{
                    this.text.innerHTML = this.old_inputtext;
                }
                
                this.img.setAttribute('id', 'tasktext');
                this.getRandomPlanet();
                this.canvas.frame();

                this.child.appendChild(this.img);
                this.child.appendChild(this.text);
                this.row.appendChild(this.child);

                this.linkDiv(this.firstParent, this.row);

                this.createJSONwithDATA();

                //Reset of variables
                this.row = document.createElement('div');
                this.child = document.createElement('div');
                this.text = document.createElement('div');
                this.img = document.createElement('canvas');
                this.inputtext.value = '';

    }

    /**
     * Appends child into Parent
     * @param {*} pParent 
     * @param {*} pChild 
     */
    linkDiv(pParent, pChild){
        switch(this.old_existed){
            case (this.old_existed == false):
                pParent.appendChild(pChild);
            case (this.old_existed == true):
                this.old_position.appendChild(pChild);
        }
    }

    /**
     * Establishes a new Planet
     */
    getRandomPlanet(){
        this.canvas = new clsAnimatePlanet(this.img,this.chosenNumber, this.FPS,100,100,119);
    }

    /**
     * Appends into jsonPlanet different Data
     * @returns jsonPlanet
     */
    createJSONwithDATA(){
        this.jsonPlanet = JSON.stringify({
            text: this.inputtext.value,
            position: 'todo'
        });
        return this.jsonPlanet;
    }

}