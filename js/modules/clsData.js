/**
 * This class will manage all the data from LocalStorage.
 */
class clsData {
  constructor() {
    this.ACTUAL_LOCALSTORAGE = [];
    this.keys = Object.keys(localStorage);
    this.i = new Date().getTime();
    this.count = 0;
  }
  /**
   * When the page starts, it is required to obtain those LocalStorage Data in order to mount all the tasks from the last session. That will take all those elements, to put it into this.ACTUAL_LOCALSTORAGE
   */
  obtainLocalData() {
    (this.keys = Object.keys(localStorage)), (this.count = this.keys.length);
    while (this.count--) {
      this.jsonValue = JSON.parse(localStorage.getItem(this.keys[this.count]));
      this.ACTUAL_LOCALSTORAGE.push(this.jsonValue);
    }
    console.log(this.ACTUAL_LOCALSTORAGE);
    // this._updateKeys();
    // this.ACTUAL_LOCALSTORAGE.reverse();
    // console.log(this.ACTUAL_LOCALSTORAGE);
    // console.log('obtainLocalData')
    // console.log(this.i);
}

  updateKeys(){
    // this.keys = Object.keys(localStorage);
    // this.i = this.keys.length;
  }

  /**
   * When all the data is loaded into our ACTUAL_LOCALSTORAGE, the next step is to mount all these elements into the last position taken.
   */
  mountTasks() {

    // this.i= 0;
    this.ACTUAL_LOCALSTORAGE.forEach((element) => {
      this.newTaskToDo = new clsTask(element["text"], true, element["position"],this.i);
      this.newTaskToDo.mountDiv();
    });
    // this._updateKeys();
    // console.log('mountTasks')
    // console.log(this.i);
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
    console.log('newTask');
    console.log(this.i);
  }

  /**
   * When a task is made, we need to take it into our Local Storage Data. That's what this method does.
   */
  sendToLocalStorage() {

    // console.log(this.ACTUAL_LOCALSTORAGE);

    // // for(this.i, this.i<this.ACTUAL_LOCALSTORAGE.length;this.i++;){
    // // };
    // this.i = 0;
    this.ACTUAL_LOCALSTORAGE.forEach((element) => {
      // console.log(element);
      if(localStorage.getItem(this.i) == null){
        localStorage.setItem(this.i, element);
      }
      // console.log(localStorage);
      this.i++;
    // });
    // this._updateKeys();
    // this.i = this.keys.length;
    // console.log('sendToLocalStorage')
    // console.log(this.i);

        });
  }

  removeElementfromArray(){
    // this._updateKeys();
    // this.i = this.keys.length;
    // for (let i = 0; i < array.length; i++) {
    //   this.
      
    // }
    // console.log('removeElementfromArray')
    // console.log(this.i);
    // console.log(this.ACTUAL_LOCALSTORAGE);
  };

}
