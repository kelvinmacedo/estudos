const itens = [
    {    
        id:2,
        nome:"controle Xbox One",
        img:'../../midias/e_commecer/controle-xbox-one-preto.jpeg',
        quantidade:1
    },
    {
        id:4,
        nome:"Xbox 1ª Geração",
        img:'../../midias/e_commecer/xbox-classico-1-geracao.jpeg',
        quantidade:1
    },
    {    
        id:3,
        nome:"controle Xbox one S",
        img:'../../midias/e_commecer/controle-xbox-one-preto.jpeg',
        quantidade:5
    },
    {
        id:8,
        nome:"Xbox 1ª Geração full edição",
        img:'../../midias/e_commecer/xbox-classico-1-geracao.jpeg',
        quantidade:1
    },
]

renderizarProdutos = () => {
    let conteinerProdutos = document.getElementById('produtos');
    
    itens.map((item)=>{
        let itemProduto = document.createElement('div');
        itemProduto.classList.add('item-produto-class');
        itemProduto.innerHTML += `
            <img src=${item.img} alt="${item.nome} Image" class="product-image" style="width: 200px; heigth: 200px; padding: 3px;">
            <h2 class="product-name">${item.nome}</h2>
            <span class="product-quantity">Quantidade: ${item.quantidade}</span>
        `;

        conteinerProdutos.appendChild(itemProduto);

    });
}

renderizarProdutos();
