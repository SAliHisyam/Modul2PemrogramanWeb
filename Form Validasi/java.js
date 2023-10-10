function validateForm() {
  // Ambil nilai dari inputan
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var alamat = document.getElementById("alamat").value;

  // Validasi
  if (nama === "" || email === "" || alamat === "") {
    alert("Anda harus mengisi data dengan lengkap !");
    return false;
  }
}
