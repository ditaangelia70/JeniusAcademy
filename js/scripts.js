// scripts.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var firstName = document.getElementById('firstName').value.trim();
    var surname = document.getElementById('surname').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var password = document.getElementById('password').value.trim();
    var confirmPassword = document.getElementById('confirmPassword').value.trim();
    
    if (firstName === '' || surname === '' || email === '' || phone === '' || password === '' || confirmPassword === '') {
        alert('Semua kolom harus diisi.');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Kata sandi dan konfirmasi kata sandi tidak cocok.');
        return;
    }
    
    if (password.length < 8) {
        alert('Kata sandi harus terdiri dari minimal 8 karakter.');
        return;
    }
    
    alert('Pendaftaran berhasil!');
    // Lanjutkan dengan proses pendaftaran, seperti mengirim data ke server
});
