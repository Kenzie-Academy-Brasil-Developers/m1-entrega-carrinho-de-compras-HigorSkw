const productsCart = [
    {
        id: 1,
        name: "Arroz",
        preco: 5.40 ,
    },
    {
        id: 2,
        name: "Feijao",
        preco: 5.60 ,
    },
    {
        id: 3,
        name: "Pepsi",
        preco: 6.50 ,
        
    },
    {
        id: 4,
        name: "tomate",
        preco: 2.60 ,
    },
    {
        id: 5,
        name: "cebola",
        preco: 1.50 ,
        
    },
]

const body = document.getElementsByTagName('body')[0]

const tituloTrabalho = document.createElement('h1')

const subTitulo = document.createElement('h2')

const main = document.createElement('main')

const productList = document.createElement('ul')

main.appendChild(productList)

body.appendChild(tituloTrabalho)

body.appendChild(subTitulo)

body.appendChild(main)


tituloTrabalho.innerText = `Virtual Market`


subTitulo.innerText = "Item   Valor"


for (let i = 0; i < productsCart.length; i++){

    const ProductItem = document.createElement('li')
    const p = document.createElement('p')
    p.innerHTML = `${productsCart[i].name} - R$ ${productsCart[i].preco}`
    ProductItem.appendChild(p)
    productList.appendChild(ProductItem)
}

let valorTotal = 0

for (let i = 0; i < productsCart.length; i++){
    valorTotal += productsCart[i].preco
}

const productDetails = document.createElement('section')

productDetails.innerHTML = `Total  R$ ${valorTotal}`

main.appendChild(productDetails)

const buttonEnd = document.createElement('button')

buttonEnd.innerText = "Finalizar Compra"

productDetails.appendChild(buttonEnd)














