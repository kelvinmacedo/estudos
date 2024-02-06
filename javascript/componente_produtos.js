
const itens = [
    {    
        id:2,
        nome:"controle",
        img:1234,
        quantidade:1
    },
    {
        id:21,
        nome:"gameBoy",
        img:456,
        quantidade:1
    },
    {
        id:4,
        nome:"pião",
        img:321,
        quantidade:1
    }
]

renderizarProdutos = () => {
    var conteinerProdutos = document.getElementById('produtos');
    itens.map((item)=>{
        console.log(item.nome);
    });
}

renderizarProdutos();
