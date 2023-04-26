let quantity = 0;
function addQuantity() {
    quantity=quantity + 1;
    document.getElementById('quantity').innerHTML = quantity;
    document.getElementById('quantity1').innerHTML = quantity;
    console.log(quantity);
    var price = 52000;

    if (quantity == 1) {
        document.getElementById('subTotal').innerHTML = quantity * 52000;
        document.getElementById('total').innerHTML = (quantity * 52000) + 50;
    }

    else if (quantity == 2) {
        document.getElementById('subTotal').innerHTML = quantity * 52000;
        document.getElementById('total').innerHTML = (quantity * 52000) + 50;
    }
    else if (quantity == 3) {
        document.getElementById('subTotal').innerHTML = quantity * 52000;
        document.getElementById('total').innerHTML = (quantity * 52000) + 50;
    }
    else if (quantity == 4) {
        document.getElementById('subTotal').innerHTML = quantity * 52000;
        document.getElementById('total').innerHTML = (quantity * 52000) + 50;
    }
    else if (quantity == 5) {
        document.getElementById('subTotal').innerHTML = quantity * 52000;
        document.getElementById('total').innerHTML = (quantity * 52000) + 50;
    }
    else if (quantity == 6) {
        document.getElementById('subTotal').innerHTML = quantity * 52000;
        document.getElementById('total').innerHTML = (quantity * 52000) + 50;
    }
    else if (quantity == 7) {
        document.getElementById('subTotal').innerHTML = quantity * 52000;
        document.getElementById('total').innerHTML = (quantity * 52000) + 50;
    }
    else if (quantity == 8) {
        document.getElementById('subTotal').innerHTML = quantity * 52000;
        document.getElementById('total').innerHTML = (quantity * 52000) + 50;
    }
    else if (quantity == 9) {
        document.getElementById('subTotal').innerHTML = quantity * 52000;
        document.getElementById('total').innerHTML = (quantity * 52000) + 50;
    }
    else if (quantity == 10) {
        document.getElementById('subTotal').innerHTML = quantity * 52000;
        document.getElementById('total').innerHTML = (quantity * 52000) + 50;
    }
    else  {
        window.alert("Quantity go highter than 10.");
        
    }

}
function descQuantity() {
    quantity=quantity - 1;
    
    document.getElementById('quantity').innerHTML = quantity;
    document.getElementById('quantity1').innerHTML = quantity;
    console.log(quantity);
}