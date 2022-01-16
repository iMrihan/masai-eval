/** @format */

let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

async function fetchApi() {
	try {
		let res = await fetch(
			"https://www.themealdb.com/api/json/v1/1/categories.php"
		);
		let data = await res.json();

		let response = data.categories;

		console.log("data:", response);
		disses(response);
	} catch (err) {
		console.log("err:", err);
	}
}
fetchApi();
let append_div = document.querySelector(".container");

function disses(data) {
	data.map(function (elem) {
		let prices = Math.floor(Math.random() * 500 + 100);
		let div = document.createElement("div");
		let image = document.createElement("img");
		image.src = elem.strCategoryThumb;
		let price = document.createElement("p");
		price.textContent = `price: ${prices}`;
		let btn = document.createElement("button");
		btn.textContent = "Add to cart";
		btn.addEventListener("click", function () {
			elem.price = prices;
			console.log("elem:", elem);
			addItems(elem);
		});

		div.append(image, price, btn);
		append_div.append(div);
	});
}

function addItems(elem) {
	cartData.push(elem);

	console.log("cartData:", cartData);
	localStorage.setItem("cartData", JSON.stringify(cartData));
}
