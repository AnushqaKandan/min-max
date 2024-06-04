function calculate() {
    const numberInputs = document.querySelectorAll('.num');
    const numbers = Array.from(numberInputs).map(input => parseFloat(input.value));
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    
     document.getElementById('min-of').innerText = min;
     document.getElementById('max-of').innerText = max;
 }
    
   
