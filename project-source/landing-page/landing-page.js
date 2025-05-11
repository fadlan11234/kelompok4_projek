// Fungsi untuk toggle visibility deskripsi kopi
function toggleDescription(coffeeType) {
    const description = document.getElementById(coffeeType);
    
    // Toggle antara menampilkan dan menyembunyikan
    if (description.style.display === "block") {
      description.style.display = "none";
    } else {
      description.style.display = "block";
    }
  }
  