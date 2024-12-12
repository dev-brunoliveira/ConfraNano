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

// Adiciona um evento ao botão "Sim" para exibir uma mensagem
btnYes.addEventListener('click', () => {
    alert('Ótimo! Te esperamos lá!');
});
