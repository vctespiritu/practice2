/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

// Building rows
// TODO replace hard coded 3
for (var i = 0; i < 3; i++) {
  outputCartRow(filenames[i], titles[i], quantities[i], prices[i]);
}

// Building subtotal row
getSubtotal();

// Building tax row
getTax();

// Bulding shipping row
getShipping();

// Building Grand Total row
getGrandTotal();
