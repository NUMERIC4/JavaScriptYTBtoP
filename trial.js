function customRoundOne(number) {
    if (number%1.0 > 0.8) {
        return Math.ceil(number);
    } else {
        return Math.floor(number);
    }
  }


function customRoundTwo(number) {
if (number%1.0 >= 0.2) {
    return Math.ceil(number);
} else {
    return Math.floor(number);
}
}

function fahrenheittoCelcius(number){
    number = number-32;
    number = number*5/9;
    return number
}

function celciustoFahrenheit(number){
    number = number*9/5;
    number = number+32;
    return number
}
