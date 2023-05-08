let displayValue = '';

function addToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = evaluateExpression(displayValue);
    document.getElementById('display').value = result;
    displayValue = result.toString();
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
