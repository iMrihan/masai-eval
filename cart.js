/** @format */

let cartArr = JSON.parse(localStorage.getItem("cartData")) || [];

// console.log(cartArr, priceArr);
let append_div = document.querySelector(".container");
let items = document.getElementById("total-items");
let totalCost = document.getElementById("total-cost");

cartData(cartArr);
// console.log(items, priceArr);

function cartData(cartArr) {
	var sum = 0;
	console.log(cartArr.length);

	append_div.textContent = "";
	items.innerHTML = cartArr.length;

	for (var i = 0; i < cartArr.length; i++) {
		sum += Number(cartArr[i].price);
	}
	console.log(sum);
	totalCost.innerHTML = sum;

	cartArr.map(function (elem, index) {
		let div = document.createElement("div");
		let image = document.createElement("img");
		image.src = elem.strCategoryThumb;
		let price = document.createElement("p");
		price.textContent = `price: ${elem.price}`;
		let btn = document.createElement("button");
		btn.textContent = "Delete";
		btn.addEventListener("click", function () {
			deleteTask(index);
		});

		div.append(image, price, btn);
		append_div.append(div);
	});
}
function deleteTask(index) {
	cartArr.splice(index, 1);
	localStorage.setItem("cartData", JSON.stringify(cartArr));

	cartData(cartArr);
}
