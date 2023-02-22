const age = parseInt(prompt("Buongiorno, inserire età"));
const distance = parseInt(prompt("Inserire distanza che si vuole percorrere in km"));

console.log(age,distance);

if(isNaN(age)||isNaN(distance)){
    document.getElementById("messaggio").innerHTML = "errore, inserire solo numeri interi"
} 