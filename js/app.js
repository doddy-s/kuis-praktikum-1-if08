let displayValue = '';

function addToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function addToDisplayOp(value) {
  displayValue1 = displayValue + value;
  document.getElementById('display1').value = displayValue1;
  displayValue = '';
  document.getElementById('display').value = '';
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
  displayValue1 = '';
  document.getElementById('display1').value = '';
}

function perCent() {
  const persen = displayValue/100;
  displayValue = persen;
  document.getElementById('display').value = displayValue;
}

function calculate() {
  displayValue1 += displayValue;
  const history = document.getElementById('display').value;
  document.getElementById('display1').value = displayValue1;
  displayValue = '';
  document.getElementById('display').value = '';
  try {
    const result = evaluateExpression(displayValue1);
    document.getElementById('display1').value = result;
    displayValue1 = result.toString();
  } catch (error) {
    // Tangani kesalahan jika terjadi (misalnya, ekspresi tidak valid)
    console.log('Error:', error);
  }
}

function toggleSign() {
  if (displayValue !== '') {
    const firstChar = displayValue.charAt(0);
    if (firstChar === '-') {
      displayValue = displayValue.slice(1); // Menghapus tanda negatif
    } else {
      displayValue = `-${displayValue}`; // Menambahkan tanda negatif
    }
    document.getElementById('display').value = displayValue;
  }
}

function backspace() {
  displayValue = displayValue.slice(0, -1); // Menghapus karakter terakhir
  document.getElementById('display').value = displayValue;
}

function evaluateExpression(expression) {
  // Buat regex untuk mencocokkan karakter yang tidak diinginkan
  const invalidCharsRegex = /[^-()\d/*+.]/g;

  // Cek apakah ada karakter yang tidak valid dalam ekspresi
  if (invalidCharsRegex.test(expression)) {
    throw new Error('Invalid expression');
  }

  // Evaluasi ekspresi dengan menggunakan Function constructor
  const evaluate = new Function(`return ${expression}`);

  // Panggil fungsi evaluate dan kembalikan hasilnya
  return evaluate();
}

function toggleMode() {
  var calculator = document.querySelector('.calculator');
  var display = document.getElementById('display');

  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    calculator.classList.remove('dark-mode');
    display.classList.remove('dark-mode');
  } else {
    document.body.classList.add('dark-mode');
    calculator.classList.add('dark-mode');
    display.classList.add('dark-mode');
  }
}
