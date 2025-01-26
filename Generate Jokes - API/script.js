let jokePera = document.getElementById("jokePera");
let btn = document.getElementById("btn");

let api = "https://official-joke-api.appspot.com/random_joke";

btn.addEventListener("click", async () => {
    let response = await fetch(api);
      
    let item = await response.json();   // Convert Promise into JSON Formate
    jokePera.innerHTML= `${item.setup} <br> ${item.punchline}`;  
});