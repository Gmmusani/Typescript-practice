"use strict";
// Fetch
Object.defineProperty(exports, "__esModule", { value: true });
// fetch pre define function he jw promise return krta he.
// fetch function kw 1 Api ki zaroorat hoti he.
// Api
// api client or server k beech me 1 bridge he jw data kw le ane or le jane ka kaam krti he.
let url = "https://jsonplaceholder.typicode.com/posts/1";
// let fetchdata = fetch(url).then((res)=>(res.json()))
// .then((data)=>(console.log(data)))
// .catch((err)=>(console.log(err)));
// console.log(fetchdata);
// async await
// async function b 1 promise return krta he.
// .then or .catch se bachne k lie hm async await ka use krte hen.
let myFunc = async () => {
    // await ka matlab he k wait kren jb tk ye promise resolve nai hojata.
    let fetchData = await fetch(url);
    let data = await fetchData.json();
    console.log(data);
};
myFunc();
