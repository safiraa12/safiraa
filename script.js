function formatRupiah(angka) {
    return angka.toLocaleString('id-ID');
}

function hitungDiskon() {
    let hargaAwal = parseFloat(document.getElementById("hargaAwal").value.replace(/\./g, ''));
    let persenDiskon = parseFloat(document.getElementById("persenDiskon").value);
    
    if (isNaN(hargaAwal) || isNaN(persenDiskon) || hargaAwal <= 0 || persenDiskon < 0 || persenDiskon > 100) {
        alert("Input tidak valid!");
        return;
    }
    
    let diskon = hargaAwal * (persenDiskon / 100);
    let hargaSetelahDiskon = hargaAwal - diskon;
    
    // Menampilkan harga diskon dan harga setelah diskon dengan format ribuan
    document.getElementById("hasilDiskon").innerText = "Harga Diskon: Rp " + formatRupiah(diskon);
    document.getElementById("hargaSetelahDiskon").innerText = "Harga Setelah Diskon: Rp " + formatRupiah(hargaSetelahDiskon);
}

function formatInputHarga() {
    let hargaInput = document.getElementById("hargaAwal");
    let angka = hargaInput.value.replace(/[^\d]/g, ''); // Menghapus karakter selain angka
    // Memformat angka dengan titik sebagai pemisah ribuan
    if (angka.length > 0) {
        angka = angka.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    hargaInput.value = angka;
}

// Tambahkan event listener untuk memformat input saat pengguna mengetikkan harga
document.getElementById("hargaAwal").addEventListener("input", formatInputHarga);
