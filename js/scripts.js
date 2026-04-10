document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile Trigger
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Fechar menu mobile ao clicar em um link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Animação/efeito na Navbar no Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            navbar.style.padding = '1rem 0';
        }
    });

    // Handler de formulário simples (apenas previne o default para fins de demonstração)
    const formContato = document.getElementById('form-contato');
    if (formContato) {
        formContato.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = formContato.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            btn.textContent = 'Enviando...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                formContato.reset();
                btn.textContent = originalText;
                btn.disabled = false;
            }, 1000);
        });
    }
});
