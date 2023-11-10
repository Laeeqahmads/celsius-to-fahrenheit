function doSum(event) {

    event.preventDefault();
    let firstNumber = document.querySelector("#firstNum").value;


    let result = Number(firstNumber) * 9 /5 +32;

    let message = `${firstNumber} celcius is equal to ${result} fahrenheit`

    document.querySelector("#resultWindow").innerHTML = message

}