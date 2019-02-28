"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Patrick M. Capuano
   Date:   2.27.19
   
   Filename: tc_cart.js
	
*/

// Declaring the variable "orderTotal" for later use in cost calculation and is currently set to an initial value of zero.
var orderTotal = 0;

// Variable that will contain the HTML code for the contents of the shopping cart, which is displayed as a table.
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>";

// We have a for loop here that does quite a bit in terms of JavaScript commands. 

// It starts off by setting the 'i" variable to a value of "0" and adding one additional value on it each time, then it finally checks to see if "i" is less than or equal to three in order to know if the funtion shall be continued.
for (var i = 0; i <= 3; i++) {

    // A text string is added to the "cartHTML" variable and it applies the "item" array to both the image file name and the alternative text as well to make sure the item number is suited to what the cotumer has picked. 
    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png'" + "alt=" + item[i] + "/></td>";

    // We have another text string added to "cartHTML" this time including the columns of the "itemDescription", "itemPrice", and "itemQty" arrays with the rest of their tags to ensure the code is insearted correctly.
    cartHTML += "<td>" + itemDescription[i] + "</td>" + "<td>" + "$" + itemPrice[i] + "</td >" + "<td>" + itemQty[i] + "</td>";

    // The varible "tiemCost" is declared and is set to the amount of the "itemPrice" array times the "tiemQty" array.
    var itemCost = itemPrice[i] * itemQty[i];

    // It is then used next in this portion to add onto "cartHTML" with a tags and a dollor sign to have its appropraite units.
    cartHTML += "<td>" + "$" + itemCost + "</td></tr>";

    // One more time it can be seen here as it added onto the "orderTotal" variable as well.
    orderTotal += itemCost;
}

// Outside of the for loop is two more lines, the first of which adding one last text string to the "cartHTML" variable with the "orderTotal" variable being put within the tags with a dollar sign to insure the appropraite units.
cartHTML += "<tr> <td colspan='4'>Subtotal</td>" + "<td>" + "$" + orderTotal + "</td>" + "</tr> </table>";

// Lastly, all of this JavaScript code is finally put into the HTML itself by skimming the entire document, targetting any tags with the ID of "cart", and then setting the HTML within to be all the code set to "cartHTML".
document.getElementById("cart").innerHTML = cartHTML;