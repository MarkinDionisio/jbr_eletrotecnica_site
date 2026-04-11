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

    // Handler do formulário de contato (Redirecionamento para WhatsApp)
    const formContato = document.getElementById('form-contato');
    if (formContato) {
        formContato.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = formContato.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            btn.textContent = 'Redirecionando...';
            btn.disabled = true;

            // Extrair os dados do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const assunto = document.getElementById('assunto').value;
            const mensagem = document.getElementById('mensagem').value;

            // Montar a mensagem para o WhatsApp
            const textoWhatsApp = `Olá, vim pelo site da JBR Eletrotécnica!\n\n*Nome:* ${nome}\n*E-mail:* ${email}\n*Assunto:* ${assunto}\n*Mensagem:* ${mensagem}`;
            const textoCodificado = encodeURIComponent(textoWhatsApp);
            
            // Número da JBR (DDI 55 + DDD 17 + Número)
            const numeroWhatsApp = "5517996584418"; 

            // Redirecionar para o WhatsApp na nova guia
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;
            window.open(urlWhatsApp, '_blank');

            // Limpar formulário após o redirecionamento
            setTimeout(() => {
                formContato.reset();
                btn.textContent = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    // Intersection Observer para Animações de Scroll (Fade Up)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // 15% do elemento visível
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Anima apenas 1 vez
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => {
        scrollObserver.observe(el);
    });
});
