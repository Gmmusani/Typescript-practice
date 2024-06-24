"use strict";
// Promise object properties
// A javascript promise object can be:
Object.defineProperty(exports, "__esModule", { value: true });
// Pending
// Fulfilled (resolve)
// Rejected
// The promise object supports two properties: State and result.
// While a promise object is "pending" (working), the result is undefined.
// When a promise object is "fulfilled", the result is a value.
// when a promise object is "rejected", the result is an error object.
// syntax
let myPromise = new Promise((myResolve, myReject) => {
    console.log("Promise pending");
    setTimeout(() => {
        // console.log("Promise resolved");
        // myResolve(["Ausaf", "GM", "Ahmed"]);
        console.log("Promise rejected");
        return myReject(new Error("Data fetch failed"));
    }, 2000);
});
myPromise.then((res) => { console.log(res); })
    .catch((err) => { console.log(err); });
// new example
// promise with condition
let prom = new Promise((res, rej) => {
    console.log("Promise pending");
    setTimeout(() => {
        let data = "GM";
        if (data) {
            console.log("Promise resolved hogya");
            return res(data);
        }
        else {
            console.log("Promise reject hogya");
            return rej(new Error("Ap ka data fetch nai hua"));
        }
    }, 3000);
});
prom.then((resolve) => { console.log(resolve); })
    .catch((reject) => { console.log(reject); });
