function newTask(){
    var newInstance =  new clsTask();
    newInstance.mountDiv();
    newInstance.linkDiv(newInstance.firstParent, newInstance.row);
    ToLocalStorage.push(newInstance.jsonPlanet);
    // console.log(ToLocalStorage);
    
}

function sendToLocalStorage(pArray){
    let i = 0
    pArray.forEach(element => {
        // console.log(element);
        localStorage.setItem(i,element);
        console.log(localStorage);
        i++;
    });
    console.log(localStorage);
}
