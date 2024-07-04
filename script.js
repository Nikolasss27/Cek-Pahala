document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const amalBaik = parseInt(document.getElementById('amal-baik').value);
    const amalBuruk = parseInt(document.getElementById('amal-buruk').value);
    const totalPahala = amalBaik - amalBuruk;

    const resultDiv = document.getElementById('result');
    if (totalPahala > 0) {
        resultDiv.textContent = `Pahala Anda: ${totalPahala}`;
        resultDiv.style.color = 'lightgreen';
    } else {
        resultDiv.textContent = 'Silakan tingkatkan amal baik Anda!';
        resultDiv.style.color = 'red';
    }
});
