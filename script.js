// Manejo del menú desplegable (dropdown) y menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // ========== MENÚ HAMBURGUESA ==========
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // ========== DROPDOWNS ==========
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
            
            // Toggle el dropdown actual
            dropdown.classList.toggle('active');
        });
    });
    
    // ========== CERRAR MENÚ AL HACER CLICK EN LINK ==========
    const allLinks = document.querySelectorAll('.nav-links a');
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Si NO es un dropdown-toggle (es un link normal)
            if (!this.classList.contains('dropdown-toggle')) {
                // Cerrar el menú hamburguesa
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
                if (menuToggle) {
                    menuToggle.classList.remove('active');
                }
                
                // Cerrar todos los dropdowns
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
    });
    
    // ========== CERRAR AL HACER CLICK FUERA ==========
    document.addEventListener('click', function(e) {
        // Si el click NO fue dentro del nav
        if (!e.target.closest('.nav')) {
            // Cerrar menú hamburguesa
            if (navLinks) {
                navLinks.classList.remove('active');
            }
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
            
            // Cerrar dropdowns
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
    
    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Solo hacer scroll si el href no es solo "#"
            if (href && href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    
                    // Pequeño delay para que el menú se cierre primero
                    setTimeout(() => {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 100);
                }
            }
        });
    });
});