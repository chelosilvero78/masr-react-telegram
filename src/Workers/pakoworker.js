// //OPCION ES5---------------------------inicio
// const PakoWorker=require('./pako.worker')

// module.exports = {
//     PakoWorker
// };
// //OPCION ES5---------------------------fin

//OPCION ES6---------------------------------inicio
import * as PakoWorker from './pako.worker'
export { PakoWorker }
//OPCION ES6---------------------------------fin