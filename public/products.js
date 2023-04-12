const prodWrap = document.querySelector('.prodWrap')

//Skapar Shoppingcart, hämtar hem om det finns nåt i local storage.
const shoppingCart = []
const localCart = JSON.parse(localStorage.getItem('shoppingCart'))
localCart.forEach(item => shoppingCart.push(item))
console.log(shoppingCart)

const productsArray = []

//GET PRODUCTS

const products = async () => {
    const res = await fetch('./api/products');
    const data = await res.json()

    data.forEach(product => productsArray.push(product))

    buildProducts()
}

products();

const buildProducts = () => {
    //Tömmer hårdkodat innehåll från produkt-diven.
    // prodWrap.innerHTML = ''

    productsArray.forEach(product => {
        const prodCard = document.createElement('div')
        prodCard.id = product._id
        prodCard.className = 'prodCard'

        const a = document.createElement('a')
        a.setAttribute('href', './references.html?id=' + prodCard.id)

        const img = document.createElement('img')
        img.setAttribute('src', product.imgURL)
        img.setAttribute('alt', product.name)
        a.append(img)

        const prodBot = document.createElement('div')
        prodBot.className = 'prodBot'

        const name = document.createElement('h2')
        name.innerText = product.name

        const buy = document.createElement('div')
        buy.className = 'buy'

        const price = document.createElement('p')
        price.innerText = product.price + '€'

        const addBtn = document.createElement('button')
        addBtn.className = 'addBtn'
        //Kolla om man kan göra det här på annat sätt
        addBtn.innerHTML = 'ADD <i class="fa-solid fa-cart-shopping"></i>'
        addBtn.addEventListener('click', (e) => {
            e.preventDefault()

            shoppingCart.push(prodCard.id)
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
        })

        buy.append(price, addBtn)

        prodBot.append(name, buy)

        prodCard.append(a, prodBot)
        prodWrap.append(prodCard)




    })

}




