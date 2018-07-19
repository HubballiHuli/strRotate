let h1Tag = document.querySelector("h1");
let leftBtn = document.getElementById("left");
let rightBtn = document.getElementById("right");

leftBtn.addEventListener("click",(e,f) => {
	text = h1Tag.innerText;

	textArray = text.split("");

	textArray.push(textArray.shift());
	h1Tag.innerText = textArray.join("");
	 


    })


rightBtn.addEventListener("click",(e,f) => {
	text = h1Tag.innerText;

	textArray = text.split("");

	textArray.unshift(textArray.pop());
	h1Tag.innerText = textArray.join("");
	 


    })