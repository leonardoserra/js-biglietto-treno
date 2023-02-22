const age = parseInt(prompt("Buongiorno, inserire età"));
const distance = parseInt(prompt("Inserire distanza che si vuole percorrere in km"));
const pricePerKm = 0.21;
let price = distance * pricePerKm;

console.log(age, distance, pricePerKm, price);


if(isNaN(age)||isNaN(distance)){

    document.getElementById("messaggio").innerHTML = "errore, inserire solo numeri interi";

} else{ 

    if(age < 18){

        price = price - ((price*20)/100);
        document.getElementById("messaggio").innerHTML = `Buongiorno, sei under18 perció hai uno sconto del 20%:`;
        document.getElementById("costo").innerHTML = `il biglietto costa ${price.toFixed(2)}€. Buon Viaggio!`;

    }else if (age >= 65){

        price = price - ((price*40)/100);
        document.getElementById("messaggio").innerHTML = `Buongiorno, lei ha diritto allo sconto over65 del 40%:`;
        document.getElementById("costo").innerHTML = `il biglietto costa ${price.toFixed(2)}€. Buon Viaggio!`;
    
    } else{

        document.getElementById("messaggio").innerHTML = `Buongiorno, il prezzo del biglietto è il seguente:`;
        document.getElementById("costo").innerHTML = `${price.toFixed(2)}€. Buon Viaggio!`;

    }
    
}




