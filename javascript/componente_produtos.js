
const itens = [
    {    
        id:2,
        nome:"controle Xbox One",
        img:'../image/controle-xbox-one-preto.jpeg',
        quantidade:1
    },
    {
        id:21,
        nome:"gameBoy Advance",
        img:'../image/game-boy-advance-03.jpg',
        quantidade:1
    },
    {
        id:4,
        nome:"Xbox 1ª Geração",
        img:'../image/xbox-classico-1-geracao.jpeg',
        quantidade:1
    }
]

renderizarProdutos = () => {
    let conteinerProdutos = document.getElementById('produtos');
    itens.map((item)=>{
        let itemProduto = document.createElement('div');
        itemProduto.innerHTML += `
            <img src=${item.img} alt="${item.nome} Image" class="product-image" style="width: 200px; heigth: 200px; padding: 3px;">
            <h2 class="product-name">${item.nome}</h2>
            <span class="product-quantity">Quantidade: ${item.quantidade}</span>
        `;

        conteinerProdutos.appendChild(itemProduto);

    });
}

renderizarProdutos();
