// Manejo del menú desplegable (dropdown)
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    const nav = document.getElementById('mainNav');
    
    // ---------- DROPDOWNS ----------
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Cerrar otros dropdowns
            dropdowns.forEach(other => {
                if (other !== dropdown) {
                    other.classList.remove('active');
                }
            });
            
            // Toggle actual
            dropdown.classList.toggle('active');
        });
    });
    
    // Cerrar dropdown al hacer click fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
    
    // Cerrar dropdown al tocar sublink
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function() {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        });
    });
    
    // ---------- CERRAR MENÚ MÓVIL SOLO EN LINKS REALES ----------
    const navLinks = document.querySelectorAll(
        '.nav-links a:not(.dropdown-toggle)'
    );

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
            }
        });
    });
    
    // ---------- SMOOTH SCROLL ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ---------- BOTÓN MENÚ ----------
function toggleMobileMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('active');
}
