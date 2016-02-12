var  groceries = [
		{
			name:'Milk',
			price: 2.49,
			quanity: 3,
		},
		{
			name:'Cereal',
			price: 1.99,
			quanity: 4,
		},
		{
			name:'Eggs',
			price: 2.60,
			quanity: 2,
		},
		{
			name:'Bread',
			price: 1.00,
			quanity: 3,
		},
	];
	
var total = 0;

groceries.forEach(function(item){
	console.log(item.name + " - $" + item.price);
	total += item.price;
});

console.log(total);


for (var i = 0; i < groceries.length; i++) {
	
//Creating the elements to use
var listRow = document.createElement('tr');
var colPrice = document.createElement('td');
var colItem = document.createElement('td');
var colQuanity = document.createElement('td');
var coltotal = document.createElement('td');

// Adding the data to the elements
colItem.innerText = groceries[i].name;
colPrice.innerText = groceries[i].price;
colQuanity.innerText = groceries[i].quanity;
coltotal.innerText = total;

// Append the elements to the HTML page
listRow.appendChild(colItem);
listRow.appendChild(colPrice);   
listRow.appendChild(colQuanity);

var Receipt = document.getElementById('Receipt');
Receipt.appendChild(listRow);


}

var total = document.getElementById('foot');
total.appendChild(coltotal);