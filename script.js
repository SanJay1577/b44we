// creating an element
let newElement = document.createElement("div")


//setAtrrributes 
newElement.setAttribute("class", "new-ele-class")
newElement.setAttribute("id", "new-ele-id")

// Accessing existing element 

// element by ID
let existingElement = document.getElementById("sub-head");
console.log(existingElement)

// element by class 
let existingClassElement = document.getElementsByClassName("heading");
console.log(existingClassElement[0])

//acessing using query selector

let queryElement = document.querySelector('#query-id');
// queryElement.style.backgroundColor = "blue";
console.log(queryElement)

//acessing all elements 
let queryElementAll = document.querySelectorAll(".query-class")

console.log(queryElementAll)

const colors = ["red", "green", "yellow", "orange"]


for(let i=0; i<queryElementAll.length; i++){
    console.log(queryElementAll)
    queryElementAll[i].style.backgroundColor = colors[i]
}


//inner text and inner Html
newElement.style.fontFamily = "arial"
newElement.style.fontSize = "25px"

newElement.innerText = "New Element"


newElement.innerHTML += `
<h1>New Heading</h1>
<p>New para tags created using innerHtml</p>
`

queryElement.innerText += " is given        in this segement"


console.log("inner text --:", queryElement.innerText)
console.log("text content --:", queryElement.textContent)


//append a text as well as node elements 
const newDiv = document.createElement("div");
newDiv.setAttribute("id", "appedding-div")
newDiv.textContent = `Hey I'm a new div`

const newDiv2 = document.createElement("div");
newDiv2.setAttribute("id", "appedding-div2")
newDiv2.textContent = `Hey I'm a new div-2`

const appendEle = document.querySelector("#append-id")
//appendEle.append(newDiv, newDiv2, "i'm a string appended")

//append child only accpets the node elements
appendEle.appendChild(newDiv)

//appending (can append a node element and text )
document.body.append(newElement)





