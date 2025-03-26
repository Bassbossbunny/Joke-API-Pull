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

document.getElementById("chris").addEventListener("click", chrisjoke)

document.getElementById("misc").addEventListener("click", miscjoke)


});

function progjoke(){
 alljoke("Programming", "Here's a programming joke!", "#ffe5d9")

}

function punjoke(){
  alljoke("Pun", "Here's a pun!", "#ffd7ba")

}

function spookyjoke(){
    alljoke("Spooky", "Here's a spooky Joke!", "#fec89a")

}

function chrisjoke(){
    alljoke("Christmas","Here's a Joke for the Jolliest Holiday!", "#fcd5ce" )

}

function miscjoke(){
    alljoke("Miscellaneous","Here's a miscellaneous Joke!", "#fec5bb" )
}

function alljoke(category, titletext, color){
    fetch("https://v2.jokeapi.dev/joke/"+ category +"?safe-mode")
    .then(Response => Response.json())
    .then(data => {
        if(data.type =="single") {
            joketxt.textContent = data.joke;}
         else {
            joketxt.textContent = data.setup + "..." + data.delivery;
        }
    });
    document.getElementById("joketitle").innerText = titletext;
    document.body.style.background = color;
}