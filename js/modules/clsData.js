class clsData {
  constructor() {
    this.ACTUAL_LOCALSTORAGE = [];
    this.keys = null;
    this.i = 0;
  }
  obtainLocalData() {
    (this.keys = Object.keys(localStorage)), (this.i = this.keys.length);

    while (this.i--) {
      this.jsonValue = JSON.parse(localStorage.getItem(this.keys[this.i]));
      this.ACTUAL_LOCALSTORAGE.push(this.jsonValue);
    }

    if (this.i < 0){
        this.i = 0;
    }

    // console.log(this.ACTUAL_LOCALSTORAGE);
    // localStorage.clear();
    return this.ACTUAL_LOCALSTORAGE;
}

  mountTasks() {
    this.ACTUAL_LOCALSTORAGE.forEach((element) => {
      this.newTask = new clsTask(element["text"], true, element["position"]);
      console.log(this.newTask);
      this.newTask.mountDiv();
      console.log(this.ACTUAL_LOCALSTORAGE);
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
    this.ACTUAL_LOCALSTORAGE.forEach((element) => {
      // console.log(element);
      localStorage.setItem(this.i, element);
      // console.log(localStorage);
      this.i++;
    });
    this.i = this.ACTUAL_LOCALSTORAGE.length;
  }

}
