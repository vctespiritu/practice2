/* define functions here */

var subtotal = 0;
var tax;
var shipping;
var grandTotal;

function calculateTotal(quantity, price) {
  return quantity * price;
}

function outputCartRow(file, title, quantity, price, total) {

  document.write("<tr>");
  document.write("<td><img src='images/" + file + "'>");
  document.write("<td>" + title + "</td>");
  document.write("<td>" + quantity + "</td>");
  document.write("<td>" + price + "</td>");
  document.write("<td>$" + calculateTotal(quantity, price).toFixed(2) + "</td>");
  document.write("</tr>");

  subtotal += calculateTotal(quantity, price);
}

function getSubtotal() {
  document.write("<tr class='totals'>");
  document.write("<td colspan='4'>");
  document.write("Subtotal");
  document.write("</td>");
  document.write("<td>");
  document.write("$" + subtotal.toFixed(2));
  document.write("</td>");
  document.write("</tr>");
}

function getTax() {

  tax = 0.1 * subtotal;

  document.write("<tr class='totals'>");
  document.write("<td colspan='4'>");
  document.write("Tax");
  document.write("</td>");
  document.write("<td>");
  document.write("$" + tax.toFixed(2));
  document.write("</td>");
  document.write("</tr>");
}

function getShipping() {

  if (subtotal < 1000) {
    shipping = shippingBelowOneThousand;
    shippingBelowOneThousandF();
  } else {
    shipping = shippingAboveOneThousand;
    shippingAboveOneThousandF();
  }

  // Inner functions
  function shippingBelowOneThousandF() {
    document.write("<tr class='totals'>");
    document.write("<td colspan='4'>");
    document.write("Shipping");
    document.write("</td>");
    document.write("<td>");
    document.write("$" + shippingBelowOneThousand.toFixed(2));
    document.write("</td>");
    document.write("</tr>");
  }

  function shippingAboveOneThousandF() {
    document.write("<tr class='totals'>");
    document.write("<td colspan='4'>");
    document.write("Shipping");
    document.write("</td>");
    document.write("<td>");
    document.write("$" + shippingAboveOneThousand.toFixed(2));
    document.write("</td>");
    document.write("</tr>");
  }
}

function getGrandTotal(){

  grandTotal = (subtotal + tax + shipping);

  document.write("<tr class='totals focus'>");
  document.write("<td colspan='4'>");
  document.write("Grand Total");
  document.write("</td>");
  document.write("<td>");
  document.write("$" + grandTotal.toFixed(2));
  document.write("</td>");
  document.write("</tr>");
}
