


let cartArr = JSON.parse(localStorage.getItem("cartData"))|| [];
console.log(cartArr);
let append_div = document.querySelector(".container");
let items = document.getElementById("total-items");

cartData(cartArr)
console.log(items)



function cartData(cartArr){
  
  console.log(cartArr.length)

    append_div.textContent = ""
    items.innerHTML= cartArr.length;

     
    cartArr.map(function(elem,index){
     let prices = Math.floor(Math.random() * 500 +100);
     let div = document.createElement("div");
     let image = document.createElement("img");
     image.src = elem.strCategoryThumb;
     let price = document.createElement("p")
     price.textContent = `price: ${prices}`;
     let btn = document.createElement("button");
     btn.textContent = "Delete";
     btn.addEventListener("click",function(){
        deleteTask(index);
     })
 
     div.append(image,price, btn);
     append_div.append(div);
     
 
    })
    
  }
  function deleteTask(index){
      cartArr.splice(index,1);
      localStorage.setItem("cartData",JSON.stringify(cartArr));
      cartData(cartArr)
  }
 