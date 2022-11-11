class clsData{
    constructor(pAuxArray){
        this.ACTUAL_LOCALSTORAGE = [];
        this.auxArray = pAuxArray;
        this.keys = null;
        this.i = 0;

    }
    obtainLocalData(){
        this.keys = Object.keys(localStorage),
        this.i = this.keys.length;

        while ( this.i-- ) {
            this.jsonValue = JSON.parse(localStorage.getItem(this.keys[this.i]));
        this.ACTUAL_LOCALSTORAGE.push(this.jsonValue);
        }

        // console.log(this.ACTUAL_LOCALSTORAGE);
        return this.ACTUAL_LOCALSTORAGE;

    }

    mountTasks(){
        this.ACTUAL_LOCALSTORAGE.forEach(element => {
            this.newTask = new clsTask(element['text'], true, element['position']);
            this.newTask.mountDiv();
        });
        this.pushTaskintoAuxArray();

    }

    pushTaskintoAuxArray(){
        this.auxArray = this.ACTUAL_LOCALSTORAGE;
        return this.auxArray;
    }


}