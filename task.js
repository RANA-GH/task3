function removeNumbers(str) {
    return str.split('').map(char => isNaN(char) ? char : '').join('');
}

let text = "rana233ghanam";
console.log(removeNumbers(text)); 