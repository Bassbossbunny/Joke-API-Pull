// comment 
document.addEventListener("DOMContentLoaded", (event) => {
   
joketxt.textContent = "Loading...";

fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
.then(Response => Response.json())
.then(data => {
    if(data.type =="single") {
        joketxt.textContent = data.joke;}
     else {
        joketxt.textContent = data.setup + "..." + data.delivery;
    }
});

document.getElementById("prog").addEventListener("click", progjoke)

document.getElementById("pun").addEventListener("click", punjoke)

document.getElementById("spook").addEventListener("click", spookyjoke)

document.getElementById("misc").addEventListener("click", miscjoke)


});

function progjoke(){
    fetch("https://v2.jokeapi.dev/joke/Programming")
    .then(Response => Response.json())
    .then(data => {
        if(data.type =="single") {
            joketxt.textContent = data.joke;}
         else {
            joketxt.textContent = data.setup + "..." + data.delivery;
        }
    });
    document.getElementById("joketitle").innerText = "Here's a Programming Joke";
}

function punjoke(){
    fetch("https://v2.jokeapi.dev/joke/Pun")
    .then(Response => Response.json())
    .then(data => {
        if(data.type =="single") {
            joketxt.textContent = data.joke;}
         else {
            joketxt.textContent = data.setup + "..." + data.delivery;
        }
    });
    document.getElementById("joketitle").innerText = "Here's a Pun!";
}

function spookyjoke(){
    fetch("https://v2.jokeapi.dev/joke/Spooky")
    .then(Response => Response.json())
    .then(data => {
        if(data.type =="single") {
            joketxt.textContent = data.joke;}
         else {
            joketxt.textContent = data.setup + "..." + data.delivery;
        }
    });
    document.getElementById("joketitle").innerText = "Here's a Spooky Joke";
}

function miscjoke(){
    fetch("https://v2.jokeapi.dev/joke/Miscellaneous")
    .then(Response => Response.json())
    .then(data => {
        if(data.type =="single") {
            joketxt.textContent = data.joke;}
         else {
            joketxt.textContent = data.setup + "..." + data.delivery;
        }
    });
    document.getElementById("joketitle").innerText = "Here's a miscellaneous Joke";
}

function alljoke(category, titletext){
    fetch("https://v2.jokeapi.dev/joke/"+ category)
    .then(Response => Response.json())
    .then(data => {
        if(data.type =="single") {
            joketxt.textContent = data.joke;}
         else {
            joketxt.textContent = data.setup + "..." + data.delivery;
        }
    });
    document.getElementById("joketitle").innerText = titletext;
}