var catalog = [
	{ product : "apple", price : 0.99},
	{ product : "banana", price : 0.59},
	{ product : "cauliflower", price : 1.59},
	{ product : "dragonfruit", price : 2.19},
	{ product : "elderberry", price : 1.79},
	{ product : "figs", price : 2.09},
	{ product : "grapefruit", price : 1.99},
	{ product : "honeydew", price : 3.49}
];

var i = 0;
var num = 0;
var cart = [];

function addItemToCart(num) {
 cart.push(catalog[num].product, catalog[num].price);
}

function displayCart() {
   var e = "<hr/>";   
    
   for (i = 0; i < cart.length; ++i) {
     e += cart[i] + "                            " + "$" + cart[++i] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e + "<br/>" + getTotal();
}

function getTotal() {
	var total = 0;
	for (i = 1; i < cart.length; ++i) {
		if (i % 2 !== 0){
			total += cart[i];
		}
	} return "Total: $" + total;
}