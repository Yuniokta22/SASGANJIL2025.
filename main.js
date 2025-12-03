function hitung() {
  // menampung nilai harga
  let harga = Number(document.getElementById("harga").value)
  
  // menampung nilai jumlah
  let jumlah = Number(document.getElementById("jumlah").value)
  
  // menambahkan nilai diskon
  let diskon = Number(document.getElementById("diskon").value)
  
  // langkag 1: hitung subtotal
  let subtotal = harga * jumlah
  
  // langkah 2: menghitung diskon
  let potongan = subtotal * (diskon/100)
  
  // langkah 3: menghitung biaya layanan
  let layanan = subtotal * (2/100)
  
  // langkah 4: menghitung biaya Ongkir
  let ongkir = 10000
  
  // langkah 5: menghitung biaya aplikasi
  let aplikasi = 1000
  
  
  // langkah 4: hitung total
  let total = subtotal - potongan + layanan + ongkir + aplikasi
  
  // langkah 5: menampilkan hasil
  document.getElementById("hasil").innerHTML = `
 Subtotal: Rp ${subtotal} <br>
 Diskon (${diskon}%):  -Rp ${potongan} <br>
 Biaya Layanan:  +Rp ${layanan} <br>
 Biaya Ongkir:  +Rp ${10000} <br>
 Biaya Aplikasi:  +Rp ${1000} <br>
 Total bayar:  Rp ${total} <br>
  `
}