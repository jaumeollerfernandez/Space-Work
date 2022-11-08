const VOID = new clsVoid();

var PlanetArray = {
    Planets:{

    }
}

//TaskElement --> Div que contiene la info del tema.
//ID --> destroyElements es el contenedor que borrará todo lo que hay dentro.


//Cuando se introduzca en el elemento, haga una animación y se borre el div.


//Problemas con borrar el elemento de dentro.
// const DESTROYZONE = document.getElementById('DestroyElements');
// const KILLKILLKILL = setInterval(()=>{
//     while (DESTROYZONE.firstChild == true) {
//         DESTROYZONE.removeChild(DESTROYZONE.lastChild);
//       }
// },1000)



function newTask(){
    var newInstance =  new clsCreateTask();
    newInstance.mountDiv();
    newInstance.linkDiv(newInstance.firstParent, newInstance.row);
    PlanetArray.Planets = newInstance;
    console.log(PlanetArray);
}
















    //COSAS QUE HACER
    //Pasar las palabras entre divs
    
    
    // function createTask(pDiv){
    //     var Task = document.getElementById('tasktext').innerHTML;
    //     createDivs('todo',Task,'toWork');
    //     pDiv.remove();
    
    // }
    
    // function prepareTask(){
    //     const newTask = document.getElementById('newtask').value;
    //     var parentid = 'listnewtasks';
    //     createDivs(parentid, newTask, 'createTask');
    // }
    
    // function toWork(pDiv){
    //     var objective = pDiv;
    //     var workparent = document.getElementById('doing');
    //     objective.setAttribute('onclick',"taskDone(this)");
    //     workparent.appendChild(objective);
    // }
    
    // function taskDone(pDiv){
    //     pDiv.remove();
    // }
    
    // frame();
    // tasca.frame();