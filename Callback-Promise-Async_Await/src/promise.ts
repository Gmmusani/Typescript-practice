// promise bhot sare callbacks se bachne ka solution he.

// promise k 3 stats ho skte hen:

// 1) pending
// 2) Fulfilled
// 3) rejected

// let result = new Promise((resolve, reject)=>{
//     console.log("i am a promise")
//     resolve(console.log("1234"));
// });

// result.then((res)=>{res});

////

// let getPromise = () => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//                 console.log("I am a promise");
//                 resolve("Success")
//                 // reject(new Error())
//             }, 5000)
//         })
//     };

// let myProm = getPromise();

// console.log(myProm)
// myProm.then((res)=>{console.log(`promise fulfilled ${res}`)})
// .catch((err)=>{console.log(err)})

////

function getData(getId: number){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Data", getId);
            resolve("success");
        }, 2000);
    });
};

// // promise chain
// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res2)=>{
//         console.log(res2);
//         getData(3).then((res3)=>{
//             console.log(res3)
//         });
//     });
// });

// new example promise chain
// is example me pehle data 1 phr data 2 phr data 3 k bd success print hoga. 
getData(1).then(()=>{
    return getData(2);
})
.then(()=>{
    return getData(3);
})
.then((res)=>{
    console.log(res)
})