// ======= Smooth Scroll saat Klik Menu =======
document.querySelectorAll('.navbar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// ======= Highlight Menu Aktif Saat Scroll =======
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    document.querySelectorAll('section').forEach(section => {
        let sectionTop = section.offsetTop - 100;
        let sectionHeight = section.clientHeight;
        let sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelector('.navbar ul li a[href="#' + sectionId + '"]').classList.add('active');
        } else {
            document.querySelector('.navbar ul li a[href="#' + sectionId + '"]').classList.remove('active');
        }
    });
});

// ======= Animasi Masuk (Fade In) Saat Scroll =======
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(el => {
        let elementTop = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); // Jalankan saat halaman pertama kali dimuat

// ======= Karakter Bergerak Mengikuti Kursor (jika ada) =======
const character = document.querySelector('.character img');

if (character) {
    document.addEventListener('mousemove', (e) => {
        let x = e.clientX / window.innerWidth * 50 - 25;
        let y = e.clientY / window.innerHeight * 50 - 25;

        character.style.transform = `translate(${x}px, ${y}px)`;
    });
}
