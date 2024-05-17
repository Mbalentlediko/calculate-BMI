let calculateBMI = document.querySelector('[calculate]');
calculateBMI.addEventListener('click', (event) => {
    event.preventDefault()
    let weight = document.querySelector('#weight').value
    let height = +document.querySelector('#height').value
    let BMI = weight / ((height / 100) ** 2)
    let Status;
    if (BMI <= 18.4) {
        Status = 'Underweight'
    } else if (BMI >= 18.5) {
        Status = 'Normal'
    } else if (BMI >= 25) {
        Status = 'overweight'
    } else
        Status = 'Obese'

    let BMICalculation = `Your BMI is ${BMI.toFixed(2)} and your status is ${Status}`;
    document.querySelector('[BMIstatus]').value = BMICalculation;
})