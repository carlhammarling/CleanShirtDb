const id = new URLSearchParams(window.location.search).get('id')
const output = document.querySelector('#output')

//Skapar Shoppingcart, hämtar hem om det finns nåt i local storage.
const shoppingCart = []
const localCart = JSON.parse(localStorage.getItem('shoppingCart'))
localCart.forEach(item => shoppingCart.push(item))
console.log(shoppingCart)

const getOneProduct = async () => {
    const res = await fetch('./api/products/' + id)
    const data = await res.json()

    listProduct(data)
}

getOneProduct()

const listProduct = (data) => {
    output.innerHTML = ''

    const img = document.createElement('img')
    img.setAttribute('src', data.imgURL)

    const section = document.createElement('section')
    const productInfo = document.createElement('div')
    productInfo.className = 'productInfo'
    
    const title = document.createElement('h1')
    title.innerText = 'Reviews'

    const name = document.createElement('h2')
    name.innerText = data.name

   
    //Likes
    // const rating = data.rating;
    const ratingArray = [];
    data.comments.forEach(comment => {
        ratingArray.push(comment.rating)
    })
    const ratingSum = Math.ceil(ratingArray.reduce((total, num) => total + num, 0) / ratingArray.length)
    console.log(ratingSum)

    const solidStars = '<i class="fa-solid fa-star"></i>'.repeat(ratingSum)
    const regularStars = '<i class="fa-regular fa-star"></i>'.repeat(5-ratingSum)
    const stars = document.createElement('h3')
    stars.innerHTML = solidStars + regularStars

    const description = document.createElement('p')
    description.innerText = data.description

    productInfo.append(title, name, stars, description)

    //Build reviews

    const reviewList = document.createElement('div')
    reviewList.className = 'reviewList'

    data.comments.forEach(comment => {

        const review = document.createElement('div')
        review.className = 'review'

        const rating = comment.rating;
        const solidStars = '<i class="fa-solid fa-star"></i>'.repeat(rating)
        const regularStars = '<i class="fa-regular fa-star"></i>'.repeat(5-rating)
        const userName = document.createElement('h4')
        userName.innerHTML = `${comment.userId.firstName} ${comment.userId.lastName} ${solidStars}${regularStars}`

        const reviewText = document.createElement('p')
        reviewText.innerText = comment.comment


        review.append(userName, reviewText)
        reviewList.append(review)
    })


    section.append(productInfo, reviewList)
    output.append(img, section)
}






