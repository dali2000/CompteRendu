function searchElement(tab, element, callback) {
    for (var i = 0; i < tab.length; i++) {
        if (tab[i] === element) {
            return callback(null, i);
        }
    }
    return callback(new Error("not found"), -1);
}

module.exports = searchElement;
