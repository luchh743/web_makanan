// Menambahkan efek "sticky" pada header saat halaman di-scroll

window.addEventListener('scroll', function() {
    // Pilih elemen header
    const header = document.querySelector('header');
    
    // Tambahkan kelas 'sticky' ke header jika posisi scroll Y lebih besar dari 0
    // Hapus kelas 'sticky' jika posisi scroll Y adalah 0 (paling atas)
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Contoh interaktivitas lain:
// Menampilkan pesan saat tombol "Lihat Menu" diklik
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('click', function(event) {
    // Mencegah link berpindah halaman secara langsung
    event.preventDefault(); 
    
    // Scroll dengan mulus ke bagian menu
    document.querySelector('#menu').scrollIntoView({
        behavior: 'smooth'
    });
    
    console.log('Tombol Lihat Menu diklik! Halaman akan scroll ke menu.');
});
