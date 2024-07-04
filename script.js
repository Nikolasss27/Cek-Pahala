document.getElementById('pahala-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;

    // Generate a random nominal value for pahala
    const nominalPahala = Math.floor(Math.random() * 1000) + 1;  // Between 1 and 1000

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Hai ${nama}, Pahala Anda: ${nominalPahala}`;
    resultDiv.style.color = 'lightgreen';
});
