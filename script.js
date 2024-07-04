document.getElementById('pahala-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Hai ${nama}, teruslah berbuat baik!`;
    resultDiv.style.color = 'lightgreen';
});
