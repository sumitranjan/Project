
let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";

async function getProducts() {
    try {
        let prooductList = await fetchProducts(url);
        //console.log(prooductList);
        renderProducts(prooductList.meals)

    } catch (error) {
        console.log(error)
    }
}

getProducts();

let cart = localStorage.getItem("cart");
      if (!cart) {
  
        cart = []; 
        localStorage.setItem("cart", JSON.stringify(cart));
        refreshCartCount(cart);
      } else {
    
        cart = JSON.parse(cart); 
        refreshCartCount(cart);
      }

      //Count
function refreshCartCount(cart) {
        let cartCount = document.getElementById("count");
        cartCount.textContent = `${cart.length}`;
      }

function fetchProducts(url){
    return fetch(url)
    .then(function (res){
        return res.json();
    })
    .then(function (res){
        return res
    })
    .catch(function (err){
        console.log(err);
    });
}

function renderProducts(products){

    let menu = document.getElementById("menu");
    menu.innerHTML ="";
  
    console.log(products)
    products.forEach(function (prod){
        let prodCard = document.createElement("div");

       

        let image = document.createElement("img");
        image.src= prod.strMealThumb;

        let name = document.createElement("p");
        name.textContent = prod.strMeal;

        let price = document.createElement("p");
        price.id="price";
        price.textContent = Math.floor(Math.random()*500);

        let addToCartButton = document.createElement("button");
        addToCartButton.id= "addtocart"
          addToCartButton.textContent = "Add to Cart";
          addToCartButton.onclick = function (event) {
            addToCart(prod,price.textContent);
          };
        //Append

        prodCard.append(image,name,price,addToCartButton);
        menu.append(prodCard)
    });

    function addToCart(prod,price) {
        
        let cart = JSON.parse(localStorage.getItem("cart"))
        prod["cost"]=price;
        cart.push(prod);

        localStorage.setItem("cart", JSON.stringify(cart)); 
        refreshCartCount(cart);
      }

}


