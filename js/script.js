document.addEventListener('DOMContentLoaded', () => {
    // Efeito de rolagem para o cabeçalho (muda a cor ao rolar)
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Adiciona a classe 'scrolled' após rolar 50px
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animação de digitação (Typed.js) para o título principal
    // As strings foram ajustadas para o foco em contratação e estudo.
    const typingEffectElement = document.querySelector('.typed-text-output');
    if (typingEffectElement && typeof Typed !== 'undefined') {
        new Typed(typingEffectElement, {
            strings: [
                "ESTUDANTE DE CIÊNCIA DA COMPUTAÇÃO NA <span class='highlight'>UFOP</span>",
                "EM BUSCA DE OPORTUNIDADES EM TI",
                "FUTURO DESENVOLVEDOR DE SOFTWARE",
                "RESOLVEDOR DE PROBLEMAS CRIATIVO"
            ],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true,
            smartBackspace: true,
            showCursor: true,
            cursorChar: '|',
        });
    } else {
        console.warn("Elemento para Typed.js não encontrado ou Typed.js não carregado.");
    }


    // Efeito de "reveal" para seções ao rolar (Intersection Observer)
    const sections = document.querySelectorAll('section');
    const options = {
        root: null, // viewport
        threshold: 0.1, // Quando 10% da seção estiver visível
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // Adiciona classe para animar
                observer.unobserve(entry.target); // Para de observar após a animação
            }
        });
    }, options);

    sections.forEach(section => {
        // Ignora a primeira seção (hero-section) para não ter um "fade-in" no carregamento inicial
        if (!section.id.includes('home')) {
            section.classList.add('hidden'); // Adiciona uma classe para esconder inicialmente
        }
        observer.observe(section);
    });

    // Rolagem suave para os links do menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Ajusta o offset para o cabeçalho fixo
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerOffset = document.querySelector('.header').offsetHeight; // Altura do cabeçalho
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset - 20; // Ajuste de 20px extra para não ficar colado

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Validação básica do formulário de contato (apenas um exemplo)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Aqui você adicionaria a lógica para enviar o formulário (e.g., para um serviço de backend)
            alert('Mensagem enviada! Retornarei o contato em breve. (Funcionalidade de envio precisa ser implementada no backend)');
            contactForm.reset(); // Limpa o formulário
        });
    }

});