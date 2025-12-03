function hitungZakat() {
    let gaji = Number(document.getElementById("penghasilan").value);
    let pokok = Number(document.getElementById("pengeluaran").value);
    
    let bersih = gaji - pokok;
    let nisab = 7140498; // nisab per bulan (nilai pada gambar)
    
    let wajib = bersih >= nisab;
    let zakat = bersih * 0.025;
    
    let text = `
        <b>HASIL PERHITUNGAN ZAKAT</b><br><br>
        Penghasilan bulanan: Rp ${gaji.toLocaleString()}<br>
        Pengeluaran pokok: Rp ${pokok.toLocaleString()}<br>
        Penghasilan bersih: Rp ${bersih.toLocaleString()}<br><br>
        Nisab: Rp ${nisab.toLocaleString()}<br><br>
    `;
    
    if (wajib) {
        text += `<b style="color:green">✅️ Anda Wajib Zakat</b><br>
        Zakat yang harus dibayar: <b>Rp ${Math.round(zakat).toLocaleString()} per bulan</b>`;
    } else {
        text += `<b style="color:red">❌️ Anda Tidak Wajib Zakat</b>`;
    }
    
    document.getElementById("output").innerHTML = text;
}