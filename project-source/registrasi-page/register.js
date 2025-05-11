document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!username || !email || !password || !confirmPassword) {
      alert("Semua kolom wajib diisi!");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Masukkan email yang valid!");
      return;
    }

    if (password.length < 6) {
      alert("Password minimal 6 karakter!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password tidak cocok!");
      return;
    }

    alert(`Akun untuk ${username} berhasil dibuat!`);
  });
