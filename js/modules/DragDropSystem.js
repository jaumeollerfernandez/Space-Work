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

document.addEventListener('dragenter',(e)=>{
//Pillar el target del objeto que se mueve
setTimeout(() => {
  let target = document.getElementById(e['relatedTarget']['id']);
  console.log(target.parentNode.parentNode.id);

  console.log(localStorage.getItem(target.id));
}, 1000);

// console.log(target.id);

//Determinar en qué lugar se encuentra



//Cambiarle la posición del localstorage

  // console.log(e);
  // console.log('aqui esta el doing')
  // console.log(e['toElement']['children']['todo']['id']);
  // console.log(e['toElement']['children']['doing']['id']);
  // console.log(e['toElement']['children']['done']['id']);
  // if(e[])
  // let target = document.getElementById()
})
