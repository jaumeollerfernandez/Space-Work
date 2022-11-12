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
            this.jsonValue = JSON.parse(localStorage.getItem(this.keys[this.i]));
        this.ACTUAL_LOCALSTORAGE.push(this.jsonValue);
        }

        // console.log(this.ACTUAL_LOCALSTORAGE);
        // localStorage.clear();
        return this.ACTUAL_LOCALSTORAGE;

    }

    mountTasks(){
        this.ACTUAL_LOCALSTORAGE.forEach(element => {
            this.newTask = new clsTask(element['text'], true, element['position']);
            this.newTask.mountDiv();

        });
        // this.pushTaskintoAuxArray();

    }

    // pushTaskintoAuxArray(){
    //     this.auxArray = this.ACTUAL_LOCALSTORAGE;
    //     return this.auxArray;
    // }

    newTask() {
    var newInstance = new clsTask();
    newInstance.mountDiv();
    newInstance.linkDiv(newInstance.firstParent, newInstance.row);
    this.ACTUAL_LOCALSTORAGE.push(newInstance.jsonPlanet);
    this.sendToLocalStorage();
    // console.log(this.ACTUAL_LOCALSTORAGE);
  }

  sendToLocalStorage() {
    let i = 0;
    this.ACTUAL_LOCALSTORAGE.forEach((element) => {
      // console.log(element);
      localStorage.setItem(i, element);
      // console.log(localStorage);
      i++;
    });
}


}