
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (username === "" || password === "") {
      alert("Silakan isi semua kolom!");
    } else {
      // Simulasi login
      alert(`Selamat datang, ${username}!`);
      // Arahkan ke halaman dashboard atau lainnya jika perlu
    }
  });
  