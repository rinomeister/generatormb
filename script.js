document.getElementById("generateButton").addEventListener("click", function() {
    generateMB();
});

function getRandomDigit() {
    return Math.floor(Math.random() * 9);
}

function generateMB() {
    let MB = "";
    let sum = 0;
    for (i = 0; i < 7; i++) {
        let j = 8 - i;
        let digit = getRandomDigit();
        MB += digit;
        sum += digit * j;
    }
    let OST = sum % 11;
    let RAZ = 11 - OST;
    if (OST == 0)
        MB = "greška";
    else if (OST == 1)
        MB += 0;
    else
        MB += RAZ;
    document.getElementById("outputBox").innerText = MB;
    document.getElementById("outputBox").style.display = "block";
}
