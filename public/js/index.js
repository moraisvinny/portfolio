$('#piccoli').click(function() {
     $('.modal-title').text('PICCOLI VESTITI');
     const textoPiccoli = `Site de uma pequena confecção para roupinhas de bebês.
     Foi construído com Bootstrap 4, Angular 4 e Google Firebase.
     Exibe produtos dinamicamente na página principal.
     Possui área administrativa protegida com Login, onde é possível criar novos produtos, editar e/ou publicar os já existentes.`
     $('#paragrafo-modal').text(textoPiccoli);
     $('#imagem-modal').attr('src', 'images/piccoli.jpg');
     $('#botao-modal').attr('href', 'https://piccolivestiti.com.br');
 });

 
$('#controle').click(function() {
    $('.modal-title').text('CONTROLE DOS PAIS');
    const textoControle = `Aplicativo Android que permite aos pais controlarem a quais aplicativos seus filhos terão acesso em seus tablets e celulares.
    Funciona substituindo a tela incial padrão do dispositivo e exibindo somente os apps liberados previamente através de senha.
    Possui sistema de recuperação de senha com envio de email em caso de esquecimento.
    Atualmente disponível na Google Play Store.
    `
    $('#paragrafo-modal').text(textoControle);
    $('#imagem-modal').attr('src', 'images/controle.jpg');
    $('#botao-modal').attr('href', 'https://play.google.com/store/apps/details?id=com.moraisvinny.controledospais');
});

$('#github').click(function() {
    $('.modal-title').text('GITHUB');
    const textoGit = `Visite meu perfil no GitHub e veja meus outros projetos e implementações.`
    $('#paragrafo-modal').text(textoGit);
    $('#imagem-modal').attr('src', 'images/github.jpg');
    $('#botao-modal').attr('href', 'https://github.com/moraisvinny');
});
