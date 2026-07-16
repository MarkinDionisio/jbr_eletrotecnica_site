document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Trigger
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Navbar animation/effect on scroll
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

    // Contact form handler (Redirect to WhatsApp)
    const contactForm = document.getElementById('form-contato');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            btn.textContent = 'Redirecionando...';
            btn.disabled = true;

            // Extract form data
            const name = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('assunto').value;
            const message = document.getElementById('mensagem').value;

            // Build the WhatsApp message
            const whatsappText = `Olá, vim pelo site da JBR Eletrotécnica!\n\n*Nome:* ${name}\n*E-mail:* ${email}\n*Assunto:* ${subject}\n*Mensagem:* ${message}`;
            const encodedText = encodeURIComponent(whatsappText);
            
            // JBR Number (DDI 55 + DDD 17 + Number)
            const whatsappNumber = "5517996584418"; 

            // Redirect to WhatsApp in a new tab
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
            window.open(whatsappUrl, '_blank');

            // Clear form after redirect
            setTimeout(() => {
                contactForm.reset();
                btn.textContent = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    // Intersection Observer for Scroll Animations (Fade Up)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // 15% of the element visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => {
        scrollObserver.observe(el);
    });

    // Toolbar/Navbar Logo Visibility Observer
    const heroLogoImg = document.querySelector('.hero-logo-img');
    const navbarLogoLink = document.querySelector('#navbar .logo-link');

    if (heroLogoImg && navbarLogoLink) {
        const logoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navbarLogoLink.classList.add('hidden-navbar-logo');
                } else {
                    navbarLogoLink.classList.remove('hidden-navbar-logo');
                }
            });
        }, {
            root: null,
            threshold: 0
        });

        logoObserver.observe(heroLogoImg);
    }

    // Automatically update the current year in the footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // ==========================================
    // Full Services Data
    // ==========================================
    const servicesData = {
        "1": {
            title: "Tratamento Termovácuo",
            text: "O tratamento por termovácuo é um processo de manutenção preditiva e corretiva essencial para purificar, regenerar e desidratar o óleo mineral isolante de transformadores de média e alta potência. Ele consiste na aplicação simultânea de calor e alto vácuo no fluído isolante. Esse método elimina impurezas críticas que reduzem a rigidez dielétrica do sistema, evitando falhas catastróficas e estendendo a vida útil do ativo elétrico."
        },
        "2": {
            title: "Comissionamento",
            text: "O comissionamento em transformadores é o conjunto de ensaios elétricos, inspeções e verificações técnicas realizadas antes da energização inicial (ou após grandes reformas) de um transformador de potência. Esse processo garante que o equipamento foi fabricado, transportado e instalado corretamente, operando de forma segura e em total conformidade com as normas técnicas."
        },
        "3": {
            title: "Secagem da parte ativa em estufa",
            text: "A secagem da parte ativa em estufa é o procedimento corretivo mais profundo e eficiente para a recuperação de transformadores de média e alta potência que sofreram contaminação severa por umidade. Diferente dos tratamentos parciais de campo, este processo exige a remoção completa do núcleo e das bobinas (parte ativa) para um ambiente fabril com temperatura e atmosfera rigorosamente controladas. O objetivo é extrair a água impregnada nas camadas mais profundas do papel isolante (celulose), onde se concentram até 99% da umidade total do equipamento."
        },
        "4": {
            title: "Substituição do Óleo Mineral",
            text: "A substituição do óleo mineral isolante em transformadores é um procedimento de manutenção corretiva vital quando o fluído atinge um estado de degradação irreversível, onde a regeneração convencional já não é viável ou financeiramente vantajosa."
        },
        "5": {
            title: "Ensaios de Rotina e de Tipo",
            text: "Para garantir a máxima confiabilidade, segurança e conformidade técnica de um transformador, ele deve ser submetido a uma bateria rigorosa de testes laboratoriais e de campo. De acordo com as normas regulamentadoras, esses ensaios são classificados em duas categorias principais: Ensaios de Rotina (aplicados a todas as unidades) e Ensaios de Tipo (aplicados para validar o projeto do equipamento)."
        },
        "6": {
            title: "Rebobinamento de Transformadores",
            text: "O rebobinamento de transformadores é o serviço de manutenção corretiva mais complexo e robusto da engenharia de alta tensão. Ele é aplicado quando o transformador sofre uma queima ou falha catastrófica interna (como um curto-circuito entre espiras ou fases), danificando irreversivelmente os condutores de cobre ou alumínio. Em vez de descartar o equipamento e comprar um novo, o rebobinamento reconstrói totalmente a parte elétrica do ativo, gerando uma economia que pode chegar a 60% em relação ao custo de um transformador novo, além de reduzir drasticamente o tempo de indisponibilidade da subestação."
        },
        "7": {
            title: "Ventilação Forçada",
            text: "Os transformadores de potência geram calor térmico significativo durante a operação devido às perdas no núcleo magnético e nos enrolamentos. Em regimes de alta carga ou em dias de temperaturas ambientes elevadas, o sistema de resfriamento natural por convecção (ONAN) pode não ser suficiente, limitando a capacidade do equipamento ou acelerando o envelhecimento do isolamento. A instalação de um sistema de ventilação forçada (ONAF) é a solução mais eficiente e de excelente custo-benefício para otimizar a dissipação térmica. Ao direcionar um fluxo contínuo de ar sobre os radiadores, é possível elevar a capacidade nominal de carga do transformador em até 15% a 33% (dependendo do projeto original), sem a necessidade de investir em um equipamento novo."
        },
        "8": {
            title: "Eliminação de Vazamentos",
            text: "O vazamento de óleo isolante é um dos problemas operacionais mais comuns e perigosos em subestações elétricas. O fluido dielétrico serve tanto para refrigerar o equipamento quanto para isolar eletricamente suas partes internas. Quando ocorre um vazamento, mesmo que pequeno, o sistema perde eficiência térmica, expõe as bobinas a riscos de curto-circuito e pode gerar graves crimes ambientais por contaminação do solo. Nossa equipe oferece um serviço especializado de diagnóstico de causa raiz, estancamento e eliminação definitiva de vazamentos, seguindo rigorosamente as normas ABNT NBR 7037 e NBR 5356-9."
        },
        "9": {
            title: "Troca de Juntas",
            text: "A troca de juntas é uma das intervenções preventivas e corretivas mais importantes para manter a estanqueidade e a confiabilidade de um transformador de potência ou distribuição. As juntas são responsáveis por selar todos os pontos de conexão do tanque, impedindo que o óleo mineral isole vaze e, principalmente, bloqueando a entrada de umidade e oxigênio do ar — os maiores inimigos do isolamento interno do equipamento. Com o tempo e os ciclos contínuos de aquecimento e resfriamento, as juntas originais sofrem degradação térmica, perdem a elasticidade e ressecam, dando origem a vazamentos crônicos. A substituição programada dessas vedações é a única forma de evitar falhas graves na subestação."
        }
    };

    // ==========================================
    // Services Modal Logic
    // ==========================================
    const serviceCards = document.querySelectorAll('.service-card[data-service]');
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalIcon = document.getElementById('modalIcon');
    const closeBtns = document.querySelectorAll('[data-close="true"]');

    if (modal && serviceCards.length > 0) {
        serviceCards.forEach(card => {
            const btn = card.querySelector('.btn-read-more');
            const iconElement = card.querySelector('.service-icon');
            const iconSvg = iconElement ? iconElement.innerHTML : '';
            const serviceId = card.getAttribute('data-service');

            const openModal = () => {
                if (servicesData[serviceId]) {
                    modalTitle.textContent = servicesData[serviceId].title;
                    modalBody.innerHTML = `<p>${servicesData[serviceId].text}</p>`;
                    modalIcon.innerHTML = iconSvg;
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Prevent body scroll
                }
            };

            card.addEventListener('click', openModal);
            if (btn) {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openModal();
                });
            }
        });

        const closeModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        };

        closeBtns.forEach(btn => {
            btn.addEventListener('click', closeModal);
        });

        // Close on ESC key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // ==========================================
    // Clientes Modal Logic
    // ==========================================
    const btnVerTodosClientes = document.getElementById('btn-ver-todos-clientes');
    const clientesModal = document.getElementById('clientesModal');
    const closeClientesBtns = document.querySelectorAll('[data-close-clientes="true"]');

    if (btnVerTodosClientes && clientesModal) {
        const openClientesModal = () => {
            clientesModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closeClientesModal = () => {
            clientesModal.classList.remove('active');
            document.body.style.overflow = '';
        };

        btnVerTodosClientes.addEventListener('click', openClientesModal);

        closeClientesBtns.forEach(btn => {
            btn.addEventListener('click', closeClientesModal);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && clientesModal.classList.contains('active')) {
                closeClientesModal();
            }
        });
    }
});
