const productsCart = [
    {
        id: 1,
        name: "Abacaxi",
        price: 2.99
    },
    {
        id: 2,
        name: "Abacate",
        price: 2.49
    },
    {
        id: 3,
        name: "Alface",
        price: 0.99
    },
    {
        id: 4,
        name: "Batata",
        price: 1.49
    },
    {
        id: 5,
        name: "Morango",
        price: 4.99
    },
    {
        id: 6,
        name: "Uva",
        price: 7.99
    }
]

let body = document.body;

let main = document.createElement('main');
main.classList.add('container');
body.appendChild(main);

let titleCarrinho = document.createElement('h2');
main.appendChild(titleCarrinho);
titleCarrinho.innerHTML = 'Virtual Market';

let cabecalhoCarrinho = document.createElement('p');
cabecalhoCarrinho.classList.add('cabecalhoCarrinho');
main.appendChild(cabecalhoCarrinho);

let products = document.createElement('ul');
products.classList.add('lista-produtos');
main.appendChild(products);

let sectionSomaProdutos = document.createElement('section');
sectionSomaProdutos.classList.add('section-soma-produtos');
main.appendChild(sectionSomaProdutos);


let cabecalhoItem = document.createElement('span');
cabecalhoCarrinho.appendChild(cabecalhoItem);
cabecalhoItem.innerHTML = 'Item'

let cabecalhoValor = document.createElement('span');
cabecalhoCarrinho.appendChild(cabecalhoValor);
cabecalhoValor.innerHTML = 'Valor'

let somaPrice = 0;
for (let i = 0; i < productsCart.length; i++) {
    let productItem = document.createElement('li')
    productItem.classList.add('item-lista-produtos')
    let productName = document.createElement('span')
    productItem.appendChild(productName)
    let productPrice = document.createElement('span')
    productItem.appendChild(productPrice)
    productName.innerHTML = `${productsCart[i].name}`
    productPrice.innerHTML = `R$${productsCart[i].price}`
    products.appendChild(productItem)
    somaPrice += productsCart[i].price
}


let somaValores = document.createElement('section');
somaValores.classList.add('section-soma-valores');
let legendaSomaValores = document.createElement('span');
somaValores.appendChild(legendaSomaValores);
legendaSomaValores.innerHTML = 'Total';
let valorTotal = document.createElement('span');
somaValores.appendChild(valorTotal)
valorTotal.innerHTML = `R$${somaPrice}`
sectionSomaProdutos.appendChild(somaValores);


let buttonFinalizarCompra = document.createElement('button');
buttonFinalizarCompra.classList.add('button-compra');
buttonFinalizarCompra.innerText = 'Finalizar compra';
sectionSomaProdutos.appendChild(buttonFinalizarCompra);