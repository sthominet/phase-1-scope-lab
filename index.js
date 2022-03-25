// declare customerName to be bob in global scope
var customerName = `bob`;

// modifies the customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

// sets BestCustomer
function setBestCustomer() {
    return bestCustomer = `not bob`;
}

// overwrites the best customer
function overwriteBestCustomer() {
    return bestCustomer = `maybe bob`;
}

// unsuccessfully tries to reassign the least favorite customer
const leastFavoriteCustomer = `Jill`;

function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = `Anita`;
}