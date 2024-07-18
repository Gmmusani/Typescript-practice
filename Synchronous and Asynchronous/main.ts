// Call Stack //

// javascript me pehle code execute hota he call stack me phr call stack use execute krta he browser pe ya terminal pe.
// browser pe code execute hone k bd call stack se wo code delete hojata he. 

// Syncronous //

// task one by one execute hote hen synchronous me.

// console.log(1);
// console.log(2);
// console.log(3);


// Asynchronous //

// asynchronous programming me multiple task 1 sath execute hote hen.

// Web API //

// Asynchronous task me code sb se pehle call stack me jata he us k bd call stack se web api me
// web api phr wait krti he k kitne time bd age run hoga.
// web api me agr code pehle 3 second wala hw or phr 2 second wala tw pehle 2 second wala callback queue e chala jaega.
// phr web api se wo 2 second wala code delete hojaega.
// phr callback queue se event loop k zarie call stack me code execute hoga.
// phr code execute hoga browser ya terminal pe.

// javascript k is process me code kahin save nai hota siwae terminal ya browser k.
// har jaga se code execute ho kr delete hojata he.

setTimeout(()=>{console.log("Ghulam Mustafa")}, 3000)

console.log(4);
console.log(5);