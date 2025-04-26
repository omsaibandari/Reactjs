// let a=false;
// let b= false;

// console.log("and:",a&&b);

// console.log("or:",a||b);

// function employeeName(){
//     return getMyname(a && getMyname("Omsai"));
// }

// function getMyname(S){
//     return "Hello ", S;
// }

// console.log("The Employee name is:",employeeName());

// console.log(a && getMyname("Omsai")); //you will get the output only if the a is true.

//short-hand notation
// let name1="xyz";
// let id=1;
// let rating= 5;

// const product = {
//     name1,
//     id,
//     rating
// }
// console.log(product);

//getting the list of products from the external links
// list-of-products

let fetchgetElement = document.querySelector(".list-of-products");

function renderProducts(getProduct){
    fetchgetElement.innerHTML = getProduct.map((singleProduct,index) => {
        return `<p>${singleProduct.title}</p>`
    }).join(' ');
}

async function fetchProductListfn() {
    try {

        const apiResponse= await fetch("https://dummyjson.com/products", {
            method:'GET'
        });
        
        const result = await apiResponse.json();

        console.log(result);

        if(result?.products?.length > 0) renderProducts(result?.products)
        

    } catch (e) {
        console.log(e);
        
    }
}

fetchProductListfn()

