// Efeito de Typewriter no título
const typed = new Typed('#typed', {
    strings: ["transforma sua empresa", "facilita sua vida", "é tudo que você precisa!"],
    typeSpeed: 40,  // Diminua a velocidade
    backSpeed: 20,
    loop: true,
    showCursor: false,  // Remove o cursor piscando, se desejar
});

// Validação do formulário
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    
    if (email.includes("@")) {
        alert("Cadastro realizado com sucesso!");
    } else {
        alert("Por favor, insira um e-mail válido.");
    }
});
