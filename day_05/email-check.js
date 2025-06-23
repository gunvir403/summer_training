document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('email').value;
    const resultDiv = document.getElementById('result');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(emailInput)) {
        resultDiv.textContent = 'Valid email address!';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = 'Invalid email address. Please try again.';
        resultDiv.style.color = 'red';
    }
});
