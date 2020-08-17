 "use strict";
//Began 

let input = document.querySelector("input");
let button  = document.querySelector("button");
let addsdatas = document.querySelector("#addsdata");
let icons = document.querySelectorAll("i");

button.addEventListener("click",function(){
	let deyer = input.value;

	let ul = document.createElement("ul");
	ul.classList.add("wrapper");
	let li = document.createElement("li");
	li.classList.add("list-group-item");
	li.innerText = deyer;

	let i =document.createElement("i");
	i.classList.add("far","fa-trash-alt", "float-right");
		i.addEventListener("click", function(){
		this.parentElement.classList.add("removed");
		setTimeout(function() {
			i.parentElement.remove();
		},50);
		
	})

	li.appendChild(i);
	ul.appendChild(li);
	addsdatas.append(ul);

	input.value = " ";


})

/// END




//Start
 let birinput = document.getElementById("divsayi");
 let ikiinput = document.getElementById("setirsy");

 let btnscnd = document.getElementById("myscnbtn");

 let tezerow = document.getElementById("yenirow");


btnscnd.addEventListener("click",function(){
	let in1 = +birinput.value;
 	let in2 = +ikiinput.value;

 	for(let i = 0; i< in1; i++){
 		let div = document.createElement("div");
 		div.style.width = 100 / in2 + "%";	

 		div.classList.add("wrappern");
 		div.innerText = i+1;

 		tezerow.appendChild(div);


 	}


})


























// End