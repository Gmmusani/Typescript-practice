// // synchronously Callback

// function sum(a: number, b: number){
//     console.log(a + b);
// }

// function calculator(a: number, b: number, callback:(a: number, b: number) => void){
//     callback(a, b)
// };

// calculator(2, 4, sum);

// // asynchronously Callback

// function hello(){
//     console.log("Hello Asynchronous");
// };

// setTimeout(hello, 5000)
// setTimeout(()=>{
//     console.log("Hello GM");
// }, 3000);




// Callback hell

function getData(dataId: number, getNextData: () => void){
    setTimeout(()=>{
        console.log("Data :", dataId);
            getNextData();
    }, 3000);
};

getData(1, () => {
    console.log("Getting data 2");
    getData(2, ()=>{
        console.log("Getting data 3");
        getData(3, ()=>{
            console.log("done")
        });
    });
});
