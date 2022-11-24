/**
 * This class will manage all the data from LocalStorage.
 */
class clsData {
  constructor(){
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
}
  /**
   * When all the data is loaded into our ACTUAL_LOCALSTORAGE, the next step is to mount all these elements into the last position taken.
   */
  mountTasks() {

    // this.i= 0;
    localStorage.clear();
    this.ACTUAL_LOCALSTORAGE.forEach((element) => {
      this.newTaskToDo = new clsTask(element["text"], true, element["position"],this.i);
      this.i = new Date().getTime();
      localStorage.setItem(`${this.newTaskToDo.Task_ID}`, `{"id":"${this.newTaskToDo.Task_ID}","text":"${this.newTaskToDo.old_inputtext}","position":"${this.newTaskToDo.old_position.id}"}`)
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
    this.i = new Date().getTime();
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
    this.ACTUAL_LOCALSTORAGE.forEach((element) => {
      localStorage.setItem(this.i, element);
     });
    this.ACTUAL_LOCALSTORAGE = [];
    console.log(this.ACTUAL_LOCALSTORAGE);

  }

}
