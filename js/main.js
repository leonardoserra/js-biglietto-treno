const age = parseInt(prompt("Buongiorno, inserire età"));
const distance = parseInt(prompt("Inserire distanza che si vuole percorrere in km"));
const pricePerKm = 0.21;
let price = distance * pricePerKm;

console.log(age, distance, pricePerKm, price);


if(isNaN(age)||isNaN(distance)){

    document.getElementById("messaggio").innerHTML = "errore, inserire solo numeri interi"

} else{ 

    if(age < 18){
        price = price - ((price*20)/100);
        document.getElementById("costo").innerHTML = `Buongiorno, il biglietto costa ${price}€ perchè sei under18 e hai uno sconto del 20%. Buon Viaggio!`

    }else if (age >= 65){
        price = price - ((price*40)/100);
        document.getElementById("costo").innerHTML = `Buongiorno, il biglietto costa ${price}€ perchè sei over65 e hai uno sconto del 40%. Buon Viaggio!`
    } else{
        document.getElementById("costo").innerHTML = `Buongiorno, il biglietto costa ${price}€. Buon Viaggio!`
    }
    
}




