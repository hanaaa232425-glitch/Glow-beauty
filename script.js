// Mengambil elemen HTML
const layanan = document.getElementById("layananSelect");
const totalHarga = document.getElementById("totalHarga");
const form = document.getElementById("bookingForm");
const hasil = document.getElementById("hasil");
const themeButton = document.getElementById("themeButton");

// Format Rupiah
function formatRupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
}

// Mengubah total harga saat layanan dipilih
layanan.addEventListener("change", function () {
    const harga = Number(layanan.value);

    if (harga) {
        totalHarga.textContent = formatRupiah(harga);
    } else {
        totalHarga.textContent = "Rp0";
    }
});

// Submit booking
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const telepon = document.getElementById("telepon").value;
    const tanggal = document.getElementById("tanggal").value;
    const pilihan = layanan.options[layanan.selectedIndex].text;

    if (
        nama === "" ||
        telepon === "" ||
        tanggal === "" ||
        layanan.value === ""
    ) {
        hasil.textContent = "Silakan lengkapi semua data terlebih dahulu.";
        hasil.style.color = "red";
        return;
    }

    hasil.innerHTML = `
        Booking berhasil! 💄<br>
        Nama: ${nama}<br>
        Layanan: ${pilihan}<br>
        Tanggal: ${tanggal}
    `;

    hasil.style.color = "green";

    form.reset();
    totalHarga.textContent = "Rp0";
});

// Dark mode
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }
});

