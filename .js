// Funções de Troca de Tela
document.getElementById('ir-cadastro').onclick = () => {
    document.getElementById('tela-login').style.display = 'none';
    document.getElementById('tela-cad').style.display = 'block';
};

document.getElementById('ir-login').onclick = () => {
    document.getElementById('tela-cad').style.display = 'none';
    document.getElementById('tela-login').style.display = 'block';
};

// FUNÇÃO DE CADASTRAR
document.getElementById('btn-salvar').onclick = () => {
    const usuarioNovo = document.getElementById('user-cad').value.trim();
    const senhaNova = document.getElementById('pass-cad').value.trim();

    if (usuarioNovo === "" || senhaNova === "") {
        alert("Ei, preencha os campos!");
        return;
    }

    localStorage.setItem(usuarioNovo, senhaNova);
    console.log("CADASTRADO:", usuarioNovo, "SENHA:", senhaNova); // Mostra no F12
    alert("Cadastrado com sucesso! Agora tente logar.");
    
    // Limpa os campos e volta pro login
    document.getElementById('user-cad').value = "";
    document.getElementById('pass-cad').value = "";
    document.getElementById('ir-login').click();
};

// FUNÇÃO DE LOGAR
document.getElementById('btn-entrar').onclick = () => {
    const usuarioLogin = document.getElementById('user-login').value.trim();
    const senhaLogin = document.getElementById('pass-login').value.trim();

    const senhaQueEstavaSalva = localStorage.getItem(usuarioLogin);

    console.log("TENTANDO LOGAR COM:", usuarioLogin);
    console.log("SENHA DIGITADA:", senhaLogin);
    console.log("SENHA QUE ACHEI NO SISTEMA:", senhaQueEstavaSalva);

    if (senhaQueEstavaSalva !== null && senhaQueEstavaSalva === senhaLogin) {
        document.getElementById('tela-login').style.display = 'none';
        document.getElementById('tela-sucesso').style.display = 'block';
        document.getElementById('boas-vindas').innerText = "Olá, " + usuarioLogin;
    } else {
        alert("Usuário não existe ou a senha está errada!");
    }
};