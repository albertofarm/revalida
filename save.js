indeniza = document.querySelector(
    "#__next > div > div > div > div > div > div > div.jsx-1255997722.card.jsx-1670084299.sign-in__card > div > typebot-standard"
)

// Selecione o botão
button = indeniza.shadowRoot.querySelector(
    "div > div > div > div:nth-child(13) > div.flex.justify-end.animate-fade-in.gap-2 > div.flex.flex-col.gap-2.w-full > div > span > button"
);

// Adicione um ouvinte de evento para clicar no botão
button.addEventListener('click', function () {
    // Redirecione para o Google
    window.location.href = 'https://www.google.com';
});




// Selecionar o elemento pai onde a ShadowRoot será adicionada
parentElement = document.querySelector("#__next > div > div > div > div > div > div > div.jsx-1255997722.card.jsx-1670084299.sign-in__card > div > typebot-standard").shadowRoot;

// Definir um MutationObserver para observar as mutações no elemento pai
observer = new MutationObserver(mutations => {
    const button = parentElement.querySelector("div > div > div > div:nth-child(13) > div.flex.justify-end.animate-fade-in.gap-2 > div.flex.flex-col.gap-2.w-full > div > span > button");
    if (button) {
        button.addEventListener('click', function () {
            // Redirecionar para o Google
            window.location.href = 'https://www.google.com';
        });
    }

});

// Configurar as opções do MutationObserver
config = {
    childList: true,
    subtree: true
};

// Iniciar a observação no elemento pai
observer.observe(parentElement, config);