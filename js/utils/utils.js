// /**
//  * When the button is pushed, will create a Task with the assigned text from input.
//  */
// function newTask() {
//   var newInstance = new clsTask();
//   newInstance.mountDiv();
//   newInstance.linkDiv(newInstance.firstParent, newInstance.row);
//   ToLocalStorage.push(newInstance.jsonPlanet);
//   // console.log(ToLocalStorage);
// }

/**
 * When you press the button 'Save Changes', it will save all the data in LocalStorage.
 * @param {*} pArray
 */
function sendToLocalStorage(pArray) {
  let i = 0;
  pArray.forEach((element) => {
    // console.log(element);
    localStorage.setItem(i, element);
    // console.log(localStorage);
    i++;
  });
//   console.log(localStorage);
}
