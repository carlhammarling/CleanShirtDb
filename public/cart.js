const cartList = document.querySelector('#cartList')


//Gets data from localStorage
const localStorageData = localStorage.getItem('shoppingCart')
//Turns it into a JS-array
const shoppingCart = JSON.parse(localStorageData)


let cartArray = []

//GET PRODUCTS
const products = async (id) => {
    const res = await fetch('./api/products/' + id);
    const data = await res.json()

    cartArray.push(data)
}

//Väntar på att alla promises ska bli klara
const fillCart = () => {
    const promises = shoppingCart.map((product) => products(product.id));
    return Promise.all(promises);
  };


const listProducts = () => {
    fillCart()
    .then(() => {
        console.log(cartArray)
        //HÄR BYGGER VI CONTENT
      cartArray.forEach(data => {
        const cartItem = document.createElement('div')
        cartItem.className = 'cartItem'

        const img = document.createElement('img')
        img.setAttribute('src', data.imgURL)
        img.setAttribute('alt', data.name)

        //RIGHT SIDE
        const itemRight = document.createElement('div')
        itemRight.className = 'itemRight'

        const name = document.createElement('h3')
        name.innerText = data.name

        const description = document.createElement('p')
        description.innerText = 'T-SHIRT - ' + data.description

        const price = document.createElement('p')
        price.innerText = 'Price: ' + data.price + '€'

        const size = document.createElement('p')
        size.innerText = 'Size: '

        const qty = document.createElement('p')
        qty.innerText = 'Quantity: '

        const trash = document.createElement('i')
        trash.className = 'fa-solid fa-trash-can'

        itemRight.append(name, description, price, size, qty)
        cartItem.append(img, itemRight, trash)
        cartList.append(cartItem)
        
      })
    });
  };

listProducts()


{/* <div id="cartItem">
                    <img id="productImg" src="./styles/images/pexels-spencer-selover-428311.jpg" alt="Shirt">      
                    <div class="itemRight">
                        <h3>CLEAN SHiRT </h3>
                        <p>T-SHIRT - Clean T-shirt with print on chest made in our own factory.
                        </p>
                        <p id="price">Price: 15€</p>
                        <p id="size">Size: L</p>
                        <p id="qty">Quantity: 1</p>
                     </div>
                     <i class="fa-solid fa-trash-can"></i>
                </div>  */}







