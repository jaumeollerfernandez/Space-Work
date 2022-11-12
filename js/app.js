/**
 * @author Jaume Oller Fernández
 */
var Data = new clsData();


     
     /**
      * This variable creates a Drop zone to delete tasks
      */
     const VOID = new clsVoid();
     
     /**
      * This object controls all the data will be managed in LocalStorage
      */
     
     /**
      * From Local Storage, we need that data from the previous session. That's what this call does.
      * @returns Array
      */
    Data.obtainLocalData();
    Data.mountTasks();
    // /**
    //  * Then, when we have the data, we need to clear it.
    //  */
    // localStorage.clear();
    // var ToLocalStorage = [];
    // console.log(ToLocalStorage);
    console.log("'Todos los recursos terminaron de cargar!");




