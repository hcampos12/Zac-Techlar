// Script para funcionalidades interativas do site ZAC TechLar

document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Alternar ícone do menu (hambúrguer/fechar)
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Animação do avatar Tec
    const avatarEyes = document.querySelectorAll('.avatar-eyes');
    const avatarSmile = document.querySelectorAll('.avatar-smile');
    
    // Função para piscar os olhos do avatar ocasionalmente
    function blinkEyes() {
        avatarEyes.forEach(eyes => {
            eyes.style.height = '1px';
            setTimeout(() => {
                eyes.style.height = '20px';
            }, 200);
        });
        
        // Agendar próximo piscar (entre 3 e 8 segundos)
        const nextBlink = Math.random() * 5000 + 3000;
        setTimeout(blinkEyes, nextBlink);
    }
    
    // Iniciar animação de piscar
    setTimeout(blinkEyes, 3000);
    
    // Efeito de hover nos cards de benefícios
    const benefitCards = document.querySelectorAll('.benefit-card');
    
    benefitCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.benefit-icon');
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.benefit-icon');
            icon.style.transform = 'scale(1) rotate(0)';
        });
    });
    
    // Formulário de newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                // Simulação de envio (em produção, seria uma chamada AJAX para API)
                this.innerHTML = '<p class="success-message">Obrigado por se cadastrar! Em breve você receberá nossas novidades.</p>';
            }
        });
    }
    
    // Animação de entrada dos elementos ao scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.benefit-card, .category-card, .section-title, .hero-content, .meet-tec-content, .meet-tec-image');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Adicionar classes CSS para animação
    const style = document.createElement('style');
    style.innerHTML = `
        .benefit-card, .category-card, .section-title, .hero-content, .meet-tec-content, .meet-tec-image {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .benefit-icon {
            transition: transform 0.3s ease;
        }
        
        nav.active {
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: white;
            padding: 20px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        
        nav.active ul {
            flex-direction: column;
        }
        
        nav.active ul li {
            margin: 10px 0;
        }
        
        .success-message {
            color: white;
            background-color: rgba(54, 213, 118, 0.8);
            padding: 15px;
            border-radius: 50px;
            animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Executar animação ao carregar a página e ao scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executar uma vez ao carregar
    
    // Simular interação do avatar Tec
    const tecAvatar = document.querySelector('.avatar-placeholder');
    const tecButtons = document.querySelectorAll('.btn-primary');
    
    tecButtons.forEach(button => {
        if (button.textContent.includes('Tec')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Animar o avatar
                const smile = document.querySelector('.avatar-smile');
                smile.style.borderBottomWidth = '8px';
                smile.style.width = '70%';
                
                // Mostrar mensagem de chat
                const chatBubble = document.createElement('div');
                chatBubble.className = 'chat-bubble';
                chatBubble.innerHTML = 'Olá! Eu sou o Tec, seu assistente de casa inteligente. Como posso ajudar?';
                
                // Estilizar bolha de chat
                chatBubble.style.position = 'absolute';
                chatBubble.style.backgroundColor = 'white';
                chatBubble.style.padding = '15px';
                chatBubble.style.borderRadius = '20px';
                chatBubble.style.maxWidth = '250px';
                chatBubble.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                chatBubble.style.animation = 'fadeIn 0.5s ease';
                chatBubble.style.zIndex = '100';
                
                // Posicionar a bolha
                if (tecAvatar) {
                    tecAvatar.style.position = 'relative';
                    tecAvatar.appendChild(chatBubble);
                    
                    // Remover após alguns segundos
                    setTimeout(() => {
                        chatBubble.style.animation = 'fadeOut 0.5s ease';
                        setTimeout(() => {
                            chatBubble.remove();
                            smile.style.borderBottomWidth = '5px';
                            smile.style.width = '60%';
                        }, 500);
                    }, 5000);
                }
            });
        }
    });
    
    // Adicionar animação de fadeOut
    const fadeOutStyle = document.createElement('style');
    fadeOutStyle.innerHTML = `
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(fadeOutStyle);
});
