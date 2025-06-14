/**
 * New properties can't be added, 
 * Setting new property fails silently but in strict mode it throws an error
 */

var obj = { a: 2 };
Object.preventExtension(obj);
obj.b = 4; // throws error in strict mode
