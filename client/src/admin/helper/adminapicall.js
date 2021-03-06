//category calls
export const createCategory = (userId,token,category) => {
    return fetch(`api/category/create/${userId}`,{
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
       
    }).then(response=>{
        return response.json();
    })
    .catch(err => console.log(err));
};

//get all categories
export const getCategories = ()=>{
    return fetch(`api/categories`,{
        method:"GET"
    }).then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

//product calls
export const createAproduct = (userId,token,product) =>{
    return fetch(`api/product/create/${userId}`,{
        method:"POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
};

//get all products
export const getProducts = ()=>{
    return fetch(`api/products`,{
        method:"GET"
    }).then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

//delete a product
export const deleteAproduct = (productId,userId,token) =>{
    return fetch(`api/product/${productId}/${userId}`,{
        method:"DELETE",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
        
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
};


//get a product
export const getProduct = productId =>{
    //console.log(`product/${productId}1234`);
    return fetch(`api/product/${productId}`,{
        method:"GET"
    }).then(response => {
        console.log("RESPONSE:",response);
        return response.json()
    }).catch(err => console.log(err));
}

//update a product
export const updateProduct = (productId,userId,token,product) =>{
    return fetch(`api/product/${productId}/${userId}`,{
        method:"PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
};

