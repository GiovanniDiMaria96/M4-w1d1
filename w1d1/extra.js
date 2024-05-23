
// ESERCIZIO 1
function extra1 (stringa){
    //The charAt() method of String values returns 
    //a new string consisting of the single UTF-16 code unit at the given index.
    let lettera = "" ;
    let numero = 0 ;
    let arrayUno = stringa.split("");
    for (let i= 0; i < arrayUno.length; i++){
        let calc = stringa.split(stringa.charAt(i)).length-1;
        if (calc > numero){
            numero = calc;
            lettera = stringa.charAt(i)
        }
    }
    return lettera;
}
console.log("esercizio 1 " + extra1("EPICODE"));

// ESERCIZIO 2
function extra2(a, b) {
    //The sort() method of Array instances sorts the elements
    //of an array in place and returns the reference to the same array, now sorted.
    let arraya = a.toLowerCase().split("").sort();
    let arrayb = b.toLowerCase().split("").sort();
    if (arraya.join("") === arrayb.join("")) {
        return true;
    } else {
        return false;
    }
}

console.log("esercizio 2 " + extra2("notizia", "tiziano")); 

// ESERCIZIO 3
function extra3(c, d) {
    let ac = c.toLowerCase().split("").sort().join("");
    let e = [];
    for (let i = 0; i < d.length; i++) {
        let ad = d[i].toLowerCase().split("").sort().join("");
        if (ac === ad) {
            //The push() method of Array instances adds the specified elements to 
            //the end of an array and returns the new length of the array.
            e.push(d[i]);
        }
    }
    if (e.length > 0) {
        return e;
    } else {
        return false;
    }
}

console.log("esercizio 3 " + extra3("notizia", ["notizia", "tiziano", "pippo"]));

// ESERCIZIO 4
function palindromo(pippo) {
    //The reverse() method of Array instances reverses an array in place and returns the 
    //reference to the same array, the first array element now becoming the 
    //last, and the last array element becoming the first.
    let reverse = pippo.split("").reverse().join("");
    if (reverse === pippo) {
        return true;
    } else {
        return false;
    }
}
console.log("esercizio 4 " + palindromo("pippo"));

// ESERCIZIO 5

function reverse (nUno) {
    return nUno = new Number (nUno.split("").reverse().join(""));
}
console.log("esercizio 5 " + reverse("189"));

// ESERCIZIO 6

