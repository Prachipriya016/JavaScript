const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let bmiRange = '';

    if (bmi < 18.5) {
      bmiRange = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiRange = 'Normal Weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiRange = 'Overweight';
    } else {
      bmiRange = 'Obese';
    }

    // Display the result with the BMI range
    results.innerHTML = `Your BMI is <span>${bmi}</span>, which falls into the "${bmiRange}" range.`;
  }
});
