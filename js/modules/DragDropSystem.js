/**
 * Sortable group for Elements in 'To Do'
 */
const TODO = document.getElementById("todo");
Sortable.create(TODO, {
  group: "shared",
  animation: 150,
  chosenClass: "selected",
  // ghostClass:"ghost"
  dragClass: "dragenter",
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
  dragClass: "dragenter",
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
  dragClass: "dragenter",
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
  dragClass: "dragenter",
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

TODO.addEventListener('drop',(e)=>{
  setTimeout(() => {
    // console.log(TODO.childNodes)
    let column = TODO.children
    let columnLength = column.length

    for(let i = 0; i<=columnLength; i++){
      console.log(column[i]['firstChild']['id'])
      console.log(column[i]['firstChild']['innerText'])
    }
    console.log(columnLength-1);
    // console.log(column[0]['firstChild']['id']);
    // }
    console.log('todo')
    console.log(e)
  }, 1000);

});
DOING.addEventListener('drop',(e)=>{
  setTimeout(() => {
    let column = DOING.children
    console.log(column);
    // let LocateTarget = document.getElementById(e['relatedTarget']['id']);
    // let target = LocateTarget.id;
    // let currentPosition = "done";
    // if(target.length == 13){
    //   let JSONtoLocate = `{"id":"${target}","text":"${text}","position","${currentPosition}"}`
    //   localStorage.setItem(`${target}`,`${JSONtoLocate}`)
    // }
    console.log('doing')
    console.log(e)
  }, 1000);

});
DONE.addEventListener('drop',(e)=>{
  setTimeout(() => {
    // let LocateTarget = document.getElementById(e['relatedTarget']['id']);
    // let target = LocateTarget.id;
    // let currentPosition = "todo";
    // if(target.length == 13){
    //   let JSONtoLocate = `{"id":"${target}","text":"${text}","position","${currentPosition}"}`
    //   localStorage.setItem(`${target}`,`${JSONtoLocate}`)
    // }
    console.log('done')
    console.log(e)
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
