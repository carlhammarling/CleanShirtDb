const id = new URLSearchParams(window.location.search).get('id')
const output = document.querySelector('#output')


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













        // <article>
        //         <img src="./styles/images/pexels-spencer-selover-428311.jpg" alt="Shirt">      
        //         <section>
        //             
        //             <p>Apparently this one doesn't highlight my features very well, I will keep to suit and tie. Will not buy again.
        //             </p>
        //             <br>
        //             <h4>Bear Grylls <i class="fa-solid fa-star fa-sm"></i><i class="fa-solid fa-star fa-sm"></i><i class="fa-solid fa-star fa-sm"></i><i class="fa-solid fa-star fa-sm"></i><i class="fa-solid fa-star fa-sm"></i></h4>
        //             <p>I had a blast grappling with tigers in this outstanding t-shirt! I would definitly recommend it to anyone who isn't afraid
        //                 to get some dirt on their hands (or shirt), this one LASTS! Mindblowing quality!
        //             </p>
        //         </section>                      
        // </article>