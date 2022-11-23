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

TODO.addEventListener('dragenter',(e)=>{
  setTimeout(() => {
    let LocateTarget = document.getElementById(e['relatedTarget']['id']);
    let target = LocateTarget.id;
    let text = LocateTarget.innerText;
    let currentPosition = "doing";
    if(target.length == 13){
      let JSONtoLocate = `{"id":"${target}","text":"${text}","position","${currentPosition}"}`
      localStorage.setItem(`${target}`,`${JSONtoLocate}`)
    }
    console.log('doing')
  }, 1000);

});
DOING.addEventListener('dragenter',(e)=>{
  setTimeout(() => {
    let LocateTarget = document.getElementById(e['relatedTarget']['id']);
    let target = LocateTarget.id;
    let currentPosition = "done";
    if(target.length == 13){
      let JSONtoLocate = `{"id":"${target}","text":"${text}","position","${currentPosition}"}`
      localStorage.setItem(`${target}`,`${JSONtoLocate}`)
    }
    console.log('done')
  }, 1000);

});
DONE.addEventListener('dragenter',(e)=>{
  setTimeout(() => {
    let LocateTarget = document.getElementById(e['relatedTarget']['id']);
    let target = LocateTarget.id;
    let currentPosition = "todo";
    if(target.length == 13){
      let JSONtoLocate = `{"id":"${target}","text":"${text}","position","${currentPosition}"}`
      localStorage.setItem(`${target}`,`${JSONtoLocate}`)
    }
    console.log('todo')
  }, 1000);

})

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
