/**
 * @author Jaume Oller Fernández
 */


/**
 * This variable creates a Drop zone to delete tasks
 */
const VOID = new clsVoid();

/**
 * This object controls all the data will be managed in LocalStorage
 */
var Data = new clsData();

/**
 * From Local Storage, we need that data from the previous session. That's what this call does.
 * @returns Array
 */
Data.obtainLocalData();

/**
 * Then, when we have the data, we need to clear it.
 */
localStorage.clear();

var IDcount = 0 || 0;
var ToLocalStorage = [];

