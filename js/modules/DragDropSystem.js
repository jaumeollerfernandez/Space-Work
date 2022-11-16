/**
 * Sortable group for Elements in 'To Do'
 */
const TODO = document.getElementById("todo");
Sortable.create(TODO, {
  group: "shared",
  animation: 150,
  chosenClass: "selected",
  // ghostClass:"ghost"
  dragClass: "drag",
});

/**
 * Sortable group for Elements in 'Doing'
 */
const DOING = document.getElementById("doing");
Sortable.create(DOING, {
  group: "shared",
  animation: 150,
  chosenClass: "selected",
  // ghostClass:"ghost"
  dragClass: "drag",
});

/**
 * Sortable group for Elements in 'Done'
 */
const DONE = document.getElementById("done");
Sortable.create(DONE, {
  group: "shared",
  animation: 150,
  chosenClass: "selected",
  // ghostClass:"ghost"
  dragClass: "drag",
});


/**
 * Sortable group for Elements in 'Drop Zone'
 */
const VOIDAREA = document.getElementById("destroyElements");
Sortable.create(VOIDAREA, {
  group: "shared",
  animation: 150,
  chosenClass: "selected",
  // ghostClass:"ghost"
  dragClass: "drag",
});

/**
 * Listener that activates when a 'dragenter' element is triggered. Makes the remove on the task div.
 */
VOIDAREA.addEventListener("dragenter", (ev) => {
  console.log(ev.target.firstChild.nextElementSibling.id);
  if (VOIDAREA.hasChildNodes()) {
    
    setTimeout(() => {
      localStorage.removeItem(ev.target.firstChild.nextElementSibling.id);
      Data.removeElementfromArray(ev.target.firstChild.nextElementSibling.id);
      VOIDAREA.firstChild.nextElementSibling.remove();
    }, 2000);
  }
});
