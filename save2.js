indeniza = document.querySelector(
    "#__next > div > div > div > div > div > div > div.jsx-1255997722.card.jsx-1670084299.sign-in__card > div > typebot-standard"
)

// Selecione o botão
button = indeniza.shadowRoot.querySelector(
    "div > div > div > div:nth-child(13) > div.flex.justify-end.animate-fade-in.gap-2 > div.flex.flex-col.gap-2.w-full > div > span > button"
);
if (button) {
    // Adicione um ouvinte de evento para clicar no botão
    button.addEventListener('click', function () {
        // Redirecione para o Google
        window.location.href = 'https://www.google.com';
    });
}



function rodarCodigo() {
    var indeniza = document.querySelector(
        "#__next > div > div > div > div > div > div > div.jsx-1255997722.card.jsx-1670084299.sign-in__card > div > typebot-standard"
    );

    // Selecione o botão
    var button = indeniza.shadowRoot.querySelector(
        "div > div > div > div:nth-child(13) > div.flex.justify-end.animate-fade-in.gap-2 > div.flex.flex-col.gap-2.w-full > div > span > button"
    );
    if (button) {
        // Adicione um ouvinte de evento para clicar no botão
        button.addEventListener('click', function () {
            // Redirecione para o Google
            window.location.href = 'https://www.google.com';
        });
    } else {
        // Chame novamente a função após 1 segundos
        setTimeout(rodarCodigo, 1000);
    }
}
// Inicie a execução do código pela primeira vez
rodarCodigo();