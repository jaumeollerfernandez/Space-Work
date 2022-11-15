// import {clsAnimatePlanet} from 'js/modules/clsAnimatePlanet.js';
// import {clsData} from 'js/modules/clsData.js';
// import {clsTasks} from 'js/modules/clsTasks.js';
// import {clsVoid} from 'js/modules/clsVoid.js';

/**
 * @author Jaume Oller Fernández
 */

/**
 * Instances class to manage Data between Local Storage and the actual view.
 */
var Data = new clsData();

/**
 * This is the button that causes a lot of trouble. His name is a must.
 */
var boton = document.getElementById('BOTONCABRON');

/**
 * Listener assigned to Generate new tasks.
 */
boton.addEventListener('click',()=>{
  Data.newTask()
})

/**
* This variable creates a Drop zone to delete tasks
*/
const VOID = new clsVoid();

/**
* From Local Storage, we need that data from the previous session. That's what this call does.
* @returns Array
*/
Data.obtainLocalData();

/**
 * This will generate all the previous session tasks into the position.
 */
Data.mountTasks();

console.log("'Todos los recursos terminaron de cargar!");




