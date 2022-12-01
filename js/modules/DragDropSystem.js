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
  dragClass: "drop",
});

/**
 * Listener that activates when a 'dragenter' element is triggered. Makes the remove on the task div.
 */
VOIDAREA.addEventListener("drop", (ev) => {
  
  let VOIDtarget = ev['currentTarget']['children']['0']['childNodes']['0']['id'];
  localStorage.removeItem(VOIDtarget);
  setTimeout(() => {
    while(VOIDAREA.hasChildNodes()) {
      console.log(VOIDtarget);
        // debugger;
        // Data.removeElementfromArray(ev.target.firstChild.nextElementSibling.id);
        VOIDAREA.firstChild.nextElementSibling.remove();
        }
  }, 1000);

});

// TODO.addEventListener('drop',(e)=>{
//     // console.log(TODO.childNodes)
//     let column = DOING.children
//     let columnLength = column.length

//     for(let i = 0; i< columnLength-1; i++){
//       let id = column[i]['firstChild']['id']||null;
//       let innertext = column[i]['firstChild']['innerText']
//       let currentPosition = "todo";
//       if( id!=null){
//         let JSONtoLocate = `{"id":"${id}","text":"${innertext}","position":"${currentPosition}"}`
//         localStorage.setItem(`${id}`,`${JSONtoLocate}`)
//       }
//     }
//   });

// // });
// DOING.addEventListener('drop',(e)=>{
 
//     let column = DOING.children
//     let columnLength = column.length
//     console.log(column)

//     for(let i = 0; i < columnLength; i++){
//       let id = column[i]['firstChild']['id']||null;
//       let innertext = column[i]['firstChild']['innerText']
//       let currentPosition = "doing";
//       if( id!=null){
//         let JSONtoLocate = `{"id":"${id}","text":"${innertext}","position":"${currentPosition}"}`
//         localStorage.setItem(`${id}`,`${JSONtoLocate}`)
//       }
//     }
    
//     console.log(columnLength-1);
//     // let LocateTarget = document.getElementById(e['relatedTarget']['id']);
//     // let target = LocateTarget.id;
//     // if(target.length == 13){
//     //   let JSONtoLocate = `{"id":"${target}","text":"${text}","position","${currentPosition}"}`
//     //   localStorage.setItem(`${target}`,`${JSONtoLocate}`)
//     // }
//     console.log('doing')
//     console.log(e)
//   });

// // });
// DONE.addEventListener('drop',(e)=>{
//   console.log(e)
//     let column = DOING.children
//     let columnLength = column.length

//     for(let i = 0; i< columnLength-1; i++){
//       let id = column[i]['firstChild']['id']||null;
//       let innertext = column[i]['firstChild']['innerText']
//       let currentPosition = "done";
//       if( id!=null){
//         let JSONtoLocate = `{"id":"${id}","text":"${innertext}","position":"${currentPosition}"}`
//         localStorage.setItem(`${id}`,`${JSONtoLocate}`)
//       }
//     }
//   });

// })

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
