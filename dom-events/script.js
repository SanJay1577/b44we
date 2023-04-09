console.log("working good")


// common util functions 

// alert 
const promptElement = document.querySelector("#prompt-ele"); 
function alertFunc(){
        alert("hi there please click okay");


// it doesn't return anything 
}


function promtFunc(){
    const names = prompt("Hey tell me your name", "default");
    promptElement.textContent = `The response is ${names}`
    // returns a string or a null
}

//promtFunc()


function confirmFunc(){
   let response = confirm("Ae you intrested ?") ;
   if(response){
    promptElement.innerText = "yes he is               interested"
    console.log(promptElement.innerText)
   }else {
    promptElement.textContent = "no he is not            interested"
    console.log( promptElement.textContent)
   }
}


//confirmFunc()

// setTimeout and setInterval

// set time out 

console.log("started the proram")

let count = 10; 


function countDown(){
promptElement.textContent = count
count--;
const id = setTimeout(countDown, 1000)
 if( count == 0){
    clearTimeout(id)
    promptElement.textContent = "hey yout time is up"
 }
}

// set interval
function intervalFunc(){
   const intervalId =  setInterval(()=>{
    promptElement.textContent = count;
    count--;
    if(count == 0){
        clearInterval(intervalId)
        promptElement.textContent = "Your interval is over"
    }
}, 1000)

}


const btn = document.getElementById("click-btn");

btn.addEventListener("click", ()=>{
    console.log("clicked the event")
})


// set interval
// setInterval(()=>{
//     console.log("the interval is called", count)
//     count++;
// }, 1000)

console.log("exited the program")

// 4 pillars of events

// 1 window EventS
// scroll
// resize
let windowCount =0
// window.addEventListener("scroll", ()=>{
// windowCount++;
// console.log("hey there i got scrolled", windowCount)
// })

window.addEventListener("resize", (event)=>{
    console.log(event.target.innerWidth)
  promptElement.textContent = `
    the width of the screen is ${event.target.innerWidth}
    the height of the screen is ${event.target.innerHeight}
  `
})

//2 form events
// - focus 
// - blur 
// -change 
// -input
//  -submit 
//  -click

let inputArea = document.createElement("textarea");
inputArea.setAttribute("id", "mes-area");
inputArea.style.width = "300px"
inputArea.style.height = "200px";


const addBtn = document.getElementById("add-btn");


addBtn.addEventListener("click", ()=>{
    const result = inputArea.value;
    const output = eval(result)
    promptElement.textContent = output;
})

inputArea.addEventListener("keydown", (event)=>{
    console.log("keydown clicked :", event)
    if(event.key === "Enter"){
        const result = inputArea.value;
        const output = eval(result)
        promptElement.textContent = output;
    }
})

let formContent = document.getElementById("form-contents")

formContent.append(inputArea)
