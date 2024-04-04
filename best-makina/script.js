function converter() {
    var numero = document.getElementById("demo1").value;
    var base = document.getElementById("demo6").value;

    let decimal, octal, hexadecimal, binario;
    
    if (base === "demo2") { // decimal
        decimal = numero;
        octal = decToOctal(decimal);
        hexadecimal = decToHex(decimal);
        binario = decToBin(decimal);

    } else if (base === "demo3") { // octal
        decimal = octalParaDec(numero);
        octal = numero;
        hexadecimal = decToHex(decimal);
        binario = decToBin(decimal);

    } else if (base === "demo4") { // hexadecimal
        decimal = hexToDecimal(numero);
        octal = decToOctal(decimal);
        hexadecimal = numero;
        binario = decToBin(decimal);
        
    } else if (base === "demo5") { // binário
        decimal = binParaDec(numero);
        octal = decToOctal(decimal);
        hexadecimal = decToHex(decimal);
        binario = numero;
    }

    document.getElementById("demo1").innerHTML = ` ${numero}`;
    document.getElementById("demo2").innerHTML = ` ${decimal}`;
    document.getElementById("demo3").innerHTML = ` ${octal}`;
    document.getElementById("demo4").innerHTML = ` ${hexadecimal}`;
    document.getElementById("demo5").innerHTML = ` ${binario}`;
}

function aparecer_dec() {
    demo2.style.display = 'block';
}

function aparecer_bin() {
    demo5.style.display = 'block';
}

function aparecer_hexa() {
    demo4.style.display = 'block';
}

function aparecer_octal() {
    demo3.style.display = 'block';
}

function octalParaDec(octal) {
    var decimal = 0;
    for (var i = 0; i < octal.length; i++) {
        decimal = decimal * 8 + parseInt(octal[i]);
    }
    return decimal;
}

function hexToDecimal(hex) {
    var decimal = 0;
    var hexCaracteres = "0123456789ABCDEF";
    hex = hex.toUpperCase();
    for (var i = 0; i < hex.length; i++) {
        decimal = decimal * 16 + hexCaracteres.indexOf(hex[i]);
    }
    return decimal;
}

function binParaDec(bin) {
    var decimal = 0;
    for (var i = 0; i < bin.length; i++) {
        decimal = decimal * 2 + parseInt(bin[i]);
    }
    return decimal;
}

function decToOctal(decimal) {
    var octal = "";
    while (decimal > 0) {
        octal = (decimal % 8).toString() + octal;
        decimal = Math.floor(decimal / 8);
    }
    return octal;
}

function decToHex(decimal) {
    var hex = "";
    var hexCaracteres = "0123456789ABCDEF";
    while (decimal > 0) {
        hex = hexCaracteres[decimal % 16] + hex;
        decimal = Math.floor(decimal / 16);
    }
    return hex;
}

function decToBin(decimal) {
    var bin = "";
    while (decimal > 0) {
        bin = (decimal % 2).toString() + bin;
        decimal = Math.floor(decimal / 2);
    }
    return bin;
}