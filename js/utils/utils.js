function newTask(){
    var newInstance =  new clsTask();
    newInstance.mountDiv();
    newInstance.linkDiv(newInstance.firstParent, newInstance.row);
    ToLocalStorage.push(newInstance.jsonPlanet);
    
}

function sendToLocalStorage(){
    

}