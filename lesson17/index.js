//поиски элементов

// const pTextId = document.getElementById("text");
// console.log(pTextId);

// const pTextClass = document.getElementsByClassName("text");
// console.log(pTextClass);

// const pTag = document.getElementsByTagName("p");
// console.log(pTag);

// const pQuery = document.querySelector(".c3");
// console.log(pQuery);

// const pQueryAll = document.querySelectorAll(".text");
// console.log(pQueryAll);

// setTimeout(() => {
// 	pTextId.innerText = "new text";
// 	pTextId.style.color = "red";
// 	pTextId.style.fontSize = "20px";
// }, 2000);
// setTimeout(() => {
// 	pTextId.textContent = "new textContent";
// 	pTextId.classList.add("p-style");
// }, 4000);
// setTimeout(() => {
// 	pTextId.innerHTML = "new innerHtml";
// 	pTextId.classList.remove("p-style");
// }, 6000);

// const helloBtn = document.querySelector("#hello");
// helloBtn.onclick = () => {
// 	alert("Hello");
// };

// helloBtn.addEventListener("click", event => {
// 	console.log(event.target.id);
// });

// const inputText = document.querySelector("#inp-text");
// inputText.addEventListener("change", () => {
// 	console.log(inputText.value);
// });

// window.addEventListener("mousemove", event => {
// 	console.log(event.clientX, event.clientY);
// });

// const addMouse = document.querySelector("#add-mouse-move");
// const removeMouse = document.querySelector("#remove-mouse-move");

// addMouse.onclick = () => {
// 	window.addEventListener("mousemove", LogMousePosition);
// };

// removeMouse.onclick = () => {
// 	window.removeEventListener("mousemove", LogMousePosition);
// };

// function LogMousePosition(event) {
// 	console.log(`Mouse position: ${event.clientX}, ${event.clientY}`);
// }

// const list = document.querySelector("ul");
// const addItem = document.querySelector("#add-item");
// const removeItem = document.querySelector("#remove-item");

// addItem.onclick = () => {
// 	const newItem = document.createElement("li");
// 	const currentItem = document.querySelectorAll("li");
// 	console.log(currentItem);

// 	newItem.innerText = `Item ${currentItem.length + 1}`;
// 	list.appendChild(newItem);
// };

// removeItem.onclick = () => {
// 	const currentItem = document.querySelectorAll("li");
// 	list.removeChild(currentItem[currentItem.length - 1]);
// };

// const items = ["item1", "item2", "item3"];
// items.forEach(item => {
// 	const newItem = document.createElement("li");
// 	newItem.innerText = item;
// 	list.appendChild(newItem);
// });

//получение данных реальных из интернета

const divItems = document.querySelector(".items");
