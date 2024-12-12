// Referências aos botões
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');

// Adiciona um evento ao botão "Não" para que ele "fuja" do mouse
btnNo.addEventListener('mouseover', () => {
    const container = document.querySelector('.buttons');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const randomX = Math.random() * (containerWidth - btnNo.offsetWidth);
    const randomY = Math.random() * (containerHeight - btnNo.offsetHeight);

    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
});

btnYes.addEventListener('click', () => {
    const imgElement = document.createElement('img');  // Cria um elemento de imagem
    imgElement.src = 'https://raw.githubusercontent.com/dev-brunoliveira/ConfraNano/refs/heads/main/8f630429dbc438d28d91ce4f585ae512.gif';  // Substitua 'URL_DA_IMAGEM' pelo link da sua imagem
    document.body.appendChild(imgElement);  // Adiciona a imagem ao corpo da página
});