// script.js

// Função para criar e exibir o formulário de newsletter
function criarFormularioNewsletter() {
    // Criar elementos do formulário
    const overlay = document.createElement('div');
    const modal = document.createElement('div');
    const formulario = document.createElement('form');
    const titulo = document.createElement('h3');
    const fecharBtn = document.createElement('button');
    const grupoNome = document.createElement('div');
    const labelNome = document.createElement('label');
    const inputNome = document.createElement('input');
    const grupoEmail = document.createElement('div');
    const labelEmail = document.createElement('label');
    const inputEmail = document.createElement('input');
    const grupoPreferencias = document.createElement('div');
    const labelPreferencias = document.createElement('label');
    const selectPreferencias = document.createElement('select');
    const opcao1 = document.createElement('option');
    const opcao2 = document.createElement('option');
    const opcao3 = document.createElement('option');
    const opcao4 = document.createElement('option');
    const botaoEnviar = document.createElement('button');
    const mensagemSucesso = document.createElement('div');

    // Configurar estilos do overlay
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';

    // Configurar estilos do modal
    modal.style.backgroundColor = 'white';
    modal.style.padding = '30px';
    modal.style.borderRadius = '10px';
    modal.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    modal.style.width = '90%';
    modal.style.maxWidth = '500px';
    modal.style.position = 'relative';

    // Configurar estilos do formulário
    formulario.style.display = 'flex';
    formulario.style.flexDirection = 'column';
    formulario.style.gap = '20px';

    // Configurar título
    titulo.textContent = 'Assinar Newsletter do FC Barcelona';
    titulo.style.color = '#004D98';
    titulo.style.marginBottom = '20px';
    titulo.style.textAlign = 'center';

    // Configurar botão fechar
    fecharBtn.textContent = '×';
    fecharBtn.style.position = 'absolute';
    fecharBtn.style.top = '10px';
    fecharBtn.style.right = '15px';
    fecharBtn.style.background = 'none';
    fecharBtn.style.border = 'none';
    fecharBtn.style.fontSize = '24px';
    fecharBtn.style.cursor = 'pointer';
    fecharBtn.style.color = '#666';

    // Configurar grupo do nome
    grupoNome.style.display = 'flex';
    grupoNome.style.flexDirection = 'column';
    labelNome.textContent = 'Nome Completo:';
    labelNome.style.marginBottom = '5px';
    labelNome.style.fontWeight = 'bold';
    inputNome.type = 'text';
    inputNome.required = true;
    inputNome.style.padding = '10px';
    inputNome.style.border = '1px solid #ddd';
    inputNome.style.borderRadius = '5px';
    inputNome.placeholder = 'Digite seu nome completo';

    // Configurar grupo do email
    grupoEmail.style.display = 'flex';
    grupoEmail.style.flexDirection = 'column';
    labelEmail.textContent = 'E-mail:';
    labelEmail.style.marginBottom = '5px';
    labelEmail.style.fontWeight = 'bold';
    inputEmail.type = 'email';
    inputEmail.required = true;
    inputEmail.style.padding = '10px';
    inputEmail.style.border = '1px solid #ddd';
    inputEmail.style.borderRadius = '5px';
    inputEmail.placeholder = 'seu@email.com';

    // Configurar grupo de preferências
    grupoPreferencias.style.display = 'flex';
    grupoPreferencias.style.flexDirection = 'column';
    labelPreferencias.textContent = 'Preferências de Notícias:';
    labelPreferencias.style.marginBottom = '5px';
    labelPreferencias.style.fontWeight = 'bold';
    selectPreferencias.style.padding = '10px';
    selectPreferencias.style.border = '1px solid #ddd';
    selectPreferencias.style.borderRadius = '5px';
    selectPreferencias.style.backgroundColor = 'white';
    
    opcao1.value = 'todas';
    opcao1.textContent = 'Todas as notícias';
    opcao2.value = 'contratacoes';
    opcao2.textContent = 'Contratações';
    opcao3.value = 'jogos';
    opcao3.textContent = 'Jogos e Resultados';
    opcao4.value = 'base';
    opcao4.textContent = 'Categoria de Base';

    // Configurar botão enviar
    botaoEnviar.type = 'submit';
    botaoEnviar.textContent = 'Assinar Newsletter';
    botaoEnviar.style.padding = '12px';
    botaoEnviar.style.backgroundColor = '#004D98';
    botaoEnviar.style.color = 'white';
    botaoEnviar.style.border = 'none';
    botaoEnviar.style.borderRadius = '5px';
    botaoEnviar.style.cursor = 'pointer';
    botaoEnviar.style.fontSize = '16px';
    botaoEnviar.style.fontWeight = 'bold';

    // Configurar mensagem de sucesso
    mensagemSucesso.style.display = 'none';
    mensagemSucesso.style.padding = '15px';
    mensagemSucesso.style.backgroundColor = '#d4edda';
    mensagemSucesso.style.color = '#155724';
    mensagemSucesso.style.border = '1px solid #c3e6cb';
    mensagemSucesso.style.borderRadius = '5px';
    mensagemSucesso.style.textAlign = 'center';
    mensagemSucesso.style.marginTop = '20px';

    // Montar a estrutura do formulário
    grupoNome.appendChild(labelNome);
    grupoNome.appendChild(inputNome);

    grupoEmail.appendChild(labelEmail);
    grupoEmail.appendChild(inputEmail);

    selectPreferencias.appendChild(opcao1);
    selectPreferencias.appendChild(opcao2);
    selectPreferencias.appendChild(opcao3);
    selectPreferencias.appendChild(opcao4);
    
    grupoPreferencias.appendChild(labelPreferencias);
    grupoPreferencias.appendChild(selectPreferencias);

    formulario.appendChild(titulo);
    formulario.appendChild(grupoNome);
    formulario.appendChild(grupoEmail);
    formulario.appendChild(grupoPreferencias);
    formulario.appendChild(botaoEnviar);
    formulario.appendChild(mensagemSucesso);

    modal.appendChild(fecharBtn);
    modal.appendChild(formulario);
    overlay.appendChild(modal);

    // Adicionar o formulário ao body
    document.body.appendChild(overlay);

    // Função para fechar o formulário
    function fecharFormulario() {
        document.body.removeChild(overlay);
    }

    // Evento para fechar o formulário
    fecharBtn.addEventListener('click', fecharFormulario);
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            fecharFormulario();
        }
    });

    // Evento de submit do formulário
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar email
        const email = inputEmail.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        // Simular envio (aqui você conectaria com um backend real)
        mensagemSucesso.textContent = `Obrigado, ${inputNome.value}! Sua inscrição foi realizada com sucesso. Você receberá as novidades do FC Barcelona no email ${email}.`;
        mensagemSucesso.style.display = 'block';
        
        // Limpar formulário
        formulario.reset();
        
       
    });

    // Focar no primeiro input
    inputNome.focus();
}

// Adicionar evento de clique ao botão "Assinar Newsletter"
document.addEventListener('DOMContentLoaded', function() {
    const botaoNewsletter = document.querySelector('button');
    
    if (botaoNewsletter) {
        botaoNewsletter.addEventListener('click', criarFormularioNewsletter);
    }
});

// Efeito hover adicional para o botão
document.addEventListener('DOMContentLoaded', function() {
    const botaoNewsletter = document.querySelector('button');
    
    if (botaoNewsletter) {
        botaoNewsletter.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        botaoNewsletter.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});