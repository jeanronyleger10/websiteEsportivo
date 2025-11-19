// script.js

// Função para redirecionar para páginas específicas baseado no link clicado
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona event listeners aos links dos artigos populares
    const popularArticles = document.querySelectorAll('aside ul li a');
    
    popularArticles.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link
            
            const linkText = this.textContent;
            
            switch(linkText) {
                case 'A nova filosofia do FC Barcelona':
                    redirectToMesQueUnClub();
                    break;
                case 'Análise das contratações da temporada':
                    redirectToContratacoes();
                    break;
                case 'Jogadores da base que podem brilhar':
                    redirectToJogadoresBase();
                    break;
                case 'O futuro do Camp Nou':
                    redirectToCampNou();
                    break;
                default:
                    console.log('Link não reconhecido:', linkText);
            }
        });
    });
    
    // Adiciona event listener ao botão da newsletter
    const newsletterButton = document.querySelector('button');
    if (newsletterButton) {
        newsletterButton.addEventListener('click', function() {
            alert('Obrigado por se inscrever na nossa newsletter! Em breve você receberá as novidades do FC Barcelona.');
        });
    }
});

// Função para redirecionar para a página sobre "Més que un club"
function redirectToMesQueUnClub() {
    // Criar página temporária sobre "Més que un club"
    const mesQueUnClubPage = `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Més que un club - FC Barcelona</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f0f0f0; }
                .container { max-width: 800px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                h1 { color: #a50044; text-align: center; }
                p { line-height: 1.6; text-align: justify; }
                .back-button { display: inline-block; margin-top: 20px; padding: 10px 15px; background: #a50044; color: white; text-decoration: none; border-radius: 5px; }
                .back-button:hover { background: #870039; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Més que un club - Mais que um clube</h1>
                <p>O lema "Més que un club" (Mais que um clube) representa a essência do FC Barcelona. Esta filosofia vai além do futebol, representando os valores catalães, a democracia, a liberdade e o compromisso social.</p>
                <p>Fundado em 1899, o Barça sempre foi mais que uma simples instituição esportiva. Durante o regime franquista, o clube tornou-se um símbolo de resistência catalã e de liberdade.</p>
                <p>Hoje, o FC Barcelona mantém seu compromisso com valores sociais, sua fundação beneficente e seu papel como embaixador da Catalunha no mundo.</p>
                <a href="index.html" class="back-button">Voltar ao Blog</a>
                <a href="index.html" class="back-button">Voltar ao Blog</a>
            </div>
        </body>
        </html>
    `;
    
    // Abrir nova janela com o conteúdo
    const newWindow = window.open();
    newWindow.document.write(mesQueUnClubPage);
    newWindow.document.close();
}

// Função para redirecionar para a página de contratações
function redirectToContratacoes() {
    const contratacoesPage = `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contratações da Temporada - FC Barcelona</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f0f0f0; }
                .container { max-width: 800px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                h1 { color: #a50044; text-align: center; }
                .player-list { list-style: none; padding: 0; }
                .player-list li { padding: 10px; border-bottom: 1px solid #eee; display: flex; align-items: center; }
                .player-list li:last-child { border-bottom: none; }
                .player-info { margin-left: 15px; }
                .player-name { font-weight: bold; color: #a50044; }
                .back-button { display: inline-block; margin-top: 20px; padding: 10px 15px; background: #a50044; color: white; text-decoration: none; border-radius: 5px; }
                .back-button:hover { background: #870039; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Contratações da Temporada 2024/2025</h1>
                <p>Confira os principais reforços do FC Barcelona para a atual temporada:</p>
                <ul class="player-list">
                    <li>
                        <div class="player-info">
                            <span class="player-name">Robert Lewandowski</span> - Atacante - Ex-Bayern de Munique
                        </div>
                    </li>
                    <li>
                        <div class="player-info">
                            <span class="player-name">Raphinha</span> - Ponta - Ex-Leeds United
                        </div>
                    </li>
                    <li>
                        <div class="player-info">
                            <span class="player-name">Jules Koundé</span> - Zagueiro - Ex-Sevilla
                        </div>
                    </li>
                    <li>
                        <div class="player-info">
                            <span class="player-name">Franck Kessié</span> - Meio-campista - Ex-Milan
                        </div>
                    </li>
                    <li>
                        <div class="player-info">
                            <span class="player-name">Andreas Christensen</span> - Zagueiro - Ex-Chelsea
                        </div>
                    </li>
                </ul>
                <a href="javascript:history.back()" class="back-button">Voltar ao Blog</a>
            </div>
        </body>
        </html>
    `;
    
    const newWindow = window.open();
    newWindow.document.write(contratacoesPage);
    newWindow.document.close();
}

// Função para redirecionar para a página de jogadores da base
function redirectToJogadoresBase() {
    const jogadoresBasePage = `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Jogadores da Base - FC Barcelona</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f0f0f0; }
                .container { max-width: 800px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                h1 { color: #a50044; text-align: center; }
                .player-list { list-style: none; padding: 0; }
                .player-list li { padding: 15px; border-bottom: 1px solid #eee; }
                .player-list li:last-child { border-bottom: none; }
                .player-name { font-weight: bold; color: #a50044; font-size: 1.2em; }
                .player-position { font-style: italic; color: #666; }
                .player-description { margin-top: 5px; }
                .back-button { display: inline-block; margin-top: 20px; padding: 10px 15px; background: #a50044; color: white; text-decoration: none; border-radius: 5px; }
                .back-button:hover { background: #870039; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Jogadores da Base com Maior Potencial</h1>
                <p>Conheça as promessas da La Masia que podem brilhar no time principal:</p>
                <ul class="player-list">
                    <li>
                        <div class="player-name">Lamine Yamal</div>
                        <div class="player-position">Atacante</div>
                        <div class="player-description">Considerado uma das maiores promessas do futebol mundial, já se estabeleceu no time principal com apenas 16 anos.</div>
                    </li>
                    <li>
                        <div class="player-name">Pau Cubarsí</div>
                        <div class="player-position">Zagueiro</div>
                        <div class="player-description">Zagueiro com enorme qualidade na saída de bola e grande maturidade tática para sua idade.</div>
                    </li>
                    <li>
                        <div class="player-name">Hector Fort</div>
                        <div class="player-position">Lateral-direito</div>
                        <div class="player-description">Lateral ofensivo com grande capacidade de cruzamento e participação no ataque.</div>
                    </li>
                    <li>
                        <div class="player-name">Marc Guiu</div>
                        <div class="player-position">Atacante</div>
                        <div class="player-description">Centroavante nato com faro de gol, marcou em sua estreia pelo time principal.</div>
                    </li>
                    <li>
                        <div class="player-name">Aleix Garrido</div>
                        <div class="player-position">Meio-campista</div>
                        <div class="player-description">Meia com excelente visão de jogo e qualidade no passe, lembra os grandes meio-campistas da história do Barça.</div>
                    </li>
                </ul>
                <a href="javascript:history.back()" class="back-button">Voltar ao Blog</a>
            </div>
        </body>
        </html>
    `;
    
    const newWindow = window.open();
    newWindow.document.write(jogadoresBasePage);
    newWindow.document.close();
}

// Função para redirecionar para a página do Camp Nou
function redirectToCampNou() {
    const campNouPage = `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>O Futuro do Camp Nou - FC Barcelona</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f0f0f0; }
                .container { max-width: 1000px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                h1 { color: #a50044; text-align: center; }
                .gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 15px; margin: 20px 0; }
                .gallery img { width: 100%; height: 200px; object-fit: cover; border-radius: 5px; }
                .caption { text-align: center; font-style: italic; color: #666; margin-top: 5px; }
                .back-button { display: inline-block; margin-top: 20px; padding: 10px 15px; background: #a50044; color: white; text-decoration: none; border-radius: 5px; }
                .back-button:hover { background: #870039; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>O Futuro do Camp Nou</h1>
                <p>O Estádio Camp Nou está passando por uma das maiores reformas de sua história. Confira como ficará o novo templo do Barça:</p>
                
                <div class="gallery">
                    <div>
                        <img src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Maquete do novo Camp Nou">
                        <div class="caption">Maquete do novo Camp Nou</div>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Visão interna reformada">
                        <div class="caption">Visão interna do estádio reformado</div>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Fachada moderna">
                        <div class="caption">Nova fachada moderna do estádio</div>
                    </div>
                </div>
                
                <p>As obras do Espai Barça transformarão o Camp Nou em um estádio de última geração, com capacidade para mais de 100.000 torcedores, telão gigante, cobertura retrátil e muito mais.</p>
                <p>A previsão é que as obras sejam concluídas em 2026, mantendo a essência do templo culé mas com toda a modernidade que o século XXI exige.</p>
                
                <a href="javascript:history.back()" class="back-button">Voltar ao Blog</a>
            </div>
        </body>
        </html>
    `;
    
    const newWindow = window.open();
    newWindow.document.write(campNouPage);
    newWindow.document.close();
}