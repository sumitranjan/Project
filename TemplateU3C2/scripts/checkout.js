
      function createOrder() {
        let cardNumber = document.getElementById("cardNumber").value;
        let dateOfExpiry = document.getElementById("dateOfExpiry").value;
        let cvv = document.getElementById("cvv").value;
        console.log("hello");
        // if (cardNumber && dateOfExpiry && cvv) {
          setTimeout(function () {
            alert("Your order is accepted");
          }, 0);
        // }
        setTimeout(function () {
            alert("Your order is being cooked");
          }, 3000);
          setTimeout(function () {
            alert(" Your order is ready");
          }, 8000);
          setTimeout(function () {
            alert("Order out for delivery");
          }, 10000);
          setTimeout(function () {
            alert("Order delivered");
          }, 12000);
        //   window.location.href = "checkout.html"

      }
