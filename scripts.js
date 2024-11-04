document.addEventListener("DOMContentLoaded", function () {
    // Adiciona transições suaves ao navegar entre as páginas
    document.querySelectorAll('nav ul li a').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetPage = this.getAttribute('href');
            pageTransition(targetPage);
        });
    });

    // Função para a transição suave de páginas
    function pageTransition(targetPage) {
        document.body.classList.add('fade-out');
        setTimeout(function () {
            window.location.href = targetPage;
        }, 500); // Tempo da animação de saída
    }

    // Quando a página carrega, aplicar efeito de fade-in
    document.body.classList.add('fade-in');

    // Configurações de rolagem suave para âncoras internas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Troca de temas entre claro e escuro
    const themeToggle = document.getElementById('themeToggle');
    const userTheme = localStorage.getItem('theme') || 'light';

    // Função para alternar temas
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.textContent = '🌞 Modo Claro';
        } else {
            document.body.classList.remove('dark-theme');
            themeToggle.textContent = '🌜 Modo Escuro';
        }
        localStorage.setItem('theme', theme);
    }

    themeToggle.addEventListener('click', function () {
        const currentTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
        applyTheme(currentTheme);
    });

    applyTheme(userTheme); // Aplica o tema salvo

    // Animações de scroll
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.3
    };

    // Função para animar a entrada de uma seção
    const sectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Botão de contato via WhatsApp
    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function () {
            window.location.href = 'https://wa.me/41984556982'; // Substituir com número correto
        });
    }
});
// Exemplo de armazenamento de dados no localStorage
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    // Adiciona um ouvinte de evento para o envio do formulário
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        const nome = document.getElementById('nome').value;
        const mensagem = document.getElementById('mensagem').value;

        // Armazena os dados no localStorage
        localStorage.setItem('nome', nome);
        localStorage.setItem('mensagem', mensagem);

        alert('Mensagem enviada com sucesso!'); // Notifica o usuário
        form.reset(); // Limpa o formulário
    });

    // Carrega dados do localStorage ao abrir a página
    const nome = localStorage.getItem('nome');
    const mensagem = localStorage.getItem('mensagem');

    if (nome && mensagem) {
        console.log('Nome:', nome);
        console.log('Mensagem:', mensagem);
    }
});

// Função para limpar os dados do localStorage
function limparDados() {
    localStorage.removeItem('nome');
    localStorage.removeItem('mensagem');
    alert('Dados limpos!');
}

const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Função para carregar o modo salvo
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleButton.textContent = 'Ativar Modo Claro';
    } else {
        body.classList.remove('dark-mode');
        themeToggleButton.textContent = 'Ativar Modo Escuro';
    }
}

// Função para alternar o modo e salvar no localStorage
function toggleTheme() {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    themeToggleButton.textContent = isDarkMode ? 'Ativar Modo Claro' : 'Ativar Modo Escuro';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Evento de clique para alternar o modo
themeToggleButton.addEventListener('click', toggleTheme);

// Carrega o modo salvo ao abrir a página
loadTheme();

