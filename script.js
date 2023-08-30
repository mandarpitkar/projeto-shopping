let catalogo = [{
    id: 1,
    nome: 'Kurta',
    marca: 'ReiIndi',
    preco: 700,
    nomeArquivoImagem: 'produto-1.jpg'
 },
 {
    id: 2,
    marca: 'ReiIndi',
    nome: 'Kurta',
    preco: 670,
    nomeArquivoImagem: 'produto-2.jpg'
 },
 {
    id: 3,
    marca:'ReiIndi',
    nome: 'Kurta',
    preco: 750,
    nomeArquivoImagem: 'produto-3.jpg'
 },
 {
    id: 4,
    marca:'ReiIndi',
    nome :'Saree',
    preco :700,
    nomeArquivoImagem: 'produto-4.jpg'
},
 {
    id: 5,
    marca :'ReiIndi',
    nome :'Saree',
    preco :800,
    nomeArquivoImagem: 'produto-5.jpg'
 },
    {
    id: 6,
    marca :'ReiIndi',
    nome :'Saree',
    preco :900,
    nomeArquivoImagem: 'produto-6.jpg'
    },
];

for (let produtoCatalogo of catalogo) {
let cartaoProduto =  `<div>
<img src="./imagens/${produtoCatalogo.nomeArquivoImagem}" style="height: 300px;">
<p class='marca'>${produtoCatalogo.marca}</p>
<p class='nome'>${produtoCatalogo.nome}</p>
<p class='preco'>R$ ${produtoCatalogo.preco}</p>
<button>Adicionar</button>
</div>`;

document.getElementById('container-produto').innerHTML += cartaoProduto
}





