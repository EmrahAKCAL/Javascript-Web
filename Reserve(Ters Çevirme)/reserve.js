function FirstReverse(str) {
    var res=str.split("").reverse().join("");
    console.log(res);
    return str;
}

var readline= prompt('Enter something: ')
FirstReverse(readline);
