class clsData{
    constructor(){
        this.ACTUAL_LOCALSTORAGE = [];
        this.keys = null;
        this.i = 0;

    }
    obtainLocalData(){
        this.keys = Object.keys(localStorage),
        this.i = this.keys.length;

        while ( this.i-- ) {
        this.ACTUAL_LOCALSTORAGE.push(localStorage.getItem(this.keys[this.i]));
        }

    
        return this.ACTUAL_LOCALSTORAGE;

    }

    mountTasks(){
        

    }


}