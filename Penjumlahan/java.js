function jumlahkan() {
  // Ambil nilai dari inputan
  var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
  var bilangan2 = parseFloat(document.getElementById("bilangan2").value);

  // Lakukan operasi penjumlahan
  var hasil = bilangan1 + bilangan2;

  // Tampilkan hasilnya
  alert("Hasil Penjumlahan: " + hasil);
}

function ulang() {
  document.getElementById("bilangan1").value = "";
  document.getElementById("bilangan2").value = "";
}
