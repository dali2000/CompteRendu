//write the main code here
var data = require('./data');
var tab = data.tab;
var element = data.element;
var searchElement = require('./searchElement');

searchElement(tab, element, function(err, index) {
    if (err) {
        console.log(err.message);
    } else {
        console.log("found at index:", index);
    }  
});