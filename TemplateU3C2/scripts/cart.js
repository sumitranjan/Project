let cart = localStorage.getItem("cart")|| [];;
displayCart(cart)


function displayCart(cart){
  
  if (!cart) {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
} 
else {

    cart =JSON.parse(localStorage.getItem("cart")) || 0;
}

let total = cart.reduce(function (acc, curr) {
  return acc + +(curr.cost);
}, 0);

let container = document.getElementById("cart");


let table = document.createElement("table");
let thead = document.createElement("thead");
let theadRow = document.createElement("tr");
let th1 = document.createElement("th");
th1.textContent = "Image";
let th2 = document.createElement("th");
th2.textContent = "Name";
let th3 = document.createElement("th");
th3.textContent = "Price";


var th5 = document.createElement("td");
th5.textContent = "Remove";



theadRow.append(th1, th2, th3,th5);
thead.append(theadRow);
let tbody = document.createElement("tbody");

cart.forEach(function (prod,index) {
 
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  let prodImg = document.createElement("img");
  prodImg.src = prod.strMealThumb;
  td1.append(prodImg);
  let td2 = document.createElement("td");
  td2.textContent = prod.strMeal;


  //se
  let td4 = document.createElement("td");
  td4.textContent = prod.cost;

  var td5 = document.createElement("button");
  td5.id="remove"
td5.textContent = "Remove";
td5.addEventListener("click",function(){
  deleteTask(index);
})

////////////////

  tr.append(td1, td2 , td4,td5);
  tbody.append(tr);
});
table.append(thead, tbody);
container.append(table);

function totalDisplay(total) {
    console.log(total);
  let totalDisplay = document.getElementById("total"); 
  totalDisplay.textContent = "Total : " + +(total);
}
totalDisplay(total);


}



  //Delete
  function deleteTask(index){
    //   console.log(cart);
    //   console.log(typeof cart);
    //   let arr= cart.split(" ");
    //   console.log("Array:",arr);
      //splice(arr,1)
      cart.splice(index,1);
      console.log(cart);
      localStorage.setItem("cart",JSON.stringify(arr));
      displayCart(cart);
}




function checkout(){
    window.location.href = "checkout.html"
}