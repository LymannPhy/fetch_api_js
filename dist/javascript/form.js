'use strict'
// Element
const titleElement = document.querySelector('#title')
const descriptionElement = document.querySelector('#description')
const priceElement = document.querySelector('#price')
const fileElement = document.querySelector('#file')

// Input value from user
async function createProduct(){

    //Get value from user
    const title = titleElement.value
    const description = descriptionElement.value 
    const price = Number(priceElement.value)
    const file = fileElement.files[0]
    const imageUrl = await uploadImage(file);

    // Create Product Object
    const product = {
        title,
        price,
        description,
        categoryId: 1,
        images: [imageUrl.location],
    };

    // Create Product by return JS object to JSON data
    fetch('https://api.escuelajs.co/api/v1/products/', {
    method: 'POST',
    body: JSON.stringify(product),
    headers: {
        'Content-Type' : 'application/json'
    }
    })
    .then((res) => res.json())
    .then((data)=> console.log(data))
    .catch((err)=>console.log(err));
}



// upload image to server
async function uploadImage(file){
    // create form data
    const formData = new FormData()
    formData.append('file', file)

    // send request to server
    const res = await fetch('https://api.escuelajs.co/api/v1/files/upload', {
        method: 'POST',
        body: formData,
    })
    return res.json();

}