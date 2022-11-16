/**
 * This class will manage all the data from LocalStorage.
 */
class clsData {
  constructor() {
    this.ACTUAL_LOCALSTORAGE = [];
    this.keys = null;
    this.i = 0;
  }
  /**
   * When the page starts, it is required to obtain those LocalStorage Data in order to mount all the tasks from the last session. That will take all those elements, to put it into this.ACTUAL_LOCALSTORAGE
   */
  obtainLocalData() {
    (this.keys = Object.keys(localStorage)), (this.i = this.keys.length);
    while (this.i--) {
      this.jsonValue = JSON.parse(localStorage.getItem(this.keys[this.i]));
      this.ACTUAL_LOCALSTORAGE.push(this.jsonValue);
    }
    if (this.i < 0){
        this.i = this.ACTUAL_LOCALSTORAGE.length;
    }
    this.ACTUAL_LOCALSTORAGE.reverse();
    console.log(this.ACTUAL_LOCALSTORAGE);
}

  /**
   * When all the data is loaded into our ACTUAL_LOCALSTORAGE, the next step is to mount all these elements into the last position taken.
   */
  mountTasks() {
    this.i= 0;
    this.ACTUAL_LOCALSTORAGE.forEach((element) => {
      this.newTaskToDo = new clsTask(element["text"], true, element["position"],this.i);
      this.newTaskToDo.mountDiv();
      this.i++;
    });
    this.i = this.ACTUAL_LOCALSTORAGE.length;
}

/**
 * Linked to the button showed on Screen, that task will generate all the elements (img and text) that will have the task.
 */
  newTask() {
    var newInstance = new clsTask(undefined,undefined,undefined, this.i);
    newInstance.mountDiv();
    newInstance.linkDiv(newInstance.firstParent, newInstance.row);
    this.ACTUAL_LOCALSTORAGE.push(newInstance.jsonPlanet);
    this.sendToLocalStorage();

  }

  /**
   * When a task is made, we need to take it into our Local Storage Data. That's what this method does.
   */
  sendToLocalStorage() {
    console.log(this.ACTUAL_LOCALSTORAGE);

    // for(this.i, this.i<this.ACTUAL_LOCALSTORAGE.length;this.i++;){


    // };
    this.i = 0;
    this.ACTUAL_LOCALSTORAGE.forEach((element) => {
      // console.log(element);
      if(localStorage.getItem(this.i)== null){
        localStorage.setItem(this.i, element);
      }

      // console.log(localStorage);
      this.i++;
    });
    this.i = this.ACTUAL_LOCALSTORAGE.length;

  }

  removeElementfromArray(pID){
    this.ACTUAL_LOCALSTORAGE.forEach((element)=>{
      if(element['id'] == pID){
        this.ACTUAL_LOCALSTORAGE.remove(element);
      }
    })
    console.log(this.ACTUAL_LOCALSTORAGE);
  }

}
